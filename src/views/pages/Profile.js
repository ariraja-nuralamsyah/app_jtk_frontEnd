import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Modal, Form, Input, Button, notification } from 'antd';
import {
    CButton,
  CCard,
  CCardBody,
  CCol,
  CRow,
} from '@coreui/react'
import axios from 'axios';


const Profile = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [form] = Form.useForm();
    axios.defaults.withCredentials = true;

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = async () => {
        await axios.post(`${process.env.REACT_APP_API_GATEWAY_URL}account/change-password`, {
            old_password: oldPassword,
            new_password: newPassword,
            confirm_new_password: confirmPassword,
          }).then((response) => {
              notification.success({
                message: 'Password berhasil diganti',
                onClick: () => {
                  console.log('Notification Clicked!');
                }
              });
              setOldPassword("");
              setNewPassword("");
              setConfirmPassword("");
              setIsModalVisible(false);
              form.resetFields();
          }).catch((error) => {
            setIsModalVisible(false);
            setOldPassword("");
            setNewPassword("");
            setConfirmPassword("");
            form.resetFields();
            notification.error({
              message: 'Password lama atau konfirmasi password salah!',
              onClick: () => {
                console.log('Notification Clicked!');
              }
            });
          });

    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    function programStudi(id_prodi){
        if(id_prodi === "0"){
            return "D3 - Teknik Informatika"
        }else{
            return "D4 - Teknik Informatika"
        }
    }

  return (
    <>
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="profil" className="card-title mb-0" style={{paddingLeft:"10px"}}>
                Profil Saya
              </h4>
            </CCol>
          </CRow>
          <hr></hr>
            <div style={{paddingLeft: "10px"}}>
                <CRow><CCol span={24}><b> Nama </b> </CCol></CRow>
                <CRow className="card-title mb-2"><CCol span={24}> {localStorage.getItem('name')} </CCol></CRow>
                <CRow><CCol span={24}><b> Program Studi </b> </CCol></CRow>
                <CRow className="card-title mb-2"><CCol span={24}> {programStudi(localStorage.getItem('id_prodi'))} </CCol></CRow>
                <CRow><CCol span={24}><b> Username </b> </CCol></CRow>
                <CRow className="card-title mb-2"><CCol span={24}> {localStorage.getItem('username')}  </CCol></CRow>
                <CRow><CCol span={24}><b> Password </b> </CCol></CRow>
                <CRow className="card-title mb-2"><CCol span={24}> ******** </CCol></CRow>
                <div className='d-flex justify-content-end'>
                    <CButton size="sm" color="primary" shape="rounded-pill" style={{color: "white"}} onClick={showModal}> 
                        Ganti Password 
                    </CButton>
                </div>
            </div>
        </CCardBody>
      </CCard>

      <Modal title="Ganti Password" 
        visible={isModalVisible} 
        onOk={handleOk} 
        onCancel={handleCancel}
        width={600}
        zIndex={9999999}
        footer={[
            <Button key="back" onClick={handleCancel}>
              Batal
            </Button>,
            <Button key="submit" type="primary" onClick={handleOk}>
              Ganti Password
            </Button>]}>
        <Form
            form={form}
            name="basic"
            wrapperCol={{ span: 24 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            >
            <b>Password Lama</b>
            <Form.Item
                name="oldPassword"
                rules={[{ required: true, message: 'Please input your old password!' }]}
            >
                <Input.Password onChange={e => setOldPassword(e.target.value)}/>
            </Form.Item>

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

export default Profile
