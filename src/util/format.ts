export function formatEthAddress(address: string) {
  return address.length <= 9 ? address : address.slice(0, 5) + '...' + address.slice(-4)
}
