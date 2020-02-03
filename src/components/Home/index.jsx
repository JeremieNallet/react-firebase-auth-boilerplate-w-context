import React, { useContext } from "react";
import { AuthContext } from "../../context/";

const Home = () => {
    const { logout, user } = useContext(AuthContext);

    return (
        <div className="c-global">
            <div className="container">
                <h1>Connexion succefull</h1>
                <span>user email : {user.email} is connected</span>
                <span>user ud : {user.uid}</span>
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    );
};

export default Home;
