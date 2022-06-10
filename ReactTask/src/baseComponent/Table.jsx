import React from 'react'

function Table({tableData}) {
   console.log("table");
  return (
    <div className='table-container table-responsive-xxl'>
        <table className='table align-middle w-100 mb-0'>
        <tbody>
            {
                Array.isArray(tableData) &&tableData.map((data,index) => {
                    const {objective,period} =data
                    return(
                        <tr key={index}>
                            <td>{objective}</td>
                            <td>{period}</td>
                        </tr>
                    )
                })
            }
        </tbody>
        </table>
    </div>
  )
}
export default Table