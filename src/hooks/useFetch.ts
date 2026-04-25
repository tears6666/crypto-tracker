import type { CoinloreTicker, CoinloreTickersResponse } from '@/types/coins.types'
import axios from 'axios'
import { useEffect, useMemo, useState } from 'react'
export function useFetch() {
	const [data, setData] = useState<CoinloreTicker[] | null>(null)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		let cancelled = false
		const controller = new AbortController()

		async function run() {
			try {
				setIsLoading(true)
				setError(null)

				const res = await axios.get<CoinloreTickersResponse>(
					'https://api.coinlore.net/api/tickers/',
					{ signal: controller.signal },
				)

				if (cancelled) return
				setData(res.data.data ?? [])
			} catch (e) {
				if (cancelled) return
				if (axios.isCancel(e)) return

				const message =
					e instanceof Error ? e.message : 'Failed to load tickers'
				setError(message)
				setData(null)
			} finally {
				if (!cancelled) setIsLoading(false)
			}
		}

		run()
		return () => {
			cancelled = true
			controller.abort()
		}
	}, [])

	return useMemo(() => ({ data, isLoading, error }), [data, isLoading, error])
}
