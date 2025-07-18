const xlsx = require("xlsx")
const Income = require("../models/Income");


// Add Income Source 
exports.addIncome = async (req, res) => {
    const userId = req.user.id
    try {
        const { icon, source, amount, date } = req.body;

        // validation: Check for missing fields
        if (!source || !amount || !date) {
            return res.status(400).json({ message: "All field are required" });
        }
        const newIncome = new Income({
            userId,
            icon,
            source,
            amount,
            date: new Date(date)
        });
        await newIncome.save();
        res.status(200).json(newIncome)
    } catch (error) {
        console.error("Error adding income:", error);
        res.status(500).json({ message: "Server Error" });
    }
}

// get All Income Source 
exports.getAllIncome = async (req, res) => {
    const userId = req.user.id;

    try {
        const income = await Income.find({ userId }).sort({ date: -1 });
        res.json(income)
    } catch (error) {
        console.error("Error fetching incomes:", error);
        res.status(500).json({ message: "Server Error" })
    }
};

// Delete Income Source 
exports.deleteIncome = async (req, res) => {
    try {
        await Income.findByIdAndDelete(req.params.id);
        res.json({ message: "Income deleted successfully" })

    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    };
};

// Download Excel
exports.downloadIncomeExcel = async (req, res) => {
    const userId = req.user.id;
    try {
        const income = await Income.find({ userId }).sort({ date: -1 });

        // Prepare daate for Excel
        const data = income.map((itme) => ({
            Source: itme.source,
            Amount: itme.amount,
            Date: itme.date
        }));

        const wb = xlsx.utils.book_new();
        const ws = xlsx.utils.json_to_sheet(data);
        xlsx.utils.book_append_sheet(wb, ws, "Income");
        xlsx.writeFile(wb, 'income_details.xlsx');
        res.download('income_details.xlsx');
    } catch (error) {
        res.status(500).json({ message: "Server Error" })

    }
}

