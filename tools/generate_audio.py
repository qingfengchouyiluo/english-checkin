import argparse
import asyncio
import json
import re
from pathlib import Path

import edge_tts


ROOT = Path(__file__).resolve().parents[1]
WEB_ROOT = ROOT / "web"
MANIFEST_FILE = WEB_ROOT / "data" / "manifest.json"
AUDIO_ROOT = WEB_ROOT / "audio"
DEFAULT_VOICE = "en-US-JennyNeural"
DEFAULT_RATE = "-15%"


def slug(text: str) -> str:
    value = text.lower().replace(",", " ")
    value = re.sub(r"[^a-z0-9]+", "-", value).strip("-")
    return value[:80] or "audio"


def load_manifest() -> dict:
    return json.loads(MANIFEST_FILE.read_text(encoding="utf-8"))


def unit_data_path(unit_entry: dict) -> Path:
    return WEB_ROOT / unit_entry["data"]


def collect_items(unit_id: str, data: dict) -> list[tuple[str, Path]]:
    items = []
    for day in data["days"]:
        day_id = day["id"]
        for index, term in enumerate(day["terms"], start=1):
            text = term["english"]
            filename = f"term-{index:02d}-{slug(text)}.mp3"
            output = AUDIO_ROOT / unit_id / day_id / filename
            items.append((text, output))
            term["audio"] = f"audio/{unit_id}/{day_id}/{filename}"
        for index, sentence in enumerate(day["sentences"], start=1):
            text = sentence["english"]
            filename = f"sentence-{index:02d}-{slug(text)}.mp3"
            output = AUDIO_ROOT / unit_id / day_id / filename
            items.append((text, output))
            sentence["audio"] = f"audio/{unit_id}/{day_id}/{filename}"
    return items


async def generate_one(text: str, output: Path, voice: str, rate: str) -> None:
    output.parent.mkdir(parents=True, exist_ok=True)
    if output.exists() and output.stat().st_size > 0:
        return
    communicate = edge_tts.Communicate(text=text, voice=voice, rate=rate)
    await communicate.save(str(output))


async def generate_unit(unit_entry: dict) -> int:
    path = unit_data_path(unit_entry)
    data = json.loads(path.read_text(encoding="utf-8"))
    unit_id = data.get("id", unit_entry["id"])
    voice = data.get("voice", {}).get("name", DEFAULT_VOICE)
    rate = data.get("voice", {}).get("rate", DEFAULT_RATE)
    items = collect_items(unit_id, data)
    for text, output in items:
        await generate_one(text, output, voice, rate)
    path.write_text(
        json.dumps(data, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    return len(items)


async def main() -> None:
    parser = argparse.ArgumentParser(description="Generate AI audio for English check-in units.")
    parser.add_argument("--unit", help="Generate one unit, such as unit7. Omit to generate all units.")
    args = parser.parse_args()

    manifest = load_manifest()
    units = manifest["units"]
    if args.unit:
        units = [unit for unit in units if unit["id"] == args.unit]
        if not units:
            raise SystemExit(f"Unit not found in manifest: {args.unit}")

    total = 0
    for unit in units:
        count = await generate_unit(unit)
        total += count
        print(f"{unit['id']}: generated or verified {count} audio files")
    print(f"Done. Audio root: {AUDIO_ROOT}")


if __name__ == "__main__":
    asyncio.run(main())
