import { useAuth } from 'src/auth'
// eslint-disable-next-line prettier/prettier
import Login from "src/components/Login/Login"
import Profile from 'src/components/Profile/Profile'

const HomePage = () => {
  const { isAuthenticated } = useAuth()
  return (
    <div>
      <Login />
      {isAuthenticated && <Profile />}
    </div>
  )
}

export default HomePage
