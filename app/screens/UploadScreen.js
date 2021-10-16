import React from 'react';
import { View ,StyleSheet, Modal} from 'react-native';
import Progress from "react-native-progress/Bar"
  import LottieView from "lottie-react-native"
import colors from '../config/colors';

function  UploadScreen({progress=0,visible=false,onDone}) {
 return (
     <Modal visible={visible}>
         <View style={styles.container}>
             {progress < 1 ? <Progress progress={progress} width={200} color={colors.primary} /> :
        <LottieView
        loop={false}
        autoPlay={true}
        style={{ width: 200, height: 200 }}
        onAnimationFinish={onDone}
        source={require("../assets/animations/done.json")} />}
        </View>
     </Modal>
    );
}
const styles = StyleSheet.create({
   container: {
        flex: 1,
        justifyContent: "center",
       alignItems:"center"
   }
})
export default UploadScreen;