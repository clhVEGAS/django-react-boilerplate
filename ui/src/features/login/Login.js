import { React } from "react";

const Login = (props) => {
    return(
        <>
            <h2>Login</h2>
            <form onSubmit={props.login}>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" name="username" value={props.username} onChange={props.handleUserNameChange} />
            </div>
            <div className="form-group">
                <label htmlFor="username">Password</label>
                <input type="password" className="form-control" id="password" name="password" value={props.password} onChange={props.handlePasswordChange} />
                <div>
                {props.error &&
                    <small className="text-danger">
                    {props.error}
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