import data from '../data/data.tsx';
import { useState } from "react";
export default function ExpensesList (){

const [rankClass, setRankClass]= useState("lowExpense");


let expenseRankText ="Expense Rank";
    return(
        <div>
   
            <h2>Expences List</h2>
            {data.map((item)=>{return(
                <div key={item.name} className="expensesListItem">
                    <h3>
                    {item.name}
                    </h3>
                    
                    <div className="dataDiv">
                    <div className="leftDiv">
                    <div>{item.date.toLocaleString()}</div>
                    
                    <div className ={rankClass}>{expenseRankText}</div>
                    <div className = "category">{item.category}</div>
                    </div>
                    <div className="rightDiv">
                    <div><strong>${item.amount}</strong></div>
                    <div className="junk">
                        <img src="\src\assets\junk-box-svgrepo-com.svg" alt="junk icon" />
                    </div>
                    </div>
                    </div>
                    
                </div>
            )
                
            })}
        </div>
        )
        
}