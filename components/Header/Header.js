// core
import { Grid } from '@material-ui/core'
// inner components
import { Logo, UploadForm } from './components'

export default props => {
    return (
        <header>
            <Grid container>
                <Logo />
                <UploadForm />
            </Grid>
        </header>
    )
}