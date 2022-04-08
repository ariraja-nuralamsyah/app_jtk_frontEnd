import React, {useState} from 'react';
import 'antd/dist/antd.css';
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
} from '@coreui/react';
import { Steps, Form, Input, Row, Col, Button, Select } from 'antd';
import { MinusCircleOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const { Step } = Steps;

const { Option } = Select;

const UpdatePrerequisite = () => {
    const [form1] = Form.useForm();
    const [form2] = Form.useForm();
    const [current, setCurrent] = useState(0);
    
    const next = () => {
        form1.validateFields()
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const onFinish = (values) => {
        console.log('Success:', values);
    };
  
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const steps = [
        {
          title: 'Identitas',
          content: 
            <CRow>
                <CCol sm={12}>
                    <Form
                        form={form1}
                        name="basic"
                        wrapperCol={{ span: 24 }}
                        onFinish={next}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        >
                        <b>Nama Pembimbing Industri<span style={{color:"red"}}> *</span></b>
                        <Form.Item
                            name="namePembimbing"
                            rules={[{ required: true, message: 'Nama pembimbing tidak boleh kosong!' }]}
                        >
                            <Input/>
                        </Form.Item>
                        <Row>
                            <Col span={12} style={{paddingRight:"20px"}}>
                                <b>Email Pembimbing Industri<span style={{color:"red"}}> *</span></b>
                                <Form.Item
                                    name="emailPembimbing"
                                    rules={[{ required: true, message: 'Email pembimbing tidak boleh kosong!' },
                                    { required: true, message: 'Format email salah!', pattern: /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/ }]}
                                >
                                    <Input placeholder='ex: foo@gmail.com'/>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                            <b>Jabatan Pembimbing Industri<span style={{color:"red"}}> *</span></b>
                                <Form.Item
                                    name="jabatanPembimbing"
                                    rules={[{ required: true, message: 'Jabatan pembimbing tidak boleh kosong!' }]}
                                >
                                    <Input/>
                                </Form.Item>
                            </Col>
                        </Row>
                        
                        <b>Domisili<span style={{color:"red"}}> *</span></b>
                        <Form.Item
                            name="domisili"
                            rules={[{ required: true, message: 'Domisili tidak boleh kosong!' }]}
                        >
                            <Select style={{ width: "100%" }} />
                        </Form.Item>

                        <b>Alamat<span style={{color:"red"}}> *</span></b>
                        <Form.Item
                            name="address"
                            rules={[{ required: true, message: 'Alamat tidak boleh kosong!' }]}
                        >
                            <Input/>
                        </Form.Item>
                        <Row>
                            <Col span={8}>
                                <b>Sistem Kerja<span style={{color:"red"}}> *</span></b>
                                <Form.Item
                                    name="sistemKerja"
                                    rules={[{ required: true, message: 'Sistem kerja tidak boleh kosong!' }]}
                                    style={{paddingRight:"20px"}}
                                >
                                    <Select style={{ width: "100%" }}>
                                        <Option value="WFH">WFH</Option>
                                        <Option value="WFO">WFO</Option>
                                        <Option value="WFH & WFO">WFH & WFO</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <b>Jumlah Kuota Mahasiswa D3<span style={{color:"red"}}> *</span></b>
                                <Form.Item
                                    name="jmlD3"
                                    rules={[{ required: true, message: 'Jumlah kuota tidak boleh kosong!' },
                                    { required: true, message: 'Format jumlah kuota hanya angka!', pattern: /^\d+$/ }]}
                                    style={{paddingRight:"20px"}}
                                >
                                    <Input/>
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <b>Jumlah Kuota Mahasiswa D4<span style={{color:"red"}}> *</span></b>
                                <Form.Item
                                    name="jmlD4"
                                    rules={[{ required: true, message: 'Jumlah kuota tidak boleh kosong!' },
                                    { required: true, message: 'Format jumlah kuota hanya angka!', pattern: /^\d+$/ }]}
                                >
                                    <Input/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <b>Fasilitas</b>
                        <Form.List name="fasilitas">
                        {(fields, { add, remove }) => (
                            <>
                            {fields.map(({ key, name, ...restField }) => (
                                <Row key={key}>
                                    <Col span={23}>
                                    <Form.Item
                                        {...restField}
                                        name="fasilitas"
                                    >
                                        <Input/>
                                    </Form.Item>
                                    </Col>
                                    <Col span={1} align="center">
                                        <MinusCircleOutlined onClick={() => remove(name)} />
                                    </Col>
                                </Row>
                            ))}
                            <Form.Item>
                                <Button type="dashed" onClick={() => add()} block>
                                    + Fasilitas
                                </Button>
                            </Form.Item>
                            </>
                        )}
                         </Form.List>

                        <b>Keterangan</b>
                        <Form.Item
                            name="description"
                        >
                            <TextArea placeholder='ex: Terdapat test dan wawancara'/>
                        </Form.Item>
                    </Form>
                </CCol>
            </CRow>
        },
        {
            title: 'Kompetensi',
            content: 
            <CRow>
                <CCol sm={12}>
                    <Form
                        form={form2}
                        name="dynamic_form_nest_item"
                        wrapperCol={{ span: 24 }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        >
                        <b>Cakupan Pekerjaan</b>
                        <Form.List name="cakupanPekerjaan">
                        {(fields, { add, remove }) => (
                            <>
                            {fields.map(({ key, name, ...restField }) => (
                                <Row key={key}>
                                    <Col span={23}>
                                    <Form.Item
                                        {...restField}
                                        name="minat"
                                    >
                                        <Select style={{ width: "100%" }} />
                                    </Form.Item>
                                    </Col>
                                    <Col span={1} align="center">
                                        <MinusCircleOutlined onClick={() => remove(name)} />
                                    </Col>
                                </Row>
                            ))}
                            <Form.Item>
                                <Button type="dashed" onClick={() => add()} block>
                                    + Cakupan Pekerjaan
                                </Button>
                            </Form.Item>
                            </>
                        )}
                         </Form.List>

                        <b>Bahasa Pemrograman</b>
                        <Form.List name="bahasaPemrograman">
                        {(fields, { add, remove }) => (
                            <>
                            {fields.map(({ key, name, ...restField }) => (
                                <Row key={key} style={{paddingTop: "10px"}}>
                                    <Col span={14}>
                                        <Form.Item
                                            {...restField}
                                            name="bahasa1"
                                            style={{paddingRight:"20px"}}
                                        >
                                            <Select style={{ width: "100%" }}/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={3} style={{paddingTop: "5px"}}>
                                        Pengetahuan
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item
                                            {...restField}
                                            name="pengetahuan1"
                                        >
                                            <Select style={{ width: "100%" }}/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={1} align="center">
                                        <MinusCircleOutlined onClick={() => remove(name)} />
                                    </Col>
                                </Row>
                            ))}
                            <Form.Item>
                                <Button type="dashed" onClick={() => add()} block>
                                    + Bahasa Pemrograman
                                </Button>
                            </Form.Item>
                            </>
                        )}
                        </Form.List>

                        <b>Database</b>
                        <Form.List name="database">
                        {(fields, { add, remove }) => (
                            <>
                            {fields.map(({ key, name, ...restField }) => (
                                <Row key={key} style={{paddingTop: "10px"}}>
                                    <Col span={14}>
                                        <Form.Item
                                            {...restField}
                                            name="database1"
                                            style={{paddingRight:"20px"}}
                                        >
                                            <Select style={{ width: "100%" }}/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={3} style={{paddingTop: "5px"}}>
                                        Pengetahuan
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item
                                            {...restField}
                                            name="pengetahuan1"
                                        >
                                            <Select style={{ width: "100%" }}/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={1} align="center">
                                        <MinusCircleOutlined onClick={() => remove(name)} />
                                    </Col>
                                </Row>
                            ))}
                            <Form.Item>
                                <Button type="dashed" onClick={() => add()} block>
                                    + Database
                                </Button>
                            </Form.Item>
                            </>
                        )}
                        </Form.List>
    
                        <b>Framework</b>
                        <Form.List name="framework">
                        {(fields, { add, remove }) => (
                            <>
                            {fields.map(({ key, name, ...restField }) => (
                                <Row key={key} style={{paddingTop: "10px"}}>
                                    <Col span={14}>
                                        <Form.Item
                                            {...restField}
                                            name="framework1"
                                            style={{paddingRight:"20px"}}
                                        >
                                            <Select style={{ width: "100%" }}/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={3} style={{paddingTop: "5px"}}>
                                        Pengetahuan
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item
                                            {...restField}
                                            name="pengetahuan1"
                                        >
                                            <Select style={{ width: "100%" }}/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={1} align="center">
                                        <MinusCircleOutlined onClick={() => remove(name)} />
                                    </Col>
                                </Row>
                            ))}
                            <Form.Item>
                                <Button type="dashed" onClick={() => add()} block>
                                    + Framework
                                </Button>
                            </Form.Item>
                            </>
                        )}
                        </Form.List>
                        
                        <b>Tools</b>
                        <Form.List name="tools">
                        {(fields, { add, remove }) => (
                            <>
                            {fields.map(({ key, name, ...restField }) => (
                                <Row key={key} style={{paddingTop: "10px"}}>
                                    <Col span={14}>
                                        <Form.Item
                                            {...restField}
                                            name="tools1"
                                            style={{paddingRight:"20px"}}
                                        >
                                            <Select style={{ width: "100%" }}/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={3} style={{paddingTop: "5px"}}>
                                        Pengetahuan
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item
                                            {...restField}
                                            name="pengetahuan1"
                                        >
                                            <Select style={{ width: "100%" }}/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={1} align="center">
                                        <MinusCircleOutlined onClick={() => remove(name)} />
                                    </Col>
                                </Row>
                            ))}
                            <Form.Item>
                                <Button type="dashed" onClick={() => add()} block>
                                    + Tools
                                </Button>
                            </Form.Item>
                            </>
                        )}
                        </Form.List>
                        
                        <b>Modelling</b>
                        <Form.List name="modelling">
                        {(fields, { add, remove }) => (
                            <>
                            {fields.map(({ key, name, ...restField }) => (
                                <Row key={key} style={{paddingTop: "10px"}}>
                                    <Col span={14}>
                                        <Form.Item
                                            {...restField}
                                            name="bahasa1"
                                            style={{paddingRight:"20px"}}
                                        >
                                            <Select style={{ width: "100%" }}/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={3} style={{paddingTop: "5px"}}>
                                        Pengetahuan
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item
                                            {...restField}
                                            name="pengetahuan1"
                                        >
                                            <Select style={{ width: "100%" }}/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={1} align="center">
                                        <MinusCircleOutlined onClick={() => remove(name)} />
                                    </Col>
                                </Row>
                            ))}
                            <Form.Item>
                                <Button type="dashed" onClick={() => add()} block>
                                    + Modelling
                                </Button>
                            </Form.Item>
                            </>
                        )}
                        </Form.List>
                        
                        <b>Bahasa Komunikasi</b>
                        <Form.List name="bahasaKomunikasi">
                        {(fields, { add, remove }) => (
                            <>
                            {fields.map(({ key, name, ...restField }) => (
                                <Row key={key} style={{paddingTop: "10px"}}>
                                    <Col span={14}>
                                        <Form.Item
                                            {...restField}
                                            name="bahasa1"
                                            style={{paddingRight:"20px"}}
                                        >
                                            <Select style={{ width: "100%" }}/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={3} style={{paddingTop: "5px"}}>
                                        Pengetahuan
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item
                                            {...restField}
                                            name="pengetahuan1"
                                        >
                                            <Select style={{ width: "100%" }}/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={1} align="center">
                                        <MinusCircleOutlined onClick={() => remove(name)} />
                                    </Col>
                                </Row>
                            ))}
                            <Form.Item>
                                <Button type="dashed" onClick={() => add()} block>
                                    + Bahasa Komunikasi
                                </Button>
                            </Form.Item>
                            </>
                        )}
                        </Form.List>
                    </Form>
                </CCol>
            </CRow>
        },
    ];

  return (
    <>
        <Steps current={current} type="navigation" className="site-navigation-steps">
            {steps.map(item => (
                <Step title={item.title} key={item.title}/> 
            ))}
        </Steps>
        <div className="steps-content" style={{paddingTop: "20px"}}>
            <CCard className="mb-4">
                <CCardBody>
                    {steps[current].content}
                    <div className="steps-action" align="right">
                        {current > 0 && (
                        <Button type="primary" style={{ margin: '0 8px' }} onClick={() => prev()}>
                            Previous
                        </Button>
                        )}
                        {current < steps.length - 1 && (
                        <Button type="primary" onClick={form1.submit}>
                            Next
                        </Button>
                        )}
                        {current === steps.length - 1 && (
                        <Button type="primary" onClick={form2.submit}>
                            Done
                        </Button>
                        )}
                    </div>
                </CCardBody>
            </CCard>
        </div>
    </>
  )
}

export default UpdatePrerequisite
