import { useEffect, useState, useContext } from "react";
import AppContext from "../../Context/AppContext";
import { Divider, List, ListItem } from "@mui/material";
import styles from "../../Pages/AllStyles.module.css";


export const RecentTransactionView = () => {

    const { accounts, expense, setExpense, transactions, setTransaction, } = useContext(AppContext);
    //const currentTransactions

    return (

        < div className={styles.RecentTransactionView}>
            <h3>Recent Transaction</h3>

            <List>





                <table>
                    <tbody>

                        {
                            accounts ? accounts.map(

                                (account) =>
                                (

                                    <>

                                        <h3>{account.name}'s  Transactions</h3>

                                        {account.transactions.length > 0 ? account.transactions.map((singleTransact) => (

                                            <>
                                                <ListItem button>
                                                    {singleTransact.date}  {singleTransact.note}  {singleTransact.amount} {singleTransact.type}
                                                </ListItem>
                                                <Divider />
                                            </>


                                        ))
                                            : ""
                                        }

                                    </>

                                )
                            ) : ""
                        }
                    </tbody>
                </table>
            </List>

        </div>
    );


}

export default RecentTransactionView;