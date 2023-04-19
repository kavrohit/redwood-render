import { useAuth } from "src/auth";
import { useEffect } from "react";
import { navigate } from '@redwoodjs/router'
const Callback = () => {
  const {logIn,isAuthenticated} = useAuth()
  useEffect(() => {
      const logUser = async () =>{
        await logIn();
        navigate('/')
      }
      if(!isAuthenticated){
        logUser();
      }
  },[])
  return <div>Logging in...</div>
}

export default Callback