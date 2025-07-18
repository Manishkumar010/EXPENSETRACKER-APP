import React from 'react'

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell
} from "recharts"

const CustomBarChart = ({ data }) => {
    // console.log("Chart data:", data);
    // Check if data is empty
    if (!data || data.length === 0) {
        return <div className="text-center text-gray-500 py-8">No data to display</div>;
    }
    // function to alternate color
    const getBarColor = (index) => {
        return index % 2 === 0 ? "#875cf5" : "#cfbefb";
    }

    const CusTomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className='bg-white shadow-md rounded-lg p-2 border border-gray-300'>
                    <p className="text-xs font-semibold text-purple-800 mb-1">
                        {payload[0].payload.category}
                    </p>
                    <p className="text-sm text-gray-600">
                        Amount: <span className="text-sm font-medium text-gray-900">${payload[0].payload.amount}</span>
                    </p>
                </div>
            )
        }

        return null

    }

    return (
        <div className='bg-white mt-6'>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <CartesianGrid stroke='none' />
                    <XAxis dataKey="category" tick={{ fontSize: 12, fill: "#555" }} stroke="none" />
                    <YAxis tick={{ fontSize: 12, fill: "#555" }} stroke="none" />

                    <Tooltip content={CusTomTooltip} />

                    <Bar
                        dataKey="amount"
                        fill='#ff8042'
                        radius={[10, 10, 0, 0]}
                        activeDot={{ r: 8, fill: "yellow" }}
                        activeStyle={{ fill: "green" }}
                    >
                        {data.map((entry, index) => (
                            <Cell key={index} fill={getBarColor(index)} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default CustomBarChart