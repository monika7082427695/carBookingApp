import {Image, Text, View, TouchableOpacity,StatusBar} from 'react-native';
import React from 'react';
import imagePath from '../../constants/imagePath';
import styles from './styles';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {useState} from 'react';
import {width} from '../../styles/responsiveSize';
import navigationString from '../../constants/navigationString';
import { getItem } from '../../utils/utils';
import { iteratorSymbol } from 'immer/dist/internal';


const OnBoarding = ({navigation}:any) => {
  const [first, setfirst] = useState(0);
  
  const data = [
    {
      img: imagePath.OnBoarding,
      id:1,
      title: 'Free Pick up and Drop',
      subtitle: `Amet minim mollit non deserunt ullamco\nest sit aliqua dolor do amet sint. Velit\nofficia `,
    },
    {
      img: imagePath.OnBoarding2,
      id:2,
      title: 'Always on Time',
      subtitle: `Amet minim mollit non deserunt ullamco\nest sit aliqua dolor do amet sint. Velit\nofficia `,
    },
    {
      img: imagePath.OnBoarding3,
      id:3,
      title: 'Safe and Secure Trip',
      subtitle: `Amet minim mollit non deserunt ullamco\nest sit aliqua dolor do amet sint. Velit\nofficia `,
    },
  ];
  
  return (
    <View style={{flex: 1}}>
       <StatusBar backgroundColor={'transparent'} translucent />
      <View>
        <SwiperFlatList
       autoplay
          autoplayDelay={2}
          autoplayLoop
          index={2}
          onChangeIndex={text => setfirst(text.index)}
          paginationActiveColor="transparent"
          paginationDefaultColor="transparent"
          showPagination
          data={data}
          renderItem={({item}) => (
            <View style={{flex: 1, width: width}}>
              <Image style={styles.imgStyle} source={item.img} />
              <Text style={styles.titleStyle}>{item.title}</Text>
              <Text style={styles.subTitleStyle}>{item.subtitle}</Text>
            </View>
          )}
        />
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <View style={styles.viewStyle2}>
        {data.map((item, index) => {
          return (
            <View
              style={
                index == first
                  ? styles.viewStyleActive
                  : styles.viewStyleInactive
              }
            />
          );
        })}
      </View>

      <TouchableOpacity
      onPress={()=>navigation.navigate(navigationString.HOME)}
        style={styles.touchStyle}>
        <Text style={styles.textStyle}>Skip</Text>
        <Image
        style={styles.imgStyle2}
          source={imagePath.OnBoarding6}
        />
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBoarding;
