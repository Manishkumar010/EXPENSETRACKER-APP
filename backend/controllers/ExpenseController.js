const xlsx = require("xlsx")
const Expense = require("../models/Expense");


    
// Add Expense Source 
exports.addExpense = async (req, res) => {
    const userId = req.user.id
    try {
        const { icon, category, amount, date } = req.body;

        // validation: Check for missing fields
        if (!category || !amount || !date) {
            return res.status(400).json({ message: "All field are required" });
        }
        const newExpense = new Expense({
            userId,
            icon,
            category,
            amount,
            date: new Date(date)
        });
        await newExpense.save();
        res.status(200).json(newExpense)
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
}

// get All Expense Source 
exports.getAllExpense = async (req, res) => {
    const userId = req.user.id;

    try {
        const expenses = await Expense.find({ userId }).sort({ date: -1 });
        res.json(expenses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

// Delete Expense Source 
exports.deleteExpense = async (req, res) => {
    try {
        await Expense.findByIdAndDelete(req.params.id);
        res.json({ message: "Expense deleted successfully" })

    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    };
};

// Download Excel
exports.downloadExpenseExcel = async (req, res) => {
    const userId = req.user.id;
    try {
        const expenses = await Expense.find({ userId }).sort({ date: -1 });

        // Prepare data for Excel
        const data = expenses.map((item) => ({
            Category: item.category,
            Amount: item.amount,
            Date: item.date
        }));

        const wb = xlsx.utils.book_new();
        const ws = xlsx.utils.json_to_sheet(data);
        xlsx.utils.book_append_sheet(wb, ws, "Expense");

        // Write to buffer instead of file
        const buffer = xlsx.write(wb, { type: 'buffer', bookType: 'xlsx' });
        res.setHeader('Content-Disposition', 'attachment; filename="Expense_details.xlsx"');
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.send(buffer);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

