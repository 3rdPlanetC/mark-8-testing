// core
import styled from 'styled-components'

const SpanError = styled.span`color: #eb5757;`

const condoValidate = condoData => /^(.{1,})$/.test(condoData) && condoData !== undefined ? condoData : false
const rentValidate = rentData => /^([0-9]{1})([0-9]{1,2})*(,{1}[0-9]{3})*$/.test(rentData) ? rentData : false
const sellValidate = sellData => /^([0-9]{1})([0-9]{1,2})*(,{1}[0-9]{3})*$/.test(sellData) ? sellData : false
const bedValidate = bedData => /^([0-9]{1,})$/.test(bedData) ? bedData : false
const bathValidate = bathData => /^([0-9]{1,})$/.test(bathData) ? bathData : false
const sizeValidate = sizeData => /^([0-9]{1,})$/.test(sizeData) ? sizeData : false
const floorValidate = floorData => /^([0-9]{1,})$/.test(floorData) ? floorData : false
const titleValidate = titleData => titleData !== undefined && titleData !== "" ? titleData : false
const descValidate = descData => descData !== undefined && descData !== "" ? descData : false

export const validaterCSV = rowData => rowData.map(row => ({
    ...row,
        'condo_name-EN': condoValidate(row['condo_name-EN']),
        'rent_price': rentValidate(row['rent_price']),
        'sale_price': sellValidate(row['sale_price']),
        'bedroom': bedValidate(row['bedroom']),
        'bath': bathValidate(row['bath']),
        'size (sq.m)': sizeValidate(row['size (sq.m)']),
        'floor': floorValidate(row['floor']),
        'title': titleValidate(row['title']),
        'description': descValidate(row['description']),
        check: condoValidate(row['condo_name-EN']) && rentValidate(row['rent_price']) &&
                sellValidate(row['sale_price']) && bedValidate(row['bedroom']) &&
                bathValidate(row['bath']) && sizeValidate(row['size (sq.m)']) &&
                floorValidate(row['floor']) && titleValidate(row['title']) && 
                descValidate(row['description']) ? true : false
}))

export const notFound = data => data ? data : (<SpanError className="data-error">not found</SpanError>)
export const notFoundRentAndSale = (data, type) => {
    if (!data) {
        return (<SpanError className="data-error">not found</SpanError>)
    } else if (data == "0") {
        return ""
    } else {
        return <span>{data}{type === 'rent' ? <span className="font-lighter">/month</span> : ''}</span>
    }
}