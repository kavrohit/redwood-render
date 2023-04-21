import { useAuth } from 'src/auth'

const Login = () => {
  const { loading, logIn, logOut, isAuthenticated } = useAuth()

  const handleLogin = async () => {
    await logIn()
  }

  if (loading) {
    return null
  }
  return (
    <div>
      {isAuthenticated ? (
        <button onClick={logOut}>Log out</button>
      ) : (
        <button onClick={handleLogin}>Log In</button>
      )}
    </div>
  )
}

export default Login
