import { Protocoles } from "../../../comps/context/protocole"

export function nextName(name: Protocoles) {
	if (name === "uniswap") return "ape"
	if (name === "ape") return "aave"
	if (name === "aave") return "maker"
	if (name === "maker") return "compound"
	return "uniswap"
}

export function prevName(name: Protocoles) {
	if (name === "uniswap") return "compound"
	if (name === "ape") return "uniswap"
	if (name === "aave") return "ape"
	if (name === "maker") return "aave"
	return "maker"
}

export function nextId(id: number) {
	if (id === 5) return 1
	return id + 1
}

export function prevId(id: number) {
	if (id === 1) return 5
	return id - 1
}

export function nextDescription(name: Protocoles) {
	if (name === "uniswap")
		return "-- APE -- BAYC native tokens were launched in 2022. It is a governance token that will allow you to participate in the life of the DAO!"
	if (name === "ape")
		return "-- AAVE -- renamed in 2018 Aave is a decentralized finance protocol that allows users to lend and borrow cryptocurrencies!"
	if (name === "aave")
		return "-- MAKER -- project that unites a DAO with a stablecoin the DAI, since 2017 it allows different transactions on the Ethereum blockchain!"
	if (name === "maker")
		return "-- COMPOUND -- algorithmic interest rate protocol launched in 2017 and designed autonomously to unlock a universe of open financial applications!"
	return "-- UNISWAP -- one of the biggest financial protocol, created in 2018 it is mainly used to exchange its cryptos!"
}

export function prevDescription(name: Protocoles) {
	if (name === "uniswap")
		return "-- COMPOUND -- algorithmic interest rate protocol launched in 2017 and designed autonomously to unlock a universe of open financial applications!"
	if (name === "ape")
		return "-- UNISWAP -- one of the biggest financial protocol, created in 2018 it is mainly used to exchange its cryptos!"
	if (name === "aave")
		return "-- APE -- BAYC native tokens were launched in 2022. It is a governance token that will allow you to participate in the life of the DAO!"
	if (name === "maker")
		return "-- AAVE -- Renamed in 2018 Aave is a decentralized finance protocol that allows users to lend and borrow cryptocurrencies!"
	return "-- MAKER -- project that unites a DAO with a stablecoin the DAI, since 2017 it allows different transactions on the Ethereum blockchain!"
}
