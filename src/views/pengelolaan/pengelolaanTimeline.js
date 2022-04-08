import React, {useState, useEffect} from 'react';
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

import { useHistory } from 'react-router-dom';
import axios from 'axios';

const { Option } = Select;
const { TabPane } = Tabs;

const { RangePicker } = DatePicker;

const PengelolaanTimeline = () => {
    let history = useHistory();
    const [timeline, setTimeline] = useState([])
    const [formulir, setFormulir] = useState([])
    const [isModalcreateVisible, setIsModalCreateVisible] = useState(false)
    const [isModaleditTimelineVisible, setIsModalEditTimelineVisible] = useState(false)
    const [isModaleditFormulirVisible, setIsModalEditFormulirVisible] = useState(false)
    const [choose, setChoose] = useState([])
    const [name, setName] = useState("");
    const [keterangan, setKeterangan] = useState("");
    const [date, setDate] = useState({start_date: "", end_date: ""});
    const [form] = Form.useForm();

    function onChangeDate(date, dateString) {
        setDate({start_date:date[0]._d, end_date:date[1]._d})
    }
    function onChangeDateUpdate(date, dateString) {
        setChoose(pre => {
            return {...pre, start_date:date[0]._d, end_date:date[1]._d}
        })
    }

    const getData = (data) => {
      for (var i = 0; i < data.length; i++) {
        data[i].start_date = new Date(data[i].start_date);
        data[i].end_date = new Date(data[i].end_date);
      }
      return data;
    }

    const refreshData = () => {
      axios.get(`${process.env.REACT_APP_API_GATEWAY_URL}management-content/timeline`).then(result => setTimeline(result.data.data))
      axios.get(`${process.env.REACT_APP_API_GATEWAY_URL}management-content/form-submit-time`).then(result => setFormulir(result.data.data))
    }

    function handleChange(value) {
        setChoose(pre => {
            return {...pre, id_timeline:value, description: timeline.find(item => item.id === value).description}
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
    dataIndex: 'name',
    width: '25%',
  },
  {
    title: 'Keterangan',
    dataIndex: 'description',
    width: '35%',
  },
  {
    title: 'Waktu Kegiatan',
    dataIndex: 'waktu',
    width: '25%',
    align: "center",
    render: (text, record) => {
      let start_date = new Date(record.start_date);
      let end_date = new Date(record.end_date);
        if(start_date.toLocaleDateString("en-GB", {month : 'long'}) === end_date.toLocaleDateString("en-GB", {month : 'long'})){
            return `${start_date.toLocaleDateString("en-GB", {day : 'numeric'})} - ${end_date.toLocaleDateString("en-GB", {day : 'numeric', month : 'long', year: 'numeric'})}`
        }else{
            return `${start_date.toLocaleDateString("en-GB", {day : 'numeric', month: 'long'})} - ${end_date.toLocaleDateString("en-GB", {day : 'numeric', month : 'long', year: 'numeric'})}`
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
    dataIndex: 'name',
    width: '55%',
  },
  {
    title: 'Waktu Pengumpulan',
    dataIndex: 'waktu',
    width: '25%',
    align: "center",
    render: (text, record) => {
        let start_date = new Date(record.start_date)
        let end_date = new Date(record.end_date)
        if(start_date.toLocaleDateString("en-GB", {month : 'long'}) === end_date.toLocaleDateString("en-GB", {month : 'long'})){
            return `${start_date.toLocaleDateString("en-GB", {day : 'numeric'})} - ${end_date.toLocaleDateString("en-GB", {day : 'numeric', month : 'long', year: 'numeric'})}`
        }else{
            return `${start_date.toLocaleDateString("en-GB", {day : 'numeric', month: 'long'})} - ${end_date.toLocaleDateString("en-GB", {day : 'numeric', month : 'long', year: 'numeric'})}`
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

    setChoose(pre => {
      return {...pre, description:timeline.find(item => item.id === record.id_timeline).description}
    })
  };

  const showModalDelete = (record) => {
    Modal.confirm({
      title: "Konfirmasi hapus Timeline",
      okText: "Ya",
      onOk: () => {
        if(formulir.find(item => item.id_timeline === record.id)){
          notification.error({
            message: 'Timeline tersebut sedang digunakan!',
            onClick: () => {
              console.log('Notification Clicked!');
            }
          });
        }else{
          handleOkDelete(record.id)
        }
      }
    })
  };

  const handleOkCreate = async () => {
    await axios.post(`${process.env.REACT_APP_API_GATEWAY_URL}management-content/timeline/create`, {
      name: name,
      start_date: moment(date.start_date).format("yyyy/MM/DD"),
      end_date: moment(date.end_date).format("yyyy/MM/DD"),
      description: keterangan,
      prodi_id: localStorage.getItem("id_prodi"),
    }).then((response) => {
        refreshData();
        notification.success({
          message: 'Timeline berhasil dibuat',
          onClick: () => {
            console.log('Notification Clicked!');
          }
        });
        form.resetFields();
        setDate("");
        setName("");
        setKeterangan("");
        setIsModalCreateVisible(false);
    }).catch((error) => {
      form.resetFields();
      setDate("");
      setName("");
      setKeterangan("");
      setIsModalCreateVisible(false);
      notification.error({
        message: 'Timeline gagal dibuat!',
        onClick: () => {
          console.log('Notification Clicked!');
        }
      });
    });
    };

    const handleOkEditTimeline = async () => {
      await axios.put(`${process.env.REACT_APP_API_GATEWAY_URL}management-content/timeline/update/${choose.id}`, {
        name: choose.name,
        start_date: moment(choose.start_date).format("yyyy/MM/DD"),
        end_date: moment(choose.end_date).format("yyyy/MM/DD"),
        description: choose.description,
        prodi_id: choose.prodi_id,
      }).then((response) => {
          refreshData();
          notification.success({
            message: 'Timeline berhasil diubah',
            onClick: () => {
              console.log('Notification Clicked!');
            }
          });
          form.resetFields();
          setDate("");
          setName("");
          setKeterangan("");
          setIsModalEditTimelineVisible(false);
      }).catch((error) => {
        form.resetFields();
        setDate("");
        setName("");
        setKeterangan("");
        setIsModalEditTimelineVisible(false);
        notification.error({
          message: 'Timeline gagal diubah!',
          onClick: () => {
            console.log('Notification Clicked!');
          }
        });
      });
    };

    const handleOkEditFormulir = async () => {
      await axios.put(`${process.env.REACT_APP_API_GATEWAY_URL}management-content/form-submit-time/update/${choose.id}`, {
        id_timeline: choose.id_timeline
      }).then((response) => {
          refreshData();
          notification.success({
            message: 'Formulir berhasil diubah',
            onClick: () => {
              console.log('Notification Clicked!');
            }
          });
          form.resetFields();
          setDate("");
          setName("");
          setKeterangan("");
          setChoose("");
          setIsModalEditFormulirVisible(false);
      }).catch((error) => {
        form.resetFields();
        setDate("");
        setName("");
        setKeterangan("");
        setChoose("");
        setIsModalEditFormulirVisible(false);
        notification.error({
          message: 'Formulir gagal diubah!',
          onClick: () => {
            console.log('Notification Clicked!');
          }
        });
      });
    };

    const handleOkDelete = async (id) => {
      await axios.delete(`${process.env.REACT_APP_API_GATEWAY_URL}management-content/timeline/delete/${id}`, {
      }).then((response) => {
          refreshData();
          notification.success({
            message: 'Timeline berhasil dihapus',
            onClick: () => {
              console.log('Notification Clicked!');
            }
          });
          form.resetFields();
          setDate("");
          setName("");
          setKeterangan("");
      }).catch((error) => {
        form.resetFields();
        setDate("");
        setName("");
        setKeterangan("");
        notification.error({
          message: 'Timeline gagal dihapus!',
          onClick: () => {
            console.log('Notification Clicked!');
          }
        });
      });
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

  useEffect(() => {
    const getTimeline = async () =>{
      axios.defaults.withCredentials = true;
      await axios.get(`${process.env.REACT_APP_API_GATEWAY_URL}management-content/timeline`)
      .then(function (response) {
        setTimeline(response.data.data)})
      .catch(function (error) {
        if(error.toJSON().status >= 300 && error.toJSON().status <= 399){
          history.push({
            pathname: "/login",
            state: {
              session : true,
            }
          });
        }else if(error.toJSON().status >= 400 && error.toJSON().status <= 499){
          history.push("/404");
        }else if(error.toJSON().status >= 500 && error.toJSON().status <= 599){
          history.push("/500");
        }
      });
    }
    const getFormulir = async () =>{
      axios.defaults.withCredentials = true;
      await axios.get(`${process.env.REACT_APP_API_GATEWAY_URL}management-content/form-submit-time`)
      .then(function (response) {
        setFormulir(response.data.data)})
      .catch(function (error) {
        if(error.toJSON().status >= 300 && error.toJSON().status <= 399){
          history.push({
            pathname: "/login",
            state: {
              session : true,
            }
          });
        }else if(error.toJSON().status >= 400 && error.toJSON().status <= 499){
          history.push("/404");
        }else if(error.toJSON().status >= 500 && error.toJSON().status <= 599){
          history.push("/500");
        }
      });
    }
    getTimeline();
    getFormulir();
  }, [history]);
  
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
                <Table columns={columnsTimeline} dataSource={getData(timeline).sort((a, b) => a.start_date > b.start_date ? 1 : -1)} pagination={false} rowKey="id" bordered />
              </TabPane>
              <TabPane tab="Waktu Pengumpulan Formulir" key="2">
                <Table columns={columnsFormulir} dataSource={formulir} pagination={false} rowKey="id" bordered />
              </TabPane>
            </Tabs>
            </CCol>
          </CRow>
          
        </CCardBody>
      </CCard>

      <Modal title="Tambah Kegiatan" 
        visible={isModalcreateVisible} 
        onOk={form.submit} 
        onCancel={handleCancelCreate}
        width={600}
        zIndex={9999999}
        footer={[
            <Button key="back" onClick={handleCancelCreate}>
              Batal
            </Button>,
            <Button key="submit" type="primary" htmlType="submit" onClick={form.submit}>
              Simpan
            </Button>]}>
        <Form
            form={form}
            name="basic"
            wrapperCol={{ span: 24 }}
            onFinish={handleOkCreate}
            autoComplete="off"
            >
            <b>Nama Kegiatan<span style={{color:"red"}}> *</span></b>
            <Form.Item
                name="name"
                rules={[{ required: true, message: 'Nama kegiatan tidak boleh kosong!' }]}
            >
                <Input 
                    onChange={e => setName(e.target.value)}
                />
            </Form.Item>

            <b>Tanggal Awal dan Akhir<span style={{color:"red"}}> *</span></b>
            <RangePicker  onChange={onChangeDate} style={{width: "100%"}} value={date.start_date !== "" ? ([moment(date.start_date),moment(date.end_date)]) : null}/>

            <div style={{paddingTop:"24px"}}>
              <b>Keterangan<span style={{color:"red"}}> *</span></b>
              <Form.Item
                  name="keterangan"
                  rules={[{ required: true, message: 'Keterangan tidak boleh kosong!' }]}
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
        onOk={form.submit} 
        onCancel={handleCancelEditTimeline}
        width={600}
        zIndex={9999999}
        footer={[
            <Button key="back" onClick={handleCancelEditTimeline}>
              Batal
            </Button>,
            <Button key="submit" type="primary"  onClick={form.submit}>
              Simpan
            </Button>]}>
        <Form
        form={form}
        name="basic"
        wrapperCol={{ span: 24 }}
        onFinish={handleOkEditTimeline}
        autoComplete="off"
        fields={[
          {
              name:["name"],
              value: choose.name
          },
          {
            name:["keterangan"],
            value: choose.description
        }
        ]}
        >
        <b>Nama Kegiatan<span style={{color:"red"}}> *</span></b>
        <Form.Item
            name="name"
            rules={[{ required: true, message: 'Nama kegiatan tidak boleh kosong!' }]}
        >
            <Input 
            onChange={e => {
              setChoose(pre => {
                return {...pre, name:e.target.value}
              })
            }} value={choose.name}
            />
        </Form.Item>

        <b>Tanggal Awal dan Akhir<span style={{color:"red"}}> *</span></b>
        <RangePicker 
            onChange={onChangeDateUpdate} 
            style={{width: "100%"}}
            value={choose.start_date !== "" ? ([moment(choose.start_date),moment(choose.end_date)]) : null}/>
        
        <div style={{paddingTop:"24px"}}>
          <b>Keterangan<span style={{color:"red"}}> *</span></b>
          <Form.Item
              name="keterangan"
              rules={[{ required: true, message: 'Keterangan tidak boleh kosong!' }]}
          >
              <Input 
              onChange={e => {
                setChoose(pre => {
                  return {...pre, description:e.target.value}
                })
              }} value={choose.description}
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
                    value: choose.name
                }
              ]}
            >
            <b>Nama Formulir<span style={{color:"red"}}> *</span></b>
            <Form.Item
                name="name"
                rules={[{ required: true, message: 'Nama formulir tidak boleh kosong!' }]}
            >
                <Input
                disabled 
                value={choose.name}
                />
            </Form.Item>

            <b>Timeline<span style={{color:"red"}}> *</span></b><br></br>
            <Select value={choose.description} style={{ width: "100%" }} onChange={handleChange}>
                {timeline.filter(item => item.prodi_id === parseInt(localStorage.getItem("id_prodi"))).map((item,i) =>  <Option key={i} value={item.id}>{item.description}</Option>)}
            </Select>
          </Form>
      </Modal>
    </>
  )
}

export default PengelolaanTimeline
