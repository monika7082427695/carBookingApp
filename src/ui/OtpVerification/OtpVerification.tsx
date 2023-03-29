import {
  Image,
  Text,
  View,
  StatusBar,
  Alert,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import imagePath from '../../constants/imagePath';

import CountryPicker from 'react-native-country-picker-modal';
import {showError, showSuccess} from '../../utils/helperFunction';
import styles from './styles';
import * as Animatable from 'react-native-animatable';
import navigationString from '../../constants/navigationString';
import {saveUserData} from '../../redux/actions/auth';
import colors from '../../styles/colors';

const OtpVerification = ({navigation}: any) => {
  const [countryCode, setcountryCode] = useState('IN');
  const [iso2, setiso2] = useState();
  const [callingCode, setcallingCode] = useState('91');
  const [PhoneNo, setPhoneNo] = useState(0);
  const [visible, setVisible] = useState(false);
  const [inputValue, setinputValue] = useState('');
  const [inputValue2, setinputValue2] = useState('');

  // const [seconds, setseconds] = useState(120);
  // useEffect(() => {
  // const intervalId = setInterval(() => {
  //   setseconds(prevSeconds => prevSeconds - 1);
  // }, 1000);
  //  const intervalId=  setTimeout(() => {
  //     console.log("2 sec.")
  // }, 2000);
  //   if (seconds === -1) {
  //     setseconds(5);
  //   }
  //   return () => clearTimeout(intervalId);
  //   // return clearInterval(intervalId)
  // }, [seconds]);
  const [code, setcode] = useState(30);
  const [codestart, setcodestart] = useState(true);
  useEffect(() => {
    fun();
  }, [code]);
  const fun = () => {
    const timer = setTimeout(() => {
      if (code > 0) {
        setcode(code - 1);
      }
    }, 1000);
    return () => clearTimeout(timer);
  };

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

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'transparent'} translucent />

      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <Image style={styles.imgStyle} source={imagePath.OnBoarding5} />

        <Text style={styles.textStyle}>Phone Verification</Text>
        <Text
          style={
            styles.textStyle2
          }>{`Verify your Phone Number through\n OTP `}</Text>

        <View style={{flex: 1}}>
          <View style={styles.viewStyle}>
            <CountryPicker
              withFilter
              withCallingCode={callingCode}
              // withCallingCodeButton={true}
              visible={visible}
              onClose={() => {
                setVisible(false);
              }}
              countryCode={countryCode}
              withFlagButton={true}
              excludeCountries={['AQ', 'BV', 'TF', 'HM', 'UM']}
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
              <Image style={styles.imgStyle2} source={imagePath.login} />
            </TouchableOpacity>
            <View style={styles.viewStyle2} />

            {/* <Text style={styles.texStyle3}>{'+' + callingCode + '-'}</Text> */}
            <TextInput
              value={'+' + callingCode + '-'}
              editable={false}
              style={styles.texStyle3}
            />
            <TextInput
              keyboardType="numeric"
              maxLength={10}
              onChangeText={val => handleInputChange(val)}
              style={styles.inputStyle}
            />
          </View>
        </View>
        <Animatable.View animation={'slideInUp'}>
          <View style={styles.viewStyle}>
            <TextInput
              placeholder="Enter 4-digit OTP"
              keyboardType="numeric"
              maxLength={4}
              // onChangeText={val => handleInputChange(val)}
              onChangeText={val => handleInputChange2(val)}
              style={styles.inputStyle}
              placeholderTextColor={colors._626273}
            />
          </View>
          {code == 0 ? (
            ''
          ) : (
            <View style={styles.viewStyle4}>
              <Text style={styles.textStyle5}>Resend again in </Text>
              <Text style={styles.textStyle6}>
                00:{code > 9 ? code : '0' + code}
              </Text>
            </View>
          )}
          <View>
            {code === 0 ? (
              <TouchableOpacity onPress={() => setcode(30)}>
                <Text style={styles.textStyle7}>Resend again</Text>
              </TouchableOpacity>
            ) : (
              ''
            )}
          </View>
        </Animatable.View>
      </ScrollView>

      <TouchableOpacity onPress={handleupdate} style={styles.touchStyle}>
        <Text style={styles.textStyle4}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OtpVerification;
