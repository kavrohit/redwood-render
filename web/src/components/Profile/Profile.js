import { useAuth } from "src/auth";

const Profile = () => {
  const {isAuthenticated,userMetadata} = useAuth()
  if(!isAuthenticated){
    return(<div>Loading...</div>)
  }
  console.log({userMetadata})
  return (
    
    <div>
      <h1>{userMetadata.name}</h1>
      <p>Email:{userMetadata.email}</p>
      <img src ={userMetadata.picture} alt="User Avtar"/>
    </div>
  )
}

export default Profile