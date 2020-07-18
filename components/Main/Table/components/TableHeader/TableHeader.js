import { Fragment } from 'react'

export default props => {
    return (
        <Fragment>
            <tr className="table-header">
                <th id="id"></th>
                <th id="condo_name">CONDO NAME</th>
                <th id="rent_price">RENT PRICE (Bath)</th>
                <th id="sell_price">SELL PRICE (Bath)</th>
                <th id="bed_room">BEDROOM</th>
                <th id="bath_room">BATHROOM</th>
                <th id="size">SIZE (sqm.)</th>
                <th id="floor">FLOOR</th>
                <th id="photo">PHOTO</th>
                <th id="title">TITLE</th>
                <th id="description">DESCRIPTION</th>
                <th id="amenties">Amenties</th>
            </tr>
            <style jsx>{`
                tr {
                    height: 4.25rem
                }
                .table-header {
                    text-align: left;
                }
                .table-header > * {
                    letter-spacing: 0;
                    font-weight: 300;
                    color: #92959a;
                }
                .table-header > #id { width: 4rem; }
                .table-header > #condo_name { width: 12rem; }
                .table-header > #rent_price { width: 10rem; }
                .table-header > #sell_price { width: 10rem; }
                .table-header > #bed_room { width: 5rem; }
                .table-header > #bath_room { width: 5rem; }
                .table-header > #size { width: 5rem; }
                .table-header > #floor { width: 5rem; }
                .table-header > #photo { width: 10rem; }
                .table-header > #title { width: 17rem; }
                .table-header > #description { width: 17rem; }
                .table-header > #amenties { width: 8rem;  }
            `}</style>
        </Fragment>
    )
}