import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export default {
   colors:{
    //  colors
     primary: "#2a65c8",
     secondary:"#2a65c8",
     
     
     confirm: "#38a169",
     cancel : "#e53e3e  ", 
     
      
     shape: '#FFFFFF',
     title: "#1c1b22",
     text:"#2a2a2e",
     
     background: "#fdfdfd",

   },
  // fonts
   fonts:{
     regular: 'Poppins_400Regular',
     medium: 'Poppins_500Medium',
     bold: 'Poppins_700Bold'
   },

   fontSize: {
      layout:'32px',
      title:'16px',
      subtitle:'14px',
      description:'10px'
   },

  //  proporção
   marginSpace:{
      pp:`${RFPercentage(2)}px`,
      p: `${RFPercentage(5)}px`,
      m:`${RFPercentage(10)}px`,
      g: `${RFPercentage(25)}px`,
      gg: `${RFPercentage(50)}px`,
   },
   iconSpace:{
    pp:`${RFValue(2)}px`,
    p: `${RFValue(5)}px`,
    m:`${RFValue(10)}px`,
    g: `${RFValue(25)}px`,
    gg: `${RFValue(50)}px`,
   }
}  