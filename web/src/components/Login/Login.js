import { useAuth } from "src/auth";

const Login = () => {
  const {logIn,logOut,isAuthenticated} = useAuth();
  
  const handleLogin = async () =>{
    await logIn();
  }

  return (
    <div>
      {isAuthenticated?(
        <button onClick={logOut}>Log out</button>
      ):(
        <button onClick={handleLogin}>Log In</button>
      )}
    </div>
  )
}

export default Login