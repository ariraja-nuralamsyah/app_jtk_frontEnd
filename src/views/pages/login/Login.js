import React, { useState, useEffect } from 'react'
import { Form, Input, Button, notification} from 'antd';
import 'antd/dist/antd.css';
import {
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import axios from 'axios';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
  document.title = 'Login'
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  const location = useLocation();
  useEffect(() => {
    if(location.state){
      notification.error({
        message: 'Session anda habis!',
      });
    }
  }, [location.state])
  axios.defaults.withCredentials = true;
  
  const onFinish = async () => {
    await axios.post(`${process.env.REACT_APP_API_GATEWAY_URL}account/login`, {
      username: username,
      password: password,
    }).then((response) => {
      localStorage.setItem("name", response.data.data.name);
      localStorage.setItem("id_prodi", response.data.data.id_prodi)
      localStorage.setItem("id_role", response.data.data.id_role)
      localStorage.setItem("username", response.data.data.username)
      setUsername("")
      setPassword("")
      history.push("/dashboard");
    }).catch((error) => {
      notification.error({
        message: 'Username atau Password salah!',
        onClick: () => {
          console.log('Notification Clicked!');
        },
        style: {
          
        }
      });
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const iconUsername = (
    <Form.Item name="prefix" noStyle>
      <CIcon icon={cilUser} />
    </Form.Item>
  );

  const iconPassword = (
    <Form.Item name="prefix" noStyle>
      <CIcon icon={cilLockLocked} />
    </Form.Item>
  );

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                <Form
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <h1>Login</h1>
                  <p className="text-medium-emphasis">Sign In to your account</p>
                  <Form.Item
                    name="username"
                    className="mb-3"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                  >
                    <Input 
                    placeholder="Username"
                    id="username" 
                    value={username} 
                    addonBefore={iconUsername} 
                    style={{ width: '100%' }}
                    onChange={e => setUsername(e.target.value)}/>
                  </Form.Item>

                  <Form.Item
                    name="password"
                    className="mb-3"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                  >
                    <Input.Password 
                    placeholder="Password"
                    id="password"
                    value={password}
                    addonBefore={iconPassword} 
                    style={{ width: '100%' }}
                    onChange={e => setPassword(e.target.value)}/>
                  </Form.Item>

                  <CRow>
                      <CCol xs={6}>
                      <Form.Item>
                        <Button type="primary" htmlType="submit" className="px-4">
                          Login
                        </Button>
                      </Form.Item>
                      </CCol>
                    </CRow>
                </Form>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
