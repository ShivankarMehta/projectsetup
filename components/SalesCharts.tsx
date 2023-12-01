// components/SalesCharts.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

// Dynamically import ApexCharts (necessary for SSR)
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface SalesChartsProps {
    salesData: {
        salesDate: number;
        salesTotal:number;
        costTotal: number;
        salesStock: number;
        salesQuantity: number;
        deliveryQuantity: number;
    }[];
}

const SalesCharts: React.FC<SalesChartsProps> = ({ salesData }) => {
    // Example for Sales Over Time chart
    const salesOverTimeOptions: ApexOptions = {
        chart: {
            type: 'line',
            height: 350,
        },
        title: {
            text: 'Sales Over Time',
            align: 'left'
        },
        xaxis: {
            type: 'datetime',
            categories: salesData.map(data => data.salesDate),
        },
        yaxis: {
            title: {
                text: 'Sales Total'
            }
        }
    };

    const salesOverTimeSeries = [{
        name: 'Sales Total',
        data: salesData.map(data => data.salesTotal),
    }];

    return (
        <div className="p-4">
            {/* Sales Over Time Chart */}
            <div className="mb-8">
                <Chart
                    options={salesOverTimeOptions}
                    series={salesOverTimeSeries}
                    type="line"
                    height={350}
                />
            </div>

            {/* Add more charts here */}
        </div>
    );
};

export default SalesCharts;
