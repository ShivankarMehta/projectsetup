// components/SalesVsCostChart.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

// Dynamically import ApexCharts for server-side rendering compatibility
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface SalesVsCostChartProps {
    salesData: {
        salesDate: number;
        salesTotal:number;
        costTotal: number;
        salesStock: number;
        salesQuantity: number;
        deliveryQuantity: number;
    }[];
}

const SalesVsCostChart: React.FC<SalesVsCostChartProps> = ({ salesData }) => {
    const options: ApexOptions = {
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: salesData.map(data => data.salesDate),
        },
        yaxis: {
            title: {
                text: 'Amount (USD)'
            }
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: (val: number) => `$${val.toLocaleString()}`
            }
        },
        title: {
            text: 'Sales vs Cost Comparison',
            align: 'left'
        }
    };

    const series = [
        {
            name: 'Sales Total',
            data: salesData.map(data => data.salesTotal),
        },
        {
            name: 'Cost Total',
            data: salesData.map(data => data.costTotal),
        }
    ];

    return (
        <div className="chart">
            <Chart options={options} series={series} type="bar" />
        </div>
    );
};

export default SalesVsCostChart;
