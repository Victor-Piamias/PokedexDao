import { useProtocole } from "../context/protocole"
import PokedexButton from "./button"
import PokedexInfo from "./info"

export default function Pokedex() {
	const protocole = useProtocole()

	return (
		<>
			<img
				className="protocole_image bounce"
				src={`/logo/${protocole.name}.svg`}
				alt="uni"
			/>
			<PokedexInfo protocole={protocole} />
			<PokedexButton protocole={protocole} />
			<img className="w-full max-w-[450px]" src="./pokedex.png" alt="pokedex" />
		</>
	)
}
