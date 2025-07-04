import React, { useEffect, useState } from 'react'
import { prepareExpenseBarChartData } from '../../utils/helper';
import CustomBarChart from '../Charts/CustomBarChart';

const Last30DaysExpenses = ({ data }) => {
    const [chartdata, setChartData] = useState([])

    useEffect(() => {

        const result = prepareExpenseBarChartData(data);
        setChartData(result)

        return () => { }
    }, [data])
    return (
        <div className='card col-span-1'>
            <div className='flex items-center justify-center'>
                <h5 className='text-lg'> last 30 Days Expenses</h5>
            </div>

            <CustomBarChart data={chartdata} />
        </div>
    )
}

export default Last30DaysExpenses