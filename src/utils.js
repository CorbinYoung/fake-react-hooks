export const arraysMatch = (prev, next) =>
	prev.length === next.length && prev.reduce((accum, curVal, curInd) => accum && curVal === next[curInd], true);
