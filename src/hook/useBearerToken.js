
import { useLocalStorage } from "./useLocalStorage";
import axios from "axios";
import { useEffect} from "react";

export const useBearerToken = () => {
  let [token, setToken] = useLocalStorage('Bearer');
  
  useEffect(() => {
    if(!token) {
      axios.get('http://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions').then((res) => {
        setToken(res.data.token);
      });
    }
  }, []);

  return token;
}