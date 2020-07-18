// core
import { Fragment, useContext } from 'react'
import { Context } from '../../../store'
// inner components
import { TableHeader, TableBody } from './components'

export default props => {
    // useContext
    const { CSVData } = useContext(Context)
    return (
        <table className="table" border="1" frame="void" rules="rows">
            {CSVData.length !== 0 && (
                <Fragment>
                    <TableHeader />
                    <TableBody CSVData={CSVData}/>
                </Fragment>
            )}
            <style jsx>{`
                .table {
                    width: 100%;
                    border-top-style: solid;
                    width: 110vw;
                }
            `}</style>
        </table>
    )
}