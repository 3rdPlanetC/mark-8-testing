// core
import { Fragment } from 'react'
// inner components
import { 
    AmentiesRow, IdRow, RentRow, 
    DescriptionRow, TitleRow, SaleRow, 
    BedRow, BathRow, SizeRow, FloorRow, 
    CondoRow, PhotoRow
} from './components'
// utils
import { validaterCSV } from '../../../../../utils'

export default props => {
    // props
    const { CSVData } = props
    // useEffect
    return (
        <Fragment>
            {validaterCSV(CSVData).map((row, index) => {
                return (
                    <tr key={index} className="table-body">
                        <IdRow row={row}/>
                        <CondoRow row={row['condo_name-EN']}/>
                        <RentRow row={row['rent_price']} type="rent"/>
                        <SaleRow row={row['sale_price']} type="sale"/>
                        <BedRow row={row['bedroom']} />
                        <BathRow row={row['bath']}/>
                        <SizeRow row={row['size (sq.m)']}/>
                        <FloorRow row={row['floor']} />
                        <PhotoRow row={row['photo1']} rowId={row['id']}/>
                        <TitleRow row={row['title']}/>
                        <DescriptionRow row={row['description']}/>
                        <AmentiesRow row={row}/>
                    </tr>
                )
            })}
            <style jsx global>{`
                tr {
                    height: 4.25rem
                }
                .text-clamb {
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </Fragment>
    )
}