import React,{useState} from 'react'
import 'antd/dist/antd.css';
import { Table, Button, Input, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import _ from "lodash";

import {
  CCard,
  CCardBody,
  CCol,
  CRow,
} from '@coreui/react'

const Perangkingan = () => {
  let searchInput;

  const [state,setState] = useState({searchText: '',searchedColumn: '',})

  const data = [
    {
        name: 'PT NTI',
        peserta: "Ariraja",
        nilaiAkhir: "0.832738095",
        kuota: 2
    },
    {
        name: 'PT NTI',
        peserta: "Bryan",
        nilaiAkhir: "0.410119048",
    },
    {
        name: 'PT Kabayan',
        peserta: "Bryan",
        nilaiAkhir: "0.802380952"
    },
    {
        name: 'PT Kabayan',
        peserta: "Ari Raja",
        nilaiAkhir: "0.548214286"
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
    title: 'Nama Mahasiswa',
    dataIndex: 'peserta',
    width: '30%',
    ...getColumnSearchProps('peserta'),
  },
  {
    title: 'Hasil Akhir',
    dataIndex: 'nilaiAkhir',
    width: '30%',
  }, ];

  return (
    <>
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={6} style={{padding:"10px"}}>
                <Button type="primary" htmlType="submit" className="px-3" id="generate" style={{backgroundColor:"#339900", borderColor: "#339900"}}>
                    Generate Perangkingan
                </Button>
            </CCol>
            <CCol sm={6} style={{textAlign: "right", padding:"10px"}}>
                <Button type="primary" htmlType="submit" className="px-3">
                    Export
                </Button>
            </CCol>
            <Table columns={columns} dataSource={createNewArr(data)} bordered />
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Perangkingan
