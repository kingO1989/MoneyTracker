import { useEffect, useState, useContext } from "react";
import AppContext from "../../Context/AppContext";
import styles from "../../Pages/AllStyles.module.css";

export const TransactionTotalView = () => {
    const { accounts, expense, income, networth, setNetworth, totalIncome, totalExpenses } = useContext(AppContext);


    useEffect(
        () => {
            console.log(accounts)
        }
        , [accounts]
    )

    return (
        <div className={styles.TransactionTotalView}>
            {accounts ? accounts.map((account) => (


          <div>
            <h3>Networth</h3>
                  <ul >
                    <li><h5>{account.name}</h5></li>
                    <li>Total Income ::{
                        account.totalIncome
                    }</li>
                    <li>Total expenses :: {
                        account.totalExpense
                    }</li>

                    <li>NetWorth  :: {
                        account.networth
                    }</li>
                </ul>
          </div>

            )) : ""
            }
        </div>
    )


}