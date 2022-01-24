'use strict';

import { ActivityIndicator, Alert, AppRegistry, Button, Dimensions, Image, NativeAppEventEmitter, NativeModules, Navigator, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react';

import messaging from '@react-native-firebase/messaging';

var windowSize = Dimensions.get('window');


const { TwilioVoiceModule } = NativeModules;
  export default class Dialer extends Component {
    constructor(props) {
        super(props);
        this.state = {   phno:'+9112345678',twiliotoken:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTS2M0MDU3M2NhYjg3YjgxOTY4NmJjMTQzMjE3NTQyMTBjLTE2NDI5NTg0MzYiLCJncmFudHMiOnsiaWRlbnRpdHkiOiJhbGljZSIsInZvaWNlIjp7ImluY29taW5nIjp7ImFsbG93Ijp0cnVlfSwib3V0Z29pbmciOnsiYXBwbGljYXRpb25fc2lkIjoiQVA2ZWUxNWQ2OTg1MmJmODdiOGE5MDIxMDRjNzg3M2YxNiJ9LCJwdXNoX2NyZWRlbnRpYWxfc2lkIjoiQ1I3M2Y3ODhiZmY2NmE5NGU0NGZmZGRjMDY1N2NjM2VhOCJ9fSwiaWF0IjoxNjQyOTU4NDM2LCJleHAiOjE2NDI5NjIwMzYsImlzcyI6IlNLYzQwNTczY2FiODdiODE5Njg2YmMxNDMyMTc1NDIxMGMiLCJzdWIiOiJBQzc3MGI4ZTVlYjFlMTk5YmM3M2Q1NjM3NmU2Mjc3OGVjIn0.P1Z677jeKdC5ElBI8xeqRpAlpoFcjvBJGEjgByL-vow',statusMessage:'Wait...',jsonData:'',isConnecting:false,connectionFailed:false,};
         }
    
    

      componentDidMount() {
        this.checkToken()
        this.receiveMessage()
        this.InitTwilioClientMethods();
      }

      receiveMessage = () => 
      {
      const unsubscribe = messaging().onMessage(async remoteMessage => {
        Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      });
    }


checkToken = async () => {
 const fcmToken = await messaging().getToken();
 if (fcmToken) {
    console.log(fcmToken);
 } 
 TwilioVoiceModule.registerForCallInvites(fcmToken, this.state.twiliotoken)
}


        select =  async () => {
          const fcmToken = await messaging().getToken();
 if (fcmToken) {
    console.log('evv', fcmToken);
 } 
 TwilioVoiceModule.registerForCallInvites(fcmToken, this.state.twiliotoken)
        }
    
      callNumber(){
        TwilioVoiceModule.connect({To: this.state.phno});
      }
     
     
      /* Method for disconnect call */
      endCallAction() {
        this.callDisconnectHandler();
        var navigator = this.props.navigator;
        navigator.pop();
      }
     
      /*Init Twilio client methods and make call */
      InitTwilioClientMethods(){
        console.log('tw', TwilioVoiceModule)
     }
     
     
     /* call back for  device Did Start Listening*/
     deviceDidStartListening(){
      console.log('deviceDidStartListening');
     }
     
     
     /* call back for  device Did Stop Listening*/
     deviceDidStopListening(){
      console.log('deviceDidStopListening');
     }
     
     
     /* call back for  device Did Receive Incoming*/
     deviceDidReceiveIncoming(){
      console.log('deviceDidReceiveIncoming');
     }
     
     
     /* call back for  connection Did Start Connecting */
     connectionDidStartConnecting(){
      //this.setState({ statusMessage: 'Connecting...' });
     }
     
     /* call back for connection Did Connect */
     connectionDidConnect(){
      //this.setState({ statusMessage: 'Connected' });
     }
     
     
     /* call back for connection Did Disconnect */
     connectionDidDisconnect(){
      //this.setState({ statusMessage: 'DisConnected' });
     }
     
     
     /* call back for connection Did Fail */
     connectionDidFail(){
      //this.setState({ statusMessage: 'Connection Failed' });
     }
     
     
     /* Handler for disconnect call Twilio */
     callDisconnectHandler(){
      TwilioVoiceModule.disconnect();
     }
     
     /* Handler for accept incoming call Twilio */
     callAcceptHandler(){
      TwilioVoiceModule.accept();
     }
     
     /* Handler for reject incoming call Twilio*/
     callRejectHandler(){
      TwilioVoiceModule.reject();
     }
     
     /* Handler for ignore incoming call Twilio */
     callIgnoreHandler(){
      TwilioVoiceModule.ignore();
     }
     

render(){
return (
  <View style={styles.container}>
    <View
      style={{position: 'absolute',left: 0,top: 0, width: windowSize.width,height: windowSize.height,backgroundColor:'#343B44'}}/>
      <View style = {{flex: 1.1,backgroundColor: 'transparent',flexDirection: 'column',}}>
        <View style = {{justifyContent: 'flex-end',alignItems: 'center',flex: 1,backgroundColor: 'transparent'}}>
          <Text
            style={{color: '#FFFFFF',
            fontFamily: 'Montserrat-Regular',fontWeight: 'bold',
            fontSize:20,}}> {this.state.username}</Text>
        </View>

        <View style = {{justifyContent: 'flex-start',alignItems: 'center',flex: 1,backgroundColor: 'transparent'}}>
          <Text
            style={{color: '#6AF182',
            fontFamily: 'Montserrat-Regular',
            marginTop:10,
            fontSize:17,}}> {this.state.statusMessage} </Text>
        </View>

      </View>
      <Button title="select" onPress={this.select}>Test</Button>

      <View style = {{justifyContent: 'center',alignItems: 'center',flex: 2,backgroundColor: 'transparent'}}>
        <Image
          source={{uri: 'http://servicedrivetoday.com/wp-content/uploads/2015/10/shutterstock_285486080-512x342.jpg'}}
          style={{ width: 112,height: 112,borderRadius: 112/2}}/>
      </View>

      <View style = {{justifyContent: 'center',alignItems: 'center',flex: 1,backgroundColor: 'transparent'}}>
        <TouchableOpacity
          style={{justifyContent: 'center',alignItems: 'center',backgroundColor: 'transparent'}}
          onPress={() => this.endCallAction()}>
            <Text>Call...</Text>
        </TouchableOpacity>
      </View>

  </View>
);
}
}

var styles = StyleSheet.create({
    container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'transparent'
    },
   });
 