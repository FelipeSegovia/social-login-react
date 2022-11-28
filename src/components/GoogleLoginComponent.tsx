import {GoogleLogin} from 'react-google-login';
import { GoogleLoginButton } from "react-social-login-buttons"

export function GoogleLoginComponent() {
  const responseGoogle = (response: any) => {
    console.log(response);
  }

  return (
      <GoogleLogin
          clientId="77647987925-74oves9163akptu89cm1ob1897vibgtb.apps.googleusercontent.com"
          buttonText="Iniciar con Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          render={renderProps => (
              <GoogleLoginButton onClick={renderProps.onClick} text={"Iniciar con Google"}/>
          )}
          cookiePolicy={'single_host_origin'}
      />
  )
}