import React from 'react';
import 'antd/dist/antd.css';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react';
import { Col, Row, Form, Input, Button, DatePicker, Select } from 'antd';

const CreatePerusahaan = () => {
    const [form] = Form.useForm();
  return (
    <>
      <CCard>
        <CCardHeader style={{paddingLeft:"20px"}}>
            <h5><b>Tambah Perusahaan</b></h5>
        </CCardHeader>
        <CCardBody style={{paddingLeft:"20px"}}>
          <CRow>
            <CCol sm={12}>
                <Form
                    form={form}
                    name="basic"
                    wrapperCol={{ span: 24 }}
                    // onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    >
                    <b>PIC (Panitia)</b>
                    <Form.Item
                        name="PIC"
                    >
                        <Select style={{ width: "100%" }}/>
                    </Form.Item>

                    <b>Nama Perusahaan<span style={{color:"red"}}> *</span></b>
                    <Form.Item
                        name="namaPerusahaan"
                        rules={[{ required: true, message: 'Nama perusahaan tidak boleh kosong!' }]}
                    >
                        <Input/>
                    </Form.Item>

                    <b>Website Official Perusahaan</b>
                    <Form.Item
                        name="websitePerusahaan"
                    >
                        <Input/>
                    </Form.Item>

                    <Row>
                        <Col span={12} style={{paddingRight: "20px"}}>
                            <b>Email Perusahaan</b>
                            <Form.Item
                                name="emailPerusahaan"
                                rules={[{ message: 'Format email salah!', pattern: /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/ }]}
                            >
                                <Input placeholder='ex: foo@gmail.com'/>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <b>Nomor Telepon Perusahaan</b>
                            <Form.Item
                                name="nohpPerusahaan"
                                rules={[{ message: 'Format nomor telepon hanya angka!', pattern: /^\d+$/ }]}
                            >
                                <Input  
                                pattern="[+-]?\d+(?:[.,]\d+)?"/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <b>Alamat</b>
                    <Form.Item
                        name="address"
                    >
                        <Input/>
                    </Form.Item>
                    <Row>
                        <Col span={12}>
                            <b>Tahun Berdirinya Perusahaan</b>
                            <Form.Item
                                name="tahunPerusahaan"
                                style={{paddingRight:"20px"}}
                            >
                                <DatePicker picker="year" style={{width: "100%"}}/>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <b>Jumlah Karyawan</b>
                            <Form.Item
                                name="jmlKaryawan"
                                rules={[{ message: 'Format jumlah karyawan hanya angka!', pattern: /^\d+$/ }]}
                            >
                                <Input/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <b>Nama Contact Person<span style={{color:"red"}}> *</span></b>
                    <Form.Item
                        name="CPPerusahaan"
                        rules={[{ required: true, message: 'Nama contact person tidak boleh kosong!' }]}
                    >
                        <Input/>
                    </Form.Item>
                    <Row>
                        <Col span={8}>
                            <b>Email Contact Person<span style={{color:"red"}}> *</span></b>
                            <Form.Item
                                name="emailCP"
                                rules={[{ required: true, message: 'Email contact person tidak boleh kosong!' },
                                { required: true, message: 'Format email salah!', pattern: /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/ }]}
                                style={{paddingRight:"20px"}}
                            >
                                <Input placeholder='ex: foo@gmail.com'/>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <b>Nomor Contact Person<span style={{color:"red"}}> *</span></b>
                            <Form.Item
                                name="nomorCP"
                                rules={[{ required: true, message: 'Nomor telepon contact person tidak boleh kosong!' },
                                { required: true, message: 'Format nomor contact person hanya angka!', pattern: /^\d+$/ }]}
                                style={{paddingRight:"20px"}}
                            >
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <b>Jabatan Contact Person<span style={{color:"red"}}> *</span></b>
                            <Form.Item
                                name="jabatanCP"
                                rules={[{ required: true, message: 'Jabatan contact person tidak boleh kosong!' }]}
                            >
                                <Input/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <CCol sm={12} style={{textAlign:"right"}}>
                            <Button 
                                id="button-submit" 
                                size="sm" 
                                shape="round" 
                                style={{color: "white", background:"#3399FF", marginBottom: 16}}
                                onClick={form.submit}
                            > 
                                Submit 
                            </Button>
                        </CCol>
                    </Row>
                </Form>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default CreatePerusahaan
