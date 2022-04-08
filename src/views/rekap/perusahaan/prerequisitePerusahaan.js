import React
// , {useState, useEffect} 
from 'react';
import 'antd/dist/antd.css';
import {
  CCard,
  CCardBody
} from '@coreui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faPencil,
  faClipboard,
  faCheck,
  faEye,
 } from '@fortawesome/free-solid-svg-icons'
import { Button, Row, Col } from 'antd';

import { useHistory } from 'react-router-dom';
// import axios from 'axios';


const PrerequisitePerusahaan = () => {
    let history = useHistory();
    const prerequisitePerusahaan = () => {
        if(localStorage.getItem("id_role") === "0"){
            history.push("/listPerusahaan/detailPerusahaan/prerequisite");
        }else if(localStorage.getItem("id_role") === "2"){
            history.push("/formulirKesediaan/prerequisite");
        }
    }  
    const updatePrerequisite = () => {
        if(localStorage.getItem("id_role") === "0"){
            history.push("/listPerusahaan/detailPerusahaan/updatePrerequisite");
        }else if(localStorage.getItem("id_role") === "2"){
            history.push("/formulirKesediaan/updatePrerequisite");
        }
    }  
  return (
    <>
    <CCard className="mb-4">
        <CCardBody>
        <Row align='middle'>
            <Col span={2}>
                <FontAwesomeIcon icon={faClipboard} style={{width:"50px", height:"50px"}}/>
            </Col>
            {localStorage.getItem("id_role") === "0" || localStorage.getItem("id_role") === "2" ? (
                <Col span={11}>
                    Kabayan
                </Col>
            ): 
                <Col span={19}>
                    Kabayan
                </Col>
            }
            {localStorage.getItem("id_role") === "0" || localStorage.getItem("id_role") === "2" ? (
                <>
                <Col span={5} style={{textAlign:"center"}}>
                    <Button 
                    id="selesai" 
                    size="small" 
                    shape="round" 
                    style={{color: "white", background:"#339900"}}
                    // onClick={showModalCreate}
                    > 
                        <FontAwesomeIcon icon={faCheck} style={{paddingRight:"5px"}}/> Tandai sebagai selesai
                    </Button>
                </Col>
                <Col span={3} style={{textAlign:"center"}}>
                    <Button 
                    id="detail" 
                    size="small" 
                    shape="round" 
                    style={{color: "black", background:"#FBB03B"}}
                    onClick={prerequisitePerusahaan}
                    > 
                        <FontAwesomeIcon icon={faEye} style={{paddingRight:"5px"}}/> Detail
                    </Button>
                </Col>
                <Col span={3} style={{textAlign:"center"}}>
                    <Button 
                    id="update" 
                    size="small" 
                    shape="round" 
                    style={{color: "black", background:"#FCEE21"}}
                    onClick={updatePrerequisite}
                    > 
                        <FontAwesomeIcon icon={faPencil} style={{paddingRight:"5px"}}/> Update
                    </Button>
                </Col>
                </>
            ): 
                <Col span={3} style={{textAlign:"center"}}>
                    <Button 
                    id="detail" 
                    size="small" 
                    shape="round" 
                    style={{color: "black", background:"#FBB03B"}}
                    onClick={prerequisitePerusahaan}
                    > 
                        <FontAwesomeIcon icon={faEye} style={{paddingRight:"5px"}}/> Detail
                    </Button>
                </Col>
            }
            
            
        </Row>
        </CCardBody>
    </CCard>
    </>
  )
}

export default PrerequisitePerusahaan

