import * as React from 'react';
import { Text, View, Button,TouchableOpacity } from 'react-native';
import {Audio}from "expo-av"

class SoundButton extends React.Component {
   playSound = async () => {
     await Audio.Sound.createAsync(
       { uri:'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3' }, 
      { shouldPlay: true }
     )
  }

  render() {
    return (
     <TouchableOpacity style={{backgroundColor:"lightgreen",
     marginLeft:100,
     width:200,
     height:200,
     alignItems:'center',
     justifyContent:"center",
     borderRadius:100,
     borderColor:"red",
     borderWidth:2
     }}
     onPress={this.playSound}>
<Text style={{fontSize:25,
color:"red"
}}>
PRESS ME
</Text>
     </TouchableOpacity>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop:200}}>
        <SoundButton />
      </View>
    );
  }
}


