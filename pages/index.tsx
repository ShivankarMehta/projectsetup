// pages/index.tsx
import type { NextPage } from 'next';
import SalesCharts from '../components/SalesCharts';
import CostsCharts from '../components/CostsChart';
import SalesVsCostChart from '../components/Salesvscostbar';
import StockVsSalesQuantityChart from '../components/Stockvssalesquantity';
import HistogramChart from '../components/Salesquantitychart';
const Home: NextPage = () => {
    const salesData =[{"salesDate":1622505600000,"salesStock":25044,"salesQuantity":393,"salesTotal":510020,"costTotal":439429,"delieveryQuantity":25044},{"salesDate":1622592000000,"salesStock":1106,"salesQuantity":1007,"salesTotal":2288756,"costTotal":1114507,"delieveryQuantity":1008},{"salesDate":1622678400000,"salesStock":1601,"salesQuantity":809,"salesTotal":1537282,"costTotal":1182220,"delieveryQuantity":1707},{"salesDate":1622764800000,"salesStock":1766,"salesQuantity":1469,"salesTotal":3242652,"costTotal":3299535,"delieveryQuantity":1765},{"salesDate":1622851200000,"salesStock":551,"salesQuantity":452,"salesTotal":489403,"costTotal":387829,"delieveryQuantity":551},{"salesDate":1623024000000,"salesStock":1505,"salesQuantity":1181,"salesTotal":2151924,"costTotal":1703538,"delieveryQuantity":1504},{"salesDate":1623110400000,"salesStock":533,"salesQuantity":533,"salesTotal":880592,"costTotal":793821,"delieveryQuantity":555},{"salesDate":1623196800000,"salesStock":1439,"salesQuantity":1142,"salesTotal":1811052,"costTotal":2137511,"delieveryQuantity":1351},{"salesDate":1623283200000,"salesStock":2156,"salesQuantity":1760,"salesTotal":1994980,"costTotal":1613230,"delieveryQuantity":2066},{"salesDate":1623369600000,"salesStock":659,"salesQuantity":461,"salesTotal":835461,"costTotal":671977,"delieveryQuantity":559}];
    const salesQuantities = [393, 1007, 809, 1469, 452]; // Ensure this is defined and is an array
    const deliveryQuantities = [25044, 1008, 1707, 1765, 551]; // Ensure this is defined and is an array
    return (
      <div>
       <h1 className="text-3xl font-bold text-center text-gray-800 my-4">
    Charts Related to Sales
</h1>
      <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Each chart is wrapped in a div that will act as a grid item */}
          <div className="p-4 shadow rounded-lg bg-white">
              <SalesCharts salesData={salesData} />
          </div>
          <div className="p-4 shadow rounded-lg bg-white">
              <CostsCharts salesData={salesData} />
          </div>
          <div className="p-4 shadow rounded-lg bg-white">
              <SalesVsCostChart salesData={salesData} />
          </div>
          <div className="p-4 shadow rounded-lg bg-white">
              <StockVsSalesQuantityChart salesData={salesData} />
          </div>
          <div className="p-4 shadow rounded-lg bg-white">
              <HistogramChart data={salesQuantities} binSize={200} title="Sales Quantity Distribution" />
          </div>
          <div className="p-4 shadow rounded-lg bg-white">
              <HistogramChart data={deliveryQuantities} binSize={5000} title="Delivery Quantity Distribution" />
          </div>
      </div>
  </div>
  </div>
    );
};

export default Home;
