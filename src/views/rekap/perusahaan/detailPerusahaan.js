import React
// , {useState, useEffect} 
from 'react';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';

// import { useHistory } from 'react-router-dom';
import IdentitasPerusahaan from './identitasPerusahaan';
import PrerequisitePerusahaan from './prerequisitePerusahaan'
// import axios from 'axios';

const { TabPane } = Tabs;

const DetailPerusahaan = () => {
    // let history = useHistory();
  return (
    <>
        <Tabs type="card">
            <TabPane tab="Identitas" key="1">
                <IdentitasPerusahaan/>
            </TabPane>
            <TabPane tab="Prerequisite" key="2">
                <PrerequisitePerusahaan/>
            </TabPane>
        </Tabs>
    </>
  )
}

export default DetailPerusahaan
