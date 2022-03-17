import React, {useState} from 'react';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AccountTreeOutlinedIcon from '@material-ui/icons/AccountTreeOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

export default function Header() {

    // Change this to toggle between logged in and logged out
    const [loggedIn, setLoggedIn] = useState(true)

    //Roles are Supplier, Designer, Contractor
    const [role, setRole] = useState("Supplier")
    return (
        <div className='header'>
            {loggedIn ? (
                <div style={{"justifyContent":"center"}}>
                    <div className="logo">
                        <span>Gmetrik</span>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="smallLogo">
                        <span>Gmetrik</span>
                    </div>
                    {role == "Supplier" ? (
                        <div className="menuOptions">
                            <div>
                                <HomeOutlinedIcon />
                                <h5>Price List</h5>
                            </div>
                            <div>
                                <AccountTreeOutlinedIcon />
                                <h5>Projects</h5>
                            </div>
                            
                        </div>
                    ): role == "Designer" ? (
                        <div className="menuOptions">
                            <h5>Dashboard</h5>
                            <div>
                                <AccountTreeOutlinedIcon />
                                <h5>Projects</h5>
                            </div>
                        </div>
                    ) : (
                        <div className="menuOptions">
                            
                            <div>
                                <HomeOutlinedIcon />
                                <h5>Labour Costs</h5>
                            </div>
                            <div>
                                <AccountTreeOutlinedIcon />
                                <h5>Projects</h5>
                            </div>
                            
                        </div>
                    )}
                    <div className="account">
                        <div>
                            <AccountCircleOutlinedIcon />
                            <h5>Account</h5>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}