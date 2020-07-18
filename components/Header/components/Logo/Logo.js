// library
import { Grid, Container } from '@material-ui/core'

export default props => {
    return (
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{
            backgroundColor: "#002240"
        }}>
            <Container maxWidth="md">
                <Grid container className="header-topbar-wrapper">
                    <div style={{
                        padding: '1rem 0'
                    }}>
                        <img src="/static/img/logo.svg" width="100px"/>
                    </div>
                </Grid>
            </Container>
        </Grid>
    )
}