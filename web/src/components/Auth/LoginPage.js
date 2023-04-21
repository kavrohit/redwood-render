import { Redirect } from '@redwoodjs/router'
import { routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

const AuthPage = () => {
  const { loading, isAuthenticated, logIn } = useAuth()

  if (loading) {
    // auth is rehydrating
    return null
  }

  return (
    <>
      <MetaTags title="Log In" description="Authenticate" />
      {isAuthenticated ? (
        <Redirect to={routes.profile()} options={{ replace: true }} />
      ) : (
        logIn()
      )}
    </>
  )
}

export default AuthPage
