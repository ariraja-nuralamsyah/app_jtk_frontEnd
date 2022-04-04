import React, {useEffect, useState} from 'react';
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
  faLock,
  faTrashCan,
 } from '@fortawesome/free-solid-svg-icons'
import { Tabs, Table, Button, Row, Col, Form, Input, Modal, notification, Radio } from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const { TabPane } = Tabs;


const PengelolaanAkun = () => {
  const [accountDosen, setAccountDosen] = useState([])
  const [accountMahasiswa, setAccountMahasiswa] = useState([])
  const [accountPerusahaan, setAccountPerusahaan] = useState([])
  const [newPassword, setNewPassword] = useState([])
  const [confirmPassword, setConfirmPassword] = useState([])
  const [isModalcreateVisible, setIsModalCreateVisible] = useState(false)
  const [isModaleditVisible, setIsModalEditVisible] = useState(false)
  const [isModallockVisible, setIsModalLockVisible] = useState(false)
  const [choose, setChoose] = useState([])
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [form] = Form.useForm();
  let history = useHistory();
  axios.defaults.withCredentials = true;

  const filterDataAccount = (data) => {
    setAccountDosen(data.filter(item => item.id_role === 0 || item.id_role === 3))
    setAccountMahasiswa(data.filter(item => item.id_role === 1))
    setAccountPerusahaan(data.filter(item => item.id_role === 2))
  }

  const refreshData = () => {
    axios.get(`${process.env.REACT_APP_API_GATEWAY_URL}account`).then(result => filterDataAccount(result.data.data))
  }

  useEffect(() => {
    async function getDataAccount(){
      await axios.get(`${process.env.REACT_APP_API_GATEWAY_URL}account`)
        .then(result => filterDataAccount(result.data.data))
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
    getDataAccount()
  }, [history]);

  const showModalCreate = () => {
    setIsModalCreateVisible(true);
  };

  const showModalEdit = (record) => {
    setIsModalEditVisible(true);
    setChoose(record)
  };

  const showModalLock = (record) => {
    setIsModalLockVisible(true);
    setChoose(record)
  };

  const showModalDelete = (record) => {
    Modal.confirm({
      title: "Konfirmasi hapus akun",
      okText: "Ya",
      onOk: () => {
        if(record.username === localStorage.getItem("username")){
          notification.error({
            message: 'Akun tersebut sedang digunakan!',
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


  const handleOkCreate = async () => {
      await axios.post(`${process.env.REACT_APP_API_GATEWAY_URL}account/create`, {
          username: username,
          password: "1234",
          id_role: role,
          name: name,
        }).then((response) => {
            refreshData();
            notification.success({
              message: 'Akun berhasil dibuat',
              onClick: () => {
                console.log('Notification Clicked!');
              }
            });
            setUsername("");
            setName("");
            setRole("");
            setIsModalCreateVisible(false);
            form.resetFields();
        }).catch((error) => {
          setIsModalCreateVisible(false);
          setUsername("");
          setName("");
          setRole("");
          form.resetFields();
          notification.error({
            message: 'Username telah dipakai!',
            onClick: () => {
              console.log('Notification Clicked!');
            }
          });
        });
  };

  const handleOkEdit = async () => {
      await axios.post(`${process.env.REACT_APP_API_GATEWAY_URL}account/update`, {
          // username: username,
          id_account: choose.id_account,
          id_role: choose.id_role,
          name: choose.name,
        }).then((response) => {
            refreshData();
            notification.success({
              message: 'Akun berhasil diubah',
              onClick: () => {
                console.log('Notification Clicked!');
              }
            });
            setIsModalEditVisible(false);
            if(choose.username === localStorage.getItem("username")){
              localStorage.setItem("name", choose.name)
              localStorage.setItem("id_role", choose.id_role)
            }
        }).catch((error) => {
          setIsModalEditVisible(false);
          notification.error({
            message: 'Username telah dipakai!',
            onClick: () => {
              console.log('Notification Clicked!');
            }
          });
        });
  };

  const handleOkLock = async () => {
    await axios.post(`${process.env.REACT_APP_API_GATEWAY_URL}account/committee-change-password`, {
        id_account: choose.id_account,
        new_password: newPassword,
        confirm_new_password: confirmPassword,
      }).then((response) => {
          refreshData();
          notification.success({
            message: 'Password akun berhasil diubah',
            onClick: () => {
              console.log('Notification Clicked!');
            }
          });
          setNewPassword("");
          setConfirmPassword("");
          setIsModalLockVisible(false);
          form.resetFields();
      }).catch((error) => {
        setIsModalLockVisible(false);
        setNewPassword("");
        setConfirmPassword("");
        form.resetFields();
      });
  };

  const handleOkDelete = async (id) => {
    await axios.post(`${process.env.REACT_APP_API_GATEWAY_URL}account/delete`, {
        id_account: id,
      }).then((response) => {
          refreshData();
          notification.success({
            message: 'Akun berhasil dihapus',
            onClick: () => {
              console.log('Notification Clicked!');
            }
          });
      }).catch((error) => {
        notification.error({
          message: 'Akun gagal dihapus!',
          onClick: () => {
            console.log('Notification Clicked!');
          }
        });
      });
  };

  const handleCancelCreate = () => {
      setIsModalCreateVisible(false);
  };

  const handleCancelEdit = () => {
    setIsModalEditVisible(false);
  };

  const handleCancelLock = () => {
    setIsModalLockVisible(false);
  }

  const onFinish = (values) => {
      console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
  };

  
  
  const columns = [{
    title: 'Nama',
    dataIndex: 'name',
    width: '30%',
  }, 
  {
    title: 'Username',
    dataIndex: 'username',
    width: '20%',
  },
  {
    title: 'Prodi',
    dataIndex: 'id_prodi',
    width: '20%',
    render: (text, record) => record.id_prodi === 0 ? "D3" : "D4"
  },
  {
    title: 'Aksi',
    dataIndex: 'action',
    render: (text, record) => 
      <>
        <Row>
          <Col span={9} style={{textAlign:"right"}}>
            <Button 
              id="button-lock" 
              htmlType="submit" 
              shape="circle" 
              style={{backgroundColor:"#FBB03B", borderColor: "#FBB03B"}} 
              onClick={() => {
                showModalLock(record)
                }}>
              <FontAwesomeIcon icon={faLock} style={{color: "black"}}/>
            </Button>  
          </Col>
          <Col span={6} style={{textAlign:"center"}}>
            <Button 
              id="button-pencil" 
              htmlType="submit" 
              shape="circle" 
              style={{backgroundColor:"#FCEE21", borderColor: "#FCEE21"}} 
              onClick={() => { 
                showModalEdit(record); 
              }}>
              <FontAwesomeIcon icon={faPencil} style={{color: "black"}}/>
            </Button>
          </Col>
          <Col span={9} style={{textAlign:"left"}}>
            <Button 
              id="button-trash" 
              htmlType="submit" 
              shape="circle" 
              style={{backgroundColor:"#CC0033", borderColor: "#CC0033"}} 
              onClick={() => {
                showModalDelete(record)}}>
              <FontAwesomeIcon icon={faTrashCan} style={{color: "black"}}/>
            </Button>
          </Col>
        </Row>
      </> 
  }];
  
  return (
    <>
      <CCard className="mb-4">
        <CCardBody>
          <Button 
            id="create-akun" 
            size="sm" 
            shape="round" 
            style={{color: "white", background:"#339900", marginBottom: 16}}
            onClick={showModalCreate}> 
              Create 
          </Button>
          <CRow>
            <CCol sm={12}>
            <Tabs type="card">
              <TabPane tab="Dosen" key="1">
                <Table columns={columns} dataSource={accountDosen} rowKey="id_account" bordered />
              </TabPane>
              <TabPane tab="Mahasiswa" key="2">
                <Table columns={columns} dataSource={accountMahasiswa} rowKey="id_account" bordered />
              </TabPane>
              <TabPane tab="Perusahaan" key="3">
                <Table columns={columns} dataSource={accountPerusahaan} rowKey="id_account" bordered />
              </TabPane>
            </Tabs>
            </CCol>
          </CRow>
          
        </CCardBody>
      </CCard>

      <Modal title="Buat Akun" 
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
            <b>Name</b>
            <Form.Item
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
            >
                <Input onChange={e => setName(e.target.value)}/>
            </Form.Item>

            <b>Username</b>
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input onChange={e => setUsername(e.target.value)}/>
            </Form.Item>

            <b>Role</b>
            <Form.Item
                name="role"
                rules={[{ required: true, message: 'Please pick an item!' }]}
            >
                <Radio.Group>
                  <Radio value="3" onClick={() => setRole(3)}>Ketua Prodi</Radio>
                  <Radio value="0" onClick={() => setRole(0)}>Panitia</Radio>
                </Radio.Group>
            </Form.Item>
            </Form>
      </Modal>

      <Modal title="Update Akun" 
        visible={isModaleditVisible} 
        onOk={handleOkEdit} 
        onCancel={handleCancelEdit}
        width={600}
        zIndex={9999999}
        footer={[
            <Button key="back" onClick={handleCancelEdit}>
              Batal
            </Button>,
            <Button key="submit" type="primary" onClick={handleOkEdit}>
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
              value: choose.name
          },
          {
              name:["username"],
              value: choose.username
          },
      ]}
        >
        <b>Name</b>
        <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
        >
            <Input onChange={e => {
              setChoose(pre => {
                return {...pre, name:e.target.value}
              })
            }} value={choose.name}/>
        </Form.Item>

        <b>Username</b>
        <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
        >
            <Input onChange={e => {
              setChoose(pre => {
                return {...pre, username:e.target.value}
              })
            }} disabled/>
        </Form.Item>

        <b>Role</b><br></br>
        <Radio.Group
            rules={[{ required: true, message: 'Please pick an item!' }]}
            value={choose.id_role}
        >
            <Radio value={3} onClick={() => {
              setChoose(pre => {
                return {...pre, id_role:3}
              })
            }}>Ketua Prodi</Radio>
            <Radio value={0} onClick={() => {
              setChoose(pre => {
                return {...pre, id_role:0}
              })
            }}>Panitia</Radio>
        </Radio.Group>
        </Form>
      </Modal>

      <Modal title="Ganti Password" 
        visible={isModallockVisible} 
        onOk={handleOkLock} 
        onCancel={handleCancelLock}
        width={600}
        zIndex={9999999}
        footer={[
            <Button key="back" onClick={handleCancelLock}>
              Batal
            </Button>,
            <Button key="submit" type="primary" onClick={handleOkLock}>
              Simpan
            </Button>]}>
          <Form
            form={form}
            name="basic"
            wrapperCol={{ span: 24 }}
            autoComplete="off"
            >
            <b>Password Baru</b>
            <Form.Item
                name="newPassword"
                rules={[{ required: true, message: 'Please input your new password!' }]}
            >
                <Input.Password onChange={e => setNewPassword(e.target.value)}/>
            </Form.Item>

            <b>Konfirmasi Password Baru</b>
            <Form.Item
                name="confirmPassword"
                rules={[{ required: true, message: 'Please input your confirm password!' }]}
            >
                <Input.Password onChange={e => setConfirmPassword(e.target.value)}/>
            </Form.Item>
          </Form>
      </Modal>
    </>
  )
}

export default PengelolaanAkun
