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
import { Tabs, Row, Col, Form, Input } from 'antd';

// import { useHistory } from 'react-router-dom';
// import axios from 'axios';

const { TabPane } = Tabs;

const DetailPrerequisite = () => {
    // let history = useHistory();
    const [form] = Form.useForm();
  return (
    <>
        <Tabs type="card">
            <TabPane tab="Umum" key="1">
            <CCard className="mb-4">
                <CCardHeader style={{paddingLeft:"20px"}}>
                    <h5><b>Prerequisite Perusahaan Kabayan</b></h5>
                </CCardHeader>
                <CCardBody style={{paddingLeft:"20px"}}>
                <CRow>
                    <CCol sm={6}>
                        <CRow><CCol sm={12}><b>Alamat Pelaksanaan Proyek</b></CCol></CRow>
                        <CRow><CCol sm={12}>4274 Flinderation Road Chicago, IL 60605</CCol></CRow>
                        <CRow><CCol sm={12} style={{paddingTop:"10px"}}><b>Domisili</b></CCol></CRow>
                        <CRow><CCol sm={12}>Chicago</CCol></CRow>
                        <CRow><CCol sm={12} style={{paddingTop:"10px"}}><b>Sistem Kerja</b></CCol></CRow>
                        <CRow><CCol sm={12}>WFH</CCol></CRow>
                        <CRow><CCol sm={12} style={{paddingTop:"10px"}}><b>Jumlah Kuota Mahasiswa D3</b></CCol></CRow>
                        <CRow><CCol sm={12}>3</CCol></CRow>
                        <CRow><CCol sm={12} style={{paddingTop:"10px"}}><b>Jumlah Kuota Mahasiswa D4</b></CCol></CRow>
                        <CRow><CCol sm={12}>2</CCol></CRow>
                        <CRow><CCol sm={12} style={{paddingTop:"10px"}}><b>Fasilitas</b></CCol></CRow>
                        <CRow><CCol sm={12}>1. Makan siang gratis pada hari senin dan rabu</CCol></CRow>
                        <CRow><CCol sm={12}>2. Disediakan tempat tinggal</CCol></CRow>
                        <CRow><CCol sm={12} style={{paddingTop:"10px"}}><b>Keterangan</b></CCol></CRow>
                        <CRow><CCol sm={12}>Terdapat assessment atau testing yang dilakukan terlebih dahulu untuk proses pengalokasian pekerjaan</CCol></CRow>
                    </CCol>
                    <CCol sm={6}>
                        <CRow><CCol sm={12} style={{paddingTop:"10px"}}><b>Nama Pembimbing Industri</b></CCol></CRow>
                        <CRow><CCol sm={12}>Richard Dillard</CCol></CRow>
                        <CRow><CCol sm={12} style={{paddingTop:"10px"}}><b>Email Pembimbing Industri</b></CCol></CRow>
                        <CRow><CCol sm={12}>RichardJDillard@jourrapide.com</CCol></CRow>
                        <CRow><CCol sm={12} style={{paddingTop:"10px"}}><b>Jabatan Pembimbing Industri</b></CCol></CRow>
                        <CRow><CCol sm={12}>Project Manager</CCol></CRow>
                    </CCol>
                </CRow>
                
                </CCardBody>
            </CCard>
        </TabPane>
        <TabPane tab="Kompetensi" key="2">
            <CCard className="mb-4">
                <CCardHeader style={{paddingLeft:"20px"}}>
                    <h5><b>Prerequisite Perusahaan Kabayan</b></h5>
                </CCardHeader>
                <CCardBody style={{paddingLeft:"40px"}}>
                <Row>
                    <Col span={24}>
                        <Form
                            form={form}
                            name="basic"
                            wrapperCol={{ span: 24 }}
                            // onFinish={onFinish}
                            // onFinishFailed={onFinishFailed}
                            autoComplete="off"
                            >
                            <b>Minat Pekerjaan</b>
                            <Form.Item
                                name="minat"
                                rules={[{ required: true, message: 'Please input your company xx!' }]}
                            >
                                <Input disabled defaultValue="Software Engineering Management"/>
                            </Form.Item>

                            <b>Hardskill dan Softskill yang ingin dikembangkan</b>
                            <Form.Item
                                name="skill"
                                rules={[{ required: true, message: 'Please input your company xx!' }]}
                            >
                                <Input disabled defaultValue="Meningkatkan kemampuan untuk memecahkan masalah"/>
                            </Form.Item>

                            <b>Bahasa Pemrograman</b>
                            <Row>
                                <Col span={12} style={{paddingRight: "20px"}}>
                                    <Form.Item
                                        name="bahasaPemrograman"
                                        rules={[{ required: true, message: 'Please input your company xx!' }]}
                                    >
                                        <Input disabled defaultValue="PHP"/>
                                    </Form.Item>
                                </Col>
                                <Col span={3} style={{paddingRight: "20px"}}>
                                    Pengetahuan
                                </Col>
                                <Col span={9}>
                                    <Form.Item
                                        name="pengetahuan"
                                        rules={[{ required: true, message: 'Please input your phone company xx!' }]}
                                    >
                                        <Input disabled defaultValue="Sangat Baik"/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <b>Database</b>
                            <Row>
                                <Col span={12} style={{paddingRight: "20px"}}>
                                    <Form.Item
                                        name="database"
                                        rules={[{ required: true, message: 'Please input your company xx!' }]}
                                    >
                                        <Input disabled defaultValue="MySQL"/>
                                    </Form.Item>
                                </Col>
                                <Col span={3} style={{paddingRight: "20px"}}>
                                    Pengetahuan
                                </Col>
                                <Col span={9}>
                                    <Form.Item
                                        name="pengetahuan"
                                        rules={[{ required: true, message: 'Please input your phone company xx!' }]}
                                    >
                                        <Input disabled defaultValue="Sangat Baik"/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <b>Framework</b>
                            <Row>
                                <Col span={12} style={{paddingRight: "20px"}}>
                                    <Form.Item
                                        name="framework"
                                        rules={[{ required: true, message: 'Please input your company xx!' }]}
                                    >
                                        <Input disabled defaultValue="Codeigniter"/>
                                    </Form.Item>
                                </Col>
                                <Col span={3} style={{paddingRight: "20px"}}>
                                    Pengetahuan
                                </Col>
                                <Col span={9}>
                                    <Form.Item
                                        name="pengetahuan"
                                        rules={[{ required: true, message: 'Please input your phone company xx!' }]}
                                    >
                                        <Input disabled defaultValue="Baik"/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <b>Tools</b>
                            <Row>
                                <Col span={12} style={{paddingRight: "20px"}}>
                                    <Form.Item
                                        name="tools"
                                        rules={[{ required: true, message: 'Please input your company xx!' }]}
                                    >
                                        <Input disabled defaultValue="figma"/>
                                    </Form.Item>
                                </Col>
                                <Col span={3} style={{paddingRight: "20px"}}>
                                    Pengetahuan
                                </Col>
                                <Col span={9}>
                                    <Form.Item
                                        name="pengetahuan"
                                        rules={[{ required: true, message: 'Please input your phone company xx!' }]}
                                    >
                                        <Input disabled defaultValue="Baik"/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <b>Modelling</b>
                            <Row>
                                <Col span={12} style={{paddingRight: "20px"}}>
                                    <Form.Item
                                        name="modelling"
                                        rules={[{ required: true, message: 'Please input your company xx!' }]}
                                    >
                                        <Input disabled defaultValue="Mockup"/>
                                    </Form.Item>
                                </Col>
                                <Col span={3} style={{paddingRight: "20px"}}>
                                    Pengetahuan
                                </Col>
                                <Col span={9}>
                                    <Form.Item
                                        name="pengetahuan"
                                        rules={[{ required: true, message: 'Please input your phone company xx!' }]}
                                    >
                                        <Input disabled defaultValue="Kurang"/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <b>Bahasa Komunikasi</b>
                            <Row>
                                <Col span={12} style={{paddingRight: "20px"}}>
                                    <Form.Item
                                        name="bahasaKomunikasi"
                                        rules={[{ required: true, message: 'Please input your company xx!' }]}
                                    >
                                        <Input disabled defaultValue="Bahasa Indonesia"/>
                                    </Form.Item>
                                </Col>
                                <Col span={3} style={{paddingRight: "20px"}}>
                                    Pengetahuan
                                </Col>
                                <Col span={9}>
                                    <Form.Item
                                        name="pengetahuan"
                                        rules={[{ required: true, message: 'Please input your phone company xx!' }]}
                                    >
                                        <Input disabled defaultValue="Baik"/>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
                </CCardBody>
            </CCard>
        </TabPane>
    </Tabs>
    </>
  )
}

export default DetailPrerequisite
