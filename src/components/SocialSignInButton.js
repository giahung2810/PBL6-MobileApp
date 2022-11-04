import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SocialMediaButton from './Button/SocialMediaButton'
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
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 20}}>
        <View style={{flex: 1, height: 1, backgroundColor: '#EEEEEE'}} />
        <View>
            <Text style={{textAlign: 'center', paddingHorizontal: 20, color: '#757575', fontFamily: 'Urbanist-SemiBold', fontSize: 18}}>
                or continue with
            </Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: '#EEEEEE'}} />
        </View>
        <View style={styles.container}>
            <SocialMediaButton type="facebook" />
            <SocialMediaButton type="goole" />
            <SocialMediaButton type="apple" />
        </View>
    </>
  )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    }
})
export default SocialSignInButton