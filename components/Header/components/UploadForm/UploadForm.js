// core
import { useContext, useRef } from 'react'
import Papa from 'papaparse'
// store
import { Context } from '../../../../store'
// library
import { Grid, Container, Box, Typography, IconButton, Divider } from '@material-ui/core'
import PriorityHighIcon from '@material-ui/icons/PriorityHigh'
import PublishIcon from '@material-ui/icons/Publish'

export default props => {
    // useRef
    const formRef = useRef(null)
    // useContext
    const { CSVData, setCSVData } = useContext(Context)
    // functions
    const uploadCSV = ev => {
        const csvFile = ev.target.files[0]
        Papa.parse(csvFile, {
            quoteChar: '"',
            escapeChar: '"',
            header: true,
            complete: results => {
                setCSVData([
                    ...CSVData,
                    ...results.data
                ])
                formRef.current.reset()
            }
        })
    }
    return (
        <Grid item  xs={12} sm={12} md={12} lg={12} xl={12} >
            <Container maxWidth="md">
                <Grid container className="header-upload-wrapper">
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className="header-upload-title">
                        <Box>
                            <Typography variant="h5">
                                Bulk Upload form <PriorityHighIcon />
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body2">
                                You haven't upload anybulk data yet 
                            </Typography>
                        </Box>
                    </Grid>
                    <Divider />
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className="header-upload-form">
                        <Grid item>
                            <Box>
                                <Typography variant="h5">
                                    Choose your an input method
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item container>
                            <Grid item lg={1}>
                                <Box className="upload-icon">
                                    <form ref={formRef}>
                                        <input id="icon-button-file" type="file" onChange={uploadCSV}/>
                                        <label htmlFor="icon-button-file">
                                            <IconButton color="primary" aria-label="upload picture" component="span">
                                                <PublishIcon fontSize="large"/>
                                            </IconButton>
                                        </label>
                                    </form>
                                </Box>
                            </Grid>
                            <Grid item lg={11}>
                                <Box className="upload-text">
                                    <Typography variant="body2">
                                        via CSV file
                                    </Typography>
                                    <Typography variant="body2">
                                        อัพเดตข้อมูลจากไฟล์ CSV
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    )
}