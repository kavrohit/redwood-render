import { useAuth } from "src/auth";
import { useEffect } from "react";
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