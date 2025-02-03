import { LineChart } from '@mui/x-charts/LineChart';

const RevenueLineChart = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const revenue2020 = [10, 15, 13, 17, 25, 38, 30, 20, 18, 14, 16, 22];
    const revenue2021 = [22, 28, 20, 24, 35, 26, 32, 40, 36, 30, 34, 38];

    return (
        <div className='w-[700px] h-[360px] bg-white rounded-xl justify-center items-center pt-4'>
            <div className="text-[24px] font-bold text-[#464255]  ml-6 ">Total Revenue</div>
            <div className='ml-12'>
                <LineChart
                    xAxis={[{ scaleType: 'point', data: months }]}
                    series={[
                        {
                            data: revenue2020,
                            color: '#2D9CDB',
                            label: '2020',
                            showMark: true,
                            area: false,
                            curveType: 'monotone',
                        },
                        {
                            data: revenue2021,
                            color: '#EB5757',
                            label: '2021',
                            showMark: true,
                            area: false,
                            curveType: 'monotone',
                        },
                    ]}
                    width={620}
                    height={307}
                    tooltip={{}} // Pass an empty object for default tooltip behavior
                    grid={{ vertical: true, horizontal: true }}
                    legend={{ position: { vertical: 'top', horizontal: 'right' } }}
                />
            </div>

        </div>
    );
};

export default RevenueLineChart;



