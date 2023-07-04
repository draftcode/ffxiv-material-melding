export interface Materia {
  prefix: string;
  effects: Array<{
    suffix: string;
    effect: string;
  }>;
}

export const suffixes = [
  "アルテマテリジャ",
  "オメガマテリジャ",
  "エクスマテリジャ",
  "メガマテリジャ",
  "ハイマテリジャ",
  "マテリジャ",
  "マテリガ",
  "マテリダ",
  "マテリラ",
  "マテリア",
];

export const crafterMaterias: Array<Materia> = [
  {
    prefix: "名匠",
    effects: [
      { suffix: "アルテマテリジャ", effect: "作業精度+27" },
      { suffix: "オメガマテリジャ", effect: "作業精度+18" },
      { suffix: "エクスマテリジャ", effect: "作業精度+21" },
      { suffix: "メガマテリジャ", effect: "作業精度+14" },
      { suffix: "ハイマテリジャ", effect: "作業精度+16" },
      { suffix: "マテリジャ", effect: "作業精度+11" },
      { suffix: "マテリガ", effect: "作業精度+6" },
      { suffix: "マテリダ", effect: "作業精度+5" },
      { suffix: "マテリラ", effect: "作業精度+4" },
      { suffix: "マテリア", effect: "作業精度+3" },
    ],
  },
  {
    prefix: "魔匠",
    effects: [
      { suffix: "アルテマテリジャ", effect: "CP+10" },
      { suffix: "オメガマテリジャ", effect: "CP+8" },
      { suffix: "エクスマテリジャ", effect: "CP+9" },
      { suffix: "メガマテリジャ", effect: "CP+7" },
      { suffix: "ハイマテリジャ", effect: "CP+8" },
      { suffix: "マテリジャ", effect: "CP+6" },
      { suffix: "マテリガ", effect: "CP+4" },
      { suffix: "マテリダ", effect: "CP+3" },
      { suffix: "マテリラ", effect: "CP+2" },
      { suffix: "マテリア", effect: "CP+1" },
    ],
  },
  {
    prefix: "巨匠",
    effects: [
      { suffix: "アルテマテリジャ", effect: "加工精度+18" },
      { suffix: "オメガマテリジャ", effect: "加工精度+12" },
      { suffix: "エクスマテリジャ", effect: "加工精度+13" },
      { suffix: "メガマテリジャ", effect: "加工精度+9" },
      { suffix: "ハイマテリジャ", effect: "加工精度+10" },
      { suffix: "マテリジャ", effect: "加工精度+7" },
      { suffix: "マテリガ", effect: "加工精度+4" },
      { suffix: "マテリダ", effect: "加工精度+3" },
      { suffix: "マテリラ", effect: "加工精度+2" },
      { suffix: "マテリア", effect: "加工精度+1" },
    ],
  },
];

export const gathererMaterias: Array<Materia> = [
  {
    prefix: "達識",
    effects: [
      { suffix: "アルテマテリジャ", effect: "獲得力+25" },
      { suffix: "オメガマテリジャ", effect: "獲得力+14" },
      { suffix: "エクスマテリジャ", effect: "獲得力+20" },
      { suffix: "メガマテリジャ", effect: "獲得力+12" },
      { suffix: "ハイマテリジャ", effect: "獲得力+15" },
      { suffix: "マテリジャ", effect: "獲得力+10" },
      { suffix: "マテリガ", effect: "獲得力+6" },
      { suffix: "マテリダ", effect: "獲得力+5" },
      { suffix: "マテリラ", effect: "獲得力+4" },
      { suffix: "マテリア", effect: "獲得力+3" },
    ],
  },
  {
    prefix: "博識",
    effects: [
      { suffix: "アルテマテリジャ", effect: "識質力+25" },
      { suffix: "オメガマテリジャ", effect: "識質力+14" },
      { suffix: "エクスマテリジャ", effect: "識質力+20" },
      { suffix: "メガマテリジャ", effect: "識質力+12" },
      { suffix: "ハイマテリジャ", effect: "識質力+15" },
      { suffix: "マテリジャ", effect: "識質力+10" },
      { suffix: "マテリガ", effect: "識質力+6" },
      { suffix: "マテリダ", effect: "識質力+5" },
      { suffix: "マテリラ", effect: "識質力+4" },
      { suffix: "マテリア", effect: "識質力+3" },
    ],
  },
  {
    prefix: "器識",
    effects: [
      { suffix: "アルテマテリジャ", effect: "GP+10" },
      { suffix: "オメガマテリジャ", effect: "GP+8" },
      { suffix: "エクスマテリジャ", effect: "GP+9" },
      { suffix: "メガマテリジャ", effect: "GP+7" },
      { suffix: "ハイマテリジャ", effect: "GP+8" },
      { suffix: "マテリジャ", effect: "GP+6" },
      { suffix: "マテリガ", effect: "GP+4" },
      { suffix: "マテリダ", effect: "GP+3" },
      { suffix: "マテリラ", effect: "GP+2" },
      { suffix: "マテリア", effect: "GP+1" },
    ],
  },
];
