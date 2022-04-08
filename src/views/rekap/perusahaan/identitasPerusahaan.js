import React
// , {useState, useEffect} 
from 'react';
import 'antd/dist/antd.css';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faPencil
 } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'antd';

import { useHistory } from 'react-router-dom';
// import axios from 'axios';


const IdentitasPerusahaan = () => {
    let history = useHistory();
    const updatePerusahaan = () => {
        if(localStorage.getItem("id_role") === "0"){
            history.push("/listPerusahaan/detailPerusahaan/updatePerusahaan");
        }else if(localStorage.getItem("id_role") === "2"){
            history.push("/profilPerusahaan/updatePerusahaan");
        }
    }  
  return (
    <>
        {localStorage.getItem("id_role") === "0" || localStorage.getItem("id_role") === "2" ? (
        <CRow>
            <CCol style={{textAlign: "right", paddingBottom:"15px"}}>
                <Button 
                    id="update" 
                    shape="round" 
                    style={{color: "black", background:"#FCEE21"}}
                    onClick={updatePerusahaan}
                > 
                    <FontAwesomeIcon icon={faPencil} style={{paddingRight:"5px"}}/> Update
                </Button>
            </CCol>
        </CRow>
        ) : <></> }
        <CCard className="mb-4">
            <CCardHeader style={{paddingLeft:"20px"}}>
                <h5><b>Profil Perusahaan Kabayan</b></h5>
            </CCardHeader>
            <CCardBody style={{paddingLeft:"20px"}}>
            <CRow>
                <CCol sm={6}>
                    <CRow><CCol sm={12}><b>Nama Pengusul</b></CCol></CRow>
                    <CRow><CCol sm={12}>1. Bryan Azriel Parulian</CCol></CRow>
                    <CRow><CCol sm={12}>2. Ari Raja Nuralamsyah</CCol></CRow>
                    <CRow><CCol sm={12} style={{paddingTop:"10px"}}><b>Website Official Perusahaan</b></CCol></CRow>
                    <CRow><CCol sm={12}>foobar.id</CCol></CRow>
                    <CRow><CCol sm={12} style={{paddingTop:"10px"}}><b>Email Official Perusahaan</b></CCol></CRow>
                    <CRow><CCol sm={12}>foo@bar.id</CCol></CRow>
                    <CRow><CCol sm={12} style={{paddingTop:"10px"}}><b>Nomor Telepon Perusahaan</b></CCol></CRow>
                    <CRow><CCol sm={12}>08221799871224274</CCol></CRow>
                    <CRow><CCol sm={12} style={{paddingTop:"10px"}}><b>Alamat</b></CCol></CRow>
                    <CRow><CCol sm={12}>Flinderation Road Chicago, IL 60605</CCol></CRow>
                    <CRow><CCol sm={12} style={{paddingTop:"10px"}}><b>Berdiri Tahun</b></CCol></CRow>
                    <CRow><CCol sm={12}>2011</CCol></CRow>
                    <CRow><CCol sm={12} style={{paddingTop:"10px"}}><b>Jumlah Karyawan</b></CCol></CRow>
                    <CRow><CCol sm={12}>128 Orang</CCol></CRow>
                </CCol>
                <CCol sm={6}>
                    <CRow><CCol sm={12}><b>PIC (Panitia)</b></CCol></CRow>
                    <CRow><CCol sm={12}>Michael</CCol></CRow>
                    <CRow><CCol sm={12} style={{paddingTop:"10px"}}><b>Nama Contact Person</b></CCol></CRow>
                    <CRow><CCol sm={12}>Richard Dillard</CCol></CRow>
                    <CRow><CCol sm={12} style={{paddingTop:"10px"}}><b>Email Contact Person</b></CCol></CRow>
                    <CRow><CCol sm={12}>RichardJDillard@jourrapide.com</CCol></CRow>
                    <CRow><CCol sm={12} style={{paddingTop:"10px"}}><b>Nomor Telepon Contact Person</b></CCol></CRow>
                    <CRow><CCol sm={12}>08214567892</CCol></CRow>
                    <CRow><CCol sm={12} style={{paddingTop:"10px"}}><b>Jabatan Contact Person</b></CCol></CRow>
                    <CRow><CCol sm={12}>Human Resource Capital</CCol></CRow>
                </CCol>
            </CRow>
            </CCardBody>
        </CCard>
    </>
  )
}

export default IdentitasPerusahaan
