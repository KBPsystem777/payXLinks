import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Generate a short ID for payment links
export function generateShortId(length = 8): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "bpx";

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}

// Format a payment link to a short URL
export function formatShortLink(shortId: string): string {
  return `bpx.pay/${shortId}`;
}

// Get compatible currencies for a network
export function getCompatibleCurrencies(
  networkValue: string,
  allCurrencies: any[],
  allNetworks: any[]
) {
  const network = allNetworks.find((n) => n.value === networkValue);
  if (!network) return allCurrencies;

  return allCurrencies.filter((currency) =>
    network.currencies.includes(currency.value)
  );
}

// Get network icon based on network value
export function getNetworkIcon(network: string): string {
  switch (network) {
    case "ethereum":
      return "Ξ";
    case "base":
      return "B";
    case "optimism":
      return "O";
    case "arbitrum":
      return "A";
    case "polygon":
      return "P";
    case "solana":
      return "◎";
    default:
      return "Ξ";
  }
}

// Get network color based on network value
export function getNetworkColor(network: string): string {
  switch (network) {
    case "ethereum":
      return "bg-blue-100 text-blue-800";
    case "base":
      return "bg-blue-100 text-blue-800";
    case "optimism":
      return "bg-red-100 text-red-800";
    case "arbitrum":
      return "bg-purple-100 text-purple-800";
    case "polygon":
      return "bg-indigo-100 text-indigo-800";
    case "solana":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}
