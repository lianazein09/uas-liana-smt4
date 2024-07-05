import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Pressable,
  StatusBar,
  Image,
  SafeAreaView,
  MaterialCommunityIcons,
} from 'react-native';
import React from 'react';
import IconMenu from '../components/IconMenu';
import { TabActions } from '@react-navigation/native';

const Data = [
  {id: 1, label: 'Cerita Anda'},
  {id: 2, label: 'meifintl_440'},
  {id: 3, label: 'nindia.pcc_'},
  {id: 4, label: 'dianaulfa97'},
  {id: 5, label: 'amilats_sh'},

];
const Data1  =[
{id: 6, label: 'Ria Ricis'},
];

const Home = ({navigation}) => {
  return (
    <View style={styles.container} backgroundColor="black">
      <Image source={{uri:'https://asset-2.tstatic.net/batam/foto/bank/images/ilustrasi-instagram-resmi-merilis-fitur-darkmode-selamat-datang-di-instagram-dark-mode.jpg'}}
             style={{width:150, height:40}} 
      />
      <FlatList
        data={Data}
        renderItem={({item}) => <IconMenu label={item.label} />}
        horizontal={true}
      />
      <FlatList
        data={Data1}
        renderItem={({item}) => <IconMenu label={item.label} />}
        horizontal={true}
        vertical={true}
      />
      <Image source={{uri:'https://akcdn.detik.net.id/visual/2023/11/17/moana-anak-ria-ricis-1.jpeg?w=450&q=90'}}
             style={{width:370, height:300}}
      />
      <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4E5JZUIEpo2TEG-1F2KLsPwfqM9kbYcPMRS6NAK4vFpAXtjoNIT0T85ARPXkVd7_DcSk&usqp=CAU'}}
             style={{width:400, height:50 }}
      />
      <Text style={{color: 'white'}}>Disukai oleh lianazein dan 130.273 lainnya</Text>
      <Text style={{color: 'white'}}>riaricis929 selamat holiday semuaaa...</Text>
      <Text style={{color: 'white'}}>1 jam yang lalu</Text>                               
    </View>

  );
};

export default Home;

const styles = StyleSheet.create({
  btn: {
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'red',
  },
  txt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});
