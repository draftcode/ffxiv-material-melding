declare module "jstat" {
  namespace jStat {
    export namespace negbin {
      export function pdf(k: number, r: number, p: number): number;
      export function cdf(k: number, r: number, p: number): number;
    }
  }
}
