import { useContext, useState } from "react";
import { Button, Input, backdropClasses } from "@mui/material";

import AppContext from "../../Context/AppContext";


const CreateAccountForm = (props) => {
    const { accounts, setAccount } = useContext(AppContext);

    const [name, setName] = useState();
    const [balance, setBalance] = useState();


    function CreateAccount() {
        var curr = new Date();
        curr.setDate(curr.getDate() + 3);
        var currdate = curr.toISOString().substring(0, 10);

        let initialIncome = {
            amount:balance,
            date:currdate,
            note:"Initial deposit",
            type:"Income",
          }
        var newAccount = {
            name: name,
            networth:  0
             ,
            transactions: [],
            incomes: [initialIncome],
            expenses: [],
            totalExpense: 0,
            totalIncome: 0,
     
        }
        console.log(balance)

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
