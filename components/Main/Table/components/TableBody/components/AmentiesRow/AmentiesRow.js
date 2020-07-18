// core
import { useState, useEffect } from 'react'
// library
import { Box } from '@material-ui/core'
// inner components
import { AmentiesLength, AmentiesList } from './components'

export default props => {
    // props
    const { row } = props
    // useState
    const [amentiesList, setAmentiesList] = useState([])
    const [listShow, setListShow] = useState(false)
    // functions
    const mouseOverHandle = ev => {
        setListShow(true)
    }
    const mouseLeaveHandle = ev => {
        setListShow(false)
    }
    const setAmenties = rowData => {
        const rowFilter = Object.keys(rowData).filter(item => {
            return rowData[item] === 'TRUE'
        })
        setAmentiesList(rowFilter)
    }
    // useEffect
    useEffect(() => {
        setAmenties(row)
    }, [row])
    return (
        <td>
            <Box
                onMouseOver={mouseOverHandle}
                onMouseLeave={mouseLeaveHandle}
            >
                <AmentiesLength length={amentiesList.length}/>
                <AmentiesList listShow={listShow} amentiesList={amentiesList}/>
            </Box>
        </td>
    )
}