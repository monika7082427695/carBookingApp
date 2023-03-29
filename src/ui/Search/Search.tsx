import React, {useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import RBSheet from 'react-native-raw-bottom-sheet';
import SwiperFlatList from 'react-native-swiper-flatlist';
import imagePath from '../../constants/imagePath';
import navigationString from '../../constants/navigationString';
import colors from '../../styles/colors';
import {showError} from '../../utils/helperFunction';
import styles from './styles';

const Search = ({navigation}: any) => {
  // const [value, setValue] = useState('');
  const [first, setfirst] = useState(0);
  const [countryCode, setcountryCode] = useState('IN');
  // const [iso2, setiso2] = useState();
  const [callingCode, setcallingCode] = useState('91');
  const [visible, setVisible] = useState(false);
  const [inputValue, setinputValue] = useState('');
  const [inputValue2, setinputValue2] = useState('');
  const toggleDropdown = () => {
    setVisible(true);
  };

  const handleInputChange = (text: string) => {
    setinputValue(text);
  };
  const handleInputChange2 = (text2: string) => {
    setinputValue2(text2);
  };

  const handleupdate = () => {
    if (inputValue.trim().length == 0) {
      showError('this field is required');
    } else if (inputValue2.trim().length == 0) {
      showError('this field is required');
    } else {
      // saveUserData({access_token:"test"})
      navigation.navigate(navigationString.TABROUTES);
    }
  };

  const refRBSheet = useRef();
  const data = [
    // {
    //   title:'Myself'
    // },
    {
      title: 'Book Rides for others',
    },
  ];

  const list = [
    {
      img: imagePath.Search8,
    },
    {
      img: imagePath.Search8,
    },
    {
      img: imagePath.Search8,
    },
  ];
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'transparent'} translucent />

      <ImageBackground
        style={styles.backimgStyle}
        source={imagePath.HomeScreen8}
      />
      <View style={styles.viewStyle}>
        <View style={styles.viewStyle2}>
          <Image style={styles.imgStyle} source={imagePath.Search} />

          <Text style={styles.textStyle7}>Myself</Text>
          <TouchableOpacity onPress={() => refRBSheet.current.open()}>
            <Image style={styles.imgStyle6} source={imagePath.Search2} />
          </TouchableOpacity>
          <RBSheet
            ref={refRBSheet}
            height={375}
            // closeOnDragDown={true}
            closeOnPressMask={false}
            customStyles={{
              wrapper: {
                // backgroundColor: 'transparent',
              },
              container: {
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
              },
            }}>
            <View style={{flex: 1}}>
              <Text style={styles.BottomtextStyle}>Book rides for others</Text>

              <Text style={styles.BottomtextStyle2}>
                {
                  'Enter Persons Phone No. so that they can also get\nDriver and car details via SMS'
                }
              </Text>

              <View style={styles.viewStyle3}>
                <Image style={styles.imgStyle2} source={imagePath.Search7} />
                <TextInput
                  onChangeText={handleInputChange2}
                  style={{...styles.inputStyle}}
                  placeholder="Name"
                  placeholderTextColor={colors._626273}
                />
              </View>
              <View style={{flex: 1}}>
                <View style={styles.viewStyle8}>
                  <CountryPicker
                    withFilter
                    visible={visible}
                    onClose={() => {
                      setVisible(false);
                    }}
                    countryCode={countryCode}
                    withFlagButton={true}
                     withCallingCode={callingCode}
                    //  withCallingCodeButton={true}
                    // cca2={iso2}
                    excludeCountries={['AQ', 'BV', 'TF', 'HM', 'UM']}
                    // theme={styles.countrycode}
                    onSelect={country => {
                      const {cca2, callingCode} = country;
                      setcountryCode(cca2);
                      setcallingCode(country?.callingCode);
                    }}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      toggleDropdown();
                    }}>
                    <Image style={styles.imgStyle5} source={imagePath.login} />
                  </TouchableOpacity>
                  <View style={styles.viewStyle9} />
                  <Text style={styles.texStyle3}>
                    {'+' + callingCode + '-'}
                  </Text>
                  <TextInput
                    keyboardType="numeric"
                    maxLength={10}
                    onChangeText={val => handleInputChange(val)}
                    style={styles.inputStyle2}
                  />
                </View>
              </View>
            </View>
            <View style={styles.viewStyle5}>
              <TouchableOpacity
                onPress={handleupdate}
                style={styles.touchStyle}>
                <Text style={styles.textStyle4}>Start Booking</Text>
              </TouchableOpacity>
            </View>
          </RBSheet>
          {/* <Dropdown
          style={styles.dropdownStyle}
           placeholderStyle={styles.placeholderStyle}
          // selectedTextStyle={styles.selectedTextStyle}
          // inputSearchStyle={styles.inputSearchStyle}
          // iconStyle={styles.iconStyle}
          data={data}
          // search
          maxHeight={300}
          labelField="title"
          // valueField={value}
          // valueField="value"
          renderLeftIcon={() => (
            <Image source={imagePath.Search} style={styles.imgStyle} />
          )}
          renderRightIcon={() => (
            <Image source={imagePath.Search2} style={styles.imgStyle} />
          )}
          placeholder="Myself"
          // searchPlaceholder="Search..."
          value={value}
          onChange={item => {
            setValue(item.label);
          }}
        /> */}
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate(navigationString.LOCATIONSCREEN)}
          style={styles.viewStyle3}>
          <Image style={styles.imgStyle2} source={imagePath.Search3} />
          <TextInput
            style={styles.inputStyle}
            placeholder="Enter Pick up Location"
            placeholderTextColor={colors._626273}
          />
          <Image source={imagePath.Search4} style={styles.imgStyle3} />
        </TouchableOpacity>
        <View style={styles.viewStyle3}>
          <Image style={styles.imgStyle2} source={imagePath.Search5} />
          <TextInput
            style={{...styles.inputStyle}}
            placeholder="Where to?"
            placeholderTextColor={colors._626273}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.viewStyle4}>
            <Image style={styles.imgStyle2} source={imagePath.Search6} />
            <TextInput
              style={styles.inputStyle}
              placeholder="Date"
              placeholderTextColor={colors._626273}
            />
          </View>
          <View style={styles.viewStyle7}>
            <Image style={styles.profileimg} source={imagePath.Search7} />
            <TouchableOpacity>
              <Text style={{alignSelf: 'center', color: colors._626273}}>
                {' '}
                - +
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.viewStyle5}>
          <TouchableOpacity
       onPress={() => navigation.navigate(navigationString.RIDELIST)}
          
          style={styles.touchStyle}>
            <Text style={styles.textStyle4}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
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
          data={list}
          renderItem={({item}) => (
            <View>
              <Image style={styles.imgStyle4} source={item.img} />
            </View>
          )}
        />
        <View style={styles.viewStyle6}>
          <View style={{flexDirection: 'row'}}>
            {list.map((item, index) => {
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
        </View>
      </View>
    </View>
  );
};

export default Search;
