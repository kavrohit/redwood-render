import { useAuth } from 'src/auth'

const Profile = () => {
  const { currentUser, userMetadata, loading } = useAuth()
  if (loading) {
    return <div>Loading...</div>
  }
  console.log({ userMetadata }, { currentUser })
  return (
    <div>
      {/* <h1>{userMetadata.name}</h1>
      <p>Email:{userMetadata.email}</p>
      <img src={userMetadata.picture} alt="User Avtar" /> */}
    </div>
  )
}

export default Profile
