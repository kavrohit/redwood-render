import { useAuth } from 'src/auth'
// eslint-disable-next-line prettier/prettier
import Login from "src/components/Login/Login"
import Profile from 'src/components/Profile/Profile'

const HomePage = () => {
  const { isAuthenticated, loading } = useAuth()
  return (
    <div>
      <Login />
      {!loading && isAuthenticated && <Profile />}
    </div>
  )
}

export default HomePage
