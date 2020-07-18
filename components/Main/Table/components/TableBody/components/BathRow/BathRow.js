// utils
import { notFound } from '../../../../../../../utils'

export default props => {
    // props
    const { row } = props
    return (
        <td title={row}>
            <span className="text-clamb">
                {notFound(row)}
            </span>
        </td>
    )
}