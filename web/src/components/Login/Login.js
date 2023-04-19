import { useAuth } from "src/auth";

const Login = () => {
  const {logIn,logOut,isAuthenticated} = useAuth();

  return (
    <div>
      {isAuthenticated?(
        <button onClick={logOut}>Log out</button>
      ):(
        <button onClick={logIn}>Log In</button>
      )}
    </div>
  )
}

export default Login