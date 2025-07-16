import React from 'react'
import CustomPieChart from '../Charts/CustomPieChart';

const COLORS = ["#875CF5", "FA2C37", "FF6900"];

const FinanceOverview = ({ totalBalance, totalIncome, totalExpense }) => {

    const balanceData = [
        { name: "Total Expense", amount: totalExpense },
        { name: "Total Income", amount: totalIncome },
    ];
    return (
        <div className='card'>
            <div className="flex items-center justify-center">
                <h5 className='text-lg'>Financial Overview</h5>
            </div>

            <CustomPieChart
                data={balanceData}
                label="Total Balance"
                totalAmount={`$${ totalExpense -totalIncome}`}
                colors={COLORS}
                showTextAnchor
            />
        </div>
    )
}

export default FinanceOverview