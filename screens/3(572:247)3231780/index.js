import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f279/ec5f/fda2c03db7fe6ca3afc18b74acf7de1f"
        }}
        style={styles.ImageBackground_572_248}
      />
      <View style={styles.View_572_249}>
        <View style={styles.View_I572_249_8_36} />
        <View style={styles.View_I572_249_8_51}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67ce/4bb5/25857e0c713544668f524a4f7518b7bf"
            }}
            style={styles.ImageBackground_I572_249_8_52}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b36/25b2/ac6e400dbb11832bb84ee7a55991e78a"
            }}
            style={styles.ImageBackground_I572_249_8_53}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd54/a89d/5c3e97121a2f09ff13af4ad16165123d"
            }}
            style={styles.ImageBackground_I572_249_8_56}
          />
        </View>
        <View style={styles.View_I572_249_8_59}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df7c/8f9e/6b781ac7185e888cbb03df7c0b8e641d"
            }}
            style={styles.ImageBackground_I572_249_8_60}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e34/dccc/c33348fd5ec8f061c70eebc077658044"
            }}
            style={styles.ImageBackground_I572_249_8_61}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2c3/fe86/287ca379da875d4826f8b415c6ada88f"
            }}
            style={styles.ImageBackground_I572_249_8_64}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3801/24d6/79ed7859c987f019895939c9f545b1fa"
          }}
          style={styles.ImageBackground_I572_249_8_68}
        />
      </View>
      <View style={styles.View_572_253}>
        <View style={styles.View_572_254} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc96/b23f/6257459e8c4aa63b9f36a86f15144846"
          }}
          style={styles.ImageBackground_572_255}
        />
      </View>
      <View style={styles.View_572_257} />
      <View style={styles.View_572_258}>
        <Text style={styles.Text_572_258}>Enter Referral Code</Text>
      </View>
      <View style={styles.View_572_259}>
        <View style={styles.View_572_260}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30b2/cfcc/60b5e32ecf40615c0d45411d9f00ce43"
            }}
            style={styles.ImageBackground_572_261}
          />
        </View>
        <View style={styles.View_572_263}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37b4/af69/890e2efe70fa54019594d07c3aa256aa"
            }}
            style={styles.ImageBackground_572_264}
          />
        </View>
        <View style={styles.View_572_266}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37b4/af69/890e2efe70fa54019594d07c3aa256aa"
            }}
            style={styles.ImageBackground_572_267}
          />
        </View>
        <View style={styles.View_572_269}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74c6/a6a4/70ac8c0ce2cf2b9fedf6bce6cdc06465"
            }}
            style={styles.ImageBackground_572_270}
          />
        </View>
        <View style={styles.View_572_272}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd6b/d904/cb4fd4ca3783ce3fcf88d310dfcfd759"
            }}
            style={styles.ImageBackground_572_273}
          />
        </View>
        <View style={styles.View_572_275}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edcc/0938/9307a12aac51b9e7d7d3e50cffbda1eb"
            }}
            style={styles.ImageBackground_572_276}
          />
        </View>
      </View>
      <View style={styles.View_572_278}>
        <Text style={styles.Text_572_278}>Enter Referral code</Text>
      </View>
      <View style={styles.View_572_279}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74da/8d34/7ef2b80dfe75af78d3702274cbadf082"
          }}
          style={styles.ImageBackground_572_280}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f23/13f0/b7cb86a516a31c1bae5f886fe9f3445d"
          }}
          style={styles.ImageBackground_572_281}
        />
      </View>
      <View style={styles.View_572_284}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9835/7a7c/fc6a967401138fd81800395a7f15997d"
          }}
          style={styles.ImageBackground_572_285}
        />
        <View style={styles.View_572_289}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1be/cf8d/2021845278288eb128c7c2eddd832263"
            }}
            style={styles.ImageBackground_572_290}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b72e/bedb/b97776cd9df316054bc0f32e170502ef"
            }}
            style={styles.ImageBackground_572_291}
          />
        </View>
      </View>
      <View style={styles.View_572_314}>
        <Text style={styles.Text_572_314}>Welcome to LVRG</Text>
      </View>
      <View style={styles.View_572_315}>
        <Text style={styles.Text_572_315}>The Future of Trading is Here</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e34/a596/f8c510af6b65b3a0b740fe37282ce282"
        }}
        style={styles.ImageBackground_572_316}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_572_248: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("56.25%"),
    minHeight: hp("56.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-2.8125%")
  },
  View_572_249: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("3.75%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_249_8_36: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I572_249_8_51: {
    flexGrow: 1,
    width: wp("3.3333333333333335%"),
    height: hp("1.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.83333333333333%"),
    top: hp("0.9375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I572_249_8_52: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("1.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I572_249_8_53: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("1.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I572_249_8_56: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: hp("1.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I572_249_8_59: {
    flexGrow: 1,
    width: wp("2.2222222222222223%"),
    height: hp("2.03125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.05555555555556%"),
    top: hp("0.78125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I572_249_8_60: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("2.03125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I572_249_8_61: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("2.03125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I572_249_8_64: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("1.09375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I572_249_8_68: {
    flexGrow: 1,
    width: wp("8.685709635416666%"),
    height: hp("1.4837646484375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.888888888888889%"),
    top: hp("1.19232177734375%")
  },
  View_572_253: {
    width: wp("89.44444444444444%"),
    minWidth: wp("89.44444444444444%"),
    height: hp("28.749999999999996%"),
    minHeight: hp("28.749999999999996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("29.062500000000004%")
  },
  View_572_254: {
    width: wp("89.44444444444444%"),
    minWidth: wp("89.44444444444444%"),
    height: hp("28.749999999999996%"),
    minHeight: hp("28.749999999999996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.20000000298023224,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  ImageBackground_572_255: {
    width: wp("89.44444444444444%"),
    minWidth: wp("89.44444444444444%"),
    height: hp("28.749999999999996%"),
    minHeight: hp("28.749999999999996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_572_257: {
    width: wp("76.11111111111111%"),
    minWidth: wp("76.11111111111111%"),
    height: hp("6.71875%"),
    minHeight: hp("6.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.666666666666666%"),
    top: hp("41.875%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_572_258: {
    width: wp("38.611111111111114%"),
    minWidth: wp("38.611111111111114%"),
    minHeight: hp("3.28125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.944444444444443%"),
    top: hp("43.90625%")
  },
  Text_572_258: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_259: {
    width: wp("7.777772479587131%"),
    minWidth: wp("7.777772479587131%"),
    height: hp("2.8532597422599792%"),
    minHeight: hp("2.8532597422599792%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("43.70922088623047%")
  },
  View_572_260: {
    width: wp("2.36715210808648%"),
    height: hp("1.331523209810257%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7053154839409714%")
  },
  ImageBackground_572_261: {
    width: wp("2.36715210808648%"),
    height: hp("1.331523209810257%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_572_263: {
    width: wp("1.6908045609792075%"),
    height: hp("0.951077714562416%"),
    top: hp("0.7608413696289062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6763458251953125%")
  },
  ImageBackground_572_264: {
    width: wp("1.6908045609792075%"),
    height: hp("0.951077714562416%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_572_266: {
    width: wp("1.6908048258887396%"),
    height: hp("0.951077714562416%"),
    top: hp("0.7608413696289062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.386615329318577%")
  },
  ImageBackground_572_267: {
    width: wp("1.6908048258887396%"),
    height: hp("0.951077714562416%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_572_269: {
    width: wp("4.396130508846706%"),
    height: hp("1.331523209810257%"),
    top: hp("1.5217399597167969%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690826416015625%")
  },
  ImageBackground_572_270: {
    width: wp("4.396130508846706%"),
    height: hp("1.331523209810257%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_572_272: {
    width: wp("2.3912604649861655%"),
    height: hp("0.9510868042707444%"),
    top: hp("1.9021797180175781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.000008477105035709087%")
  },
  ImageBackground_572_273: {
    width: wp("2.3912604649861655%"),
    height: hp("0.9510868042707444%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_572_275: {
    width: wp("2.391136752234565%"),
    height: hp("0.9510868042707444%"),
    top: hp("1.9021797180175781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.386632283528648%")
  },
  ImageBackground_572_276: {
    width: wp("2.391136752234565%"),
    height: hp("0.9510868042707444%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_572_278: {
    width: wp("26.38888888888889%"),
    minWidth: wp("26.38888888888889%"),
    minHeight: hp("2.34375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.777777777777777%"),
    top: hp("37.8125%")
  },
  Text_572_278: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_279: {
    width: wp("7.777777777777778%"),
    minWidth: wp("7.777777777777778%"),
    height: hp("4.375%"),
    minHeight: hp("4.375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.666666666666666%"),
    top: hp("31.093749999999996%")
  },
  ImageBackground_572_280: {
    width: wp("7.777777777777778%"),
    minWidth: wp("7.777777777777778%"),
    height: hp("4.375%"),
    minHeight: hp("4.375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_572_281: {
    width: wp("5.000001059638129%"),
    height: hp("2.8125%"),
    top: hp("0.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%")
  },
  View_572_284: {
    width: wp("18.333333333333332%"),
    minWidth: wp("18.333333333333332%"),
    height: hp("10.3125%"),
    minHeight: hp("10.3125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.833333333333336%"),
    top: hp("52.65625000000001%")
  },
  ImageBackground_572_285: {
    width: wp("18.333333333333332%"),
    minWidth: wp("18.333333333333332%"),
    height: hp("10.3125%"),
    minHeight: hp("10.3125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_572_289: {
    width: wp("15.555555555555555%"),
    minWidth: wp("15.555555555555555%"),
    height: hp("8.75%"),
    minHeight: hp("8.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%"),
    top: hp("0.78125%")
  },
  ImageBackground_572_290: {
    width: wp("15.555555555555555%"),
    minWidth: wp("15.555555555555555%"),
    height: hp("8.75%"),
    minHeight: hp("8.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_572_291: {
    width: wp("9.722222222222223%"),
    height: hp("5.46875%"),
    top: hp("1.5625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777786%")
  },
  View_572_314: {
    width: wp("84.16666666666667%"),
    minWidth: wp("84.16666666666667%"),
    minHeight: hp("4.53125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.166666666666666%"),
    top: hp("16.5625%")
  },
  Text_572_314: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_315: {
    width: wp("63.05555555555556%"),
    minWidth: wp("63.05555555555556%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.166666666666666%"),
    top: hp("21.09375%")
  },
  Text_572_315: {
    color: "rgba(18, 116, 231, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_572_316: {
    width: wp("31.11111111111111%"),
    minWidth: wp("31.11111111111111%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("7.968749999999999%"),
    resizeMode: "cover"
  },
  View_2: { height: 640 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
