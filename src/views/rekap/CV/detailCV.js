import React from 'react';
import 'antd/dist/antd.css';
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
} from '@coreui/react';
import { Tabs, Form, Input, Radio, Row, Col } from 'antd';

const { TextArea } = Input;

const { TabPane } = Tabs;

const DetailCV = () => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Success:', values);
    };
  
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

  return (
    <>
        <Tabs type="card">
            <TabPane tab="Identitas" key="1">
                <CCard className="mb-4">
                    <CCardBody>
                    <CRow>
                        <CCol sm={12}>
                            <Form
                                form={form}
                                name="basic"
                                wrapperCol={{ span: 24 }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                                >
                                <b>Nama</b>
                                <Form.Item
                                    name="name"
                                    rules={[{ required: true, message: 'Please input your name!' }]}
                                >
                                    <Input disabled defaultValue="Richard Diland"/>
                                </Form.Item>

                                <b>Nama Panggilan</b>
                                <Form.Item
                                    name="nickname"
                                    rules={[{ required: true, message: 'Please input your nickname!' }]}
                                >
                                    <Input disabled defaultValue="Richard"/>
                                </Form.Item>

                                <b>Domisili</b>
                                <Form.Item
                                    name="domisili"
                                    rules={[{ required: true, message: 'Please input your domisili!' }]}
                                >
                                    <Input disabled defaultValue="Chicago"/>
                                </Form.Item>

                                <b>Alamat</b>
                                <Form.Item
                                    name="address"
                                    rules={[{ required: true, message: 'Please input your address!' }]}
                                >
                                    <Input disabled defaultValue="4274 Flinderation Road Chicago, IL 60605"/>
                                </Form.Item>

                                <b>Nomor HP</b>
                                <Form.Item
                                    name="noHP"
                                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                                >
                                    <Input disabled defaultValue="087083948088"/>
                                </Form.Item>

                                <b>Email</b>
                                <Form.Item
                                    name="email"
                                    rules={[{ required: true, message: 'Please input your email!' }]}
                                >
                                    <Input disabled defaultValue="RichardJDillard@jourrapide.com"/>
                                </Form.Item>

                                <b>Jenis Kelamin</b>
                                <Form.Item
                                    rules={[{ required: true, message: 'Please pick an gender!' }]}
                                    value={1}
                                >
                                    <Radio.Group disabled>
                                        <Radio value={1}>Laki laki</Radio>
                                        <Radio value={0}>Perempuan</Radio>
                                    </Radio.Group>
                                </Form.Item>
                                <Row>
                                    <Col span={8}>
                                        <b>Tempat Lahir</b>
                                        <Form.Item
                                            name="tempatLahir"
                                            rules={[{ required: true, message: 'Please input your xx!' }]}
                                            style={{paddingRight:"20px"}}
                                        >
                                            <Input disabled defaultValue="Chicago"/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <b>Tanggal Lahir</b>
                                        <Form.Item
                                            name="tanggalLahir"
                                            rules={[{ required: true, message: 'Please input your xx!' }]}
                                            style={{paddingRight:"20px"}}
                                        >
                                            <Input disabled defaultValue="1999 - 10 - 10"/>
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
                                            rules={[{ required: true, message: 'Please input your religion!' }]}
                                            style={{paddingRight:"20px"}}
                                        >
                                            <Input disabled defaultValue="Islam"/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <b>Status</b>
                                        <Form.Item
                                            name="status"
                                            rules={[{ required: true, message: 'Please input your status!' }]}
                                            style={{paddingRight:"20px"}}
                                        >
                                            <Input disabled defaultValue="Belum kawin"/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <b>Kewarganegaraan</b>
                                        <Form.Item
                                            name="kewarganegaraan"
                                            rules={[{ required: true, message: 'Please input your xx!' }]}
                                        >
                                            <Input disabled defaultValue="Indonesia"/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Form>
                        </CCol>
                    </CRow>
                    </CCardBody>
                </CCard>
            </TabPane>
            <TabPane tab="Pencapaian" key="2">
                <CCard className="mb-4">
                    <CCardBody>
                    <CRow>
                        <CCol sm={12}>
                            <Form
                                form={form}
                                name="basic"
                                wrapperCol={{ span: 24 }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                                >
                                <b>Jenjang Pendidikan</b>
                                <Row style={{paddingTop: "10px"}}>
                                    <Col span={2} style={{paddingTop: "5px"}}>
                                        Tahun
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item
                                            name="tahun1"
                                            rules={[{ required: true, message: 'Please input your xx!' }]}
                                            style={{paddingRight:"20px"}}
                                        >
                                            <Input disabled defaultValue="2016 - 2019"/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={2} style={{paddingTop: "5px"}}>
                                        Tempat
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                            name="tempat1"
                                            rules={[{ required: true, message: 'Please input your xx!' }]}
                                            style={{paddingRight:"20px"}}
                                        >
                                            <Input disabled defaultValue="SMAN 1 Bandung"/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={2} style={{paddingTop: "5px"}}>
                                        Tahun
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item
                                            name="tahun2"
                                            rules={[{ required: true, message: 'Please input your xx!' }]}
                                            style={{paddingRight:"20px"}}
                                        >
                                            <Input disabled defaultValue="2019 - 2022"/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={2} style={{paddingTop: "5px"}}>
                                        Tempat
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                            name="tempat2"
                                            rules={[{ required: true, message: 'Please input your xx!' }]}
                                            style={{paddingRight:"20px"}}
                                        >
                                            <Input disabled defaultValue="Politeknik Negeri Bandung"/>
                                        </Form.Item>
                                    </Col>
                                </Row>

                                <b>Pengalaman Berorganisasi</b>
                                <Row style={{paddingTop: "10px"}}>
                                    <Col span={2} style={{paddingTop: "5px"}}>
                                        Tahun
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item
                                            name="tahun1"
                                            rules={[{ required: true, message: 'Please input your xx!' }]}
                                            style={{paddingRight:"20px"}}
                                        >
                                            <Input disabled defaultValue="2016 - 2019"/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={2} style={{paddingTop: "5px"}}>
                                        Informasi
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                            name="informasi1"
                                            rules={[{ required: true, message: 'Please input your xx!' }]}
                                            style={{paddingRight:"20px"}}
                                        >
                                            <Input disabled defaultValue="Ketua OSIS"/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={2} style={{paddingTop: "5px"}}>
                                        Tahun
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item
                                            name="tahun2"
                                            rules={[{ required: true, message: 'Please input your xx!' }]}
                                            style={{paddingRight:"20px"}}
                                        >
                                            <Input disabled defaultValue="2019 - 2022"/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={2} style={{paddingTop: "5px"}}>
                                        Informasi
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                            name="informasi2"
                                            rules={[{ required: true, message: 'Please input your xx!' }]}
                                            style={{paddingRight:"20px"}}
                                        >
                                            <Input disabled defaultValue="Ketua BEM"/>
                                        </Form.Item>
                                    </Col>
                                </Row>

                                <b>Seminar/Tutorial/Course</b>
                                <Row style={{paddingTop: "10px"}}>
                                    <Col span={2} style={{paddingTop: "5px"}}>
                                        Tahun
                                    </Col>
                                    <Col span={3}>
                                        <Form.Item
                                            name="tahun1"
                                            rules={[{ required: true, message: 'Please input your xx!' }]}
                                            style={{paddingRight:"20px"}}
                                        >
                                            <Input disabled defaultValue="2019"/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={3} style={{paddingTop: "5px"}}>
                                        Nama Acara
                                    </Col>
                                    <Col span={9}>
                                        <Form.Item
                                            name="acara1"
                                            rules={[{ required: true, message: 'Please input your xx!' }]}
                                            style={{paddingRight:"20px"}}
                                        >
                                            <Input disabled defaultValue="Pelatihan backend"/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={2} style={{paddingTop: "5px"}}>
                                        Peran
                                    </Col>
                                    <Col span={5}>
                                        <Form.Item
                                            name="peran1"
                                            rules={[{ required: true, message: 'Please input your xx!' }]}
                                            style={{paddingRight:"20px"}}
                                        >
                                            <Input disabled defaultValue="Peserta"/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row style={{paddingTop: "10px"}}>
                                    <Col span={2} style={{paddingTop: "5px"}}>
                                        Tahun
                                    </Col>
                                    <Col span={3}>
                                        <Form.Item
                                            name="tahun2"
                                            rules={[{ required: true, message: 'Please input your xx!' }]}
                                            style={{paddingRight:"20px"}}
                                        >
                                            <Input disabled defaultValue="2020"/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={3} style={{paddingTop: "5px"}}>
                                        Nama Acara
                                    </Col>
                                    <Col span={9}>
                                        <Form.Item
                                            name="acara2"
                                            rules={[{ required: true, message: 'Please input your xx!' }]}
                                            style={{paddingRight:"20px"}}
                                        >
                                            <Input disabled defaultValue="Pelatihan frontend"/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={2} style={{paddingTop: "5px"}}>
                                        Peran
                                    </Col>
                                    <Col span={5}>
                                        <Form.Item
                                            name="peran2"
                                            rules={[{ required: true, message: 'Please input your xx!' }]}
                                            style={{paddingRight:"20px"}}
                                        >
                                            <Input disabled defaultValue="Peserta"/>
                                        </Form.Item>
                                    </Col>
                                </Row>

                                <b>Kejuaraan</b>
                                <Row style={{paddingTop: "10px"}}>
                                    <Col span={2} style={{paddingTop: "5px"}}>
                                        Tahun
                                    </Col>
                                    <Col span={3}>
                                        <Form.Item
                                            name="tahun1"
                                            rules={[{ required: true, message: 'Please input your xx!' }]}
                                            style={{paddingRight:"20px"}}
                                        >
                                            <Input disabled defaultValue="2021"/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={3} style={{paddingTop: "5px"}}>
                                        Nama Kejuaraan
                                    </Col>
                                    <Col span={9}>
                                        <Form.Item
                                            name="kejuaraan1"
                                            rules={[{ required: true, message: 'Please input your xx!' }]}
                                            style={{paddingRight:"20px"}}
                                        >
                                            <Input disabled defaultValue="Shopee League"/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={2} style={{paddingTop: "5px"}}>
                                        Prestasi
                                    </Col>
                                    <Col span={5}>
                                        <Form.Item
                                            name="prestasi1"
                                            rules={[{ required: true, message: 'Please input your xx!' }]}
                                            style={{paddingRight:"20px"}}
                                        >
                                            <Input disabled defaultValue="Juara 3"/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row style={{paddingTop: "10px"}}>
                                    <Col span={2} style={{paddingTop: "5px"}}>
                                        Tahun
                                    </Col>
                                    <Col span={3}>
                                        <Form.Item
                                            name="tahun2"
                                            rules={[{ required: true, message: 'Please input your xx!' }]}
                                            style={{paddingRight:"20px"}}
                                        >
                                            <Input disabled defaultValue="2022"/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={3} style={{paddingTop: "5px"}}>
                                        Nama Kejuaraan
                                    </Col>
                                    <Col span={9}>
                                        <Form.Item
                                            name="kejuaraan2"
                                            rules={[{ required: true, message: 'Please input your xx!' }]}
                                            style={{paddingRight:"20px"}}
                                        >
                                            <Input disabled defaultValue="Competitive Programming"/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={2} style={{paddingTop: "5px"}}>
                                        Prestasi
                                    </Col>
                                    <Col span={5}>
                                        <Form.Item
                                            name="prestasi2"
                                            rules={[{ required: true, message: 'Please input your xx!' }]}
                                            style={{paddingRight:"20px"}}
                                        >
                                            <Input disabled defaultValue="Juara 2"/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Form>
                        </CCol>
                    </CRow>
                    </CCardBody>
                </CCard>
            </TabPane>
            <TabPane tab="Pengalaman" key="3">
                <CCard className="mb-4">
                    <CCardBody>
                    <CRow>
                        <CCol sm={12}>
                            <Form
                                form={form}
                                name="basic"
                                wrapperCol={{ span: 24 }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                                > 
                                <b>Pengalaman Pengerjaan Tugas dalam Mata Kuliah</b>
                                <Row style={{paddingTop:"10px"}}>
                                    <Col span={4}>
                                        Nama Mata Kuliah
                                    </Col>
                                    <Col span={20}>
                                    <Form.Item
                                        name="name"
                                        rules={[{ required: true, message: 'Please input your name!' }]}
                                    >
                                        <Input disabled defaultValue="Proyek Perangkat Lunak 1"/>
                                    </Form.Item>
                                    </Col>
                                </Row>
                                <Row style={{paddingTop:"10px"}}>
                                    <Col span={4}>
                                        Deskripsi
                                    </Col>
                                    <Col span={20}>
                                    <Form.Item
                                        name="desc"
                                        rules={[{ required: true, message: 'Please input your description!' }]}
                                    >
                                        <TextArea rows={4} disabled defaultValue="Tujuan dari tugas mata kuliah Proyek Perangkat Lunak 1 ini adalah untuk mempelajari perbedaan dari data dengan informasi. Kami diberi tugas untuk mengumpulkan data mentah lowongan kerja yang ada di koran dan sosial media kemudian dianalisis untuk menghasilkan suatu informasi. Informasi tersebut dapat berupa deskripsi teks maupun grafik untuk visualisasinya."/>
                                    </Form.Item>
                                    </Col>
                                </Row>
                                <Row style={{paddingTop:"10px"}}>
                                    <Col span={4}>
                                        Teknologi dan Alat
                                    </Col>
                                    <Col span={20}>
                                    <Form.Item
                                        name="technology"
                                        rules={[{ required: true, message: 'Please input your xx!' }]}
                                    >
                                        <Input disabled defaultValue="VBA (Visual Basic for Applications) di Microsoft Excel"/>
                                    </Form.Item>
                                    </Col>
                                </Row>
                                <Row style={{paddingTop:"10px"}}>
                                    <Col span={4}>
                                        Peran dalam Tim
                                    </Col>
                                    <Col span={20}>
                                    <Form.Item
                                        name="peran"
                                        rules={[{ required: true, message: 'Please input your xx!' }]}
                                    >
                                        <Input disabled defaultValue="Ketua Tim (Data Analyst)"/>
                                    </Form.Item>
                                    </Col>
                                </Row>
                                <Row style={{paddingTop:"10px"}}>
                                    <Col span={4}>
                                        Pencapaian
                                    </Col>
                                    <Col span={20}>
                                    <Form.Item
                                        name="pencapaian"
                                        rules={[{ required: true, message: 'Please input your xx!' }]}
                                    >
                                        <TextArea rows={4} disabled defaultValue={`1. Mengumpulkan 1000 data lowongan kerja dari koran dan sosial media Berdasarkan 1000 data lowongan kerja yang telah dikumpulkan, 
2. kami dapat membuat informasi dari pertanyaan-pertanyaan berikut seperti kota manakah yang mempunyai peluang kerja paling tinggi untuk orang yang sedang mencari pekerjaan, dll.`}/>
                                    </Form.Item>
                                    </Col>
                                </Row>
                                <Row style={{paddingTop:"10px"}}>
                                    <Col span={4}>
                                        Pencapaian
                                    </Col>
                                    <Col span={20}>
                                    <Form.Item
                                        name="pencapaian2"
                                        rules={[{ required: true, message: 'Please input your xx!' }]}
                                    >
                                        <TextArea rows={4} disabled defaultValue="1. Kerja sama tim merupakan aspek yang sangat penting dalamn pengerjaan sebuah proyek.
                                        2. Bertambahnya pengetahuan tentang bagaimana cara implementasi standard deviation untuk mencari suatu informasi."/>
                                    </Form.Item>
                                    </Col>
                                </Row>
                                <Row style={{paddingTop:"10px"}}>
                                    <Col span={4}>
                                        Waktu Pengerjaan
                                    </Col>
                                    <Col span={20}>
                                    <Form.Item
                                        name="waktu"
                                        rules={[{ required: true, message: 'Please input your xx!' }]}
                                    >
                                        <Input disabled defaultValue="5 bulan"/>
                                    </Form.Item>
                                    </Col>
                                </Row>

                            </Form>
                        </CCol>
                    </CRow>
                    </CCardBody>
                </CCard>
            </TabPane>
            <TabPane tab="Kompetensi" key="4">
                <CCard className="mb-4">
                    <CCardBody>
                    <CRow>
                        <CCol sm={12}>
                            <Form
                                form={form}
                                name="basic"
                                wrapperCol={{ span: 24 }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                                >
                                <b>Minat Pekerjaan</b>
                                <Form.Item
                                    name="minat"
                                    rules={[{ required: true, message: 'Please input your name!' }]}
                                >
                                    <Input disabled defaultValue="Software Engineering Management"/>
                                </Form.Item>

                                <b>Hardskill dan Softskill yang ingin dikembangkan</b>
                                <Form.Item
                                    name="skill"
                                    rules={[{ required: true, message: 'Please input your nickname!' }]}
                                >
                                    <Input disabled defaultValue="Meningkatkan kemampuan untuk memecahkan masalah"/>
                                </Form.Item>

                                <b>Bahasa Pemrograman</b>
                                <Row style={{paddingTop: "10px"}}>
                                    <Col span={14}>
                                        <Form.Item
                                            name="bahasa1"
                                            rules={[{ required: true, message: 'Please input your xx!' }]}
                                            style={{paddingRight:"20px"}}
                                        >
                                            <Input disabled defaultValue="PHP"/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={3} style={{paddingTop: "5px"}}>
                                        Pengetahuan
                                    </Col>
                                    <Col span={7}>
                                        <Form.Item
                                            name="pengetahuan1"
                                            rules={[{ required: true, message: 'Please input your xx!' }]}
                                        >
                                            <Input disabled defaultValue="Sangat Baik"/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <b>Database</b>
                                <Row style={{paddingTop: "10px"}}>
                                    <Col span={14}>
                                        <Form.Item
                                            name="database1"
                                            rules={[{ required: true, message: 'Please input your xx!' }]}
                                            style={{paddingRight:"20px"}}
                                        >
                                            <Input disabled defaultValue="MySQL"/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={3} style={{paddingTop: "5px"}}>
                                        Pengetahuan
                                    </Col>
                                    <Col span={7}>
                                        <Form.Item
                                            name="pengetahuan1"
                                            rules={[{ required: true, message: 'Please input your xx!' }]}
                                        >
                                            <Input disabled defaultValue="Sangat Baik"/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <b>Framework</b>
                                <Row style={{paddingTop: "10px"}}>
                                    <Col span={14}>
                                        <Form.Item
                                            name="framework1"
                                            rules={[{ required: true, message: 'Please input your xx!' }]}
                                            style={{paddingRight:"20px"}}
                                        >
                                            <Input disabled defaultValue="Codeigniter"/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={3} style={{paddingTop: "5px"}}>
                                        Pengetahuan
                                    </Col>
                                    <Col span={7}>
                                        <Form.Item
                                            name="pengetahuan1"
                                            rules={[{ required: true, message: 'Please input your xx!' }]}
                                        >
                                            <Input disabled defaultValue="Baik"/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <b>Tools</b>
                                <Row style={{paddingTop: "10px"}}>
                                    <Col span={14}>
                                        <Form.Item
                                            name="tools1"
                                            rules={[{ required: true, message: 'Please input your xx!' }]}
                                            style={{paddingRight:"20px"}}
                                        >
                                            <Input disabled defaultValue="Figma"/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={3} style={{paddingTop: "5px"}}>
                                        Pengetahuan
                                    </Col>
                                    <Col span={7}>
                                        <Form.Item
                                            name="pengetahuan1"
                                            rules={[{ required: true, message: 'Please input your xx!' }]}
                                        >
                                            <Input disabled defaultValue="Baik"/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <b>Modelling</b>
                                <Row style={{paddingTop: "10px"}}>
                                    <Col span={14}>
                                        <Form.Item
                                            name="bahasa1"
                                            rules={[{ required: true, message: 'Please input your xx!' }]}
                                            style={{paddingRight:"20px"}}
                                        >
                                            <Input disabled defaultValue="Mockup"/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={3} style={{paddingTop: "5px"}}>
                                        Pengetahuan
                                    </Col>
                                    <Col span={7}>
                                        <Form.Item
                                            name="pengetahuan1"
                                            rules={[{ required: true, message: 'Please input your xx!' }]}
                                        >
                                            <Input disabled defaultValue="Kurang"/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <b>Bahasa Komunikasi</b>
                                <Row style={{paddingTop: "10px"}}>
                                    <Col span={14}>
                                        <Form.Item
                                            name="bahasa1"
                                            rules={[{ required: true, message: 'Please input your xx!' }]}
                                            style={{paddingRight:"20px"}}
                                        >
                                            <Input disabled defaultValue="Bahasa Indonesia"/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={3} style={{paddingTop: "5px"}}>
                                        Pengetahuan
                                    </Col>
                                    <Col span={7}>
                                        <Form.Item
                                            name="pengetahuan1"
                                            rules={[{ required: true, message: 'Please input your xx!' }]}
                                        >
                                            <Input disabled defaultValue="Baik"/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Form>
                        </CCol>
                    </CRow>
                    </CCardBody>
                </CCard>
            </TabPane>
        </Tabs>
    </>
  )
}

export default DetailCV
