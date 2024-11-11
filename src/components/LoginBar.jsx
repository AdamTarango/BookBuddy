import Login from "./Login"
import SignUp from "./signup"
import Profile from "./Profile"
const LoginBar = ({ token, setToken }) => {
  console.log(token)  
  return (
      <>
        { token ?  <Profile token={token} setToken={setToken} key='profile'/> :
        <>
          <Login token={token} setToken={setToken} key="login"/>
          <SignUp token={token} setToken={setToken} key="signup"/>
        </>
        }
      </>
  )
  
}
export default LoginBar