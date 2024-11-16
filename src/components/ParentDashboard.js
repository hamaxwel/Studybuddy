import React, { useState } from 'react';
import './ParentDashboard.css';
import LiveChatPage from '../pages/LiveChatPage';

const ParentDashboard = () => {
  const [walletBalance, setWalletBalance] = useState(100);
  const [amountToLoad, setAmountToLoad] = useState('');
  const [transactions, setTransactions] = useState([]);

  // Handle loading money to the wallet
  const handleLoadMoney = () => {
    if (amountToLoad <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    const newBalance = walletBalance + parseFloat(amountToLoad);
    setWalletBalance(newBalance);

    const newTransaction = {
      date: new Date().toLocaleString(),
      amount: amountToLoad,
    };
    setTransactions([newTransaction, ...transactions]);
    setAmountToLoad('');
  };

  return (
    <div className="parent-dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome to Your Child's Dashboard</h1>
        <p>Stay informed and track your child's learning progress.</p>
      </header>

      <div className="dashboard-main">
        <div className="widget-container">
          {/* Wallet Section */}
          <div className="widget wallet-widget">
            <h2>Child's Wallet</h2>
            <p>Current Balance: <strong>ksh{walletBalance}</strong></p>

            <div className="load-money">
              <label>Load Money to Wallet:</label>
              <input
                type="number"
                value={amountToLoad}
                onChange={(e) => setAmountToLoad(e.target.value)}
                placeholder="Enter amount"
              />
              <button onClick={handleLoadMoney}>Load Money</button>
            </div>

            <div className="transaction-history">
              <h3>Transaction History</h3>
              <ul>
                {transactions.map((transaction, index) => (
                  <li key={index}>
                    {transaction.date}: +${transaction.amount}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Assignments Section */}
          <div className="widget">
            <h2>Child's Upcoming Assignments</h2>
            <p>3 assignments due this week.</p>
            <ul>
              <li>Math - Due Friday</li>
              <li>Science - Due Monday</li>
              <li>History - Due Wednesday</li>
            </ul>
          </div>

          {/* Performance Section */}
          <div className="widget">
            <h2>Child's Performance</h2>
            <p>Average grade: 90%</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '90%' }}></div>
            </div>
          </div>

          {/* Upcoming Events Section */}
          <div className="widget">
            <h2>Upcoming School Events</h2>
            <p>Next event: Parent-Teacher Conference on Friday, 3 PM</p>
          </div>

          {/* Live Chat Section */}
          <div className="widget live-chat-widget">
            <h2>Live Chat</h2>
            <LiveChatPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;
