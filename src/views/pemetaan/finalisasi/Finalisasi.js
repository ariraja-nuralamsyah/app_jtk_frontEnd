import React, {useState} from 'react'
import 'antd/dist/antd.css';
import { Table, Select } from 'antd';
import axios from "axios";

import {
  CCard,
  CCardBody,
  CCol,
  CRow,
} from '@coreui/react'

const Finalisasi = () => {
  const { Option } = Select;
  const [globalSelected, setGlobalSelected] = useState([]);

  axios.defaults.withCredentials = true;
  axios.post("http://localhost:8081/account/verify").then((response) => {
    console.log(response)
  });
  
  const Selectmultiple = (kuota) => {
    const opts = ["Ariraja", "Bryan", "Heldi", "Shofwan", "Krakatau"];
    const [optionsSelected, setOptionsSelected] = useState(kuota.peserta);
    const optsFilters = opts.filter(item => !optionsSelected.includes(item)); // filter sama data dirinya 
    const optsFilter = optsFilters.filter(item => !globalSelected.includes(item)); // filter sama data global
    const handleChange = value => {
      setOptionsSelected(value);
      // console.log(`${optionsSelected}`);
      setGlobalSelected(value);  
      console.log(`after option = ${globalSelected}`);
    };
    return (
      <div>
        <Select
          defaultValue={optionsSelected}
          mode="multiple"
          style={{ width: "100%" }}
          placeholder="Please select"
          onChange={handleChange}
        >
          {optsFilter.map(item => (
            <Option
              disabled={
                optionsSelected.length === kuota.kuota
                    ? true
                  : false
              }
              key={item}
            >
              {item}
            </Option>
          ))}
        </Select>
      </div>
    );
  };
  // const renderContent = (value, row, index) => {
  //   const obj = {
  //     children: value,
  //     props: {},
  //   };
  //   if (index === 4) {
  //     obj.props.colSpan = 0;
  //   }
  //   return obj;
  // };
  
  const columns = [{
    title: 'Nama Perusahaan',
    dataIndex: 'name',
    width: '40%',
  }, 
  {
    title: 'Quota',
    dataIndex: 'age',
    width: '3 0%',
    // render: renderContent,
  }, 
  // {
  //   title: 'Home phone',
  //   colSpan: 2,
  //   dataIndex: 'tel',
  //   render: (value, row, index) => {
  //     const obj = {
  //       children: value,
  //       props: {},
  //     };
  //     if (index === 2) {
  //       obj.props.rowSpan = 2;
  //     }
  //     // These two are merged into above cell
  //     if (index === 3) {
  //       obj.props.rowSpan = 0;
  //     }
  //     if (index === 4) {
  //       obj.props.colSpan = 0;
  //     }
  //     return obj;
  //   },
  // }, 
  // {
  //   title: 'Phone',
  //   colSpan: 0,
  //   dataIndex: 'phone',
  //   render: renderContent,
  // }, 
  // {
  //   title: 'Address',
  //   dataIndex: 'address',
  //   render: renderContent,
  // },
  {
    title: 'Action',
    dataIndex: 'action',
    render: (text, record) => <Selectmultiple kuota={record.age} peserta={record.peserta}/>,
  }];
  
  const data = [{
    key: '1',
    name: 'PT NTI',
    age: 3,
    tel: '0571-22098909',
    phone: 18889898989,
    address: 'New York No. 1 Lake Park',
    peserta: ["Ariraja", "Bryan"],
  }, 
  {
    key: '2',
    name: 'PT Kabayan',
    tel: '0571-22098333',
    phone: 18889898888,
    age: 1,
    address: 'London No. 1 Lake Park',
    peserta: ["Shofwan", "Heldi"],
  }, 
  {
    key: '3',
    name: 'Pindad',
    age: 1,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Sidney No. 1 Lake Park',
    peserta: ["Ariraja", "Bryan"],
  }, 
  {
    key: '4',
    name: 'PT Big io',
    age: 4,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'London No. 2 Lake Park',
    peserta: ["Ariraja", "Bryan"],
  }, 
  {
    key: '5',
    name: 'PT QROY',
    age: 2,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Dublin No. 2 Lake Park',
    peserta: ["Ariraja", "Bryan"],
  }];

  return (
    <>
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Traffic
              </h4>
              <div className="small text-medium-emphasis">January - July 2021</div>
            </CCol>
            <Table columns={columns} dataSource={data} bordered />
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Finalisasi
