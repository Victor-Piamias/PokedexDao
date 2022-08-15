import { ChildrenProps } from "../../libs/react/props/children"
import Header from "./header"

export default function Layout(props: ChildrenProps) {
	const { children } = props
	return (
		<>
			<Header />
			<main>
				<img className="hidden lg:block lugia w-[500px]"
					src="/lugia.png" />
				<img className="hidden lg:block hooh w-[500px]"
					src="/hooh.png" />
				{children}
			</main>
		</>
	)
}
