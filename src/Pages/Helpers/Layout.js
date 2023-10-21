import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import { MenuItem, MenuList, Paper, Stack } from "@mui/material";



const Layout = () => {


    const [loginDisplay, setLoginDisplay] = useState(true);
    const [usernameDisplay, setUsernameDisplay] = useState(false);
    const [username, setUsername] = useState(true);

    return (
        <>


            {


                loginDisplay ?
                    <>
                        <button onClick={""}>Google Signin</button>

                    </> : <>
                        <button onClick={""}>Google Sign out </button>
                    </>

            }

            <Stack>
                <Paper>
                    <MenuList>
                        <MenuItem>  <Link to="/">Dashboard</Link></MenuItem>
                        <MenuItem>  <Link to="/Account">Account</Link></MenuItem>
                        <MenuItem><Link to="/Transaction">Transaction</Link></MenuItem>
                    </MenuList>
                </Paper>
            </Stack>


            {


                usernameDisplay ?
                    <>
                        {username}

                    </> : <>

                    </>

            }
            <br></br>

            <Outlet />

            <br></br>
            <br></br>
            <br></br>

        </>

    )
};

export default Layout;