import React from 'react'

function TableApplications() {
    return (
        <div className="table-wrapper">

<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Used languages/ technologies</th>
      <th scope="col">Address</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Personal Portfolio Website</td>
      <td>React, JavaScript, HTML, CSS</td>
      <td><a style={{textDecoration:'none'}} href="https://stefan-kehayov.web.app"> https://stefan-kehayov.web.app</a> </td>
    </tr>
   
  </tbody>
</table>
            
        </div>
    )
}

export default TableApplications
