import { useAuth } from "src/auth";

const Profile = () => {
  const {isAuthenticated} = useAuth()
  if(!isAuthenticated){
    return(<div>Loading...</div>)
  }
  console.log({useAuth});
  return (
    
    <div>
      {/* <h1>{user}</h1> */}
      {/* <p>Email:{currentUser.email}</p>
      <img src ={currentUser.picture} alt="User Avtar"/> */}
    </div>
  )
}

export default Profile