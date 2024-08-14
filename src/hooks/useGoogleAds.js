import { useMemo, useContext, useEffect } from 'react';
import { campaignsData } from '../__mocks__/googleAdsMock';
import { setState } from '../store/actions';
import DashboardContext from '../contexts/generalContext';
import { areAllPropertiesEmpty } from '../utils/helpers';

export default function useGoogleAds(messageApi) {
    const [state, dispatch] = useContext(DashboardContext);
    const { filterCampains, filters } = state;

    const costData = useMemo(() => {
        const data = filterCampains.reduce((acc, campaign) => {
            const cost = campaign.costo;
            if (cost <= 100) {
                acc["<=100"]++;
            } else if (cost >= 101 && cost <= 250) {
                acc["101-250"]++;
            } else if (cost >= 251 && cost <= 400) {
                acc["251-400"]++;
            } else if (cost >= 401) {
                acc["401+"]++;
            }
    
            return acc;
        }, {
            "<=100": 0,
            "101-250": 0,
            "251-400": 0,
            "401+": 0
        });
        let items = [];
        Object.entries(data).forEach(([key, value]) => {
            items.push({
                value,
                name: key
            });
          })
        return {
            title: {
                text: 'Costo',
                subtext: 'por campaña',
                left: 'center'
              },
              tooltip: {
                trigger: 'item'
              },
              legend: {
                orient: 'vertical',
                left: 'left'
              },
              series: [
                {
                  name: 'Costo',
                  type: 'pie',
                  radius: '50%',
                  data: items,
                  emphasis: {
                    itemStyle: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  }
                }
              ]
        }
    }, [filterCampains]);

    const topCampaignsData = useMemo(() => {
        const topCampaigns = filterCampains
        .sort((a, b) => b.clics - a.clics)  
        .slice(0, 5);
        return {
            title: {
                text: '5 campañas con mas clics'
            },
            tooltip: {},
            xAxis: {
                type: 'category',
                data: topCampaigns.map(item => item.nombre),
                axisLabel: {
                    rotate: 90,
                    margin: 1
                  }
            },
            yAxis: {
                type: 'value'
            },
            series: {
                type: 'bar',
                data: topCampaigns.map(item => item.clics)
            }
        }
    }, [filterCampains]);

    const topCampaignsImpressionsData = useMemo(() => {
        const topCampaigns = filterCampains
        .sort((a, b) => b.impresiones - a.impresiones)  
        .slice(0, 5);
        return {
            title: {
                text: '5 campañas con mas impresiones'
            },
            tooltip: {},
            xAxis: {
                max: 'dataMax'
            },
            yAxis: {
                type: 'category',
                data:  topCampaigns.map(item => item.nombre),
                inverse: true,
                animationDuration: 300,
                animationDurationUpdate: 300,
            },
            series:[
                {
                    realtimeSort: true,
                    name: 'X',
                    type: 'bar',
                    data: topCampaigns.map(item => item.impresiones),
                    label: {
                      show: true,
                      position: 'right',
                      valueAnimation: true
                    }
                  }
            ]
        }
    }, [filterCampains]);
    useEffect(() =>{
        if(filterCampains.length && !areAllPropertiesEmpty(filters))
            messageApi.open({
                type: 'error',
                content: 'No se encontraron coincidencias',
            });
    }, [filterCampains]);
    

    useEffect(() => {
        dispatch(setState({
            campaigns: campaignsData.campanas,
            filterCampains: campaignsData.campanas
        }));
    }, [])
    return {
        costData,
        topCampaignsData,
        topCampaignsImpressionsData,
        filterCampains,
    }
}
