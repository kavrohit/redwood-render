import { useAuth } from "src/auth";
import { useEffect } from "react";
import { navigate } from '@redwoodjs/router'
const Callback = () => {
  const {logIn,isAuthenticated} = useAuth()
  useEffect(() => {
    if(isAuthenticated){
      navigate('/')
    }else{
      logIn();
    }
  }, [])
  return <div>Logging in...</div>
}

export default Callback