import React from 'react';
import { useState, useEffect } from 'react';
import covidAPI from '../axios/covidAPI'
import { Typography } from '@material-ui/core';
import './style.css'

function Extend(props) {
    const [covids, setCovids] = useState([])
    const [search, setSearch] = useState("")

  const getCovids = async () => {
    const covids = await covidAPI.getAll()
    setCovids(covids.data.detail)
  }

  const renderCovids = () => {
    return covids.map(covid => covid.name.toLowerCase().includes(search.toLowerCase().trim(), 0) ?
      <>
        <tr>
          <th>{covid.name}</th>
          <td>{covid.cases}</td>
          <td>{covid.death}</td>
          <td>{covid.casesToday}</td>
        </tr>
      </> : ""
    )
  }

  useEffect(() => { getCovids() }, [])
  return (
    <div className="detail">
    <Typography variant='h3' component='h3'>
        Số liệu COVID-19 hôm nay tại Việt Nam
      </Typography>
        <div className="col-4 p-5 input mb-3">
          <input onChange={e => setSearch(e.target.value)} type="text" className="form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="button-addon2" />
        </div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Tỉnh/ Thành phố</th>
              <th scope="col">Tổng số ca nhiễm</th>
              <th scope="col">Số ca tử vong</th>
              <th scope="col">Số ca mắc mới trong ngày</th>
            </tr>
          </thead>
          <tbody>
            {renderCovids()}
          </tbody>
        </table>
    </div>
  );
}


export default Extend;