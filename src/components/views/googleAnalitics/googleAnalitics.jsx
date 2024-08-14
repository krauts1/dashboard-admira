import React from "react";
import useGoogleAnalitics from '../../../hooks/useGoogleAnalitics';
import { Chart } from '../../';
import './style.scss';

const GoogleAnalitics = ({messageApi}) => {
    const {
        visitsDataChart,
        sesionesChartData,
        genreData,
        ageData,
    } = useGoogleAnalitics(messageApi);
    return (
        <div className="analitics-charts-container">
            <div>
                <Chart options={visitsDataChart}/>
            </div>
            <div>
                <Chart options={sesionesChartData}/>
            </div>
            <div>
                <Chart options={genreData}/>
            </div>
            <div>
                <Chart options={ageData}/>
            </div>
        </div>
    )
}
export default GoogleAnalitics;
