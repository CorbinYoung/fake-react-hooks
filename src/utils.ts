export const arraysMatch = (prev: any[], next: any[]) =>
	prev.length === next.length && prev.reduce((accum, curVal, curInd) => accum && curVal === next[curInd], true);
