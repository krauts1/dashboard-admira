import React from 'react';
import useGoogleAds from '../../../hooks/useGoogleAds';
import { Chart } from '../../';
import { Table } from "antd";
import { columnsGoogleAds } from '../../../constants/constants';
import Filters from './filters';
import './style.scss';

const GoogleAds = ({messageApi}) => {
    const {
        costData,
        topCampaignsData,
        topCampaignsImpressionsData,
        filterCampains,
    } = useGoogleAds(messageApi);
    
    return(
      <div>
        <Filters/>
        <div className="analitics-charts-container">
            <div>
                <Table dataSource={filterCampains} columns={columnsGoogleAds} />;
            </div>
            <div>
                <Chart options={costData}/>
            </div>
            <div>
                <Chart options={topCampaignsData}/>
            </div>
            <div>
                <Chart options={topCampaignsImpressionsData}/>
            </div>
        </div>
      </div>
    )
}
export default GoogleAds;
