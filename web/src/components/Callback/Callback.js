import { Redirect } from "@redwoodjs/router";
import { useAuth } from "src/auth";


const Callback = () => {
  const {logIn} = useAuth();

  useEffect(() => {
    logIn().then(() => {
      navigate('/')
    })
  }, [logIn])

  return <div>Logging in...</div>
}

export default Callback