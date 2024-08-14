import React from 'react';
import { Chart } from '../../';
import useMetaAds from '../../../hooks/useMetaAds';
import { Table } from "antd";
import { columnsMetaAds } from '../../../constants/constants';
import Filters from './filters';
import './style.scss';

const MetaAds = ({messageApi}) => {
    const {
        costData,
        filterMetaCampains,
        topMetaAdsData,
        topGastoPublicidadData
    } = useMetaAds(messageApi);

    return (
        <div>
            <Filters />
            <div className="meta-charts-container">
                <div>
                    <Chart options={costData} />
                </div>
                <div>
                    <Chart options={topMetaAdsData} />
                </div>
                <div>
                    <Table dataSource={filterMetaCampains} columns={columnsMetaAds} />;
                </div>
                <div>
                    <Chart options={topGastoPublicidadData} />
                </div>
            </div>
        </div>
    )
}

export default MetaAds;
