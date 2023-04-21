import { useAuth } from 'src/auth'

const Profile = () => {
  const { currentUser, userMetadata, loading, logOut } = useAuth()
  if (loading) {
    return null
  }
  console.log({ userMetadata }, { currentUser })
  return (
    <>
      {userMetadata ? (
        <div>
          <h1>{userMetadata.name}</h1>
          <p>Email:{userMetadata.email}</p>
          <img src={userMetadata.picture} alt="User Avtar" />
        </div>
      ) : null}
      <button onClick={logOut}>logOut</button>
    </>
  )
}

export default Profile
