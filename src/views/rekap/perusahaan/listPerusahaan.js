import React, { useState } from 'react';
import 'antd/dist/antd.css';
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
} from '@coreui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faX, faEye } from '@fortawesome/free-solid-svg-icons';
import { Button, Col, Row, Table, Tooltip } from 'antd';
import { useHistory } from 'react-router-dom';

const ListPerusahaan = () => {
    let history = useHistory()
    const [status, setStatus] = useState({statusAktif:{check: false, x: false},statusPrerequisite:{check: false, x: false}});
    const changeData = (data) => {
        if(data === "statusAktifCheck"){
            if(status.statusAktif.check){
                setStatus(pre => {
                    return {...pre, statusAktif:{check:false, x:false}}
                })
            }else if(!status.statusAktif.check){
                setStatus(pre => {
                    return {...pre, statusAktif:{check:true, x:false}}
                })
            }
        }else if(data === "statusAktifX"){
            if(status.statusAktif.x){
                setStatus(pre => {
                    return {...pre, statusAktif:{check:false, x:false}}
                })
            }else if(!status.statusAktif.x){
                setStatus(pre => {
                    return {...pre, statusAktif:{check:false, x:true}}
                })
            }
        }if(data === "statusPrerequisiteCheck"){
            if(status.statusPrerequisite.check){
                setStatus(pre => {
                    return {...pre, statusPrerequisite:{check:false, x:false}}
                })
            }else if(!status.statusPrerequisite.check){
                setStatus(pre => {
                    return {...pre, statusPrerequisite:{check:true, x:false}}
                })
            }
        }else if(data === "statusPrerequisiteX"){
            if(status.statusPrerequisite.x){
                setStatus(pre => {
                    return {...pre, statusPrerequisite:{check:false, x:false}}
                })
            }else if(!status.statusPrerequisite.x){
                setStatus(pre => {
                    return {...pre, statusPrerequisite:{check:false, x:true}}
                })
            }
        }
    }

    const data = [
        {  
            id_perusahaan: "1",
            prodi: "1",
            namaPerusahaan : "Kabayan",
            namaCP: "Richard Dillard",
            noCP: "08214567892",
            emailCP: "RichardJDillard@jourrapide.com",
            statusAktif: true,
            statusPrerequisite: true,
        },
        {  
            id_perusahaan: "2",
            prodi: "1",
            namaPerusahaan : "NTI",
            namaCP: "Richard Dillard",
            noCP: "08214567892",
            emailCP: "RichardJDillard@jourrapide.com",
            statusAktif: true,
            statusPrerequisite: false,
        },
        {  
            id_perusahaan: "3",
            prodi: "1",
            namaPerusahaan : "Pindad",
            namaCP: "Richard Dillard",
            noCP: "08214567892",
            emailCP: "RichardJDillard@jourrapide.com",
            statusAktif: false,
            statusPrerequisite: false,
        }];
        
    
    const columns = [{
        title: 'No',
        dataIndex: 'no',
        width: '5%',
        align: "center",
        render: (value,item,index) => {
            return index + 1
        }
      }, 
      {
        title: 'Nama Perusahaan',
        dataIndex: 'namaPerusahaan',
        width: '30%',
        render: (text, record) => 
            <>
                <Row align="middle">
                    <Col >
                        {record.namaPerusahaan} 
                    </Col>
                    <Col style={{paddingLeft:"10px", paddingRight: "5px"}}>
                        {record.statusAktif ? 
                        <Button type="primary" shape="round" size="small" style={{backgroundColor:"#339900", borderColor: "#339900", color:"white", fontSize:"11px"}}>
                            Aktif
                        </Button>
                         :
                        <Button type="primary" shape="round" size="small" style={{backgroundColor:"#CC0033", borderColor: "#CC0033", color:"white", fontSize:"11px"}}>
                            Tidak Aktif
                        </Button>
                        }
                    </Col>
                    <Col style={{paddingRight: "5px"}}>
                        {record.statusPrerequisite ? 
                        <Tooltip placement="right" title="Sudah mengumpulkan">
                            <Button type="primary" shape="circle" size="small" style={{backgroundColor:"#339900", borderColor: "#339900", color:"white", fontSize:"11px"}}>
                                <FontAwesomeIcon icon={faCheck}/>
                            </Button>
                        </Tooltip>
                         :
                        <Tooltip placement="right" title="Belum mengumpulkan">
                            <Button type="primary" shape="circle" size="small" style={{backgroundColor:"#CC0033", borderColor: "#CC0033", color:"white", fontSize:"11px"}}>
                                <FontAwesomeIcon icon={faX}/>
                            </Button>
                        </Tooltip>
                        }
                        
                    </Col>
                </Row>
            </>
      },
      {
        title: 'Contact Person',
        width: '20%',
        children: [
            {
                title: 'Nama',
                dataIndex: 'namaCP',
            },
            {
                title: 'No HP',
                dataIndex: 'noCP',
            },
            {
                title: 'Email',
                dataIndex: 'emailCP',
            }
        ]
      },
      {
        title: 'Aksi',
        dataIndex: 'action',
        align: "center",
        render: (text, record) => 
          <>
            <Row>
                <Col span={24} style={{textAlign:"center"}}>
                    <Button 
                    id="detail" 
                    size="small" 
                    shape="round" 
                    style={{color: "black", background:"#FBB03B"}}
                    onClick={detailPerusahaan}
                    > 
                        <FontAwesomeIcon icon={faEye} style={{paddingRight:"5px"}}/> Detail
                    </Button>
                </Col>
            </Row>
          </> 
      }];
    
    const createPerusahaan = () => {
        history.push("/listPerusahaan/createPerusahaan");
    }  
    const detailPerusahaan = () => {
        history.push("/listPerusahaan/detailPerusahaan");
    }  
  return (
    <>
      <CRow>
          <CCol sm={3}>
              <CCard className='mb-4' id="card-filter" onClick={() => changeData("statusAktifCheck")} style={status.statusAktif.check === true ? {backgroundColor: "#C8C8C8"} : {backgroundColor: "white"}}>
                  <CCardBody style={{padding: "10px"}}>
                    <Row justify="space-around" align="middle">
                        <Col span={24} style={{paddingTop:"10px"}}>
                            <h6 style={{fontSize:"9pt"}}><b>Perusahaan Aktif</b></h6>
                            <h5 style={{color:"#339900"}}>{data.filter(item => item.statusAktif === true ).length}</h5>
                        </Col>
                    </Row>
                  </CCardBody>
              </CCard>
          </CCol>
          <CCol sm={3}>
              <CCard className='mb-4' id="card-filter" onClick={() => changeData("statusAktifX")} style={status.statusAktif.x === true ? {backgroundColor: "#C8C8C8"} : {backgroundColor: "white"}}>
                  <CCardBody style={{padding: "10px"}}>
                    <Row justify="space-around" align="middle">
                        <Col span={24} style={{paddingTop:"10px"}}>
                            <h6 style={{fontSize:"9pt"}}><b>Perusahaan Tidak Aktif</b></h6>
                            <h5 style={{color:"#CC0033"}}>{data.filter(item => item.statusAktif === false ).length}</h5>
                        </Col>
                    </Row>
                  </CCardBody>
              </CCard>
          </CCol>
          <CCol sm={3}>
              <CCard className='mb-4' id="card-filter" onClick={() => changeData("statusPrerequisiteCheck")} style={status.statusPrerequisite.check === true ? {backgroundColor: "#C8C8C8"} : {backgroundColor: "white"}}>
                  <CCardBody style={{padding: "10px"}}>
                    <Row justify="space-around" align="middle">
                        <Col span={6}>
                            <Button type="primary" shape="circle" size="medium" style={{backgroundColor:"#339900", borderColor: "#339900", color:"white"}}>
                                <FontAwesomeIcon icon={faCheck}/>
                            </Button>
                        </Col>
                        <Col span={18} style={{paddingTop:"10px"}}>
                            <h6 style={{fontSize:"8pt"}}><b>Sudah Mengisi Prerequisite</b></h6>
                            <h5 style={{color:"#339900"}}>{data.filter(item => item.statusPrerequisite === true ).length}</h5>
                        </Col>
                    </Row>
                  </CCardBody>
              </CCard>
          </CCol>
          <CCol sm={3}>
              <CCard className='mb-4' id="card-filter" onClick={() => changeData("statusPrerequisiteX")} style={status.statusPrerequisite.x === true ? {backgroundColor: "#C8C8C8"} : {backgroundColor: "white"}}>
                  <CCardBody style={{padding: "10px"}}>
                    <Row justify="space-around" align="middle">
                        <Col span={6}>
                            <Button type="primary" shape="circle" size="medium" style={{backgroundColor:"#CC0033", borderColor: "#CC0033", color:"white"}}>
                                <FontAwesomeIcon icon={faX}/>
                            </Button>
                        </Col>
                        <Col span={18} style={{paddingTop:"10px"}}>
                            <h6 style={{fontSize:"8pt"}}><b>Belum Mengisi Prerequisite</b></h6>
                            <h5 style={{color:"#CC0033"}}>{data.filter(item => item.statusPrerequisite === false ).length}</h5>
                        </Col>
                    </Row>
                  </CCardBody>
              </CCard>
          </CCol>
      </CRow>
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={12} style={{textAlign:"right"}}>
            <Button 
                id="create-akun" 
                size="sm" 
                shape="round" 
                style={{color: "white", background:"#339900", marginBottom: 16}}
                onClick={createPerusahaan}
            > 
                Create 
            </Button>
            </CCol>
            <CCol sm={12}>
                <Table 
                    columns={columns} 
                    dataSource={
                        status.statusAktif.check === false ?
                            status.statusAktif.x === false ?
                                status.statusPrerequisite.check === true ?   
                                    data.filter(item => item.statusPrerequisite === true)
                                :
                                    status.statusPrerequisite.x === true ? 
                                        data.filter(item => item.statusPrerequisite === false)
                                    : 
                                        data
                            :
                                status.statusPrerequisite.check === true ?   
                                    data.filter(item => item.statusAktif === false && item.statusPrerequisite === true)
                                :
                                    status.statusPrerequisite.x === true ? 
                                        data.filter(item => item.statusAktif === false && item.statusPrerequisite === false)
                                    :
                                        data.filter(item => item.statusAktif === false)
                        :
                            status.statusPrerequisite.check === true ?   
                                    data.filter(item => item.statusAktif === true && item.statusPrerequisite === true)
                                :
                                    status.statusPrerequisite.x === true ? 
                                        data.filter(item => item.statusAktif === true && item.statusPrerequisite === false)
                                    :
                                        data.filter(item => item.statusAktif === true)}  
                    pagination={false} 
                    rowKey="id_peserta" 
                    bordered />
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default ListPerusahaan
