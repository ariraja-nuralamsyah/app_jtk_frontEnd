import React, { 
  useEffect, useState 
} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import Chart, {
  CommonSeriesSettings, Legend, SeriesTemplate, Animation, ArgumentAxis, Tick, Title, Tooltip
} from 'devextreme-react/chart';
import './style.css';

const Dashboard = () => {
  let history = useHistory();
  const [timeline, setTimeline] = useState([])

  const getData = (data) => {
    for (var i = 0; i < data.length; i++) {
      data[i].start_date = new Date(data[i].start_date);
      data[i].end_date = new Date(data[i].end_date);
    }
    return data;
  }
  
  // useEffect(() => {
  //   const getTimeline = async () =>{
  //     axios.defaults.withCredentials = true;
  //     await axios.get(`${process.env.REACT_APP_API_GATEWAY_URL}management-content/timeline`)
  //     .then(function (response) {
  //       setTimeline(response.data.data)})
  //     .catch(function (error) {
  //       if(error.toJSON().status >= 300 && error.toJSON().status <= 399){
  //         history.push({
  //           pathname: "/login",
  //           state: {
  //             session : true,
  //           }
  //         });
  //       }else if(error.toJSON().status >= 400 && error.toJSON().status <= 499){
  //         history.push("/404");
  //       }else if(error.toJSON().status >= 500 && error.toJSON().status <= 599){
  //         history.push("/500");
  //       }
  //     });
  //   }
  //   getTimeline();
  // }, [history]);

  const customizeTooltip = (arg) => {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    var start_date = new Date(arg.point.data.start_date);
    var end_date = new Date(arg.point.data.end_date);
    return {
      text: `<b>${arg.point.data.description}</b> <br> ${start_date.toLocaleDateString("en-GB", options)} - ${end_date.toLocaleDateString("en-GB", options)}`,
    };
  }

  return (
    <>
      <div style={{ background: '#fff', padding: 24, minHeight: 500 }}>
        <div style={{overflowX:"scroll"}}>
            <Chart id="chart" dataSource={(getData(timeline).sort((a, b) => a.start_date < b.start_date ? 1 : -1))} barGroupPadding={0.2} rotated={true}> 
              <ArgumentAxis>
                <Tick visible={false} />
              </ArgumentAxis>
              <Title text="Timeline KP/PKL"    
              />
              <CommonSeriesSettings
                type="rangeBar"
                argumentField="name"
                rangeValue1Field="start_date"
                rangeValue2Field="end_date"
                barOverlapGroup="name"
              >
              </CommonSeriesSettings>
              <Legend orientation="horizontal" verticalAlignment="bottom" horizontalAlignment="left"/>
              <Tooltip enabled={true} customizeTooltip={customizeTooltip} />
              <SeriesTemplate nameField="description" />
              <Animation enabled={true} />
            </Chart>
        </div>
      </div>
    </>
  )
}

export default Dashboard
