import React from 'react';
import ReactECharts from 'echarts-for-react';

const Chart = ({options, ...props}) => {
    
    return <ReactECharts
        option={options}
        style={{ height: 400 }}
        opts={{ renderer: 'svg' }}
        {...props}
    />;
}

export default Chart;
