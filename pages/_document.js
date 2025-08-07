import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta charset="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="theme-color" content="#F56D91" />

				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apelan.jpg"
				/>
				<link
					rel="icon"
					type="image/jpg"
					sizes="32x32"
					href="/apelan.jpg"
				/>
				<link
					rel="icon"
					type="image/jpg"
					sizes="16x16"
					href="/apelan.jpg"
				/>
				<link rel="shortcut icon" href="/apelan.jpg" />
            </Head>
            <body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
