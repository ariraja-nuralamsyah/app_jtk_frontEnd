import React
// , {useState, useEffect} 
from 'react';
import 'antd/dist/antd.css';
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
} from '@coreui/react';
import {Table} from 'antd';

// import axios from 'axios';


const tabelPrerequisite = () => {

    const columns = [{
        title: 'Nama Perusahaan',
        dataIndex: 'namaPerusahaan',
        width: '15%',
        align: "center",
        fixed: 'left',
      },
      {
        title: 'Alamat',
        dataIndex: 'alamat',
        width: '20%',
      },
      {
        title: 'Mekanisme',
        dataIndex: 'mekanisme',
        width: '10%',
        align: "center",
      },
      {
        title: 'Kuota',
        dataIndex: 'kuota',
        width: '10%',
        align: "center",
      },
      {
        title: 'Requirement Perusahaan',
        width: '200%',
        children: [
            {
                title: 'Minat Pekerjaan',
                dataIndex: 'minat',
            },
            {
                title: 'Bahasa Pemrograman',
                dataIndex: 'bahasaPemrograman',
            },
            {
                title: 'Database',
                dataIndex: 'database',
            },
            {
                title: 'Framework',
                dataIndex: 'framework',
            },
            {
                title: 'Tools',
                dataIndex: 'tools',
            },
            {
                title: 'Modelling',
                dataIndex: 'modelling',
            },
            {
                title: 'Kemampuan Bahasa',
                dataIndex: 'kemampuanBahasa',
            }
        ]
      },
      {
        title: 'Keterangan',
        dataIndex: 'keterangan',
        width: '10%',
      },
      {
        title: 'PIC',
        dataIndex: 'pic',
        width: '10%',
        align: "center",
      }
    ];
  return (
    <>
        <CCard className="mb-4" style={{height: "2000px"}}>
            <CCardBody style={{paddingLeft:"20px"}}>
            <CRow>
                <CCol sm={12}>
                    <Table 
                    columns={columns} 
                    pagination={false} 
                    rowKey="id_peserta" 
                    scroll={{ x: "max-content" }}
                    bordered />
                </CCol>
            </CRow>
            </CCardBody>
        </CCard>
    </>
  )
}

export default tabelPrerequisite
