window.CHECKIN_STATIC = {
  "manifest": {
    "defaultUnit": "unit7",
    "units": [
      {
        "id": "unit7",
        "label": "Unit 7",
        "title": "A Day to Remember",
        "status": "ready",
        "data": "data/units/unit7.json"
      }
    ]
  },
  "units": {
    "unit7": {
      "id": "unit7",
      "unit": "Unit 7",
      "title": "A Day to Remember",
      "level": "Grade 7, Book 2",
      "duration": "14 days",
      "dailyMinutes": 25,
      "voice": {
        "name": "en-US-JennyNeural",
        "rate": "-15%"
      },
      "routine": [
        {
          "minutes": 3,
          "label": "旧词复习",
          "detail": "听读 5 个旧词，忘了就点播放。"
        },
        {
          "minutes": 7,
          "label": "今日词句",
          "detail": "听读 5 个新词或短语。"
        },
        {
          "minutes": 8,
          "label": "跟读句子",
          "detail": "跟读 3 个短句。"
        },
        {
          "minutes": 5,
          "label": "小练习",
          "detail": "完成 2-3 道基础题。"
        },
        {
          "minutes": 2,
          "label": "自己打卡",
          "detail": "网页点完成，纸上打勾。"
        }
      ],
      "days": [
        {
          "id": "day-01",
          "day": 1,
          "title": "周末活动和旅行",
          "goal": "能听懂并读出几个过去做过的活动。",
          "fallback": "听读 3 个词和 1 个句子，也算完成。",
          "review": [],
          "terms": [
            {
              "english": "meet up",
              "chinese": "碰头；相聚",
              "audio": "audio/unit7/day-01/term-01-meet-up.mp3"
            },
            {
              "english": "museum",
              "chinese": "博物馆",
              "audio": "audio/unit7/day-01/term-02-museum.mp3"
            },
            {
              "english": "exhibition",
              "chinese": "展览",
              "audio": "audio/unit7/day-01/term-03-exhibition.mp3"
            },
            {
              "english": "direction",
              "chinese": "方向",
              "audio": "audio/unit7/day-01/term-04-direction.mp3"
            },
            {
              "english": "trip",
              "chinese": "旅行",
              "audio": "audio/unit7/day-01/term-05-trip.mp3"
            }
          ],
          "sentences": [
            {
              "english": "How was your weekend?",
              "chinese": "你的周末怎么样？",
              "audio": "audio/unit7/day-01/sentence-01-how-was-your-weekend.mp3"
            },
            {
              "english": "I visited a science museum.",
              "chinese": "我参观了科学博物馆。",
              "audio": "audio/unit7/day-01/sentence-02-i-visited-a-science-museum.mp3"
            },
            {
              "english": "I met up with friends.",
              "chinese": "我和朋友见面了。",
              "audio": "audio/unit7/day-01/sentence-03-i-met-up-with-friends.mp3"
            }
          ],
          "quiz": [
            {
              "prompt": "museum 的意思是：",
              "choices": [
                "博物馆",
                "剧院",
                "农场"
              ],
              "answer": 0
            },
            {
              "prompt": "meet up 的意思是：",
              "choices": [
                "写下",
                "碰头；相聚",
                "走开"
              ],
              "answer": 1
            },
            {
              "prompt": "I visited a science museum. 的意思是：",
              "choices": [
                "我参观了科学博物馆。",
                "我去了动物园。",
                "我做了作业。"
              ],
              "answer": 0
            }
          ]
        },
        {
          "id": "day-02",
          "day": 2,
          "title": "污水处理厂",
          "goal": "认识 wastewater plant 相关词，能理解课本对话大意。",
          "fallback": "听读 3 个词和 1 个句子，也算完成。",
          "review": [
            "meet up",
            "museum",
            "exhibition",
            "direction",
            "trip"
          ],
          "terms": [
            {
              "english": "wastewater",
              "chinese": "废水",
              "audio": "audio/unit7/day-02/term-01-wastewater.mp3"
            },
            {
              "english": "plant",
              "chinese": "工厂",
              "audio": "audio/unit7/day-02/term-02-plant.mp3"
            },
            {
              "english": "into",
              "chinese": "到……里面；进入",
              "audio": "audio/unit7/day-02/term-03-into.mp3"
            },
            {
              "english": "screen",
              "chinese": "滤网；隔板；屏障",
              "audio": "audio/unit7/day-02/term-04-screen.mp3"
            },
            {
              "english": "remove",
              "chinese": "移开；拿走",
              "audio": "audio/unit7/day-02/term-05-remove.mp3"
            }
          ],
          "sentences": [
            {
              "english": "We went to a wastewater plant.",
              "chinese": "我们去了一个污水处理厂。",
              "audio": "audio/unit7/day-02/sentence-01-we-went-to-a-wastewater-plant.mp3"
            },
            {
              "english": "Dirty water goes into the plant.",
              "chinese": "脏水进入工厂。",
              "audio": "audio/unit7/day-02/sentence-02-dirty-water-goes-into-the-plant.mp3"
            },
            {
              "english": "Screens remove large pieces of waste.",
              "chinese": "滤网去除大块废弃物。",
              "audio": "audio/unit7/day-02/sentence-03-screens-remove-large-pieces-of-waste.mp3"
            }
          ],
          "quiz": [
            {
              "prompt": "wastewater 的意思是：",
              "choices": [
                "新鲜水",
                "废水",
                "热水"
              ],
              "answer": 1
            },
            {
              "prompt": "remove 的意思是：",
              "choices": [
                "移开；拿走",
                "记录",
                "同意"
              ],
              "answer": 0
            },
            {
              "prompt": "Dirty water goes into the plant. 的意思是：",
              "choices": [
                "脏水进入工厂。",
                "工厂很干净。",
                "我们去了农场。"
              ],
              "answer": 0
            }
          ]
        },
        {
          "id": "day-03",
          "day": 3,
          "title": "清洁过程",
          "goal": "理解污水变干净的几个基础词。",
          "fallback": "听读 3 个词和 1 个句子，也算完成。",
          "review": [
            "wastewater",
            "plant",
            "screen",
            "remove",
            "trip"
          ],
          "terms": [
            {
              "english": "piece",
              "chinese": "片；块",
              "audio": "audio/unit7/day-03/term-01-piece.mp3"
            },
            {
              "english": "waste",
              "chinese": "废弃物；浪费",
              "audio": "audio/unit7/day-03/term-02-waste.mp3"
            },
            {
              "english": "machine",
              "chinese": "机器",
              "audio": "audio/unit7/day-03/term-03-machine.mp3"
            },
            {
              "english": "germ",
              "chinese": "微生物；细菌",
              "audio": "audio/unit7/day-03/term-04-germ.mp3"
            },
            {
              "english": "step",
              "chinese": "步骤；脚步",
              "audio": "audio/unit7/day-03/term-05-step.mp3"
            }
          ],
          "sentences": [
            {
              "english": "Machines remove germs from the water.",
              "chinese": "机器从水中去除细菌。",
              "audio": "audio/unit7/day-03/sentence-01-machines-remove-germs-from-the-water.mp3"
            },
            {
              "english": "It takes a few more steps.",
              "chinese": "这还需要更多几个步骤。",
              "audio": "audio/unit7/day-03/sentence-02-it-takes-a-few-more-steps.mp3"
            },
            {
              "english": "The water becomes clean again.",
              "chinese": "水又变干净了。",
              "audio": "audio/unit7/day-03/sentence-03-the-water-becomes-clean-again.mp3"
            }
          ],
          "quiz": [
            {
              "prompt": "machine 的意思是：",
              "choices": [
                "机器",
                "篮子",
                "黄瓜"
              ],
              "answer": 0
            },
            {
              "prompt": "germ 的意思是：",
              "choices": [
                "演员",
                "细菌",
                "道路"
              ],
              "answer": 1
            },
            {
              "prompt": "step 的意思是：",
              "choices": [
                "步骤；脚步",
                "帐篷",
                "想法"
              ],
              "answer": 0
            }
          ]
        },
        {
          "id": "day-04",
          "day": 4,
          "title": "过程和想法",
          "goal": "会读对话里的过程词和表达过去想法的句子。",
          "fallback": "听读 3 个词和 1 个句子，也算完成。",
          "review": [
            "piece",
            "waste",
            "machine",
            "germ",
            "step"
          ],
          "terms": [
            {
              "english": "used to",
              "chinese": "过去常常",
              "audio": "audio/unit7/day-04/term-01-used-to.mp3"
            },
            {
              "english": "realize",
              "chinese": "认识到；实现",
              "audio": "audio/unit7/day-04/term-02-realize.mp3"
            },
            {
              "english": "inside",
              "chinese": "在……里面；在里面",
              "audio": "audio/unit7/day-04/term-03-inside.mp3"
            },
            {
              "english": "go on a trip",
              "chinese": "去旅行",
              "audio": "audio/unit7/day-04/term-04-go-on-a-trip.mp3"
            },
            {
              "english": "process",
              "chinese": "过程",
              "audio": "audio/unit7/day-04/term-05-process.mp3"
            }
          ],
          "sentences": [
            {
              "english": "I used to think it was easy.",
              "chinese": "我过去以为这很容易。",
              "audio": "audio/unit7/day-04/sentence-01-i-used-to-think-it-was-easy.mp3"
            },
            {
              "english": "I didn't realize it was so hard.",
              "chinese": "我没有意识到它这么难。",
              "audio": "audio/unit7/day-04/sentence-02-i-didn-t-realize-it-was-so-hard.mp3"
            },
            {
              "english": "We learnt about the cleaning process.",
              "chinese": "我们了解了清洁过程。",
              "audio": "audio/unit7/day-04/sentence-03-we-learnt-about-the-cleaning-process.mp3"
            }
          ],
          "quiz": [
            {
              "prompt": "used to 的意思是：",
              "choices": [
                "过去常常",
                "现在正在",
                "马上要"
              ],
              "answer": 0
            },
            {
              "prompt": "process 的意思是：",
              "choices": [
                "过程",
                "剧院",
                "叶子"
              ],
              "answer": 0
            },
            {
              "prompt": "I didn't realize it was so hard. 的意思是：",
              "choices": [
                "我没有意识到它这么难。",
                "我觉得它很简单。",
                "我今天去旅行。"
              ],
              "answer": 0
            }
          ]
        },
        {
          "id": "day-05",
          "day": 5,
          "title": "地点和感受",
          "goal": "认识学校旅行常见地点和感受词。",
          "fallback": "听读 3 个词和 1 个句子，也算完成。",
          "review": [
            "used to",
            "realize",
            "inside",
            "go on a trip",
            "process"
          ],
          "terms": [
            {
              "english": "theatre",
              "chinese": "戏院；剧场；电影院",
              "audio": "audio/unit7/day-05/term-01-theatre.mp3"
            },
            {
              "english": "factory",
              "chinese": "工厂",
              "audio": "audio/unit7/day-05/term-02-factory.mp3"
            },
            {
              "english": "terrible",
              "chinese": "糟糕的",
              "audio": "audio/unit7/day-05/term-03-terrible.mp3"
            },
            {
              "english": "actor",
              "chinese": "演员",
              "audio": "audio/unit7/day-05/term-04-actor.mp3"
            },
            {
              "english": "gun",
              "chinese": "枪",
              "audio": "audio/unit7/day-05/term-05-gun.mp3"
            }
          ],
          "sentences": [
            {
              "english": "We went to the theatre to watch a show.",
              "chinese": "我们去了剧院看演出。",
              "audio": "audio/unit7/day-05/sentence-01-we-went-to-the-theatre-to-watch-a-show.mp3"
            },
            {
              "english": "It was terrible.",
              "chinese": "太糟糕了。",
              "audio": "audio/unit7/day-05/sentence-02-it-was-terrible.mp3"
            },
            {
              "english": "I saw my favourite actor in a film.",
              "chinese": "我在电影里看到了我最喜欢的演员。",
              "audio": "audio/unit7/day-05/sentence-03-i-saw-my-favourite-actor-in-a-film.mp3"
            }
          ],
          "quiz": [
            {
              "prompt": "theatre 的意思是：",
              "choices": [
                "剧院",
                "农场",
                "步骤"
              ],
              "answer": 0
            },
            {
              "prompt": "terrible 的意思是：",
              "choices": [
                "糟糕的",
                "新鲜的",
                "直接的"
              ],
              "answer": 0
            },
            {
              "prompt": "actor 的意思是：",
              "choices": [
                "游客",
                "演员",
                "猎人"
              ],
              "answer": 1
            }
          ]
        },
        {
          "id": "day-06",
          "day": 6,
          "title": "路上发生的事",
          "goal": "会读路、试穿、记录等常用表达。",
          "fallback": "听读 3 个词和 1 个句子，也算完成。",
          "review": [
            "theatre",
            "factory",
            "terrible",
            "actor",
            "gun"
          ],
          "terms": [
            {
              "english": "try on",
              "chinese": "试穿",
              "audio": "audio/unit7/day-06/term-01-try-on.mp3"
            },
            {
              "english": "along",
              "chinese": "沿着；顺着",
              "audio": "audio/unit7/day-06/term-02-along.mp3"
            },
            {
              "english": "road",
              "chinese": "道路",
              "audio": "audio/unit7/day-06/term-03-road.mp3"
            },
            {
              "english": "create",
              "chinese": "创造",
              "audio": "audio/unit7/day-06/term-04-create.mp3"
            },
            {
              "english": "record",
              "chinese": "记录；记录本",
              "audio": "audio/unit7/day-06/term-05-record.mp3"
            }
          ],
          "sentences": [
            {
              "english": "We walked along the mountain roads.",
              "chinese": "我们沿着山路走。",
              "audio": "audio/unit7/day-06/sentence-01-we-walked-along-the-mountain-roads.mp3"
            },
            {
              "english": "We tried on some uniforms from the past.",
              "chinese": "我们试穿了一些过去的制服。",
              "audio": "audio/unit7/day-06/sentence-02-we-tried-on-some-uniforms-from-the-past.mp3"
            },
            {
              "english": "I like to record my thoughts.",
              "chinese": "我喜欢记录我的想法。",
              "audio": "audio/unit7/day-06/sentence-03-i-like-to-record-my-thoughts.mp3"
            }
          ],
          "quiz": [
            {
              "prompt": "along 的意思是：",
              "choices": [
                "沿着；顺着",
                "进入",
                "终于"
              ],
              "answer": 0
            },
            {
              "prompt": "try on 的意思是：",
              "choices": [
                "试穿",
                "写下",
                "赚钱"
              ],
              "answer": 0
            },
            {
              "prompt": "record 可以表示：",
              "choices": [
                "记录",
                "分支",
                "谷物"
              ],
              "answer": 0
            }
          ]
        },
        {
          "id": "day-07",
          "day": 7,
          "title": "日记和想法",
          "goal": "认识日记阅读中的核心词。",
          "fallback": "听读 3 个词和 1 个句子，也算完成。",
          "review": [
            "try on",
            "along",
            "road",
            "create",
            "record"
          ],
          "terms": [
            {
              "english": "thought",
              "chinese": "想法",
              "audio": "audio/unit7/day-07/term-01-thought.mp3"
            },
            {
              "english": "skill",
              "chinese": "技能",
              "audio": "audio/unit7/day-07/term-02-skill.mp3"
            },
            {
              "english": "write down",
              "chinese": "写下；记下",
              "audio": "audio/unit7/day-07/term-03-write-down.mp3"
            },
            {
              "english": "explore",
              "chinese": "探索",
              "audio": "audio/unit7/day-07/term-04-explore.mp3"
            },
            {
              "english": "tent",
              "chinese": "帐篷",
              "audio": "audio/unit7/day-07/term-05-tent.mp3"
            }
          ],
          "sentences": [
            {
              "english": "Do you keep a diary?",
              "chinese": "你写日记吗？",
              "audio": "audio/unit7/day-07/sentence-01-do-you-keep-a-diary.mp3"
            },
            {
              "english": "A diary can record thoughts and feelings.",
              "chinese": "日记可以记录想法和感受。",
              "audio": "audio/unit7/day-07/sentence-02-a-diary-can-record-thoughts-and-feelings.mp3"
            },
            {
              "english": "In the morning, we explored the farm.",
              "chinese": "上午，我们探索了农场。",
              "audio": "audio/unit7/day-07/sentence-03-in-the-morning-we-explored-the-farm.mp3"
            }
          ],
          "quiz": [
            {
              "prompt": "thought 的意思是：",
              "choices": [
                "想法",
                "方向",
                "篮子"
              ],
              "answer": 0
            },
            {
              "prompt": "write down 的意思是：",
              "choices": [
                "写下；记下",
                "同意",
                "逃脱"
              ],
              "answer": 0
            },
            {
              "prompt": "explore 的意思是：",
              "choices": [
                "探索",
                "移开",
                "倾倒"
              ],
              "answer": 0
            }
          ]
        },
        {
          "id": "day-08",
          "day": 8,
          "title": "农场劳动",
          "goal": "会读农场和劳动相关词。",
          "fallback": "听读 3 个词和 1 个句子，也算完成。",
          "review": [
            "thought",
            "skill",
            "write down",
            "explore",
            "tent"
          ],
          "terms": [
            {
              "english": "cucumber",
              "chinese": "黄瓜",
              "audio": "audio/unit7/day-08/term-01-cucumber.mp3"
            },
            {
              "english": "from ... to ...",
              "chinese": "从……到……",
              "audio": "audio/unit7/day-08/term-02-from-to.mp3"
            },
            {
              "english": "straight",
              "chinese": "直接；立即；笔直地；直的",
              "audio": "audio/unit7/day-08/term-03-straight.mp3"
            },
            {
              "english": "fill",
              "chinese": "装满；盛满",
              "audio": "audio/unit7/day-08/term-04-fill.mp3"
            },
            {
              "english": "basket",
              "chinese": "篮子；筐",
              "audio": "audio/unit7/day-08/term-05-basket.mp3"
            }
          ],
          "sentences": [
            {
              "english": "There were tomatoes, cucumbers, and many other vegetables.",
              "chinese": "那里有西红柿、黄瓜和许多其他蔬菜。",
              "audio": "audio/unit7/day-08/sentence-01-there-were-tomatoes-cucumbers-and-many-other-vegetables.mp3"
            },
            {
              "english": "These vegetables go from the fields to our tables.",
              "chinese": "这些蔬菜从田地到我们的餐桌。",
              "audio": "audio/unit7/day-08/sentence-02-these-vegetables-go-from-the-fields-to-our-tables.mp3"
            },
            {
              "english": "Slowly, we filled many baskets.",
              "chinese": "慢慢地，我们装满了许多篮子。",
              "audio": "audio/unit7/day-08/sentence-03-slowly-we-filled-many-baskets.mp3"
            }
          ],
          "quiz": [
            {
              "prompt": "cucumber 的意思是：",
              "choices": [
                "黄瓜",
                "草莓",
                "谷物"
              ],
              "answer": 0
            },
            {
              "prompt": "basket 的意思是：",
              "choices": [
                "篮子",
                "道路",
                "细菌"
              ],
              "answer": 0
            },
            {
              "prompt": "from ... to ... 的意思是：",
              "choices": [
                "从……到……",
                "过去常常",
                "同意"
              ],
              "answer": 0
            }
          ]
        },
        {
          "id": "day-09",
          "day": 9,
          "title": "植物和动作",
          "goal": "理解农场日记中的植物和动作词。",
          "fallback": "听读 3 个词和 1 个句子，也算完成。",
          "review": [
            "cucumber",
            "from ... to ...",
            "straight",
            "fill",
            "basket"
          ],
          "terms": [
            {
              "english": "teach, taught",
              "chinese": "教",
              "audio": "audio/unit7/day-09/term-01-teach-taught.mp3"
            },
            {
              "english": "branch",
              "chinese": "分支；树枝",
              "audio": "audio/unit7/day-09/term-02-branch.mp3"
            },
            {
              "english": "leaf, leaves",
              "chinese": "叶；叶子",
              "audio": "audio/unit7/day-09/term-03-leaf-leaves.mp3"
            },
            {
              "english": "finally",
              "chinese": "终于",
              "audio": "audio/unit7/day-09/term-04-finally.mp3"
            },
            {
              "english": "think of",
              "chinese": "考虑；想起",
              "audio": "audio/unit7/day-09/term-05-think-of.mp3"
            }
          ],
          "sentences": [
            {
              "english": "The farmer taught us how to cut branches.",
              "chinese": "农民教我们如何剪枝。",
              "audio": "audio/unit7/day-09/sentence-01-the-farmer-taught-us-how-to-cut-branches.mp3"
            },
            {
              "english": "Finally, we watered the plants.",
              "chinese": "最后，我们给植物浇水。",
              "audio": "audio/unit7/day-09/sentence-02-finally-we-watered-the-plants.mp3"
            },
            {
              "english": "It made me think of hard work.",
              "chinese": "这让我想到了辛苦劳动。",
              "audio": "audio/unit7/day-09/sentence-03-it-made-me-think-of-hard-work.mp3"
            }
          ],
          "quiz": [
            {
              "prompt": "teach 的过去式是：",
              "choices": [
                "teached",
                "taught",
                "teach"
              ],
              "answer": 1
            },
            {
              "prompt": "leaf 的复数是：",
              "choices": [
                "leafs",
                "leaves",
                "leafes"
              ],
              "answer": 1
            },
            {
              "prompt": "finally 的意思是：",
              "choices": [
                "终于",
                "直接",
                "肯定"
              ],
              "answer": 0
            }
          ]
        },
        {
          "id": "day-10",
          "day": 10,
          "title": "食物和日记",
          "goal": "会读日记结尾中的食物和评价词。",
          "fallback": "听读 3 个词和 1 个句子，也算完成。",
          "review": [
            "teach, taught",
            "branch",
            "leaf, leaves",
            "finally",
            "think of"
          ],
          "terms": [
            {
              "english": "grain",
              "chinese": "谷物；谷粒",
              "audio": "audio/unit7/day-10/term-01-grain.mp3"
            },
            {
              "english": "fresh",
              "chinese": "新鲜的",
              "audio": "audio/unit7/day-10/term-02-fresh.mp3"
            },
            {
              "english": "certainly",
              "chinese": "肯定；当然",
              "audio": "audio/unit7/day-10/term-03-certainly.mp3"
            },
            {
              "english": "diary",
              "chinese": "日记；日记本",
              "audio": "audio/unit7/day-10/term-04-diary.mp3"
            },
            {
              "english": "entry",
              "chinese": "日记的一则；入口",
              "audio": "audio/unit7/day-10/term-05-entry.mp3"
            }
          ],
          "sentences": [
            {
              "english": "Every grain comes from hard work.",
              "chinese": "粒粒皆辛苦。",
              "audio": "audio/unit7/day-10/sentence-01-every-grain-comes-from-hard-work.mp3"
            },
            {
              "english": "They were fresh and delicious.",
              "chinese": "它们新鲜又美味。",
              "audio": "audio/unit7/day-10/sentence-02-they-were-fresh-and-delicious.mp3"
            },
            {
              "english": "Sam wrote a diary entry.",
              "chinese": "Sam 写了一则日记。",
              "audio": "audio/unit7/day-10/sentence-03-sam-wrote-a-diary-entry.mp3"
            }
          ],
          "quiz": [
            {
              "prompt": "fresh 的意思是：",
              "choices": [
                "新鲜的",
                "糟糕的",
                "笔直的"
              ],
              "answer": 0
            },
            {
              "prompt": "diary 的意思是：",
              "choices": [
                "日记",
                "展览",
                "过程"
              ],
              "answer": 0
            },
            {
              "prompt": "Every grain comes from hard work. 大意是：",
              "choices": [
                "粒粒皆辛苦。",
                "天气很好。",
                "我喜欢博物馆。"
              ],
              "answer": 0
            }
          ]
        },
        {
          "id": "day-11",
          "day": 11,
          "title": "表达同意和总结",
          "goal": "会读 agree 相关表达，并能说出旅行感受。",
          "fallback": "听读 3 个词和 1 个句子，也算完成。",
          "review": [
            "grain",
            "fresh",
            "certainly",
            "diary",
            "entry"
          ],
          "terms": [
            {
              "english": "agree",
              "chinese": "赞成；同意",
              "audio": "audio/unit7/day-11/term-01-agree.mp3"
            },
            {
              "english": "agree with",
              "chinese": "赞成；同意",
              "audio": "audio/unit7/day-11/term-02-agree-with.mp3"
            },
            {
              "english": "school trip",
              "chinese": "学校旅行",
              "audio": "audio/unit7/day-11/term-03-school-trip.mp3"
            },
            {
              "english": "a day to remember",
              "chinese": "难忘的一天",
              "audio": "audio/unit7/day-11/term-04-a-day-to-remember.mp3"
            },
            {
              "english": "learnt a lot",
              "chinese": "学到了很多",
              "audio": "audio/unit7/day-11/term-05-learnt-a-lot.mp3"
            }
          ],
          "sentences": [
            {
              "english": "Do you agree with Sam?",
              "chinese": "你同意 Sam 的看法吗？",
              "audio": "audio/unit7/day-11/sentence-01-do-you-agree-with-sam.mp3"
            },
            {
              "english": "I learnt a lot from the trip.",
              "chinese": "我从这次旅行中学到了很多。",
              "audio": "audio/unit7/day-11/sentence-02-i-learnt-a-lot-from-the-trip.mp3"
            },
            {
              "english": "Today was really a day to remember.",
              "chinese": "今天真是难忘的一天。",
              "audio": "audio/unit7/day-11/sentence-03-today-was-really-a-day-to-remember.mp3"
            }
          ],
          "quiz": [
            {
              "prompt": "agree with 的意思是：",
              "choices": [
                "同意",
                "探索",
                "移开"
              ],
              "answer": 0
            },
            {
              "prompt": "school trip 的意思是：",
              "choices": [
                "学校旅行",
                "科学展览",
                "英语课"
              ],
              "answer": 0
            },
            {
              "prompt": "a day to remember 的意思是：",
              "choices": [
                "难忘的一天",
                "普通的一天",
                "糟糕的一天"
              ],
              "answer": 0
            }
          ]
        },
        {
          "id": "day-12",
          "day": 12,
          "title": "一般过去时问答",
          "goal": "复习 How was, What did, Did you 这三个高频句型。",
          "fallback": "听读 2 个问句和 1 个回答，也算完成。",
          "review": [
            "agree",
            "agree with",
            "school trip",
            "a day to remember",
            "learnt a lot"
          ],
          "terms": [
            {
              "english": "went",
              "chinese": "go 的过去式；去了",
              "audio": "audio/unit7/day-12/term-01-went.mp3"
            },
            {
              "english": "did",
              "chinese": "do 的过去式；做了",
              "audio": "audio/unit7/day-12/term-02-did.mp3"
            },
            {
              "english": "visited",
              "chinese": "参观了",
              "audio": "audio/unit7/day-12/term-03-visited.mp3"
            },
            {
              "english": "met",
              "chinese": "meet 的过去式；遇见",
              "audio": "audio/unit7/day-12/term-04-met.mp3"
            },
            {
              "english": "saw",
              "chinese": "see 的过去式；看见",
              "audio": "audio/unit7/day-12/term-05-saw.mp3"
            }
          ],
          "sentences": [
            {
              "english": "How was your school trip?",
              "chinese": "你的学校旅行怎么样？",
              "audio": "audio/unit7/day-12/sentence-01-how-was-your-school-trip.mp3"
            },
            {
              "english": "What did you do?",
              "chinese": "你做了什么？",
              "audio": "audio/unit7/day-12/sentence-02-what-did-you-do.mp3"
            },
            {
              "english": "Did you see anything interesting?",
              "chinese": "你看到什么有趣的东西了吗？",
              "audio": "audio/unit7/day-12/sentence-03-did-you-see-anything-interesting.mp3"
            }
          ],
          "quiz": [
            {
              "prompt": "go 的过去式是：",
              "choices": [
                "goed",
                "went",
                "goes"
              ],
              "answer": 1
            },
            {
              "prompt": "How was your school trip? 的合适回答是：",
              "choices": [
                "It was great.",
                "I am fine.",
                "Yes, I do."
              ],
              "answer": 0
            },
            {
              "prompt": "Did you see anything interesting? 的回答可以是：",
              "choices": [
                "Yes, I did.",
                "Yes, I am.",
                "Yes, I can."
              ],
              "answer": 0
            }
          ]
        },
        {
          "id": "day-13",
          "day": 13,
          "title": "日记短句复盘",
          "goal": "用短句复习课本日记：去了哪里、做了什么、感觉如何。",
          "fallback": "听读 3 个短语和 1 个句子，也算完成。",
          "review": [
            "went",
            "did",
            "visited",
            "met",
            "saw"
          ],
          "terms": [
            {
              "english": "explored the farm",
              "chinese": "探索农场",
              "audio": "audio/unit7/day-13/term-01-explored-the-farm.mp3"
            },
            {
              "english": "picked strawberries",
              "chinese": "摘草莓",
              "audio": "audio/unit7/day-13/term-02-picked-strawberries.mp3"
            },
            {
              "english": "watered the plants",
              "chinese": "给植物浇水",
              "audio": "audio/unit7/day-13/term-03-watered-the-plants.mp3"
            },
            {
              "english": "enjoyed working",
              "chinese": "喜欢劳动",
              "audio": "audio/unit7/day-13/term-04-enjoyed-working.mp3"
            },
            {
              "english": "cooked dinner",
              "chinese": "做晚饭",
              "audio": "audio/unit7/day-13/term-05-cooked-dinner.mp3"
            }
          ],
          "sentences": [
            {
              "english": "Today we went on a school trip to a farm.",
              "chinese": "今天我们去农场进行了学校旅行。",
              "audio": "audio/unit7/day-13/sentence-01-today-we-went-on-a-school-trip-to-a-farm.mp3"
            },
            {
              "english": "It was tiring, but I enjoyed working with my hands.",
              "chinese": "这很累，但我喜欢动手劳动。",
              "audio": "audio/unit7/day-13/sentence-02-it-was-tiring-but-i-enjoyed-working-with-my-hands.mp3"
            },
            {
              "english": "My mum cooked some vegetables for dinner.",
              "chinese": "我妈妈做了一些蔬菜当晚餐。",
              "audio": "audio/unit7/day-13/sentence-03-my-mum-cooked-some-vegetables-for-dinner.mp3"
            }
          ],
          "quiz": [
            {
              "prompt": "picked strawberries 的意思是：",
              "choices": [
                "摘草莓",
                "买草莓",
                "洗草莓"
              ],
              "answer": 0
            },
            {
              "prompt": "watered the plants 的意思是：",
              "choices": [
                "给植物浇水",
                "剪树枝",
                "摘叶子"
              ],
              "answer": 0
            },
            {
              "prompt": "Today we went on a school trip to a farm. 的大意是：",
              "choices": [
                "今天我们去农场进行了学校旅行。",
                "今天我们去了剧院。",
                "今天我们去了博物馆。"
              ],
              "answer": 0
            }
          ]
        },
        {
          "id": "day-14",
          "day": 14,
          "title": "轻测试和总结",
          "goal": "轻松复盘 Unit 7，看看哪些词句已经熟了。",
          "fallback": "听读 5 个复习词和 1 个句子，也算完成。",
          "review": [
            "explored the farm",
            "picked strawberries",
            "watered the plants",
            "enjoyed working",
            "cooked dinner"
          ],
          "terms": [
            {
              "english": "wastewater plant",
              "chinese": "污水处理厂",
              "audio": "audio/unit7/day-14/term-01-wastewater-plant.mp3"
            },
            {
              "english": "cleaning process",
              "chinese": "清洁过程",
              "audio": "audio/unit7/day-14/term-02-cleaning-process.mp3"
            },
            {
              "english": "diary entry",
              "chinese": "日记",
              "audio": "audio/unit7/day-14/term-03-diary-entry.mp3"
            },
            {
              "english": "tiring but fun",
              "chinese": "很累但有趣",
              "audio": "audio/unit7/day-14/term-04-tiring-but-fun.mp3"
            },
            {
              "english": "fresh and delicious",
              "chinese": "新鲜又美味",
              "audio": "audio/unit7/day-14/term-05-fresh-and-delicious.mp3"
            }
          ],
          "sentences": [
            {
              "english": "The trip was tiring but fun.",
              "chinese": "这次旅行很累但有趣。",
              "audio": "audio/unit7/day-14/sentence-01-the-trip-was-tiring-but-fun.mp3"
            },
            {
              "english": "Farming isn't easy.",
              "chinese": "农活并不容易。",
              "audio": "audio/unit7/day-14/sentence-02-farming-isn-t-easy.mp3"
            },
            {
              "english": "It made me want to work hard for a better future.",
              "chinese": "这让我想为更好的未来努力。",
              "audio": "audio/unit7/day-14/sentence-03-it-made-me-want-to-work-hard-for-a-better-future.mp3"
            }
          ],
          "quiz": [
            {
              "prompt": "wastewater plant 的意思是：",
              "choices": [
                "污水处理厂",
                "动物园",
                "剧院"
              ],
              "answer": 0
            },
            {
              "prompt": "diary entry 的意思是：",
              "choices": [
                "日记",
                "方向",
                "机器"
              ],
              "answer": 0
            },
            {
              "prompt": "Farming isn't easy. 的意思是：",
              "choices": [
                "农活并不容易。",
                "农场很漂亮。",
                "我喜欢英语。"
              ],
              "answer": 0
            }
          ]
        }
      ]
    }
  }
};
