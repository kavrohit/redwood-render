import Login from "src/components/Login/Login"
import Profile from "src/components/Profile/Profile"
import { useAuth } from "src/auth"

const HomePage = () => {
  const {isAuthenticated} = useAuth()
  return (
    <div>
      <Login/>
      {isAuthenticated && <Profile/>}
    </div>
  )
}

export default HomePage