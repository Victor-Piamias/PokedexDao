import { useMemo } from "react"
import { ProtocolesProps } from "../../libs/react/props/protocole"

export default function PokedexInfo(props: ProtocolesProps) {
	const { protocole } = props

	const name = useMemo(() => {
		if (protocole.name === "ape") return "Ape"
		if (protocole.name === "aave") return "Aave"
		if (protocole.name === "maker") return "Maker"
		if (protocole.name === "compound") return "Compound"
		return "Uniswap"
	}, [protocole])

	return (
		<>
			<h1 className="protocole_info">
				<span className="protocole_name font-pokemon-hollow">{`${protocole.id} - ${name}`}</span>
			</h1>
			<div className="dao-info">
				<div className="py-2 protocole-description bg-black rounded-md">
					<div className="scrolling">
						<span className="text-white font-pokemon-solid">{` ${protocole.description} `}</span>
					</div>
					<div className="scrolling  scrolling2 font-pokemon-solid">
						<span className="text-white">{` ${protocole.description} `}</span>
					</div>
				</div>
			</div>
		</>
	)
}
