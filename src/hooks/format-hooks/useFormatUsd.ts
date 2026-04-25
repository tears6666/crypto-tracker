export const useFormatUsd = () => {
	return function formatUsd(value: number) {
		if (!Number.isFinite(value)) return '—'
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			maximumFractionDigits: value < 1 ? 6 : 2,
		}).format(value)
	}
}
