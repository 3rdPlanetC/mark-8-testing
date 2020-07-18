// library
import { Typography, Grid } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

export default props => {
    // props
    const { length } = props
    return (
        <Grid container alignItems="center">
            <Grid item lg={4}>
                <Typography>
                    {length}
                </Typography>
            </Grid>
            <Grid item>
                <ArrowDropDownIcon />
            </Grid>
        </Grid>
    )
}