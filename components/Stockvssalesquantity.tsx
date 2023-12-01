// components/StockVsSalesQuantityChart.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

// Dynamically import ApexCharts for server-side rendering compatibility
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface StockVsSalesQuantityChartProps {
    salesData: {
        salesDate: number;
        salesTotal:number;
        costTotal: number;
        salesStock: number;
        salesQuantity: number;
        deliveryQuantity: number;
    }[];
}

const StockVsSalesQuantityChart: React.FC<StockVsSalesQuantityChartProps> = ({ salesData }) => {
    const options: ApexOptions = {
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                dataLabels: {
                    position: 'top', // top, center, bottom
                },
            },
        },
        dataLabels: {
            enabled: true,
            formatter: (val: number) => val.toString(),
            offsetY: -20,
            style: {
                fontSize: '6px',
                colors: ["#304758"]
            }
        },
        xaxis: {
            categories: salesData.map(data => data.salesDate),
            position: 'bottom',
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            crosshairs: {
                fill: {
                    type: 'gradient',
                    gradient: {
                        colorFrom: '#D8E3F0',
                        colorTo: '#BED1E6',
                        stops: [0, 100],
                        opacityFrom: 0.4,
                        opacityTo: 0.5,
                    },
                },
            },
            tooltip: {
                enabled: true,
            },
        },
        yaxis: {
            title: {
                text: 'Quantity'
            }
        },
        title: {
            text: 'Stock vs Sales Quantity',
            align: 'left'
        }
    };

    const series = [
        {
            name: 'Sales Stock',
            data: salesData.map(data => data.salesStock),
        },
        {
            name: 'Sales Quantity',
            data: salesData.map(data => data.salesQuantity),
        }
    ];

    return (
        <div className="chart">
            <Chart options={options} series={series} type="bar" />
        </div>
    );
};

export default StockVsSalesQuantityChart;
