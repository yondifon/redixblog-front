import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='en'>
			<Head />
			<body>
				<Main />
				<NextScript />
				<script
					src='https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js'
					type='module'
				/>
				<script
					src='https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js'
					noModule
				/>
			</body>
		</Html>
	);
}
