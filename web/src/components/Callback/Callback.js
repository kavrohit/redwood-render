import { Redirect } from "@redwoodjs/router";
import { useAuth } from "src/auth";


const Callback = () => {
  const {loading,isAuthenticated} = useAuth();
  if(loading){
    return(
      <div>Loading ...</div>
    )
  }
  if(!isAuthenticated){
    return <Redirect to="/" />
  }
  return (
    <div>Something went Wrong</div>
  )
}

export default Callback