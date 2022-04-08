import React, {useState} from 'react';
import 'antd/dist/antd.css';
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
} from '@coreui/react';
import { Steps, Form, Input, Radio, Row, Col, Button, DatePicker, Select } from 'antd';
import { MinusCircleOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const { Step } = Steps;

const { RangePicker } = DatePicker;

const UpdateCV = () => {
    const [form1] = Form.useForm();
    const [form2] = Form.useForm();
    const [form3] = Form.useForm();
    const [form4] = Form.useForm();
    const [current, setCurrent] = useState(0);
    
    const next = () => {
        if(current === 0){
            form1.validateFields()
        }else if(current === 1){
            form2.validateFields()
        }else if(current === 2){
            form3.validateFields()
        }
        setCurrent(current + 1);
    };

    const nextCheck = () => {
        if(current === 0){
            form1.submit()
        }else if(current === 1){
            next()
        }else if(current === 2){
            next()
        }
        console.log(current)
    }

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
                        <b>Nama</b>
                        <Form.Item
                            name="name"
                        >
                            <Input/>
                        </Form.Item>

                        <b>Nama Panggilan</b>
                        <Form.Item
                            name="nickname"
                        >
                            <Input/>
                        </Form.Item>

                        <b>Domisili<span style={{color:"red"}}> *</span></b>
                        <Form.Item
                            name="domisili"
                            rules={[{ required: true, message: 'Please input your domisili!' }]}
                        >
                            {/* <Select style={{ width: "100%" }} /> */}
                            <Input/>
                        </Form.Item>

                        <b>Alamat</b>
                        <Form.Item
                            name="address"
                        >
                            <Input/>
                        </Form.Item>

                        <b>Nomor HP</b>
                        <Form.Item
                            name="noHP"
                            rules={[{message: 'Format nomor telepon hanya angka!', pattern: /^\d+$/ }]}
                        >
                            <Input/>
                        </Form.Item>

                        <b>Email</b>
                        <Form.Item
                            name="email"
                            rules={[{ message: 'Format email salah!', pattern: /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/ }]}
                        >
                            <Input/>
                        </Form.Item>

                        <b>Jenis Kelamin</b>
                        <Form.Item
                            value="L"
                        >
                            <Radio.Group disabled>
                                <Radio value="L">Laki laki</Radio>
                                <Radio value="P">Perempuan</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Row>
                            <Col span={8}>
                                <b>Tempat Lahir</b>
                                <Form.Item
                                    name="tempatLahir"
                                    style={{paddingRight:"20px"}}
                                >
                                    <Input/>
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <b>Tanggal Lahir</b>
                                <Form.Item
                                    name="tanggalLahir"
                                    style={{paddingRight:"20px"}}
                                >
                                    <DatePicker style={{width: "100%"}}/>
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={8}>
                                <b>Agama</b>
                                <Form.Item
                                    name="religion"
                                    style={{paddingRight:"20px"}}
                                >
                                    <Input/>
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <b>Status</b>
                                <Form.Item
                                    name="status"
                                    style={{paddingRight:"20px"}}
                                >
                                    <Input/>
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <b>Kewarganegaraan</b>
                                <Form.Item
                                    name="kewarganegaraan"
                                >
                                    <Input/>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </CCol>
            </CRow>
        },
        {
          title: 'Pencapaian',
          content: 
          <CRow>
          <CCol sm={12}>
              <Form
                  form={form2}
                  name="dynamic_form_nest_item"
                  wrapperCol={{ span: 24 }}
                  onFinish={next}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                  >
                  <b>Jenjang Pendidikan</b>
                  <Form.List name="jenjangPendidikan">
                    {(fields, { add, remove }) => (
                        <>
                        {fields.map(({ key, name, ...restField }) => (
                            <Row key={key} style={{paddingTop: "10px"}}>
                                <Col span={2} style={{paddingTop: "5px"}}>
                                    Tahun<span style={{color:"red"}}> *</span>
                                </Col>
                                <Col span={8}>
                                    <Form.Item
                                        {...restField}
                                        name="tahun1"
                                        rules={[{ required: true, message: 'Tahun tidak boleh kosong!' }]}
                                        style={{paddingRight:"20px"}}
                                    >
                                        <RangePicker picker="year" style={{width: "100%"}}/>
                                    </Form.Item>
                                </Col>
                                <Col span={2} style={{paddingTop: "5px"}}>
                                    Tempat<span style={{color:"red"}}> *</span>
                                </Col>
                                <Col span={11}>
                                    <Form.Item
                                        {...restField}
                                        name="tempat1"
                                        rules={[{ required: true, message: 'Tempat tidak boleh kosong!' }]}
                                        style={{paddingRight:"20px"}}
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col span={1}>
                                    <MinusCircleOutlined onClick={() => remove(name)} />
                                </Col>
                            </Row>
                        ))}
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block>
                                + Jenjang Pendidikan
                            </Button>
                        </Form.Item>
                        </>
                    )}
                  </Form.List>

                  <b>Pengalaman Berorganisasi</b>
                  <Form.List name="pengalamanBerorganisasi">
                    {(fields, { add, remove }) => (
                        <>
                        {fields.map(({ key, name, ...restField }) => (
                            <Row key={key} style={{paddingTop: "10px"}}>
                            <Col span={2} style={{paddingTop: "5px"}}>
                                Tahun<span style={{color:"red"}}> *</span>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    {...restField}
                                    name="tahun1"
                                    rules={[{ required: true, message: 'Tahun tidak boleh kosong!' }]}
                                    style={{paddingRight:"20px"}}
                                >
                                    <RangePicker picker="year" style={{width: "100%"}}/>
                                </Form.Item>
                            </Col>
                            <Col span={2} style={{paddingTop: "5px"}}>
                                Informasi<span style={{color:"red"}}> *</span>
                            </Col>
                            <Col span={11}>
                                <Form.Item
                                    {...restField}
                                    name="informasi1"
                                    rules={[{ required: true, message: 'Informasi tidak boleh kosong!' }]}
                                    style={{paddingRight:"20px"}}
                                >
                                    <Input/>
                                </Form.Item>
                            </Col>
                                <Col span={1}>
                                    <MinusCircleOutlined onClick={() => remove(name)} />
                                </Col>
                            </Row>
                        ))}
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block>
                                + Pengalaman Berorganisasi
                            </Button>
                        </Form.Item>
                        </>
                    )}
                  </Form.List>

                  <b>Seminar/Tutorial/Course</b>
                  <Form.List name="seminarTutorialCourse">
                    {(fields, { add, remove }) => (
                        <>
                        {fields.map(({ key, name, ...restField }) => (
                            <Row key={key} style={{paddingTop: "10px"}}>
                            <Col span={2} style={{paddingTop: "5px"}}>
                                Tahun<span style={{color:"red"}}> *</span>
                            </Col>
                            <Col span={3}>
                                <Form.Item
                                    {...restField}
                                    name="tahun1"
                                    rules={[{ required: true, message: 'Tahun tidak boleh kosong!' }]}
                                    style={{paddingRight:"20px"}}
                                >
                                    <DatePicker picker="year" style={{width: "100%"}}/>
                                </Form.Item>
                            </Col>
                            <Col span={3} style={{paddingTop: "5px"}}>
                                Nama Acara<span style={{color:"red"}}> *</span>
                            </Col>
                            <Col span={9}>
                                <Form.Item
                                    {...restField}
                                    name="acara1"
                                    rules={[{ required: true, message: 'Nama acara tidak boleh kosong!' }]}
                                    style={{paddingRight:"20px"}}
                                >
                                    <Input/>
                                </Form.Item>
                            </Col>
                            <Col span={2} style={{paddingTop: "5px"}}>
                                Peran<span style={{color:"red"}}> *</span>
                            </Col>
                            <Col span={4}>
                                <Form.Item
                                    {...restField}
                                    name="peran1"
                                    rules={[{ required: true, message: 'Peran tidak boleh kosong!' }]}
                                    style={{paddingRight:"20px"}}
                                >
                                    <Input/>
                                </Form.Item>
                            </Col>
                                <Col span={1}>
                                    <MinusCircleOutlined onClick={() => remove(name)} />
                                </Col>
                            </Row>
                        ))}
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block>
                                + Seminar/Tutorial/Course
                            </Button>
                        </Form.Item>
                        </>
                    )}
                  </Form.List>

                  <b>Kejuaraan</b>
                  <Form.List name="kejuaraan">
                    {(fields, { add, remove }) => (
                        <>
                        {fields.map(({ key, name, ...restField }) => (
                            <Row key={key} style={{paddingTop: "10px"}}>
                            <Col span={2} style={{paddingTop: "5px"}}>
                                Tahun<span style={{color:"red"}}> *</span>
                            </Col>
                            <Col span={3}>
                                <Form.Item
                                    {...restField}
                                    name="tahun1"
                                    rules={[{ required: true, message: 'Tahun tidak boleh kosong!' }]}
                                    style={{paddingRight:"20px"}}
                                >
                                    <DatePicker picker="year" style={{width: "100%"}}/>
                                </Form.Item>
                            </Col>
                            <Col span={3} style={{paddingTop: "5px"}}>
                                Nama Kejuaraan<span style={{color:"red"}}> *</span>
                            </Col>
                            <Col span={9}>
                                <Form.Item
                                    {...restField}
                                    name="kejuaraan1"
                                    rules={[{ required: true, message: 'Nama kejuaraan tidak boleh kosong!' }]}
                                    style={{paddingRight:"20px"}}
                                >
                                    <Input/>
                                </Form.Item>
                            </Col>
                            <Col span={2} style={{paddingTop: "5px"}}>
                                Prestasi<span style={{color:"red"}}> *</span>
                            </Col>
                            <Col span={4}>
                                <Form.Item
                                    {...restField}
                                    name="prestasi1"
                                    rules={[{ required: true, message: 'Prestasi tidak boleh kosong!' }]}
                                    style={{paddingRight:"20px"}}
                                >
                                    <Input/>
                                </Form.Item>
                            </Col>
                                <Col span={1}>
                                    <MinusCircleOutlined onClick={() => remove(name)} />
                                </Col>
                            </Row>
                        ))}
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block>
                                + Kejuaraan
                            </Button>
                        </Form.Item>
                        </>
                    )}
                  </Form.List>
              </Form>
          </CCol>
      </CRow>
        },
        {
          title: 'Pengalaman',
          content: 
          <CRow>
          <CCol sm={12}>
              <Form
                  form={form3}
                  name="dynamic_form_nest_item"
                  wrapperCol={{ span: 24 }}
                  onFinish={next}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                  > 
                  <b>Pengalaman Pengerjaan Tugas dalam Mata Kuliah</b>
                  <Form.List name="pengalamanPengerjaanTugas">
                    {(fields, { add, remove }) => (
                        <>
                        {fields.map(({ key, name, ...restField }) => (
                            <>
                            <Row key={key} style={{ paddingTop: "10px" }}>
                                <Col span={4}>
                                    Nama Mata Kuliah<span style={{color:"red"}}> *</span>
                                </Col>
                                <Col span={20}>
                                    <Form.Item
                                        {...restField}
                                        name="name"
                                        rules={[{ required: true, message: 'Nama mata kuliah tidak boleh kosong!' }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row style={{ paddingTop: "10px" }}>
                                    <Col span={4}>
                                        Deskripsi<span style={{color:"red"}}> *</span>
                                    </Col>
                                    <Col span={20}>
                                        <Form.Item
                                            {...restField}
                                            name="desc"
                                            rules={[{ required: true, message: 'Deskripsi tidak boleh kosong!' }]}
                                        >
                                            <TextArea rows={4} />
                                        </Form.Item>
                                    </Col>
                            </Row>
                            <Row style={{ paddingTop: "10px" }}>
                                    <Col span={4}>
                                        Teknologi dan Alat<span style={{color:"red"}}> *</span>
                                    </Col>
                                    <Col span={20}>
                                        <Form.Item
                                            {...restField}
                                            name="technology"
                                            rules={[{ required: true, message: 'Teknologi dan alat tidak boleh kosong!' }]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                            </Row>
                            <Row style={{ paddingTop: "10px" }}>
                                    <Col span={4}>
                                        Peran dalam Tim<span style={{color:"red"}}> *</span>
                                    </Col>
                                    <Col span={20}>
                                        <Form.Item
                                            {...restField}
                                            name="peran"
                                            rules={[{ required: true, message: 'Peran dalam tim tidak boleh kosong!' }]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                            </Row>
                            <Row style={{ paddingTop: "10px" }}>
                                    <Col span={4}>
                                        Pencapaian<span style={{color:"red"}}> *</span>
                                    </Col>
                                    <Col span={20}>
                                        <Form.Item
                                            {...restField}
                                            name="pencapaian"
                                            rules={[{ required: true, message: 'Pencapaian tidak boleh kosong!' }]}
                                        >
                                            <TextArea rows={4} />
                                        </Form.Item>
                                    </Col>
                            </Row>
                            <Row style={{ paddingTop: "10px" }}>
                                    <Col span={4}>
                                        Pencapaian<span style={{color:"red"}}> *</span>
                                    </Col>
                                    <Col span={20}>
                                        <Form.Item
                                            {...restField}
                                            name="pencapaian2"
                                            rules={[{ required: true, message: 'Pencapaian tidak boleh kosong!' }]}
                                        >
                                            <TextArea rows={4} />
                                        </Form.Item>
                                    </Col>
                            </Row>
                            <Row style={{ paddingTop: "10px" }}>
                                    <Col span={4}>
                                        Waktu Pengerjaan<span style={{color:"red"}}> *</span>
                                    </Col>
                                    <Col span={20}>
                                        <Form.Item
                                            {...restField}
                                            name="waktu"
                                            rules={[{ required: true, message: 'Waktu pengerjaan tidak boleh kosong!' }]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                            </Row>
                            <Form.Item>
                                <Button type="dashed" onClick={() => remove(name)} block>
                                    - Hapus
                                </Button>
                            </Form.Item>
                        </>
                        ))}
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block>
                                + Pengalaman Pengerjaan Tugas dalam Mata Kuliah
                            </Button>
                        </Form.Item>
                        </>
                    )}
                  </Form.List>
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
                        form={form4}
                        name="dynamic_form_nest_item"
                        wrapperCol={{ span: 24 }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        >
                        <b>Minat Pekerjaan</b>
                        <Form.List name="minatPekerjaan">
                        {(fields, { add, remove }) => (
                            <>
                            {fields.map(({ key, name, ...restField }) => (
                                <Row key={key}>
                                    <Col span={23}>
                                    <Form.Item
                                        {...restField}
                                        name="minat"
                                        rules={[{ required: true, message: 'Minat tidak boleh kosong!' }]}
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
                                    + Minat Pekerjaan
                                </Button>
                            </Form.Item>
                            </>
                        )}
                         </Form.List>
                        

                        <b>Hardskill dan Softskill yang ingin dikembangkan</b>
                        <Form.List name="skill">
                        {(fields, { add, remove }) => (
                            <>
                            {fields.map(({ key, name, ...restField }) => (
                                <Row key={key}>
                                    <Col span={23}>
                                    <Form.Item
                                        {...restField}
                                        name="skill"
                                        rules={[{ required: true, message: 'Skill tidak boleh kosong!' }]}
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
                                    + Hardskill dan Softskill yang ingin dikembangkan
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
                                            rules={[{ required: true, message: 'Bahasa pemrograman tidak boleh kosong!' }]}
                                            style={{paddingRight:"20px"}}
                                        >
                                            <Select style={{ width: "100%" }}/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={3} style={{paddingTop: "5px"}}>
                                        Pengetahuan<span style={{color:"red"}}> *</span>
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item
                                            {...restField}
                                            name="pengetahuan1"
                                            rules={[{ required: true, message: 'Pengetahuan tidak boleh kosong!' }]}
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
                                            rules={[{ required: true, message: 'Database tidak boleh kosong!' }]}
                                            style={{paddingRight:"20px"}}
                                        >
                                            <Select style={{ width: "100%" }}/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={3} style={{paddingTop: "5px"}}>
                                        Pengetahuan<span style={{color:"red"}}> *</span>
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item
                                            {...restField}
                                            name="pengetahuan1"
                                            rules={[{ required: true, message: 'Pengetahuan tidak boleh kosong!' }]}
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
                                            rules={[{ required: true, message: 'Framework tidak boleh kosong!' }]}
                                            style={{paddingRight:"20px"}}
                                        >
                                            <Select style={{ width: "100%" }}/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={3} style={{paddingTop: "5px"}}>
                                        Pengetahuan<span style={{color:"red"}}> *</span>
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item
                                            {...restField}
                                            name="pengetahuan1"
                                            rules={[{ required: true, message: 'Pengetahuan tidak boleh kosong!' }]}
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
                                            rules={[{ required: true, message: 'Tools tidak boleh kosong!' }]}
                                            style={{paddingRight:"20px"}}
                                        >
                                            <Select style={{ width: "100%" }}/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={3} style={{paddingTop: "5px"}}>
                                        Pengetahuan<span style={{color:"red"}}> *</span>
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item
                                            {...restField}
                                            name="pengetahuan1"
                                            rules={[{ required: true, message: 'Pengetahuan tidak boleh kosong!' }]}
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
                                            rules={[{ required: true, message: 'Modelling tidak boleh kosong!' }]}
                                            style={{paddingRight:"20px"}}
                                        >
                                            <Select style={{ width: "100%" }}/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={3} style={{paddingTop: "5px"}}>
                                        Pengetahuan<span style={{color:"red"}}> *</span>
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item
                                            {...restField}
                                            name="pengetahuan1"
                                            rules={[{ required: true, message: 'Pengetahuan tidak boleh kosong!' }]}
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
                                            rules={[{ required: true, message: 'Bahasa komunikasi tidak boleh kosong!' }]}
                                            style={{paddingRight:"20px"}}
                                        >
                                            <Select style={{ width: "100%" }}/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={3} style={{paddingTop: "5px"}}>
                                        Pengetahuan<span style={{color:"red"}}> *</span>
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item
                                            {...restField}
                                            name="pengetahuan1"
                                            rules={[{ required: true, message: 'Pengetahuan tidak boleh kosong!' }]}
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
                        <Button type="primary" onClick={() => nextCheck()}>
                            Next
                        </Button>
                        )}
                        {current === steps.length - 1 && (
                        <Button type="primary" onClick={form4.submit}>
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

export default UpdateCV
