import React from 'react';
import 'antd/dist/antd.css';
import {
  CCard,
  CCardBody,
} from '@coreui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faFileDownload, faScroll } from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Button} from 'antd';

const PengumpulanCV = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardBody>
          <Row align='middle'>
            <Col span={2}>
                <FontAwesomeIcon icon={faScroll} style={{width:"50px", height:"50px"}}/>
            </Col>
            <Col span={16}>
                Ari Raja Nuralamsyah
            </Col>
            <Col span={3} style={{textAlign:"center"}}>
                <Button 
                id="detail" 
                size="small" 
                shape="round" 
                style={{color: "black", background:"#FBB03B"}}
                // onClick={showModalCreate}
                > 
                    <FontAwesomeIcon icon={faEye} style={{paddingRight:"5px"}}/> Detail
                </Button>
            </Col>
            <Col span={3} style={{textAlign:"center"}}>
                <Button 
                id="download" 
                size="small" 
                shape="round" 
                style={{color: "white", background:"#3399FF"}}
                // onClick={showModalCreate}
                > 
                    <FontAwesomeIcon icon={faFileDownload} style={{paddingRight:"5px"}}/> Export
                </Button>
            </Col>
          </Row>
        </CCardBody>
      </CCard>
    </>
  )
}

export default PengumpulanCV
