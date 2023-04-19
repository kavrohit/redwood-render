import { useAuth } from "src/auth";
import { useEffect } from "react";
import { navigate } from '@redwoodjs/router'
const Callback = () => {
  const {logIn,isAuthenticated,userMetadata} = useAuth()
  useEffect(() => {
    if(!isAuthenticated){
      console.log({userMetadata})
      logUser();
    }
      const logUser = async () =>{
        console.log('going to login the user')
        await logIn();
        console.log('user is logged in')
        navigate('/')
      }
  },[isAuthenticated])
  return <div>Logging in...</div>
}

export default Callback