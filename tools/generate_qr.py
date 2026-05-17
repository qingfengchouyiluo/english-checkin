import argparse
from pathlib import Path

import qrcode


ROOT = Path(__file__).resolve().parents[1]
DEFAULT_OUTPUT = ROOT / "print" / "english-checkin-qr.png"
DEFAULT_URL = "https://qingfengchouyiluo.github.io/english-checkin/English-Checkin.html"


def main() -> None:
    parser = argparse.ArgumentParser(description="Generate a QR code for English Check-in.")
    parser.add_argument("--url", default=DEFAULT_URL)
    parser.add_argument("--output", default=str(DEFAULT_OUTPUT))
    args = parser.parse_args()

    qr = qrcode.QRCode(
        version=2,
        error_correction=qrcode.constants.ERROR_CORRECT_M,
        box_size=12,
        border=3,
    )
    qr.add_data(args.url)
    qr.make(fit=True)
    img = qr.make_image(fill_color="#1b3b38", back_color="#fffdf7")
    output = Path(args.output)
    if not output.is_absolute():
        output = ROOT / output
    output.parent.mkdir(parents=True, exist_ok=True)
    img.save(output)
    print(f"Wrote {output}")
    print(f"URL: {args.url}")


if __name__ == "__main__":
    main()
