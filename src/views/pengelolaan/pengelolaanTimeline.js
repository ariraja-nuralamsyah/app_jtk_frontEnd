import React, {useState} from 'react';
import 'antd/dist/antd.css';
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
} from '@coreui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faPencil,
  faTrashCan,
 } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment';
import { Tabs, Table, Button, Row, Col, Modal, notification, Form, Input, DatePicker, Select } from 'antd';

import dataTimeline from './../dashboard/data'

const { Option } = Select;
const { TabPane } = Tabs;

const { RangePicker } = DatePicker;

const PengelolaanTimeline = () => {
    const [isModalcreateVisible, setIsModalCreateVisible] = useState(false)
    const [isModaleditTimelineVisible, setIsModalEditTimelineVisible] = useState(false)
    const [isModaleditFormulirVisible, setIsModalEditFormulirVisible] = useState(false)
    const [choose, setChoose] = useState([])
    const [name, setName] = useState("");
    const [keterangan, setKeterangan] = useState("");
    const [date, setDate] = useState([]);
    const [form] = Form.useForm();

    function onChangeDate(date, dateString) {
        setDate(date)
    }
    function onChangeDateUpdate(date, dateString) {
        setChoose(pre => {
            return {...pre, start:date[0]._d, end:date[1]._d}
        })
    }

    function handleChange(value) {
        setChoose(pre => {
            return {...pre, timeline:value}
        })
    }
  const columnsTimeline = [{
    title: 'No',
    dataIndex: 'no',
    width: '5%',
    align: "center",
    render: (value,item,index) => {
        return index + 1
    }
  }, 
  {
    title: 'Nama Kegiatan',
    dataIndex: 'monarch',
    width: '25%',
  },
  {
    title: 'Keterangan',
    dataIndex: 'house',
    width: '35%',
  },
  {
    title: 'Waktu Kegiatan',
    dataIndex: 'waktu',
    width: '25%',
    align: "center",
    render: (text, record) => {
        if(record.start.toLocaleDateString("en-GB", {month : 'long'}) === record.end.toLocaleDateString("en-GB", {month : 'long'})){
            return `${record.start.toLocaleDateString("en-GB", {day : 'numeric'})} - ${record.end.toLocaleDateString("en-GB", {day : 'numeric', month : 'long', year: 'numeric'})}`
        }else{
            return `${record.start.toLocaleDateString("en-GB", {day : 'numeric', month: 'long'})} - ${record.end.toLocaleDateString("en-GB", {day : 'numeric', month : 'long', year: 'numeric'})}`
        }
    }
  },
  {
    title: 'Aksi',
    dataIndex: 'action',
    align: "center",
    render: (text, record) => 
      <>
        <Row>
          <Col span={12} style={{textAlign:"center"}}>
            <Button 
              id="button-pencil" 
              htmlType="submit" 
              shape="circle" 
              style={{backgroundColor:"#FCEE21", borderColor: "#FCEE21"}}
              onClick={() => { showModalEditTimeline(record)}} 
              >
              <FontAwesomeIcon icon={faPencil} style={{color: "black"}}/>
            </Button>
          </Col>
          <Col span={12} style={{textAlign:"center"}}>
            <Button 
              id="button-trash" 
              htmlType="submit" 
              shape="circle" 
              style={{backgroundColor:"#CC0033", borderColor: "#CC0033"}} 
              onClick={() => { showModalDelete(record)}}
              >
              <FontAwesomeIcon icon={faTrashCan} style={{color: "black"}}/>
            </Button>
          </Col>
        </Row>
      </> 
  }];

  const dataFormulir = [
    {
        prodi: "All",
        nama: "Pengajuan perusahaan",
        timeline: "Pencarian Perusahaan"
    },{
        prodi: "All",
        nama: "Pengisian CV",
        timeline: "Pengumpulan CV"
    },{
        prodi: "All",
        nama: "Pengisian prerequisite perusahaan",
        timeline: "Pengiriman surat penjagaan"
    },{
        prodi: "All",
        nama: "Pemilihan prioritas perusahaan",
        timeline: "Pemetaan mahasiswa"
    },{
        prodi: "All",
        nama: "Finalisasi pemetaan",
        timeline: "Sosialisasi 2"
    },{
        prodi: "D3",
        nama: "Pengisian evaluasi peserta KP",
        timeline: "Formulir evaluasi & feedback KP"
    },{
        prodi: "D3",
        nama: "Pengisian feedback peserta KP",
        timeline: "Formulir evaluasi & feedback KP"
    },{
        prodi: "D4",
        nama: "Pengisian evaluasi peserta PKL 1",
        timeline: "Formulir evaluasi & feedback KP"
    },{
        prodi: "D4",
        nama: "Pengisian evaluasi peserta PKL 2",
        timeline: "Formulir evaluasi & feedback KP"
    },{
        prodi: "D4",
        nama: "Pengisian evaluasi peserta PKL 3",
        timeline: "Formulir evaluasi & feedback KP"
    },{
        prodi: "D4",
        nama: "Pengisian feedback peserta PKL",
        timeline: "Formulir evaluasi & feedback KP"
    }];
    

  const columnsFormulir = [{
    title: 'No',
    dataIndex: 'no',
    width: '5%',
    align: "center",
    render: (value,item,index) => {
        return index + 1
    }
  }, 
  {
    title: 'Nama Formulir',
    dataIndex: 'nama',
    width: '55%',
  },
  {
    title: 'Waktu Pengumpulan',
    dataIndex: 'waktu',
    width: '25%',
    align: "center",
    render: (text, record) => {
        let data = dataTimeline.filter(item => item.monarch === record.timeline);
        if(data[0].start.toLocaleDateString("en-GB", {month : 'long'}) === data[0].end.toLocaleDateString("en-GB", {month : 'long'})){
            return `${data[0].start.toLocaleDateString("en-GB", {day : 'numeric'})} - ${data[0].end.toLocaleDateString("en-GB", {day : 'numeric', month : 'long', year: 'numeric'})}`
        }else{
            return `${data[0].start.toLocaleDateString("en-GB", {day : 'numeric', month: 'long'})} - ${data[0].end.toLocaleDateString("en-GB", {day : 'numeric', month : 'long', year: 'numeric'})}`
        }
    }
  },
  {
    title: 'Aksi',
    dataIndex: 'action',
    align: "center",
    render: (text, record) => 
      <>
        <Row>
          <Col span={24} style={{textAlign:"center"}}>
            <Button 
              id="button-pencil" 
              htmlType="submit" 
              shape="circle" 
              style={{backgroundColor:"#FCEE21", borderColor: "#FCEE21"}} 
              onClick={() => { showModalEditFormulir(record)}}
              >
              <FontAwesomeIcon icon={faPencil} style={{color: "black"}}/>
            </Button>
          </Col>
        </Row>
      </> 
  }];

  const showModalCreate = () => {
    setIsModalCreateVisible(true);
  };

  const showModalEditTimeline = (record) => {
    setIsModalEditTimelineVisible(true);
    setChoose(record)
  };

  const showModalEditFormulir = (record) => {
    setIsModalEditFormulirVisible(true);
    setChoose(record)
  };

  const showModalDelete = (record) => {
    Modal.confirm({
      title: "Konfirmasi hapus Timeline",
      okText: "Ya",
      onOk: () => {
        if(dataFormulir.find(item => item.timeline === record.monarch)){
          notification.error({
            message: 'Timeline tersebut sedang digunakan!',
            onClick: () => {
              console.log('Notification Clicked!');
            }
          });
        }else{
          handleOkDelete(record.id_account)
        }
      }
    })
  };

  const handleOkCreate = () => {
        console.log(name)
        console.log(keterangan)
        console.log(date[0]._d)
        console.log(date[1]._d)
    };

    const handleOkEditTimeline = () => {
        console.log(name)
        console.log(keterangan)
        console.log(choose.start)
        console.log(choose.end)
    };

    const handleOkEditFormulir = async () => {
    
    };

    const handleOkDelete = async (id) => {
    
    };

    const handleCancelCreate = () => {
        setIsModalCreateVisible(false);
    };

    const handleCancelEditTimeline = () => {
    setIsModalEditTimelineVisible(false);
    };

    const handleCancelEditFormulir = () => {
    setIsModalEditFormulirVisible(false);
    }

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
  
  return (
    <>
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={12}>
            <Tabs type="card">
              <TabPane tab="Timeline" key="1">
                <CRow>
                    <CCol style={{textAlign: "right", paddingBottom:"15px"}}>
                        <Button 
                            type="primary" 
                            htmlType="submit" 
                            className="px-4" 
                            id="generate" 
                            style={{backgroundColor:"#339900", borderColor: "#339900"}}
                            onClick={() => { showModalCreate()}}
                            >
                            Create
                        </Button>
                    </CCol>
                </CRow>
                <Table columns={columnsTimeline} dataSource={dataTimeline.filter(item => item.prodi === "D3" || item.prodi === "All").sort((a, b) => a.start > b.start ? 1 : -1)} pagination={false} rowKey="id_account" bordered />
              </TabPane>
              <TabPane tab="Waktu Pengumpulan Formulir" key="2">
                <Table columns={columnsFormulir} dataSource={dataFormulir.filter(item => item.prodi === "D3" || item.prodi === "All")} pagination={false} rowKey="id_account" bordered />
              </TabPane>
            </Tabs>
            </CCol>
          </CRow>
          
        </CCardBody>
      </CCard>

      <Modal title="Tambah Kegiatan" 
        visible={isModalcreateVisible} 
        onOk={handleOkCreate} 
        onCancel={handleCancelCreate}
        width={600}
        zIndex={9999999}
        footer={[
            <Button key="back" onClick={handleCancelCreate}>
              Batal
            </Button>,
            <Button key="submit" type="primary" onClick={handleOkCreate}>
              Simpan
            </Button>]}>
        <Form
            form={form}
            name="basic"
            wrapperCol={{ span: 24 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            >
            <b>Nama Kegiatan</b>
            <Form.Item
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
            >
                <Input 
                    onChange={e => setName(e.target.value)}
                />
            </Form.Item>

            <b>Tanggal Awal dan Akhir</b>
            <RangePicker  onChange={onChangeDate} style={{width: "100%"}}/>

            <div style={{paddingTop:"24px"}}>
              <b>Keterangan</b>
              <Form.Item
                  name="keterangan"
                  rules={[{ required: true, message: 'Please input your description!' }]}
              >
                  <Input 
                      onChange={e => setKeterangan(e.target.value)}
                  />
              </Form.Item>
            </div>
            </Form>
      </Modal>

      <Modal title="Update Kegiatan" 
        visible={isModaleditTimelineVisible} 
        onOk={handleOkEditTimeline} 
        onCancel={handleCancelEditTimeline}
        width={600}
        zIndex={9999999}
        footer={[
            <Button key="back" onClick={handleCancelEditTimeline}>
              Batal
            </Button>,
            <Button key="submit" type="primary" onClick={handleOkEditTimeline}>
              Simpan
            </Button>]}>
        <Form
        name="basic"
        wrapperCol={{ span: 24 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        fields={[
          {
              name:["name"],
              value: choose.monarch
          },
          {
            name:["keterangan"],
            value: choose.house
        }
        ]}
        >
        <b>Nama Kegiatan</b>
        <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
        >
            <Input 
            onChange={e => {
              setChoose(pre => {
                return {...pre, monarch:e.target.value}
              })
            }} value={choose.monarch}
            />
        </Form.Item>

        <b>Tanggal Awal dan Akhir</b>
        <RangePicker 
            onChange={onChangeDateUpdate} 
            style={{width: "100%"}}
            value={choose ? ([moment(choose.start,"DD/MM/YYYY"),moment(choose.end,"DD/MM/YYYY")]) : ""}/>
        
        <div style={{paddingTop:"24px"}}>
          <b>Keterangan</b>
          <Form.Item
              name="keterangan"
              rules={[{ required: true, message: 'Please input your description!' }]}
          >
              <Input 
              onChange={e => {
                setChoose(pre => {
                  return {...pre, house:e.target.value}
                })
              }} value={choose.house}
              />
          </Form.Item>
        </div>
        
        </Form>
      </Modal>

      <Modal title="Update Waktu Pengumpulan Formulir" 
        visible={isModaleditFormulirVisible} 
        onOk={handleOkEditFormulir} 
        onCancel={handleCancelEditFormulir}
        width={600}
        zIndex={9999999}
        footer={[
            <Button key="back" onClick={handleCancelEditFormulir}>
              Batal
            </Button>,
            <Button key="submit" type="primary" onClick={handleOkEditFormulir}>
              Simpan
            </Button>]}>
          <Form
            form={form}
            name="basic"
            wrapperCol={{ span: 24 }}
            autoComplete="off"
            fields={[
                {
                    name:["name"],
                    value: choose.nama
                }
              ]}
            >
            <b>Nama Formulir</b>
            <Form.Item
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
            >
                <Input
                disabled 
                value={choose.nama}
                />
            </Form.Item>

            <b>Timeline</b><br></br>
            <Select value={choose.timeline} style={{ width: "100%" }} onChange={handleChange}>
                {dataTimeline.map((item,i) =>  <Option key={i} value={item.monarch}>{item.monarch}</Option>)}
            </Select>
          </Form>
      </Modal>
    </>
  )
}

export default PengelolaanTimeline
