import React from 'react';
import { Chart } from '../../';
import useCRM from '../../../hooks/useCRM';
import { Table } from "antd";
import { columnsCRMData } from '../../../constants/constants';
import Filters from './filters';
import './style.scss';

const CRM = ({messageApi}) => {
    const {
        CostAdquisitionData,
        filterCrm,
        topcmdData,
        topValorVidaData,
    } = useCRM(messageApi);
    return(
        <div>
        <Filters />
        <div className="meta-charts-container">
            <div>
                <Chart options={CostAdquisitionData} />
            </div>
            <div>
                <Chart options={topcmdData} />
            </div>
            <div>
                <Table dataSource={filterCrm} columns={columnsCRMData} />;
            </div>
            <div>
                <Chart options={topValorVidaData} />
            </div>
        </div>
    </div>
    )
}

export default CRM;
