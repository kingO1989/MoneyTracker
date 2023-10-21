import { useContext, useEffect, useState } from "react";
import AppContext from "../../Context/AppContext";

const AddTranactionForm = (props) => {
    const { accounts } = useContext(AppContext);

    const [from, setFrom] = useState();
    const [amount, setAmount] = useState();
    const [date, setDate] = useState();
    const [note, setNote] = useState();
    const [type, setType] = useState();
    var curr = new Date();
    curr.setDate(curr.getDate() + 3);
    var currdate = curr.toISOString().substring(0, 10);


    function FromNameHandler(e) {

        setFrom(e.target.value);
    }




    return (

        <>
            <table>
                <tbody>
                    <tr>
                        <td>From</td><td>

                            <select
                                className="form-control"
                                value={type}
                                onChange={FromNameHandler}
                                defaultValue={accounts[0]}
                            >
                                <option >Select account holder</option>
                                {
                                    accounts.map((account) => (
                                        <>
                                            <option value={account.name}>{account.name}</option>
                                        </>
                                    ))
                                }

                            </select>
                        </td>


                        <td>amount</td><td><input type="number"
                            onChange={(e) => setAmount(e.target.value)}
                            defaultValue={500}
                        /></td>
                        <td>date</td><td><input type="date"
                            defaultValue={currdate}
                            onChange={(e) => setDate(e.target.value)}
                        /></td>
                        <td>note</td><td><input type="text"
                            defaultValue={"Sample note"}
                            onChange={(e) => setNote(e.target.value)}
                        /></td>
                        <td>Type</td>

                        <td>

                            <select
                                className="form-control"
                                value={type}
                                onChange={(e) => setType(e.target.value)
                                }
                            >
                                <option >Select Transaction Type</option>
                                <option value="Expense">Expense</option>
                                <option value="Income">Income</option>

                            </select>

                        </td>
                    </tr>
                </tbody>
            </table>

            <button onClick={e => props.Addtransaction(from, amount, date, note, type)}>Add Expense</button>
        </>
    )

}


export default AddTranactionForm;
