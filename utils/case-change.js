export function kebabToPascal(str) {
  return str.split("-").map((a) => [...a].map((b, c) => c === 0 ? b.toUpperCase() : b.toLowerCase()).join('')).join('')
}

export function kebabToCamel(str) {
  return str.split("-").map((a,b) => [...a].map((c,d) => d === 0 && b!==0 ? c.toUpperCase() : c.toLowerCase()).join('')).join('')
}