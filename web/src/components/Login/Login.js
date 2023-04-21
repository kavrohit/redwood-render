// import { v4 as uuidv4 } from 'uuid'

import { Redirect } from '@redwoodjs/router'
import { routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

const Login = () => {
  const { loading, logIn, isAuthenticated, userMetadata, signUp } = useAuth()

  const handleLogin = async () => {
    signUp()
      .then(() => {
        console.log({ userMetadata })
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
        <button onClick={handleLogin}>Log In</button>
      )}
    </div>
  )
}

export default Login
