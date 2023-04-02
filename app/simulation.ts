import { jStat } from "jstat";

const SIZE = 500;
const cache = new Map<string, ExpectedCount>();

const convolute = (cbf: number[], pdf: number[]): number[] => {
  const ret = new Array(SIZE);
  for (let z = 0; z < SIZE; z++) {
    ret[z] = 0;
    for (let i = 0; i <= z; i++) {
      ret[z] += cbf[i] * pdf[z - i];
    }
  }
  return ret;
};

const binomCDF = (r: number, p: number): number[] => {
  const ret = new Array(SIZE);
  for (let k = 0; k < SIZE; k++) {
    ret[k] = jStat.negbin.cdf(k, r, p);
  }
  return ret;
};

const binomPDF = (r: number, p: number): number[] => {
  const ret = new Array(SIZE);
  for (let k = 0; k < SIZE; k++) {
    ret[k] = jStat.negbin.pdf(k, r, p);
  }
  return ret;
};

export interface ExpectedCount {
  reqCount: number;
  probabilities: number[];
}

// Returns the number of materias needed to meld all the required slots.
//
// `threshold` is the overall threshold for success. For example, threshold = 50
// means that with the returned number of materias, 50 out of 100 people will
// finish melding all slots.
export const expectedCountAtThreshold = (
  ec: ExpectedCount,
  threshold: number
): number => {
  for (let i = 0; i < SIZE; i++) {
    if (ec.probabilities[i] > threshold / 100) {
      return ec.reqCount + i;
    }
  }
  return -1;
};

// Returns the materia melding expectation stats.
//
// `reqs` is a map from probability (in percentage) to number of slots.
export const expectedRequiredMateriaCounts = (
  reqs: Map<number, number>
): ExpectedCount => {
  const key = "" + Array.from(reqs.entries()).sort();
  if (cache.has(key)) {
    return cache.get(key)!;
  }

  let fn = undefined;
  let reqCount = 0;
  for (const [probability, slots] of reqs.entries()) {
    reqCount += slots;
    if (!fn) {
      fn = binomCDF(slots, probability / 100);
    } else {
      fn = convolute(fn, binomPDF(slots, probability / 100));
    }
  }
  const ret = {
    reqCount: reqCount,
    probabilities: fn!,
  };
  cache.set(key, ret);
  return ret;
};
