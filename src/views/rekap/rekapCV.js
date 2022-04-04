import React from 'react';
import 'antd/dist/antd.css';
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
} from '@coreui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'antd';

const RekapCV = () => {
  return (
    <>
      <CRow>
          <CCol sm={6}>
              <CCard className='mb-4'>
                  <CCardBody>
                    <CRow>
                        <CCol sm={3} class="align-middle">
                            <Button type="primary" shape="circle" disabled style={{backgroundColor:"#339900", borderColor: "#339900", color:"white", width:"60px", height:"60px", fontSize:"30px"}}>
                                <FontAwesomeIcon icon={faCheck}/>
                            </Button>
                        </CCol>
                        <CCol sm={9}>
                            {/* <h5>Sudah Mengumpulkan CV</h5>
                            <h4>5</h4> */}
                        </CCol>
                    </CRow>
                  </CCardBody>
              </CCard>
          </CCol>
          <CCol sm={6}>
              <CCard className='mb-4'>
                  <CCardBody>
                    <CRow>
                        <CCol sm={3} style={{textAlign:"center"}}>
                            <Button type="primary" shape="circle" disabled style={{backgroundColor:"#CC0033", borderColor: "#CC0033", color:"white", width:"60px", height:"60px", fontSize:"30px"}}>
                                <FontAwesomeIcon icon={faX}/>
                            </Button>
                        </CCol>
                        <CCol sm={9}>
                            <h1>Belum Mengumpulkan CV</h1>
                        </CCol>
                    </CRow>
                  </CCardBody>
              </CCard>
          </CCol>
      </CRow>
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={12}>
            
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default RekapCV
