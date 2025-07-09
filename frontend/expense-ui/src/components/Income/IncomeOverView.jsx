import React, { useEffect, useState } from 'react'
import { LuPlus } from "react-icons/lu"
import { prepareIncomeBarChartData } from '../../utils/helper'
import CustomBarChart from '../Charts/CustomBarChart'

const IncomeOverView = ({ transactions, onAddIncome }) => {
    const [chartData, setChartData] = useState([])
    console.log("chartData", chartData)

    useEffect(() => {
        const result = prepareIncomeBarChartData(transactions)
        setChartData(result)
    }, [transactions]) // <-- add transactions here
    return (
        <div className='card'>
            <div className="flex items-center justify-between">
                <div className="">
                    <h5 className="text-lg">Income OverView</h5>
                    <p className="text-xs text-gray-400 mt-0.5">
                        Track your earning over time and analyze your income track
                    </p>
                </div>

                <button onClick={onAddIncome}
                className='add-btn'
                >
                    <LuPlus className='text-lg'/>
                    Add Income
                </button>
            </div>

            <div className="mt-10">
                <CustomBarChart data={chartData}/>
            </div>

        </div>
    )
}

export default IncomeOverView