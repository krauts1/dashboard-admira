import { useMemo, useContext, useEffect } from 'react';
import { cmdData } from '../__mocks__/crmDataMock';
import { setState } from '../store/actions';
import DashboardContext from '../contexts/generalContext';
import { areAllPropertiesEmpty } from '../utils/helpers';

export default function useGoogleAds(messageApi) {
    const [state, dispatch] = useContext(DashboardContext);
    const { filterCrm, filters } = state;

    const CostAdquisitionData = useMemo(() => {
        const data = filterCrm.reduce((acc, campaign) => {
            const cost = campaign.costoAdquisicion;
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
                text: 'Costo de adquisicion',
                subtext: 'por lead',
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
    }, [filterCrm]);

    const topcmdData = useMemo(() => {
        const topCampaigns = filterCrm
        .sort((a, b) => b.participacion - a.participacion)  
        .slice(0, 5);
        return {
            title: {
                text: '5 campañas con mas costo de adquisicion'
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
                data: topCampaigns.map(item => item.costoAdquisicion)
            }
        }
    }, [filterCrm]);

    const topValorVidaData = useMemo(() => {
        const topCampaigns = filterCrm
        .sort((a, b) => b.valorDeVida - a.valorDeVida)  
        .slice(0, 5);
        return {
            title: {
                text: '5 campañas con mas gasto publicitario'
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
                    data: topCampaigns.map(item => item.valorDeVida),
                    label: {
                      show: true,
                      position: 'right',
                      valueAnimation: true
                    }
                  }
            ]
        }
    }, [filterCrm]);

    useEffect(() =>{
        if(filterCrm.length && !areAllPropertiesEmpty(filters))
            messageApi.open({
                type: 'error',
                content: 'No se encontraron coincidencias',
            });
    }, [filterCrm]);
    

    useEffect(() => {
        dispatch(setState({
            crm: cmdData.leads,
            filterCrm: cmdData.leads
        }));
    }, [])
    return {
        CostAdquisitionData,
        topcmdData,
        filterCrm,
        topValorVidaData,
    }
}
