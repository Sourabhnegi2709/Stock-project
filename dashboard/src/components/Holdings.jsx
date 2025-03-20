import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";
import "../main.css";

const Holdings = () => {
    const [allHoldings, setAllHoldings] = useState([]);

    // Fetch Holdings Data
    useEffect(() => {
        const fetchHoldings = async () => {
            try {
                const response = await axios.get("http://localhost:3001/allHoldings");
                setAllHoldings(response.data);
            } catch (error) {
                console.error("Error fetching holdings:", error);
            }
        };

        fetchHoldings();
    }, []);

    // Labels and Data for Graph (Memoized to prevent unnecessary recalculations)
    const graphData = useMemo(() => {
        const labels = allHoldings.map((stock) => stock.name);
        return {
            labels,
            datasets: [
                {
                    label: "Stock Price",
                    data: allHoldings.map((stock) => stock.price),
                    backgroundColor: "rgba(255, 99, 132, 0.5)",
                },
            ],
        };
    }, [allHoldings]);

    return (
        <div className="holdings-container">
            <h3 className="title">Holdings ({allHoldings.length})</h3>

            {/* Holdings Table */}
            <div className="order-table">
                <table>
                    <thead>
                        <tr>
                            <th>Instrument</th>
                            <th>Qty.</th>
                            <th>Avg. cost</th>
                            <th>LTP</th>
                            <th>Cur. val</th>
                            <th>P&L</th>
                            <th>Net chg.</th>
                            <th>Day chg.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allHoldings.map((stock, index) => (
                            <HoldingRow key={index} stock={stock} />
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Financial Summary */}
            <FinancialSummary />

            {/* Graph Component */}
            <VerticalGraph data={graphData} />
        </div>
    );
};

/**
 * 🔹 Renders each stock holding row in the table.
 */
const HoldingRow = ({ stock }) => {
    const curValue = stock.price * stock.qty;
    const profitLoss = curValue - stock.avg * stock.qty;
    const isProfit = profitLoss >= 0;
    const profClass = isProfit ? "profit" : "loss";
    const dayClass = stock.isLoss ? "loss" : "profit";

    return (
        <tr>
            <td>{stock.name}</td>
            <td>{stock.qty}</td>
            <td>{stock.avg.toFixed(2)}</td>
            <td>{stock.price.toFixed(2)}</td>
            <td>{curValue.toFixed(2)}</td>
            <td className={profClass}>{profitLoss.toFixed(2)}</td>
            <td className={profClass}>{stock.net}</td>
            <td className={dayClass}>{stock.day}</td>
        </tr>
    );
};

/**
 * 🔹 Displays total investment, current value, and P&L summary.
 */
const FinancialSummary = () => (
    <div className="row">
        <div className="col">
            <h5>
                29,875.<span>55</span>
            </h5>
            <p>Total investment</p>
        </div>
        <div className="col">
            <h5>
                31,428.<span>95</span>
            </h5>
            <p>Current value</p>
        </div>
        <div className="col">
            <h5>1,553.40 (+5.20%)</h5>
            <p>P&L</p>
        </div>
    </div>
);

export default Holdings;
