import { Dimensions, PixelRatio } from "react-native";
const { width, height } = Dimensions.get("window");


/**
 * @param {number} number 
 * @returns actual width according to the device screen width. 
 */
const WIDTH = (number) => {
    let givenWidth = typeof number === 'number' ? number : parseFloat(number);
    return PixelRatio.roundToNearestPixel((width * givenWidth) / 100);
}


/**
 * @param {number} number 
 * @returns actual height according to the device screen height.
 */
const HEIGHT = (number) => {
    let givenHeight = typeof number === "number" ? number : parseFloat(number);
    return PixelRatio.roundToNearestPixel((height * givenHeight) / 100);
}

export { WIDTH, HEIGHT };