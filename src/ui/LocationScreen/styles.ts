import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from '../../styles/responsiveSize'
import colors from '../../styles/colors'
import commonStyles from '../../styles/commonStyles'


const styles = StyleSheet.create({
    viewStyle:{
       height:moderateScale(149),
       backgroundColor:colors._5C5DFF,
   
    },
    viewStyle2:{
backgroundColor:colors._7475FE,
marginRight:moderateScale(56),
marginLeft:moderateScale(8),
height:moderateScale(40),
borderRadius:moderateScale(8),
marginTop:moderateScale(44),
flexDirection:'row',
justifyContent:'space-between'
    },
       imgStyle:{
height:moderateScale(24),
width:moderateScale(24),
marginLeft:moderateScale(16),
marginTop:moderateScale(44)
       } ,
       imgStyle2:{
        marginTop:moderateScale(60),
        height:moderateScale(64),
        marginLeft:moderateScale(16)
       },
       inputStyle:{
        ...commonStyles.fontBold16 ,
        paddingLeft:moderateScale(16),
        alignContent:'center',
        justifyContent:'center',
        color:colors._F2F2FA,
        flex:1
        
       },
       imgStyle3:{
        height:moderateScale(24),
        width:moderateScale(24),
        marginRight:moderateScale(8),
       alignSelf:'center'
       },
       searchtextStyle:{
        ...commonStyles.fontBold16,
        color:colors._050533,
        marginTop:moderateScale(16),
        marginLeft:moderateScale(16)
       },
       timerimgStyle:{
        marginTop:moderateScale(24),
        marginLeft:moderateScale(16)
       },
       viewStyle3:{
        marginTop:moderateScale(28),
        marginLeft:moderateScale(16)
       },
       textStyle:{
        ...commonStyles.fontBold16,
        color:colors._050533,
       },
       textStyle2:{
        ...commonStyles.fontBold14,
        color:colors._626273,
       },
       textStyle3:{
        ...commonStyles.fontBold16,
        color:colors._5C5DFF
       }
   
})
export default styles