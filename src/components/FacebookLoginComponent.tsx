import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { FacebookLoginButton } from "react-social-login-buttons"

export function FacebookLoginComponent() {

  const responseFacebook = (response: any) => {
    console.log(response);
  }

  return (
      <FacebookLogin
          appId="1345896275947844"
          autoLoad={false}
          callback={responseFacebook}
          render={renderProps => (
              <FacebookLoginButton onClick={renderProps.onClick} text={"Iniciar con Facebook"} />
          )}
      />
  )
}