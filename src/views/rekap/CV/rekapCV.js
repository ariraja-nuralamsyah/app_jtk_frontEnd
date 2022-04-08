import React, { useState } from 'react';
import 'antd/dist/antd.css';
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
} from '@coreui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faX, faEye, faDownload } from '@fortawesome/free-solid-svg-icons';
import { Button, Col, Row, Table, Tooltip } from 'antd';
import { useHistory } from 'react-router-dom';

const RekapCV = () => {
    let history = useHistory()
    const [status, setStatus] = useState({check: false, x: false});
    const changeData = (data) => {
        if(data === "check"){
            if(status.check){
                setStatus({check:false, x:false})
            }else if(!status.check){
                setStatus({check:true, x:false})
            }
        }else if(data === "x"){
            if(status.x){
                setStatus({check:false, x:false})
            }else if(!status.x){
                setStatus({check:false, x:true})
            }
        }
    }

    const detailCV = () => {
        history.push("/rekapCV/detailCV");
    }

    const data = [
        {  
            id_peserta: "1",
            prodi: "0",
            nama: "Ari Raja Nuralamsyah",
            nim: "191511005",
            statusCV: false,
        },
        {  
            id_peserta: "2",
            prodi: "0",
            nama: "Bryan Azriel",
            nim: "191511008",
            statusCV: true,
        },
        {  
            id_peserta: "3",
            prodi: "0",
            nama: "Heldi Apriadi",
            nim: "191511015",
            statusCV: false,
        },
        {  
            id_peserta: "4",
            prodi: "1",
            nama: "Shofwan",
            nim: "191511030",
            statusCV: true,
        },
        {  
            id_peserta: "5",
            prodi: "1",
            nama: "Krakatau",
            nim: "191511018",
            statusCV: false,
        },
        {  
            id_peserta: "6",
            prodi: "1",
            nama: "Robert",
            nim: "191511000",
            statusCV: true,
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
        title: 'Nama',
        dataIndex: 'nama',
        width: '55%',
        render: (text, record) => 
            <>
                <Row align="middle">
                    <Col >
                        {record.nama} 
                    </Col>
                    <Col style={{paddingLeft:"10px"}}>
                        {record.statusCV ? 
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
        title: 'NIM',
        dataIndex: 'nim',
        width: '25%',
        align: "center",
      },
      {
        title: 'Aksi',
        dataIndex: 'action',
        align: "center",
        render: (text, record) => 
          <>
            <Row>
                <Col span={11} style={{textAlign:"right"}}>
                    <Button 
                    id="button-eye" 
                    htmlType="submit" 
                    shape="circle" 
                    style={{backgroundColor:"#FBB03B", borderColor: "#FBB03B"}}
                    onClick={detailCV} 
                    >
                    <FontAwesomeIcon icon={faEye} style={{color: "black"}}/>
                    </Button>
                </Col>
                <Col span={2}/>
                <Col span={11} style={{textAlign:"left"}}>
                    <Button 
                    id="button-download" 
                    htmlType="submit" 
                    shape="circle" 
                    style={{backgroundColor:"#3399FF", borderColor: "#3399FF"}} 
                    // onClick={() => { showModalDelete(record)}}
                    >
                    <FontAwesomeIcon icon={faDownload} style={{color: "white"}}/>
                    </Button>
                </Col>
            </Row>
          </> 
      }];
  return (
    <>
      <CRow>
          <CCol sm={6}>
              <CCard className='mb-4' id="card-filter" onClick={() => changeData("check")} style={status.check === true ? {backgroundColor: "#C8C8C8"} : {backgroundColor: "white"}}>
                  <CCardBody>
                    <Row justify="space-around" align="middle">
                        <Col span={6}>
                            <Button type="primary" shape="circle" style={{backgroundColor:"#339900", borderColor: "#339900", color:"white", width:"60px", height:"60px", fontSize:"30px"}}>
                                <FontAwesomeIcon icon={faCheck}/>
                            </Button>
                        </Col>
                        <Col span={18} style={{paddingTop:"10px"}}>
                            <h6>Sudah Mengumpulkan CV</h6>
                            <h5 style={{color:"#339900"}}>{data.filter(item => item.statusCV === true && item.prodi === localStorage.getItem('id_prodi')).length}</h5>
                        </Col>
                    </Row>
                  </CCardBody>
              </CCard>
          </CCol>
          <CCol sm={6}>
              <CCard className='mb-4' id="card-filter" onClick={() => changeData("x")} style={status.x === true ? {backgroundColor: "#C8C8C8"} : {backgroundColor: "white"}}>
                  <CCardBody>
                    <Row justify="space-around" align="middle">
                        <Col span={6}>
                            <Button type="primary" shape="circle" style={{backgroundColor:"#CC0033", borderColor: "#CC0033", color:"white", width:"60px", height:"60px", fontSize:"30px"}}>
                                <FontAwesomeIcon icon={faX}/>
                            </Button>
                        </Col>
                        <Col span={18} style={{paddingTop:"10px"}}>
                            <h6>Belum Mengumpulkan CV</h6>
                            <h5 style={{color:"#CC0033"}}>{data.filter(item => item.statusCV === false && item.prodi === localStorage.getItem('id_prodi')).length}</h5>
                        </Col>
                    </Row>
                  </CCardBody>
              </CCard>
          </CCol>
      </CRow>
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={12}>
                <Table 
                    columns={columns} 
                    dataSource={
                        status.check === false && status.x === false?
                            data.filter(item => item.prodi === localStorage.getItem('id_prodi'))
                        :
                        status.check === true ?
                            data.filter(item => item.prodi === localStorage.getItem('id_prodi') && item.statusCV === true)
                        : 
                            data.filter(item => item.prodi === localStorage.getItem('id_prodi') && item.statusCV === false)} 
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

export default RekapCV
