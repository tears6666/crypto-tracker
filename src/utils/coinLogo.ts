export function coinLogo(symbol: string) {
	const safe = symbol.trim().toUpperCase()
	return `https://assets.coincap.io/assets/icons/${safe.toLowerCase()}@2x.png`
}
