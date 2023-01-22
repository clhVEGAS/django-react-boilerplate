import { React } from "react";


const Login = ({username, handleUserNameChange, password, handlePasswordChange, login, error}) => {
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
            </form>
        </>
    )
};

export default Login;