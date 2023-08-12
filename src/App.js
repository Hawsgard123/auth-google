import "./App.css"
import { useGoogleLogin } from "@react-oauth/google"
import axios from "axios"
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google"

const handleLogin = async (credentialResponse) => {
  //     var obj = jwtDecode(credentialResponse.credential);
  //     var data = JSON.stringify(obj);
  //     console.log(data);
  //     const dat = {your data to send to server};
  //     const config = {
  //       method: 'POST',
  //       url: 'your backend server or endpoint',
  //       headers: {},
  //       data: data
  //     }
  //   await axios(config)
}

function App() {
  return (
    <div className="App">
      <GoogleOAuthProvider clientId="1020662799832-cmrbtimms5e3221vvchsu9td7egsuq5q.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={handleLogin}
          onError={() => {
            console.log("Login Failed")
          }}
        />
        ;
      </GoogleOAuthProvider>
    </div>
  )
}

export default App
