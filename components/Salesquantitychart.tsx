// components/SalesQuantityDistributionChart.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface HistogramChartProps {
    data: number[]; // Array of sales quantities
    binSize: number; // The size of the bins for the histogram
    title: string; // Title of the chart
}

const HistogramChart: React.FC<HistogramChartProps> = ({ data, binSize, title }) => {
    // Helper function to create histogram data
    const createHistogramData = (data: number[], binSize: number) => {
        const maxData = Math.max(...data);
        const bins = Math.floor(maxData / binSize) + 1;
        const histogramData = new Array(bins).fill(0);

        data.forEach(value => {
            const bin = Math.floor(value / binSize);
            histogramData[bin]++;
        });

        return histogramData.map((freq, index) => ({
            x: `${index * binSize} - ${index * binSize + binSize}`,
            y: freq
        }));
    };

    const histogramSeries = [{
        name: title,
        data: createHistogramData(data, binSize)
    }];

    const options: ApexOptions = {
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                horizontal: false,
                distributed: true
            },
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            type: 'category',
            labels: {
                formatter: (val: string) => val.split(' - ')[0]
            }
        },
        yaxis: {
            title: {
                text: 'Frequency'
            }
        },
        title: {
            text: title,
            align: 'left'
        }
    };

    return (
        <div className="chart">
            <Chart options={options} series={histogramSeries} type="bar" />
        </div>
    );
};

export default HistogramChart;
