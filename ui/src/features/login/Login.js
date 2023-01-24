import { React, useState } from "react";
import { storeAuth, storeErr } from "./userSlice";
import { useCheckUserMutation } from './loginApi';
import { useDispatch, useSelector } from "react-redux";
// import { Spinner } from "reactstrap";

const Login = (props) => {
    const [checkUser] = useCheckUserMutation()

    const [username, handleUserNameChange] = useState('');
    const [password, handlePasswordChange] = useState('');
    // const [error, setErr] = useState('');

    const error = useSelector((state) => state.user.err);
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const dispatch = useDispatch();

    const login = async (event) => {
        event.preventDefault();
        try{
        await checkUser({username, password}).unwrap();
        handleUserNameChange('');
        handlePasswordChange('');
        dispatch(storeAuth(true));
        console.log(isAuthenticated);
        dispatch(storeErr(''));
        } catch(err){
        console.error('Failed to log in: ', err)
        dispatch(storeAuth(false));
        dispatch(storeErr(err));
        }
    }

    return(
        <>
            <h2>Login</h2>
            <form onSubmit={login}>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" name="username" value={username} onChange={(event) => handleUserNameChange(event.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="username">Password</label>
                <input type="password" className="form-control" id="password" name="password" value={password} onChange={(event) => handlePasswordChange(event.target.value)} />
                <div>
                {error &&
                    <small className="text-danger">
                    {error}
                    </small>
                }
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            <button type="button" className="btn btn-primary me-2" onClick={() => console.log(isAuthenticated)}>Test</button>
            </form>
        </>
    )
};

export default Login;