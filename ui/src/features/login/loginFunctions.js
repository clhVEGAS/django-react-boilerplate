import { useCheckUserMutation, useLogOutMutation, useWhoAmIMutation } from './loginApi';
import { useSelector, useDispatch } from 'react-redux'

const [checkUser] = useCheckUserMutation()
const [logout_trigger] = useLogOutMutation()
const [whoami_trigger] = useWhoAmIMutation()

export const whoami = async () => {
    try{
      let print = await whoami_trigger();
      alert(print.data.username);
    } catch(err){
      console.error('Uhhh.. Who are you?: ', err)
      setAuth(false);
      setErr(err);
    }
  }
  
export const login = async (event) => {
event.preventDefault();
    console.log(username)
    console.log(password)
    try{
    await checkUser({username, password}).unwrap();
    handleUserNameChange('');
    handlePasswordChange('');
    setAuth(true);
    setErr("");
    } catch(err){
    console.error('Failed to log in: ', err)
    setAuth(false);
    setErr(err);
    }
}

export const logout = async () => {
try{
    await logout_trigger();
    handleUserNameChange('');
    handlePasswordChange('');
    setAuth(false);
    setErr("");
} catch(err){
    console.error('Failed to log out: ', err)
    setAuth(false);
    setErr(err);
}
}