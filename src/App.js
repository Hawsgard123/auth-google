import "./App.css"
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google"
import axios from "axios"

// const googleLogin = useGoogleLogin({
//   flow: "auth-code",
//   onSuccess: async (codeResponse) => {
//     console.log(codeResponse)
//     const tokens = await axios.post("http://localhost:3001/auth/google", {
//       code: codeResponse.code,
//     })

//     console.log(tokens)
//   },
//   onError: (errorResponse) => console.log(errorResponse),
// })
function App() {
  return (
    <div className="App">
      <GoogleOAuthProvider clientId="1020662799832-cmrbtimms5e3221vvchsu9td7egsuq5q.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={async (credentialResponse) => {
            console.log(credentialResponse)
            const tokens = await axios.post("http://localhost:3000", {
              code: credentialResponse.code,
            })

            console.log(tokens)
          }}
          onError={() => {
            console.log("Login Failed")
          }}
        />
      </GoogleOAuthProvider>
    </div>
  )
}

export default App
