import { Dimension , Dimensions, PixelRatio } from 'react-native'


const {width,height} = Dimensions.get('window')

const widthdp = number =>{
   let givenwidth
   = typeof number === 'number' ? widthnumber :parseFloat(number);   
   
   return PixelRatio.roundToNearestPixel(layoutSize = (width * givenwidth) /100);
}    

const heightdp = number =>{
    let givenheight
    = typeof number === 'number' ? widthnumber :parseFloat(number);   
    
    return PixelRatio.roundToNearestPixel(layoutSize = (height * givenheight) /100);
 }  
 
 const listenOrentationChanges = ref =>{
     Dimensions.addEventListener(type = 'change',handler = (newDimension)=>{
         console.log(newDimension)
         width = newDimension.screen.width 
         heigh = newDimension.screen.height
     }
     )
 }
 
 export{
     widthdp,
     heightdp,
     listenOrentationChanges
}