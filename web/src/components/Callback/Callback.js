import { useAuth } from "src/auth";
import { useEffect } from "react";
import Profile from "../Profile/Profile";
const Callback = () => {
  const {logIn,isAuthenticated,userMetadata} = useAuth();
  if(!isAuthenticated){
    return <div>Logging in...</div>
  }
  return(
    <div>
      {isAuthenticated && <Profile/>}
    </div>
  )
}

export default Callback