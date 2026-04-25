export type CoinloreTicker = {
	id: string
	symbol: string
	name: string
	rank: string
	price_usd: string
	percent_change_24h: string
	market_cap_usd: string
	volume24: string
}

export type CoinloreTickersResponse = {
	data: CoinloreTicker[]
}
