interface CurrencyIconProps {
  currency: string
  size?: "sm" | "md" | "lg"
}

export function CurrencyIcon({ currency, size = "md" }: CurrencyIconProps) {
  const sizeClasses = {
    sm: "h-8 w-8 text-sm",
    md: "h-12 w-12 text-xl",
    lg: "h-16 w-16 text-2xl",
  }

  const getSymbol = (currency: string) => {
    switch (currency) {
      case "USDC":
        return "$"
      case "USDT":
        return "₮"
      case "ETH":
        return "Ξ"
      case "BTC":
        return "₿"
      case "SOL":
        return "◎"
      default:
        return "$"
    }
  }

  return (
    <div
      className={`rounded-full bg-blue-600 flex items-center justify-center text-white font-bold ${sizeClasses[size]}`}
    >
      {getSymbol(currency)}
    </div>
  )
}
