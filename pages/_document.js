import { Fragment } from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/core/styles'
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components'

class MyDocument extends Document {
	render() {
		return (
			<html lang="en">
				<Head>
					<meta charSet="utf-8"/>
					<meta
						name="viewport"
						content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
					/>
					<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;300;400;500;700&display=swap" />
					{this.props.styleTags}
				</Head>
				<body>
					<Main/>
					<NextScript/>
				</body>
			</html>
        )
	}
}

MyDocument.getInitialProps = async ctx => {
	const styledComponentSheet = new StyledComponentSheets()
	const materialUiSheets = new MaterialUiServerStyleSheets()
	const originalRenderPage = ctx.renderPage

	try {
		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: App => props =>
				styledComponentSheet.collectStyles(
					materialUiSheets.collect(<App {...props} />),
				),
			})
		const initialProps = await Document.getInitialProps(ctx)
		return {
			...initialProps,
			styles: [
				<Fragment key="styles">
					{initialProps.styles}
					{materialUiSheets.getStyleElement()}
					{styledComponentSheet.getStyleElement()}
				</Fragment>,
			],
		}
	} finally {
		styledComponentSheet.seal()
	}
}

export default MyDocument