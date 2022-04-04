import React, {useState} from 'react'
import 'antd/dist/antd.css';
import { Table, Button, Form, Select, Input, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import _ from "lodash";

import {
  CCard,
  CCardBody,
  CCol,
  CRow,
} from '@coreui/react'

const Finalisasi = () => {
    let searchInput;

    const [state,setState] = useState({searchText: '',searchedColumn: '',})

    const data = [
      {
          id: "1",
          name: 'PT NTI',
          peserta: "Ariraja",
          kuota: 2
      },
      {
          id: "2",
          name: 'PT NTI',
          peserta: "Bryan",
          kuota: 2
      },
      {
          id: "3",
          name: 'CV Kabayan',
          peserta: "Heldi",
          kuota: 4
      },
      {
          id: "4",
          name: 'CV Kabayan',
          peserta: "a",
          kuota: 4
      },
      {
          id: "5",
          name: 'CV Kabayan',
          peserta: "b",
          kuota: 4
      },
      {
          id: "6",
          name: 'CV Kabayan',
          peserta: "c",
          kuota: 4
      },
      {
          id: "7",
          name: 'BIG IO',
          peserta: "shofwan",
          kuota: 5
      },
      {
          id: "8",
          name: 'BIG IO',
          peserta: "krakatau",
          kuota: 5
      },
      {
          id: "9",
          name: 'BIG IO',
          peserta: "1",
          kuota: 5
      },
      {
          id: "10",
          name: 'BIG IO',
          peserta: "2",
          kuota: 5
      },
      {
          id: "11",
          name: 'BIG IO',
          peserta: "3",
          kuota: 5
      }];  
  
    const filterData = data => formatter => data.map( item => ({
      text: formatter(item),
      value: formatter(item)
    }));

    const getColumnSearchProps = dataIndex => ({
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            ref={node => {
              searchInput = node;
            }}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
            style={{ marginBottom: 8, display: 'block' }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90 }}
            >
              Search
            </Button>
            <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
              Reset
            </Button>
          </Space>
        </div>
      ),
      filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
      onFilter: (value, record) =>
        record[dataIndex]
          ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
          : '',
      onFilterDropdownVisibleChange: visible => {
        if (visible) {
          setTimeout(() => searchInput.select(), 100);
        }
      },
      render: text =>
        state.searchedColumn === dataIndex ? (
          <Highlighter
            highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
            searchWords={[state.searchText]}
            autoEscape
            textToHighlight={text ? text.toString() : ''}
          />
        ) : (
          text
        ),
    });
  
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm();
      setState({
        searchText: selectedKeys[0],
        searchedColumn: dataIndex,
      });
    };
  
    const handleReset = clearFilters => {
      clearFilters();
      setState({ searchText: '' });
    };

  const createNewArr=(data)=>{
    return data.reduce((result, item) => {
    //First, take the name field as a new array result
        if (result.indexOf(item.name) < 0) {
            result.push(item.name)
        }
        return result
    }, []).reduce((result, name) => {
    //Take the data with the same name as a new array, and add a new field * * rowSpan inside it**
      const children = data.filter(item => item.name === name);
      result = result.concat(
        children.map((item, index) => ({
          ...item,
          rowSpan: index === 0 ? children.length : 0,//Add the first row of data to the rowSpan field
        }))
      )
      return result;
    }, [])
  }

  const columns = [{
    title: 'Nama Perusahaan',
    dataIndex: 'name',
    width: '40%',
    render(_, row) {
      return {
        children: row.name,
        props: {
          rowSpan: row.rowSpan,
        }
      }
    },
    filterSearch: true,
    filterMode: 'tree',
    filters: _.uniqWith(filterData(data)(i => i.name), _.isEqual),
    onFilter: (value, record) => record.name.includes(value)
  },
  {
    title: 'Kuota',
    dataIndex: 'kuota',
    width: '10%',
    align: "center",
    render(_, row) {
      return {
        children: row.kuota,
        props: {
          rowSpan: row.rowSpan,
        }
      }
    },
  },
  {
    title: 'Nama Mahasiswa',
    dataIndex: 'peserta',
    width: '30%',
    ...getColumnSearchProps('peserta'),
  },
  {
    title: 'Aksi',
    dataIndex: 'action',
    width: '20%',
    align: "center",
    render: (item, record) => 
      <>
        <Button 
          htmlType="submit" 
          shape="circle" 
          type="primary"
          danger
          >
            X
        </Button>
      </>
  }];
  
  return (
    <>
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5} style={{padding:"10px"}}>
            <Form.Item>
              Nama Perusahaan
              <Select>
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
            </CCol>
            <CCol sm={5} style={{padding:"10px"}}>
            <Form.Item>
              Nama Mahasiswa
              <Select>
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
            </CCol>
            <CCol sm={2} style={{textAlign: "center", padding:"10px"}}>
                <br></br>
                <Button type="primary" htmlType="submit" className="px-4" id="generate" style={{backgroundColor:"#339900", borderColor: "#339900"}}>
                    +
                </Button>
            </CCol>
            <Table rowKey="id" columns={columns} dataSource={createNewArr(data)} pagination={false} scroll={{ y: 300 }} bordered />
            <CCol style={{textAlign: "right", paddingTop:"10px"}}>
              <Button type="primary" htmlType="submit" className="px-3" id="finalisasi" style={{backgroundColor:"#00AF8F", borderColor: "#00AF8F"}}>
                Finalisasi
              </Button>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Finalisasi
