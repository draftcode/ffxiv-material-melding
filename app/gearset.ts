export interface MateriaSlot {
  name: string;
  probability: number;
}

export const subHand = new Map<string, MateriaSlot[]>([
  [
    "木工",
    [
      { name: "巨匠のアルテマテリジャ", probability: 100 },
      { name: "巨匠のアルテマテリジャ", probability: 17 },
      { name: "巨匠のオメガマテリジャ", probability: 10 },
      { name: "巨匠のオメガマテリジャ", probability: 7 },
      { name: "魔匠のメガマテリジャ", probability: 5 },
    ],
  ],
  [
    "鍛冶",
    [
      { name: "巨匠のアルテマテリジャ", probability: 100 },
      { name: "巨匠のアルテマテリジャ", probability: 17 },
      { name: "巨匠のオメガマテリジャ", probability: 10 },
      { name: "巨匠のオメガマテリジャ", probability: 7 },
      { name: "魔匠のメガマテリジャ", probability: 5 },
    ],
  ],
  [
    "甲冑",
    [
      { name: "巨匠のアルテマテリジャ", probability: 100 },
      { name: "巨匠のアルテマテリジャ", probability: 17 },
      { name: "巨匠のオメガマテリジャ", probability: 10 },
      { name: "巨匠のオメガマテリジャ", probability: 7 },
      { name: "魔匠のメガマテリジャ", probability: 5 },
    ],
  ],
  [
    "彫金",
    [
      { name: "巨匠のアルテマテリジャ", probability: 100 },
      { name: "巨匠のアルテマテリジャ", probability: 17 },
      { name: "巨匠のオメガマテリジャ", probability: 10 },
      { name: "巨匠のオメガマテリジャ", probability: 7 },
      { name: "魔匠のメガマテリジャ", probability: 5 },
    ],
  ],
  [
    "革細工",
    [
      { name: "巨匠のアルテマテリジャ", probability: 100 },
      { name: "巨匠のアルテマテリジャ", probability: 17 },
      { name: "巨匠のオメガマテリジャ", probability: 10 },
      { name: "巨匠のオメガマテリジャ", probability: 7 },
      { name: "魔匠のメガマテリジャ", probability: 5 },
    ],
  ],
  [
    "裁縫",
    [
      { name: "巨匠のアルテマテリジャ", probability: 100 },
      { name: "巨匠のアルテマテリジャ", probability: 17 },
      { name: "巨匠のオメガマテリジャ", probability: 10 },
      { name: "巨匠のオメガマテリジャ", probability: 7 },
      { name: "魔匠のメガマテリジャ", probability: 5 },
    ],
  ],
  [
    "錬金",
    [
      { name: "巨匠のアルテマテリジャ", probability: 100 },
      { name: "巨匠のアルテマテリジャ", probability: 17 },
      { name: "巨匠のオメガマテリジャ", probability: 10 },
      { name: "巨匠のオメガマテリジャ", probability: 7 },
      { name: "魔匠のメガマテリジャ", probability: 5 },
    ],
  ],
  [
    "調理",
    [
      { name: "巨匠のアルテマテリジャ", probability: 100 },
      { name: "巨匠のアルテマテリジャ", probability: 17 },
      { name: "巨匠のオメガマテリジャ", probability: 10 },
      { name: "巨匠のオメガマテリジャ", probability: 7 },
      { name: "魔匠のメガマテリジャ", probability: 5 },
    ],
  ],
  [
    "採掘",
    [
      { name: "達識のアルテマテリジャ", probability: 100 },
      { name: "達識のアルテマテリジャ", probability: 17 },
      { name: "達識のオメガマテリジャ", probability: 10 },
      { name: "達識のオメガマテリジャ", probability: 7 },
      { name: "達識のオメガマテリジャ", probability: 5 },
    ],
  ],
  [
    "園芸",
    [
      { name: "達識のアルテマテリジャ", probability: 100 },
      { name: "達識のアルテマテリジャ", probability: 17 },
      { name: "達識のオメガマテリジャ", probability: 10 },
      { name: "達識のオメガマテリジャ", probability: 7 },
      { name: "達識のオメガマテリジャ", probability: 5 },
    ],
  ],
]);

export const gatherer = new Map<string, MateriaSlot[]>([
  [
    "頭",
    [
      { name: "博識のアルテマテリジャ", probability: 100 },
      { name: "博識のアルテマテリジャ", probability: 100 },
      { name: "達識のアルテマテリジャ", probability: 17 },
      { name: "博識のオメガマテリジャ", probability: 10 },
      { name: "達識のオメガマテリジャ", probability: 7 },
    ],
  ],
  [
    "胴",
    [
      { name: "博識のアルテマテリジャ", probability: 100 },
      { name: "博識のアルテマテリジャ", probability: 100 },
      { name: "達識のアルテマテリジャ", probability: 17 },
      { name: "達識のオメガマテリジャ", probability: 10 },
      { name: "達識のオメガマテリジャ", probability: 7 },
    ],
  ],
  [
    "手",
    [
      { name: "博識のアルテマテリジャ", probability: 100 },
      { name: "達識のアルテマテリジャ", probability: 100 },
      { name: "達識のアルテマテリジャ", probability: 17 },
      { name: "博識のオメガマテリジャ", probability: 10 },
      { name: "達識のオメガマテリジャ", probability: 7 },
    ],
  ],
  [
    "脚",
    [
      { name: "博識のアルテマテリジャ", probability: 100 },
      { name: "達識のアルテマテリジャ", probability: 100 },
      { name: "達識のアルテマテリジャ", probability: 17 },
      { name: "達識のメガマテリジャ", probability: 10 },
      { name: "博識のマテリガ", probability: 20 },
    ],
  ],
  [
    "足",
    [
      { name: "博識のアルテマテリジャ", probability: 100 },
      { name: "博識のアルテマテリジャ", probability: 100 },
      { name: "器識のアルテマテリジャ", probability: 17 },
      { name: "博識のオメガマテリジャ", probability: 10 },
      { name: "器識のオメガマテリジャ", probability: 7 },
    ],
  ],
  [
    "耳",
    [
      { name: "博識のアルテマテリジャ", probability: 100 },
      { name: "達識のアルテマテリジャ", probability: 17 },
      { name: "博識のオメガマテリジャ", probability: 10 },
      { name: "器識のオメガマテリジャ", probability: 7 },
      { name: "達識のオメガマテリジャ", probability: 5 },
    ],
  ],
  [
    "首",
    [
      { name: "博識のアルテマテリジャ", probability: 100 },
      { name: "達識のアルテマテリジャ", probability: 17 },
      { name: "博識のオメガマテリジャ", probability: 10 },
      { name: "器識のオメガマテリジャ", probability: 7 },
      { name: "達識のオメガマテリジャ", probability: 5 },
    ],
  ],
  [
    "腕",
    [
      { name: "博識のアルテマテリジャ", probability: 100 },
      { name: "達識のアルテマテリジャ", probability: 17 },
      { name: "博識のオメガマテリジャ", probability: 10 },
      { name: "器識のオメガマテリジャ", probability: 7 },
      { name: "達識のオメガマテリジャ", probability: 5 },
    ],
  ],
  [
    "右指",
    [
      { name: "博識のアルテマテリジャ", probability: 100 },
      { name: "達識のアルテマテリジャ", probability: 17 },
      { name: "博識のオメガマテリジャ", probability: 10 },
      { name: "達識のオメガマテリジャ", probability: 7 },
      { name: "器識のオメガマテリジャ", probability: 5 },
    ],
  ],
  [
    "左指",
    [
      { name: "博識のアルテマテリジャ", probability: 100 },
      { name: "達識のアルテマテリジャ", probability: 17 },
      { name: "博識のオメガマテリジャ", probability: 10 },
      { name: "達識のオメガマテリジャ", probability: 7 },
      { name: "器識のオメガマテリジャ", probability: 5 },
    ],
  ],
]);

export const crafter = new Map<string, MateriaSlot[]>([
  [
    "頭",
    [
      { name: "名匠のアルテマテリジャ", probability: 100 },
      { name: "巨匠のアルテマテリジャ", probability: 100 },
      { name: "巨匠のアルテマテリジャ", probability: 17 },
      { name: "巨匠のオメガマテリジャ", probability: 10 },
      { name: "魔匠のマテリラ", probability: 26 },
    ],
  ],
  [
    "胴",
    [
      { name: "名匠のアルテマテリジャ", probability: 100 },
      { name: "巨匠のアルテマテリジャ", probability: 100 },
      { name: "巨匠のアルテマテリジャ", probability: 17 },
      { name: "巨匠のオメガマテリジャ", probability: 10 },
      { name: "魔匠のマテリア", probability: 28 },
    ],
  ],
  [
    "手",
    [
      { name: "名匠のアルテマテリジャ", probability: 100 },
      { name: "巨匠のアルテマテリジャ", probability: 100 },
      { name: "巨匠のアルテマテリジャ", probability: 17 },
      { name: "巨匠のオメガマテリジャ", probability: 10 },
      { name: "魔匠のマテリラ", probability: 26 },
    ],
  ],
  [
    "脚",
    [
      { name: "巨匠のアルテマテリジャ", probability: 100 },
      { name: "巨匠のアルテマテリジャ", probability: 100 },
      { name: "巨匠のアルテマテリジャ", probability: 17 },
      { name: "魔匠のメガマテリジャ", probability: 10 },
      { name: "魔匠のマテリガ", probability: 20 },
    ],
  ],
  [
    "足",
    [
      { name: "巨匠のアルテマテリジャ", probability: 100 },
      { name: "巨匠のアルテマテリジャ", probability: 100 },
      { name: "巨匠のアルテマテリジャ", probability: 17 },
      { name: "魔匠のオメガマテリジャ", probability: 10 },
      { name: "魔匠のマテリダ", probability: 22 },
    ],
  ],
  [
    "耳",
    [
      { name: "巨匠のアルテマテリジャ", probability: 100 },
      { name: "巨匠のアルテマテリジャ", probability: 17 },
      { name: "巨匠のオメガマテリジャ", probability: 10 },
      { name: "魔匠のオメガマテリジャ", probability: 7 },
      { name: "魔匠のマテリジャ", probability: 5 },
    ],
  ],
  [
    "首",
    [
      { name: "巨匠のアルテマテリジャ", probability: 100 },
      { name: "巨匠のアルテマテリジャ", probability: 17 },
      { name: "巨匠のオメガマテリジャ", probability: 10 },
      { name: "魔匠のメガマテリジャ", probability: 7 },
      { name: "魔匠のメガマテリジャ", probability: 5 },
    ],
  ],
  [
    "腕",
    [
      { name: "巨匠のアルテマテリジャ", probability: 100 },
      { name: "巨匠のアルテマテリジャ", probability: 17 },
      { name: "巨匠のオメガマテリジャ", probability: 10 },
      { name: "魔匠のオメガマテリジャ", probability: 7 },
      { name: "魔匠のマテリジャ", probability: 5 },
    ],
  ],
  [
    "右指",
    [
      { name: "名匠のアルテマテリジャ", probability: 100 },
      { name: "名匠のアルテマテリジャ", probability: 17 },
      { name: "名匠のオメガマテリジャ", probability: 10 },
      { name: "巨匠のオメガマテリジャ", probability: 7 },
      { name: "魔匠のメガマテリジャ", probability: 5 },
    ],
  ],
  [
    "左指",
    [
      { name: "名匠のアルテマテリジャ", probability: 100 },
      { name: "名匠のアルテマテリジャ", probability: 17 },
      { name: "名匠のオメガマテリジャ", probability: 10 },
      { name: "巨匠のオメガマテリジャ", probability: 7 },
      { name: "魔匠のメガマテリジャ", probability: 5 },
    ],
  ],
]);
