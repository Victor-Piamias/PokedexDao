import type { AppProps } from "next/app"
import Head from "next/head"
import { ProtocoleProvider } from "../comps/context/protocole"
import "../styles/globals.css"

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Pokedex DAO</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ProtocoleProvider>
				<Component {...pageProps} />
			</ProtocoleProvider>
		</>
	)
}
