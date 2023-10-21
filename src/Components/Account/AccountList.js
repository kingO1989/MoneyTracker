import { useContext, useState } from "react";
import { Button, Divider, Input, List, ListItem } from "@mui/material";
import AppContext from "../../Context/AppContext";

const AccountsList = (props) => {
    const { accounts, setAccount } = useContext(AppContext);

   




    return (

        <>
        <h4>Accounts</h4>
              <List> 

{
    accounts ? accounts.map(
        (account) =>
        (

            <>

                <ListItem>{account.name}</ListItem>
                <Divider />          

            </>

        )
    ) : ""
}

</List>
        </>
    )

}


export default AccountsList;
