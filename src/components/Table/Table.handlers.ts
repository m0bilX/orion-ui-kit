import BigNumber from "bignumber.js";

export const compareString = (a: string, b: string): number => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
}

export const compareNumber = (a: number, b: number): number => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
}

export const compareBigNumber = (a: BigNumber, b: BigNumber): number => {
    if (a.gt(b)) return 1;
    if (a.lt(b)) return -1;
    return 0;
}
