import { useMemo } from 'react';
import { googleAnaliticsMock } from '../__mocks__/googleAnalitisMock';

export default function useGoogleAds() {

    const visitsDataChart = useMemo(() => {
        return {
            title: {
                text: 'Visitas a la pagina'
            },
            tooltip: {},
            xAxis: {
                type: 'category',
                data: googleAnaliticsMock.vistasPagina.map(item => item.fecha)
            },
            yAxis: {
                type: 'value'
            },
            series: {
                type: 'bar',
                data: googleAnaliticsMock.vistasPagina.map(item => item.vistas)
            }
        }
    }
        , [googleAnaliticsMock]);

    const sesionesChartData = useMemo(() => ({
        title: {
            text: 'Sesiones',
            x: 'center'
        },
        xAxis: {
            type: 'category',
            data: googleAnaliticsMock.sesiones.map(item => item.fecha),
            axisLabel: {
                rotate: 90,
                margin: 1
              }
        },
        yAxis: {
            type: 'value'
        },
        tooltip: {},
        series: [
            {
                name: 'Tasa de rebote',
                data: googleAnaliticsMock.sesiones.map(item => ({
                    value: item.sesiones,
                    name: item.tasaRebote
                })),
                type: 'line',
                symbol: 'triangle',
                symbolSize: 20,
                lineStyle: {
                  color: '#5470C6',
                  width: 3,
                  type: 'dashed'
                },
                itemStyle: {
                  borderWidth: 1,
                  borderColor: '#EE6666',
                  color: 'yellow'
                },

              }
        ]
    }), [googleAnaliticsMock]);

    const genreData = useMemo(() => ({
        tooltip: {
            trigger: 'item'
          },
          legend: {
            top: '5%',
            left: 'center'
          },
          series: [
            {
              name: 'Genero',
              type: 'pie',
              radius: ['40%', '70%'],
              center: ['50%', '70%'],
              startAngle: 180,
              endAngle: 360,
              data: googleAnaliticsMock.demografía.genero.map(item => ({
                value: item.porcentaje,
                name: item.tipo
              }))
            }
          ]
    }), [googleAnaliticsMock]);

    const ageData = useMemo(() => ({
        title: {
            text: 'Edad',
            subtext: 'Procentajes',
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
              name: 'Edad',
              type: 'pie',
              radius: '50%',
              data: googleAnaliticsMock.demografía.edad.map(item => ({
                value: item.porcentaje,
                name: item.rango
              })),
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
    }), [googleAnaliticsMock]);

    return {
        visitsDataChart,
        sesionesChartData,
        genreData,
        ageData,
    }
}
