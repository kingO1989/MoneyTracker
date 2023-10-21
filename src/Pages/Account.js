import { useEffect, useState, useContext } from "react";
import AppContext from "../Context/AppContext";
import RecentTransactionView from "../Components/Transaction/RecentTransactionView";
import { TransactionTotalView } from "../Components/Transaction/TransactionTotalView";
import AddTranactionForm from "../Components/Transaction/AddTransactionForm";
import AccountsList from "../Components/Account/AccountList";
import CreateAccountForm from "../Components/Account/CreateAccount";
import { Button } from "@mui/material";


const Account = () => {

    const { accounts } = useContext(AppContext);
    const [createAccountBtnClicked, setCreateAccountBtnClicked] = useState(false)
    function OpenCreateAccountForm(e) {
        if (createAccountBtnClicked === false)
            setCreateAccountBtnClicked(true)
        else
            setCreateAccountBtnClicked(false)

    }


    useEffect(
        () => {
            console.log(accounts)
        }
        , [accounts]
    )

    return (
        <>
            <h1>Account</h1>
            <h3>Create Account</h3>
            <div>
                <Button variant="contained" onClick={OpenCreateAccountForm}>
                    Create Account
                </Button>
                {
                    createAccountBtnClicked ?
                        (
                            < CreateAccountForm />
                        ) : ""
                }
            </div>

            {
                accounts?<AccountsList/>:""
            }


        </>
    );

}

export default Account;