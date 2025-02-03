// import { LineChart } from '@mui/x-charts/LineChart';

// const CustomLineChart = () => {
//     const xLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//     const yValues = [3, 5, 8, 6, 7, 5, 9].map(num => Number(num) || 0); // Ensure numbers

//     return (
//         <div style={{ width: 600, height: 300 }}> {/* Set fixed size */}
//             <LineChart
//                 xAxis={[{ scaleType: 'point', data: xLabels }]} // Ensure proper X-axis labels
//                 series={[
//                     {
//                         data: yValues,
//                         area: true,  // Enable the area fill
//                         color: '#2D9CDB', // Blue color
//                         curve: 'natural', // Smooth curve
//                         showMark: true, // Show circle markers
//                         markSize: 10, // Marker size for data points
//                         fillOpacity: 0.3, // Add transparency to the area
//                     },
//                 ]}
//                 // width={600}
//                 // height={300}
//             />
//         </div>
//     );
// };

// export default CustomLineChart;

import { useState, useEffect, useRef } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const CustomLineChart = () => {
    const parentRef = useRef(null); // Ref for parent div
    const [chartSize, setChartSize] = useState({ width: 500, height: 300 }); // Default size

    const xLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const yValues = [3, 5, 8, 6, 7, 5, 9];

    useEffect(() => {
        if (!parentRef.current) return;

        // Create a ResizeObserver to track changes in div size
        const observer = new ResizeObserver(entries => {
            if (entries.length === 0) return;
            const { width, height } = entries[0].contentRect;
            setChartSize({ width, height });
        });

        observer.observe(parentRef.current);
        
        return () => observer.disconnect(); // Cleanup on unmount
    }, []);

    return (
        <div ref={parentRef} style={{ width: '100%', height: '100%', minHeight: 300 }}> {/* Dynamic Parent */}
            <LineChart
                xAxis={[{ scaleType: 'point', data: xLabels }]} 
                series={[
                    {
                        data: yValues,
                        area: true,
                        color: '#2D9CDB ',
                        curve: 'natural',
                        showMark: true,
                        markSize: 10,
                        fillOpacity: 0.3,
                    },
                ]}
                width={chartSize.width}
                height={chartSize.height}
            />
        </div>
    );
};

export default CustomLineChart;

