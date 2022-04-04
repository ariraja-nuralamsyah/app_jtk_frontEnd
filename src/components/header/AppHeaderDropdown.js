import React from 'react'
import {
  CAvatar,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import { cilAccountLogout, cilUser } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import axios from 'axios';
import avatar8 from './../../assets/images/avatars/8.jpg'
import { useHistory } from 'react-router-dom';
require('dotenv').config()

const AppHeaderDropdown = () => {
  let history = useHistory();
  const logout = async () =>{
    axios.defaults.withCredentials = true;
    await axios.post(`${process.env.REACT_APP_API_GATEWAY_URL}account/logout`)
    .then(function (response) {
      console.log(response)
      localStorage.clear();
      history.push("/login");
    })  
  }

  const profile = () => {
    history.push("/profile");
  }

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem href="#">
          Halo, <b>{localStorage.getItem('name')}</b>
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem onClick={profile}>
          <CIcon icon={cilUser} className="me-2"/>
          Profile
        </CDropdownItem>
        <CDropdownItem onClick={logout}>
          <CIcon icon={cilAccountLogout} className="me-2" />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
