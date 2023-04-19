import { useAuth } from "src/auth";
import { useEffect } from "react";
import { navigate } from '@redwoodjs/router'
import Profile from "../Profile/Profile";
const Callback = () => {
  const { logIn } = useAuth()

  useEffect(() => {
    console.log('Auth0CallbackPage loaded')
    logIn().then(() => {
      console.log('User logged in')
      navigate('/')
    }).catch((error) => {
      console.error('Error logging in:', error)
    })
  }, [logIn])
  return <div>Logging in...</div>
}

export default Callback