import React from 'react';
import Chart, {
   CommonSeriesSettings, Legend, SeriesTemplate, Animation, ArgumentAxis, Tick, Title, Tooltip
} from 'devextreme-react/chart';
import dataSource from './data';
import './style.css';

class DevExtreme extends React.Component {
  customizeTooltip(arg) {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return {
      text: `<b>${arg.point.data.house}</b> <br> ${arg.point.data.start.toLocaleDateString("en-GB", options)} - ${arg.point.data.end.toLocaleDateString("en-GB", options)}`,
    };
  }
  render() {
    return (
      <div style={{overflowX:"scroll"}}>
          <Chart id="chart" dataSource={dataSource} barGroupPadding={0.2} rotated={true}> 
            <ArgumentAxis>
              <Tick visible={false} />
            </ArgumentAxis>
            <Title text="Timeline KP/PKL"    
            />
            <CommonSeriesSettings
              type="rangeBar"
              argumentField="monarch"
              rangeValue1Field="start"
              rangeValue2Field="end"
              barOverlapGroup="monarch"
            >
            </CommonSeriesSettings>
            <Legend orientation="horizontal" verticalAlignment="bottom" horizontalAlignment="left"/>
            <Tooltip enabled={true} customizeTooltip={this.customizeTooltip} />
            <SeriesTemplate nameField="house" />
            <Animation enabled={true} />
          </Chart>
      </div>
    );
  }
}

export default DevExtreme;
