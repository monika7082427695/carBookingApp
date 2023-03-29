import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';

const Ridelist = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.headerView}>
        <Image style={styles.headerimg} source={imagePath.location} />
        <View
          style={{
         flex: 1,
            flexDirection: 'row',
            
          }}>
          <View style={{...styles.container,flexDirection:'row'}}>
           <View>
           <Text style={styles.headertext}>Chandigarh - Shimla </Text>
            <Text style={styles.headersubtext}>Feb 14 .2 Passenger</Text>
           </View>

            <Image style={styles.headerimg2} source={imagePath.editimg} />
          </View>
        </View>
        <View>
          <Image style={styles.headerimg3} source={imagePath.filter} />
        </View>
      </View>
      <View style={{}}></View>
    </View>
  );
};

export default Ridelist;
