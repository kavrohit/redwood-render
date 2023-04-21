import { Redirect } from '@redwoodjs/router'
import { routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

const Login = () => {
  const { loading, logIn, isAuthenticated } = useAuth()

  const handleLogin = async () => {
    await logIn()
  }

  if (loading) {
    return null
  }
  return (
    <div>
      {isAuthenticated ? (
        <Redirect to={routes.profile()} options={{ replace: true }} />
      ) : (
        <button onClick={handleLogin}>Log In</button>
      )}
    </div>
  )
}

export default Login
