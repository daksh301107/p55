import  {React, Component } from 'react';
import { Button, View, Alert } from 'react-native';
import { Audio } from 'expo-av';

class SoundButton extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      {
        uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3',
      },
      {
        shouldPlay: true,
      }
    );
  };

class AnyButton extends React.Component {
  displayalert = () => {
    alert('My first alert');
  };
  render() {
    return (
      <Button
        color={this.props.color}
        title="Click Me"
        onPress={this.playSound}
      />
    );
  }
}
export default class GridView extends Component {

   render() {
        return (
          
            <View style={{ marginTop: 100 }}>
              <AnycolorButton color="red"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
             
              <View style={{ marginTop: 30}}>
              <AnycolorButton color="green" 
              onPress={() => Alert.alert('Simple Button pressed')}
               />
                </View>
                <View style={{ marginTop: 30}}>
              <AnycolorButton color="yellow" 
              onPress={() => Alert.alert('Simple Button pressed')}
               />
                </View>

              <View style={{ marginTop: 30 }}>
              <AnycolorButton color="pink"  
              
              onPress={() => Alert.alert('Simple Button pressed')}
              />
                </View>
            </View>
        );
    }
}




