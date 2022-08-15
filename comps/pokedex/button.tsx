import {
	nextDescription,
	nextId,
	nextName,
	prevDescription,
	prevId,
	prevName
} from "../../libs/react/proposal/navigate"
import { ProtocolesProps } from "../../libs/react/props/protocole"

export default function PokedexButton(props: ProtocolesProps) {
	const { protocole } = props

	const OnPrevClick = () => {
		protocole.set({
			name: prevName(protocole.name),
			id: prevId(protocole.id),
			description: prevDescription(protocole.name),
			set: protocole.set,
		})
	}

	const OnNextClick = () => {
		protocole.set({
			name: nextName(protocole.name),
			id: nextId(protocole.id),
			description: nextDescription(protocole.name),
			set: protocole.set,
		})
	}

	return (
		<div className="buttons font-pokemon-solid">
			<button className="button" onClick={() => OnPrevClick()}>
				{"< Prev"}
			</button>
			<button className="button" onClick={() => OnNextClick()}>
				{"Next >"}
			</button>
		</div>
	)
}
