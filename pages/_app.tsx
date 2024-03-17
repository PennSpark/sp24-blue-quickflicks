import type { AppProps } from "next/app";
import { Rosario } from "next/font/google";

const rosario = Rosario({
	subsets: ["latin"],
	weight: ["400", "600"],
	style: ["normal", "italic"],
});
export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<main className={rosario.className}>
			<Component {...pageProps} />
		</main>
	);
}
