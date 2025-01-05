import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LoginButton } from '../../Auth0/loginButton';
import { LogoutButton } from '../../Auth0/logoutButton';
import { SignupButton } from '../../Auth0/signup-button';
import './Header.css'



const Header = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <header className="App-header">
            <h1>gameStore</h1>
            <div>
                {!isAuthenticated && (
                    <>
                        <SignupButton />
                        <LoginButton />
                    </>
                )}
                {isAuthenticated && (
                    <>
                        <LogoutButton />
                    </>
                )}
            </div>
        </header>
    )
};


export default Header;