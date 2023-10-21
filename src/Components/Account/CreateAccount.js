import { useContext, useState } from "react";
import { Button, Input } from "@mui/material";
import AppContext from "../../Context/AppContext";

const CreateAccountForm = (props) => {
    const { accounts, setAccount } = useContext(AppContext);

    const [name, setName] = useState();
    const [balance, setBalance] = useState();


    function CreateAccount() {
        var newAccount = {
            name: name,
            networth: Number(balance),
            transactions: [],
            incomes: [],
            expenses: [],
            totalExpense: 0,
            totalIncome: 0,
            networth: 0,
        }

        setAccount((prev) => [...prev, newAccount]);
    }




    return (

        <>
            <table>
                <tbody>
                    <tr>
                        <td>Name</td><td><Input type="text"
                            onChange={(e) => setName(e.target.value)}
                            defaultValue={"Abdulsaheed"}
                        /></td>
                        <td>Initial amount</td><td><Input type="number"
                            onChange={(e) => setBalance(e.target.value)}
                            defaultValue={500}
                        /></td>



                    </tr>
                </tbody>
            </table>

            <Button variant="contained" onClick={e => CreateAccount()}>submit</Button>
        </>
    )

}


export default CreateAccountForm;
