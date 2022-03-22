import React from 'react';
import { useState, useEffect } from 'react';
import covidAPI from '../axios/covidAPI'
import { Container, Typography } from '@material-ui/core';
import '../styles/covidvn.css'
import { RingLoader } from 'react-spinners';

function CovidVN(props) {
    const [covids, setCovids] = useState([])
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(true)

  const getCovids = async () => {
    const covids = await covidAPI.getAll()
    setCovids(covids.data.detail)
    setLoading(false)
  }

  const renderCovids = () => {
    return covids.map((covid, index) => covid.name.toLowerCase().includes(search.toLowerCase().trim(), 0) ?
      <>
        <tr>
          <th>{index+1}</th>
          <th>{covid.name}</th>
          <td>{covid.cases}</td>
          <td>{covid.death}</td>
          <td>{covid.casesToday}</td>
        </tr>
      </> : ""
    )
  }

  useEffect(() => { getCovids() }, [])
  return loading ? <div className='loading'><RingLoader color='#D78536' loading={loading} size={60} /></div>:(
    <>
    <Container style={{ marginTop: 50, marginBottom: 100, textAlign: 'center' }}>
      <Typography variant='h3' component='h3' className='text-left'>
          Số liệu COVID-19 Việt Nam
        </Typography>
          <div className="col-4 p-5 input mb-3">
            <input onChange={e => setSearch(e.target.value)} type="text" className="form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="button-addon2" />
          </div>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope='col'>STT</th>
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
    </Container>
    </>
  );
}


export default CovidVN;