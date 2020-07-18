// core
import { useState, useRef } from 'react'
import Zoom from 'react-thumbnail-zoom'
// library
import { Fade, Grid, Typography } from '@material-ui/core'

export default props => {
    // props
    const { row, rowId } = props
    // useState
    const [imageSrc, setImageSrc] = useState(false)
    const [listShow, setListShow] = useState(false)
    // useREf
    const formRef = useRef(null)
    // functions
    const mouseOverHandle = ev => {
        setListShow(true)
    }
    const mouseLeaveHandle = ev => {
        setListShow(false)
    }
    const uploadImage = ev => {
        const image = ev.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(image)
        reader.onloadend = () => {
            setImageSrc(reader.result)
            formRef.current.reset()
        }
    }
    return (
        <td title={row}>
            <Grid container spacing={2}
                onMouseOver={mouseOverHandle}
                onMouseLeave={mouseLeaveHandle}
            >
                <Grid item lg="auto">
                    <Zoom>
                        <img 
                            src={imageSrc || row} 
                            alt={rowId} 
                            width="50px" 
                            height="50px"
                            onError={e => {console.log("error")}}
                        />
                    </Zoom>                    
                </Grid>
                <Fade in={listShow}>
                    <Grid item container justify="center" direction="column" lg={6}>
                        <Grid item>
                            <form ref={formRef}>
                                <input id="new-image-upload" type="file" onChange={uploadImage}/>
                                <label htmlFor="new-image-upload">
                                    <Typography variant="body2" color="red" style={{
                                        cursor: 'pointer',
                                        color: '#0089ff'
                                    }}>
                                        Edit Photo
                                    </Typography>
                                </label>
                            </form>
                        </Grid>
                    </Grid>
                </Fade>
            </Grid>
        </td>
    )
}