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
        style={styles.ImageBackground_572_155}
      />
      <View style={styles.View_572_156}>
        <View style={styles.View_I572_156_8_36} />
        <View style={styles.View_I572_156_8_51}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67ce/4bb5/25857e0c713544668f524a4f7518b7bf"
            }}
            style={styles.ImageBackground_I572_156_8_52}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b36/25b2/ac6e400dbb11832bb84ee7a55991e78a"
            }}
            style={styles.ImageBackground_I572_156_8_53}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd54/a89d/5c3e97121a2f09ff13af4ad16165123d"
            }}
            style={styles.ImageBackground_I572_156_8_56}
          />
        </View>
        <View style={styles.View_I572_156_8_59}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df7c/8f9e/6b781ac7185e888cbb03df7c0b8e641d"
            }}
            style={styles.ImageBackground_I572_156_8_60}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e34/dccc/c33348fd5ec8f061c70eebc077658044"
            }}
            style={styles.ImageBackground_I572_156_8_61}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2c3/fe86/287ca379da875d4826f8b415c6ada88f"
            }}
            style={styles.ImageBackground_I572_156_8_64}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3801/24d6/79ed7859c987f019895939c9f545b1fa"
          }}
          style={styles.ImageBackground_I572_156_8_68}
        />
      </View>
      <View style={styles.View_572_157}>
        <Text style={styles.Text_572_157}>Welcome to LVRG</Text>
      </View>
      <View style={styles.View_572_158}>
        <Text style={styles.Text_572_158}>The Future of Trading is Here</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e34/a596/f8c510af6b65b3a0b740fe37282ce282"
        }}
        style={styles.ImageBackground_572_159}
      />
      <View style={styles.View_572_160}>
        <View style={styles.View_572_161} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e677/03ec/80f0f9a8e3caaba81cc04092e6342526"
          }}
          style={styles.ImageBackground_572_162}
        />
      </View>
      <View style={styles.View_572_163}>
        <Text style={styles.Text_572_163}>Login</Text>
      </View>
      <View style={styles.View_572_164}>
        <Text style={styles.Text_572_164}>Create Account</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88cb/a073/e51de33fe826bf53a13824448c9b3f3c"
        }}
        style={styles.ImageBackground_572_165}
      />
      <View style={styles.View_572_172}>
        <View style={styles.View_572_173} />
        <View style={styles.View_572_174}>
          <Text style={styles.Text_572_174}>Learn Forex Trading for free</Text>
        </View>
      </View>
      <View style={styles.View_572_193}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc0f/4fc2/c8c42353e63268b8bdca90a562d8eb06"
          }}
          style={styles.ImageBackground_572_194}
        />
        <View style={styles.View_572_198}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f25/28ee/cdc92f584a78d705ebafb1754873fbe6"
            }}
            style={styles.ImageBackground_572_199}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3996/0bd6/b5c55d5f383b967a5506d59d16c9f7e1"
            }}
            style={styles.ImageBackground_572_200}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52b7/98ab/44470eead5a4a3dda7123277be7aff81"
        }}
        style={styles.ImageBackground_572_227}
      />
      <View style={styles.View_572_230} />
      <View style={styles.View_572_231}>
        <Text style={styles.Text_572_231}>Enter Password</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6261/7ad9/0e9b85acc19aa02c1c238ae46dc383fc"
        }}
        style={styles.ImageBackground_572_235}
      />
      <View style={styles.View_572_233} />
      <View style={styles.View_572_234}>
        <Text style={styles.Text_572_234}>Enter Name</Text>
      </View>
      <View style={styles.View_572_237} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb63/e641/dfa5498f742ffa7dad29b33aa1d6d60a"
        }}
        style={styles.ImageBackground_572_239}
      />
      <View style={styles.View_572_238}>
        <Text style={styles.Text_572_238}>Enter Email</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_572_155: {
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
  View_572_156: {
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
  View_I572_156_8_36: {
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
  View_I572_156_8_51: {
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
  ImageBackground_I572_156_8_52: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("1.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I572_156_8_53: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("1.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I572_156_8_56: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: hp("1.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I572_156_8_59: {
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
  ImageBackground_I572_156_8_60: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("2.03125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I572_156_8_61: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("2.03125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I572_156_8_64: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("1.09375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I572_156_8_68: {
    flexGrow: 1,
    width: wp("8.685709635416666%"),
    height: hp("1.4837646484375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.888888888888889%"),
    top: hp("1.19232177734375%")
  },
  View_572_157: {
    width: wp("84.16666666666667%"),
    minWidth: wp("84.16666666666667%"),
    minHeight: hp("4.53125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.166666666666666%"),
    top: hp("16.5625%")
  },
  Text_572_157: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_158: {
    width: wp("63.05555555555556%"),
    minWidth: wp("63.05555555555556%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.166666666666666%"),
    top: hp("21.09375%")
  },
  Text_572_158: {
    color: "rgba(18, 116, 231, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_572_159: {
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
  View_572_160: {
    width: wp("89.44444444444444%"),
    minWidth: wp("89.44444444444444%"),
    height: hp("50.78125%"),
    minHeight: hp("50.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.833333333333333%"),
    top: hp("29.21875%")
  },
  View_572_161: {
    width: wp("89.44444444444444%"),
    minWidth: wp("89.44444444444444%"),
    height: hp("50.78125%"),
    minHeight: hp("50.78125%"),
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
  ImageBackground_572_162: {
    width: wp("89.44444444444444%"),
    minWidth: wp("89.44444444444444%"),
    height: hp("50.78125%"),
    minHeight: hp("50.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_572_163: {
    width: wp("12.222222222222221%"),
    minWidth: wp("12.222222222222221%"),
    minHeight: hp("3.4375000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("32.1875%")
  },
  Text_572_163: {
    color: "rgba(102, 109, 128, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_164: {
    width: wp("41.94444444444444%"),
    minWidth: wp("41.94444444444444%"),
    minHeight: hp("3.4375000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.65193006727431%"),
    top: hp("32.15740203857422%")
  },
  Text_572_164: {
    color: "rgba(0, 12, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_572_165: {
    width: wp("37.77777777777778%"),
    minWidth: wp("37.77777777777778%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.611111111111114%"),
    top: hp("36.5625%")
  },
  View_572_172: {
    width: wp("68.05555555555556%"),
    minWidth: wp("68.05555555555556%"),
    height: hp("6.875000000000001%"),
    minHeight: hp("6.875000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.38888888888889%"),
    top: hp("90.78125%")
  },
  View_572_173: {
    width: wp("68.05555555555556%"),
    minWidth: wp("68.05555555555556%"),
    height: hp("6.875000000000001%"),
    minHeight: hp("6.875000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(8, 28, 82, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_572_174: {
    width: wp("52.77777777777778%"),
    minWidth: wp("52.77777777777778%"),
    minHeight: hp("3.28125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.777777777777779%"),
    top: hp("1.875%")
  },
  Text_572_174: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_193: {
    width: wp("17.1232721540663%"),
    minWidth: wp("17.1232721540663%"),
    height: hp("9.631840586662292%"),
    minHeight: hp("9.631840586662292%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.30154588487413%"),
    top: hp("74.6875%")
  },
  ImageBackground_572_194: {
    width: wp("17.1232721540663%"),
    minWidth: wp("17.1232721540663%"),
    height: hp("9.631840586662292%"),
    minHeight: hp("9.631840586662292%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_572_198: {
    width: wp("14.528837203979492%"),
    minWidth: wp("14.528837203979492%"),
    height: hp("8.172470927238464%"),
    minHeight: hp("8.172470927238464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2972132364908902%"),
    top: hp("0.72967529296875%")
  },
  ImageBackground_572_199: {
    width: wp("14.528837203979492%"),
    minWidth: wp("14.528837203979492%"),
    height: hp("8.172470927238464%"),
    minHeight: hp("8.172470927238464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_572_200: {
    width: wp("9.08052338494195%"),
    height: hp("5.107794404029846%"),
    top: hp("1.4593124389648438%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5944349500868%")
  },
  ImageBackground_572_227: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("64.84375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.38888888888889%")
  },
  View_572_230: {
    width: wp("76.11111111111111%"),
    minWidth: wp("76.11111111111111%"),
    height: hp("6.71875%"),
    minHeight: hp("6.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.5%"),
    top: hp("63.59375000000001%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_572_231: {
    width: wp("29.72222222222222%"),
    minWidth: wp("29.72222222222222%"),
    minHeight: hp("3.28125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.77777777777778%"),
    top: hp("65.3125%")
  },
  Text_572_231: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_572_235: {
    width: wp("3.888888888888889%"),
    height: hp("2.8125%"),
    top: hp("43.90625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.77777777777778%")
  },
  View_572_233: {
    width: wp("76.11111111111111%"),
    minWidth: wp("76.11111111111111%"),
    height: hp("6.71875%"),
    minHeight: hp("6.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.5%"),
    top: hp("42.03125%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_572_234: {
    width: wp("22.77777777777778%"),
    minWidth: wp("22.77777777777778%"),
    minHeight: hp("3.28125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.77777777777778%"),
    top: hp("44.0625%")
  },
  Text_572_234: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_237: {
    width: wp("76.11111111111111%"),
    minWidth: wp("76.11111111111111%"),
    height: hp("6.71875%"),
    minHeight: hp("6.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.5%"),
    top: hp("52.81249999999999%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_572_239: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("54.37499999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.38888888888889%")
  },
  View_572_238: {
    width: wp("21.38888888888889%"),
    minWidth: wp("21.38888888888889%"),
    minHeight: hp("3.28125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.77777777777778%"),
    top: hp("54.6875%")
  },
  Text_572_238: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
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
