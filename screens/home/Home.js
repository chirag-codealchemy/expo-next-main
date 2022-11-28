import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Home = ({navigation}) => {

  return (
     <View className="bg-slate-100 flex-1 items-center justify-center "
     > 
     <Text  className="text-4xl my-5" >Home</Text> 
       <Text className="text-blue-700 my-5" onPress={()=>navigation.navigate('Login')}>
        Click Here
        </Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})