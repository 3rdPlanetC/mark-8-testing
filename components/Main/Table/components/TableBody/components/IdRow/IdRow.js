// core
import { Fragment } from 'react'
import styled from 'styled-components'
// library
import { Box, Typography } from '@material-ui/core'

const BoxStyle = styled(Box)`
    height: 2.5rem;
    width: 2.5rem;
    margin: auto;
    border-radius: 7.5px 7.5px 7.5px 7.5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export default props => {
    // props
    const { row } = props
    return (
        <Fragment>
            <td title={row['id']} className="id-tag">
                <BoxStyle bgcolor={row.check ? '' : '#eb5757'}>
                    <Typography variant="body2" align="center">
                        {row['id']}
                    </Typography>
                </BoxStyle>
            </td>
        </Fragment>
    )
}