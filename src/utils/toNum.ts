export function toNum(v: string) {
	const n = Number(v)
	return Number.isFinite(n) ? n : NaN
}