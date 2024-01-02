import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

const FacebookLogin = () => {
  return (
    <View>
      <Text style={styles.facebookLog}>Login with Facebook</Text>
    </View>
  )
}
const styles=StyleSheet.create({
    facebookLog:{
        backgroundColor:"blue",
        width:300,
        padding:10,
        textAlign:"center",
        color:"white",
        borderRadius:10,
        marginTop:20,

    }
})

export default FacebookLogin