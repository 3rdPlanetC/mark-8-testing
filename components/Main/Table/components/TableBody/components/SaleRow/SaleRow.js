// utils
import { notFoundRentAndSale } from '../../../../../../../utils'

export default props => {
    // props
    const { row, type } = props
    return (
        <td title={row}>
            {notFoundRentAndSale(row, type)}
        </td>
    )
}