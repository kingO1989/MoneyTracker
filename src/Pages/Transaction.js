import { useEffect, useState, useContext } from "react";
import RecentTransactionView from "../Components/Transaction/RecentTransactionView";
import { TransactionTotalView } from "../Components/Transaction/TransactionTotalView";
import AppContext from "../Context/AppContext";
import AddTranactionForm from "../Components/Transaction/AddTransactionForm";




const Transaction = () => {


    // let transactionContext = useContext(AppContext)



    const { expense, accounts, Addtransaction } = useContext(AppContext);
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

            <div>
                <h3>Create a Transaction</h3>
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
            <RecentTransactionView />
            <TransactionTotalView />
        </>
    )

}

export default Transaction;