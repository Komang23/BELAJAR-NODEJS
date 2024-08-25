import dns from "dns/promises"

const address = await dns.lookup("www.redana.xyz");

console.info(address.address);
console.info(address.family);