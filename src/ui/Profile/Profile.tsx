import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {NativeViewGestureHandler} from 'react-native-gesture-handler';
import styles from './styles';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import {moderateScale} from '../../styles/responsiveSize';
import Profilecomp from '../../Components/Profilecomp';
import strings from '../../constants/lang';

const Profile = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        {/* <Image style={styles.imgStyle} source={imagePath.profilebackarrow} />
        < View  style={{flex:0.9,alignItems:"center"}}> */}
          <Text style={styles.textStyle}>My profile</Text>
          {/* </View> */}
        
      </View>
      <ScrollView style={{flex:1,backgroundColor:colors._E9E9F5}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: colors._E9E9F5,
        }}>
        <Image
          style={{marginTop: moderateScale(50)}}
          source={imagePath.Profilepicture}
        />
        <Text style={styles.profileimgtext}>Parveen Kumar</Text>
        <Text style={styles.profileimgtext2}>+91-9511 234 850</Text>
      </View>
     
      <View style={styles.bottomview}>
        <Profilecomp
          image={imagePath.Editprofile}
          Name={strings.edit}
          bk_icon={imagePath.Expandrighticon}
        />
        <Profilecomp
          image={imagePath.Settingicon}
          Name={strings.setting}
          bk_icon={imagePath.Expandrighticon}
        />
        <Profilecomp
          image={imagePath.adress}
          Name={strings.Address}
          bk_icon={imagePath.Expandrighticon}
        />
        <Profilecomp
          image={imagePath.completekyc}
          Name={strings.KYC}
          bk_icon={imagePath.Expandrighticon}
        />
        <Profilecomp
          image={imagePath.Refer}
          Name={strings.Refer}
          bk_icon={imagePath.Expandrighticon}
        />
        <View style={styles.logoutBtn}>
          <Image source={imagePath.logout}/>
          <Text style={styles.logoutText}>{strings.Logout}</Text>

        </View>
      </View>
      </ScrollView>
      
    </View>
  );
};

export default Profile;
