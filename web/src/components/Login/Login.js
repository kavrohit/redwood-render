// import { v4 as uuidv4 } from 'uuid'

import { Redirect } from '@redwoodjs/router'
import { routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

const Login = () => {
  const { loading, logIn, isAuthenticated } = useAuth()

  const handleLogin = async () => {
    logIn()
      .then(() => {
        console.log('user is logged in')
      })
      .catch((error) => {
        console.log({ error })
      })
  }

  if (loading) {
    return null
  }
  return (
    <div>
      {!loading && isAuthenticated ? (
        <Redirect to={routes.profile()} options={{ replace: true }} />
      ) : (
        <div>
          <button onClick={handleLogin}>Log In</button>
        </div>
      )}
    </div>
  )
}

export default Login
