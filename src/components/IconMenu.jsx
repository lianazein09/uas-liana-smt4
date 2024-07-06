import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackgroundBase,
} from 'react-native';
import React from 'react';

const IconMenu = ({label}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Image style={styles.box} />
      </View>
      <Text style={{color: 'white'}}>{label}</Text>
    </TouchableOpacity>
  );
};

export default IconMenu;

const styles = StyleSheet.create({
  container: {
    //borderwidth: 1,
    margin: 5,
    padding: 5,
    width: 84,
    justifyContent: 'center',
    alignContent: 'center',
  },
  box: {
    borderWidth: 1,
    width: 72,
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    borderColor: 'red',
  },
});
