/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   ImageBackground,
   Image,
   TouchableOpacity
 } from 'react-native';
 import { Appbar } from 'react-native-paper';
 
 const Home = (props) => {
   const [count, setCount] = useState(5)
 
   
   return (
     <SafeAreaView>
         <Appbar.Header>
      <Appbar.Content title="Valkyrie Sky" subtitle="The journey Of a lifetime" />
      <Appbar.Action icon="magnify"/>
      <Appbar.Action icon="dots-horizontal"/>
    </Appbar.Header>
         <ImageBackground
   source={require('./images/photo.png')}
   resizeMode= 'cover'
   style={{ width: '100%',
   height: '100%',
    }}
 > 
 <View style={styles.top}/>
 <View style={styles.overlay}>
   <View style={styles.middleContainer}>
 <Text style={styles.largeText}>McWay Falls, United States</Text>
 <View style={styles.row}>
 <Image
         style={styles.imageStyle}
         source={require('./images/star1.png')}
       />
       <Text style={styles.smallTextStyle}>{" "}5</Text>
       <View style={styles.commonWidth}/>
       <Image
         style={styles.imageStyle}
         source={require('./images/time.png')}
       />
       <Text style={styles.smallTextStyle}>{" "}7 Hours</Text>
       <View style={styles.commonWidth}/>
       <Image
         style={styles.imageStyle}
         source={require('./images/plane.png')}
       />
       <Text style={styles.smallTextStyle}>{" "}200 Km</Text>
   </View>
   <View style={styles.row}>
       <View style={styles.buttonContainer}>
         <View
         style={styles.row2}>
           <TouchableOpacity style={styles.backgroundWidthHeight} onPress={() => setCount(count -1)}>
           <Text>-</Text>
           </TouchableOpacity>
            <View style={{justifyContent : 'center'}}>
           <Text>{count}</Text>
           </View>
           <TouchableOpacity style={styles.backgroundWidthHeight} onPress={() => setCount(count + 1)}>
           <Text>+</Text>
           </TouchableOpacity>
         </View>
       </View>
       <View style={styles.commonWidth}/>
       <View style={{flexDirection : 'row', marginTop : 10}}>
       <Image
         style={styles.imageStyle}
         source={require('./images/time.png')}
       />
       <Text>{" "}5 Days</Text>
       </View>
   </View>
 </View>
 <View style={styles.secondOverlay}>
   <View style={styles.row3}>
     <Text style={styles.firstText}>Descriptions</Text>
     <Text style={styles.secondText}>Facility</Text>
    </View>
    <View style={styles.lastTextContainer}>
      <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
     </View>
 </View>
 <View style={styles.bottomOverlay}>
   <View style={styles.row4}>
   <Text style={styles.numericText}>$450</Text>
   <TouchableOpacity style={styles.bottomButtonStyle} onPress={() => props.navigation.navigate('Form')}>
   <Text style={styles.insideText}>Book a Tour</Text>
   </TouchableOpacity>
   </View>
 </View>
 </View>
 </ImageBackground>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   numericText : {
  color : '#ffffff',
  fontSize : 18,
  fontWeight : '600'
   },
   insideText : {
    color : '#5f27cd',
    textAlign : 'center',
    fontWeight : '500'
   },
   bottomButtonStyle : {
   backgroundColor : '#ffffff',
   justifyContent : 'center',
   width : 100,
   height : 35,
   borderRadius : 10
   },
   row4 : {
     marginTop : 20,
   flexDirection : 'row',
   justifyContent : 'space-between',
   width : '85%',
   alignSelf : 'center',
   },
   bottomOverlay : {
     borderRadius : 15,
     backgroundColor : '#8854d0',
     height : '20%',
     marginTop : -13
   },
   lastTextContainer : {
  width : '85%',
  alignSelf : 'center',
  marginTop : 5
   },
   firstText : {
  fontSize : 15,
  color : '#c56cf0',
  fontWeight : 'bold'
   },
   secondText : {
     fontSize : 15,
     fontWeight : '600'
   },
   secondOverlay : {
     borderRadius : 30,
     height : '33%',
     backgroundColor : '#ffffff'
   },
   largeText : {
     fontSize : 20,
     fontWeight : 'bold',
     color : '#000000'
   },
   backgroundWidthHeight : {
     height : 25,
     elevation : 2,
     backgroundColor : '#7158e2',
     width : 15,
     alignItems : 'center',
     justifyContent : 'center'
   },
   smallTextStyle : {
     color : '#000000',
     fontWight : '100'
   },
   buttonContainer : {
     height : 40,
     width : 90,
     borderRadius :17,
     backgroundColor : '#9c88ff',
     justifyContent : 'center'
   },
   imageStyle : {
      width : 17, 
      height : 17
 },
 commonWidth : {
   width : '5%'
 },
   row : {
     flexDirection : 'row',
     marginTop : 20
   },
   row3 : {
     flexDirection : 'row',
     marginTop : 15,
     justifyContent : 'space-between',
     width : '50%',
     alignSelf : 'center'
   },
   row2 : {
     flexDirection : 'row',
     justifyContent : 'space-around'
   },
   top : {
     height : '30%',
   },
   overlay : {
     height : '70%',
     borderRadius : 30,
     backgroundColor : '#f1f2f6'
   },
   middleContainer : {
     height : '30%',
     marginTop : 15,
     width : '85%',
     alignSelf : 'center'
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default Home;
 