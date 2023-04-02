"use client";

import { useCallback, useEffect, useState } from "react";
import { Materia, crafter, gatherer, subHand } from "./gearset";
import {
  ExpectedCount,
  expectedCountAtThreshold,
  expectedRequiredMateriaCounts,
} from "./simulation";
import clsx from "clsx";
import { orderBy } from "natural-orderby";

const subHandOrder = [
  "木工",
  "鍛冶",
  "甲冑",
  "彫金",
  "革細工",
  "裁縫",
  "錬金",
  "調理",
  "採掘",
  "園芸",
];

const gearOrder = [
  "頭",
  "胴",
  "手",
  "脚",
  "足",
  "耳",
  "首",
  "腕",
  "右指",
  "左指",
];

function GearTable({
  prefix,
  materias,
  order,
  owned,
  toggleOwned,
}: {
  prefix: string;
  materias: Map<string, Materia[]>;
  order: string[];
  owned: Set<string>;
  toggleOwned: (name: string) => void;
}) {
  return (
    <div>
      {order.map((name) => (
        <div key={name} className="flex">
          <div className="w-20 px-3 py-2 font-medium">{name}</div>
          {materias.get(name)!.map((mat, idx) => {
            const key = `${prefix}-${name}-${idx}`;
            const own = owned.has(key);
            return (
              <div
                key={`${name}-${idx}`}
                className={clsx(
                  "w-64 px-3 py-2 font-medium hover:bg-blue-200 cursor-pointer",
                  own ? "bg-blue-700 text-white" : ""
                )}
                onClick={() => toggleOwned(key)}
              >
                {mat.name} ({mat.probability}%)
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

const collectRequiredMaterias = (
  owned: Set<string>
): Map<string, Map<number, number>> => {
  const reqs = new Map<string, Map<number, number>>();
  const fn = (prefix: string, materias: Map<string, Materia[]>) => {
    materias.forEach((mats, name) => {
      mats.forEach((mat, idx) => {
        const key = `${prefix}-${name}-${idx}`;
        if (owned.has(key)) {
          return;
        }
        const counts = reqs.get(mat.name) ?? new Map<number, number>();
        counts.set(mat.probability, (counts.get(mat.probability) ?? 0) + 1);
        reqs.set(mat.name, counts);
      });
    });
  };
  fn("副道具", subHand);
  fn("ギャザラー", gatherer);
  fn("クラフター", crafter);
  return reqs;
};

function RequiredMateria({
  name,
  req,
  ec,
  confidence,
}: {
  name: string;
  req: Map<number, number>;
  ec: ExpectedCount;
  confidence: number;
}) {
  return (
    <div className="flex hover:bg-blue-100">
      <div className="w-64">{name}</div>
      <div className="w-10">{expectedCountAtThreshold(ec, confidence)}</div>
      <div className="flex">
        {orderBy(Array.from(req.entries()), [(x) => -x[0]]).map(
          ([probability, slots]) => {
            return (
              <div key={probability} className="w-40">
                確率{probability}% {slots}個
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default function MateriaGearset({}: {}) {
  const [owned, setOwned] = useState(new Set<string>());
  const [confidence, setConfidence] = useState(50);
  const toggleOwned = useCallback(
    (name: string) => {
      const newValue = new Set(owned);
      if (newValue.has(name)) {
        newValue.delete(name);
      } else {
        newValue.add(name);
      }
      localStorage.setItem("owned", JSON.stringify(Array.from(newValue)));
      setOwned(newValue);
    },
    [owned, setOwned]
  );
  useEffect(() => {
    const savedOwned = localStorage.getItem("owned");
    if (savedOwned) {
      setOwned(new Set<string>(JSON.parse(savedOwned)));
    }
  }, [setOwned]);

  const reqs = collectRequiredMaterias(owned);
  const needed = new Map<string, ExpectedCount>();
  reqs.forEach((r, name) => {
    needed.set(name, expectedRequiredMateriaCounts(r));
  });
  return (
    <div className="m-4">
      <h1 className="text-3xl font-bold">
        FF14 禁断 Negative Binomial Distribution Stats
      </h1>

      <h2 className="text-2xl mt-4">副道具</h2>
      <GearTable
        prefix="副道具"
        materias={subHand}
        order={subHandOrder}
        owned={owned}
        toggleOwned={toggleOwned}
      />

      <h2 className="text-2xl mt-4">ギャザラー装備</h2>
      <GearTable
        prefix="ギャザラー"
        materias={gatherer}
        order={gearOrder}
        owned={owned}
        toggleOwned={toggleOwned}
      />

      <h2 className="text-2xl mt-4">クラフター装備</h2>
      <GearTable
        prefix="クラフター"
        materias={crafter}
        order={gearOrder}
        owned={owned}
        toggleOwned={toggleOwned}
      />

      <h2 className="text-2xl mt-4">必要マテリア</h2>
      <div className="flex mt-2 mb-2">
        <div className="mr-2 mb-3">Confidence: {confidence}%</div>
        <input
          type="range"
          min="0"
          max="100"
          value={confidence}
          className="range range-xs range-primary w-80"
          onChange={(ev) => setConfidence(parseInt(ev.target.value))}
        />
      </div>
      {Array.from(needed.entries())
        .sort()
        .map(([name, ec]) => (
          <RequiredMateria
            key={name}
            name={name}
            req={reqs.get(name)!}
            ec={ec}
            confidence={confidence}
          />
        ))}
    </div>
  );
}
