import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [expenses, setExpenses] = useState([]);
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');

    const fetchExpenses = async () => {
        const response = await axios.get('http://localhost:5000/expenses');
        setExpenses(response.data.expenses);
    };

    const addExpense = async () => {
        const expense = { amount, category };
        await axios.post('http://localhost:5000/expenses', expense);
        fetchExpenses();
    };

    return (
        <div>
            <h1>MoneyWise</h1>
            <div>
                <input
                    type="text"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                <button onClick={addExpense}>Add Expense</button>
            </div>
            <h2>Expenses</h2>
            <ul>
                {expenses.map((exp, idx) => (
                    <li key={idx}>
                        {exp.amount} - {exp.category}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
