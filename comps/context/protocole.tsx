import { createContext, useCallback, useContext, useState } from "react"
import { useObject } from "../../libs/react/object"
import { ChildrenProps } from "../../libs/react/props/children"

export type Protocoles = "uniswap" | "ape" | "aave" | "maker" | "compound"

export interface ProtocolesHandle {
	name: Protocoles
	id: number
	description: string
	set(protocole?: ProtocolesHandle): void
}

export const ProtocoleContext = createContext<ProtocolesHandle | undefined>(
	undefined
)

export function useProtocole() {
	return useContext(ProtocoleContext)!
}

export function ProtocoleProvider(props: ChildrenProps) {
	const [name, setName] = useState<Protocoles>("uniswap")
	const [id, setId] = useState(1)
	const [description, setDescription] = useState(
		"-- UNISWAP -- one of the biggest financial protocol, created in 2018 it is mainly used to exchange its cryptos!"
	)

	const set = useCallback((protocole: ProtocolesHandle) => {
		setName(protocole.name)
		setId(protocole.id)
		setDescription(protocole.description)
	}, [])

	const handle = useObject<ProtocolesHandle>({ name, id, description, set })

	return (
		<ProtocoleContext.Provider value={handle}>
			{props.children}
		</ProtocoleContext.Provider>
	)
}
