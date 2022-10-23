import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'
// import * as Google from 'expo-auth-session/providers/google';
// import * as WebBrowser from 'expo-web-browser';

// WebBrowser.maybeCompleteAuthSession();

const SocialSignInButton = () => {
    const [accessToken, setAccessToken] = React.useState();
    const [userInfo, setUserInfo] = React.useState();
    const [message, setMessage] = React.useState();


    // const [request, reponse, promptAsync] = Google.useAuthRequest({
    //     iosClientId: `236289087585-n2qfcbnommhbo4dqesrkga40h5vate31.apps.googleusercontent.com`,
    //     androidClientId: `236289087585-61k1rmkgohigng3b8mrvk20o09mkqau4.apps.googleusercontent.com`,
    //     expoClientId: `236289087585-r6h19iq6pnbguq3hmredqfijk1b78rfc.apps.googleusercontent.com`,
    //     // scopes: ['profile','email']
    // });

    // React.useEffect(() => {
    //     setMessage(JSON.stringify(response));
    //     if(reponse?.type === "success") {
    //         setAccessToken(reponse.authentication.accessToken);
    //     }
    // }, [reponse]);

    // async function getUserData() {
    //     let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
    //         headers: { Authorization: `Bearer ${accessToken}`}
    //     });

    //     userInfoResponse.json().then(data => {
    //         setUserInfo(data);
    //     })
    // }

    const onSigninFB = () => {
        console.log('forgot ')
    }
    const onSigninGG = async  () => {
        console.log('SigninGG ');
        // promptAsync({useProxy: false, showInRecents: true});
    }
    const onSigninAP = () => {
        console.log('forgot ')
    }
    return (
    <>
        <CustomButton 
            text= "Sign In with Facebook" 
            onPress={onSigninFB} 
            bgColor= '#E7EAF4'
            fgColor= '#4765A9'

        />
        <CustomButton 
            text= "Sign In with Google" 
            onPress={onSigninGG} 
            bgColor='#FAE9EA'
            fgColor='#DD4D44'
        />
        <CustomButton 
            text= "Sign In with Apple" 
            onPress={onSigninAP} 
            bgColor= '#e3e3e3'
            fgColor='#363636'
        />
    </>
  )
}

export default SocialSignInButton