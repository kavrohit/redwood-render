import { useAuth } from "src/auth";
import { useEffect } from "react";
import { navigate } from '@redwoodjs/router'
import Profile from "../Profile/Profile";
const Callback = () => {
  const { logIn } = useAuth()

  useEffect(() => {
    logIn().then(() => {
      navigate('/')
    })
  }, [logIn])
  return <div>Logging in...</div>
}

export default Callback