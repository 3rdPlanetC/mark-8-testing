// library
import { Grid, Container, Box, Typography, IconButton, Divider } from '@material-ui/core'
import PriorityHighIcon from '@material-ui/icons/PriorityHigh'
import PublishIcon from '@material-ui/icons/Publish'
// components
import { Header, Main } from '../components'

export default props => {
	return (
		<div className="container">
			<Header />
			<Main />
			<style jsx global>{`
				* {
					margin: 0;
					box-sizing: border-box;
				}

				html {
					font-size: 16px !important;
				}
				body {
					background-color: #f1f1f1 !important;
					font-family: 'Kanit' !important;
				}

				input {
					display: none;
				}

				.header-upload-wrapper {
					margin: 3rem 0;
					border: 1px solid rgba(0, 0, 0, 0.22);
					padding: 1rem 1rem;
				}

				.header-upload-title, .header-upload-form {
					padding: 1rem 2rem;
				}

				.upload-text {
					height: 100%;
					display: flex;
					justify-content: center;
					flex-direction: column;
				}
				.font-lighter {
					color: #b7babd;
				}
			`}</style>
    	</div>
  	)
}
