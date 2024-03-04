type PrevQuery = string | string[] | undefined;

export const addEachQueryValue = (prev: PrevQuery, current: string) => {
	if (prev && Array.isArray(prev)) return [...prev, current];
	if (prev) return [prev, current];
	return current;
};

export const removeEachQueryValue = (prev: PrevQuery, current: string) => {
	if (prev && Array.isArray(prev)) return prev.filter(query => query !== current);
	return undefined;
};

export const alreadyExistQueryValue = (prev: PrevQuery, current: string) => {
	if (prev && Array.isArray(prev)) return prev.some(query => query === current);
	if (prev) return prev === current;
	return false;
};
