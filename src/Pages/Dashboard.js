import { useEffect, useState, useContext } from "react";
import AppContext from "../Context/AppContext";
import RecentTransactionView from "../Components/Transaction/RecentTransactionView";
import { TransactionTotalView } from "../Components/Transaction/TransactionTotalView";
import AddTranactionForm from "../Components/Transaction/AddTransactionForm";
import { Grid, Paper } from "@mui/material";



const Dashboard = () => {

    const { accounts, expense, setExpense, networth, Addtransaction } = useContext(AppContext);
    const [addTransactionBtnClicked, setAddTransactionBtnClicked] = useState(false)
    function OpenAddTransactionForm(e) {
        if (accounts.length < 1) {
            alert("Must create at least one account")
            return;
        }
        if (addTransactionBtnClicked === false)
            setAddTransactionBtnClicked(true)
        else
            setAddTransactionBtnClicked(false)

    }




    return (
        <>
            <h1>Dashboard</h1>
            <Grid container spacing={2}>
                <Grid item xs={8} md={8}>
                    <Paper elevation={6}>
                        <RecentTransactionView />
                    </Paper>
                </Grid>

                <Grid item xs={6} md={4}>
                    <Paper elevation={6}>
                        <h3>Networth</h3>
                        <div>
                            Total Networth :: {networth}
                        </div>
                    </Paper>
                </Grid>


                <Grid item xs={8} md={8}>
                    <Paper elevation={6}>
                        <h3>Create Transaction</h3>
                        <div>
                            <button onClick={OpenAddTransactionForm}>
                                Add Transaction
                            </button>
                            {
                                addTransactionBtnClicked ?
                                    (
                                        < AddTranactionForm Addtransaction={Addtransaction} />
                                    ) : ""
                            }

                        </div>
                    </Paper>
                </Grid>

            </Grid>












        </>
    );

}

export default Dashboard;