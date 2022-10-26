import React from "react"
import "./Header.css"
import { signOut } from 'firebase/auth';
import { Link, useNavigate } from "react-router-dom"
import { auth } from '../config/firebase';
import { Logout } from '@mui/icons-material';
import Box from '@mui/material/Box';

const Header = () => {
    const navigate = useNavigate();

    const onLogout = async () => {
        try {
            await signOut(auth);
            navigate("/login");
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="header">
            <div className="headerLeft">
             <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/">
            <span>MOVIES-APP</span>
            </Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Best Movies</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Movies</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>The Next Movies</span></Link>
                <Box sx={{ display: 'flex' }}>
                  <Box sx={{ padding: 1 }}>
                    <Logout onClick={onLogout} />
                  </Box>
                </Box>
            </div>
            </div>
           
    )
}

export default Header
