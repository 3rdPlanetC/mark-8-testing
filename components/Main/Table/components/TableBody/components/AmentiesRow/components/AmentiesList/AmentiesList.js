// library
import { List, ListItem, ListItemText, Divider, Box, Typography, Fade } from '@material-ui/core'

export default props => {
    // props
    const { listShow, amentiesList } = props
    return (
        <Box>
            <Fade in={listShow}>
                <List dense={true} className="amenties-list" style={{
                    position: "absolute",
                    marginTop: "-2rem",
                    marginLeft: "-4rem",
                    boxShadow: "0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)",
                    background: "#f1f1f1"
                }}>
                    <Typography variant="body1" align="center" style={{
                        padding: "0.5rem 0",
                        marginBottom: "0.5rem"
                    }}>
                        Amenties
                    </Typography>
                    <Divider style={{ 
                        backgroundColor: '#0089ff',
                        height: "3px" 
                    }}/>
                    {amentiesList.map((am, index) => {
                        return (
                            <ListItem key={index} disableGutters>
                                <ListItemText
                                    primary={am}
                                    secondary={null}
                                />
                            </ListItem>
                        )
                    })}
                </List>
            </Fade>
        </Box>
    )
}