export const useFormatCompactUsd = () =>{
  return function formatCompactUsd(value: number) {
    if (!Number.isFinite(value)) return '—'
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: value < 1 ? 6 : 2,
    }).format(value)
  }
}