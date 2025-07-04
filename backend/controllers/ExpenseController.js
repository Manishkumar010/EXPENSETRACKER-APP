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
        const Expense = await Expense.find({ userId }).sort({ date: -1 });
        res.json(Expense)
    } catch (error) {
        res.status(500).json({ message: "Server Error" })
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
        const expense = await Expense.find({ userId }).sort({ date: -1 });

        // Prepare daate for Excel
        const data = expense.map((itme) => ({
            Category: itme.category,
            Amount: itme.amount,
            Date: itme.date
        }));

        const wb = xlsx.utils.book_new();
        const ws = xlsx.utils.json_to_sheet(date);
        xlsx.utils.book_append_sheet(wb, ws, "Expense");
        xlsx.writeFile(wb, 'Expense_details.xlsx');
        res.download('Expense_details.xlsx');
    } catch (error) {
        res.status(500).json({ message: "Server Error" })

    }
}

