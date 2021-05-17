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
        style={styles.ImageBackground_572_25}
      />
      <View style={styles.View_572_26}>
        <View style={styles.View_I572_26_8_36} />
        <View style={styles.View_I572_26_8_51}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67ce/4bb5/25857e0c713544668f524a4f7518b7bf"
            }}
            style={styles.ImageBackground_I572_26_8_52}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b36/25b2/ac6e400dbb11832bb84ee7a55991e78a"
            }}
            style={styles.ImageBackground_I572_26_8_53}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd54/a89d/5c3e97121a2f09ff13af4ad16165123d"
            }}
            style={styles.ImageBackground_I572_26_8_56}
          />
        </View>
        <View style={styles.View_I572_26_8_59}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df7c/8f9e/6b781ac7185e888cbb03df7c0b8e641d"
            }}
            style={styles.ImageBackground_I572_26_8_60}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e34/dccc/c33348fd5ec8f061c70eebc077658044"
            }}
            style={styles.ImageBackground_I572_26_8_61}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2c3/fe86/287ca379da875d4826f8b415c6ada88f"
            }}
            style={styles.ImageBackground_I572_26_8_64}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3801/24d6/79ed7859c987f019895939c9f545b1fa"
          }}
          style={styles.ImageBackground_I572_26_8_68}
        />
      </View>
      <View style={styles.View_572_27}>
        <Text style={styles.Text_572_27}>Welcome to LVRG</Text>
      </View>
      <View style={styles.View_572_28}>
        <Text style={styles.Text_572_28}>The Future of Trading is Here</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e34/a596/f8c510af6b65b3a0b740fe37282ce282"
        }}
        style={styles.ImageBackground_572_29}
      />
      <View style={styles.View_572_30}>
        <View style={styles.View_572_31} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dec1/6bca/0355a091a3af0a92d1b5caad90f6c77c"
          }}
          style={styles.ImageBackground_572_32}
        />
      </View>
      <View style={styles.View_572_33}>
        <Text style={styles.Text_572_33}>Login</Text>
      </View>
      <View style={styles.View_572_34}>
        <Text style={styles.Text_572_34}>Create Account</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59dc/8006/64597b9a2be721673f52d55b22141660"
        }}
        style={styles.ImageBackground_572_35}
      />
      <View style={styles.View_572_36}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0d6/ff9d/b9e5f2773d64b6adbaf4dbfcd8bcc5a1"
          }}
          style={styles.ImageBackground_572_37}
        />
        <View style={styles.View_572_40} />
        <View style={styles.View_572_41}>
          <Text style={styles.Text_572_41}>Enter Password</Text>
        </View>
      </View>
      <View style={styles.View_572_42}>
        <View style={styles.View_572_43} />
        <View style={styles.View_572_44}>
          <Text style={styles.Text_572_44}>Learn Forex Trading for free</Text>
        </View>
      </View>
      <View style={styles.View_572_45}>
        <View style={styles.View_572_46} />
        <View style={styles.View_572_47}>
          <Text style={styles.Text_572_47}>Enter Email</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b9c/abd5/216469448455ce8107b0572483d273ea"
          }}
          style={styles.ImageBackground_572_48}
        />
      </View>
      <View style={styles.View_572_51}>
        <Text style={styles.Text_572_51}>Forgot passoword?</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffb6/708f/40a998f39adb0f611e21eb553de57443"
        }}
        style={styles.ImageBackground_572_52}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd7f/14e9/3556b46c0c300289613cae6ec5be87b3"
        }}
        style={styles.ImageBackground_572_55}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6151/c4a4/6841077dd38ba1732e3bb7d3476fec9e"
        }}
        style={styles.ImageBackground_572_58}
      />
      <View style={styles.View_572_63}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc0f/4fc2/c8c42353e63268b8bdca90a562d8eb06"
          }}
          style={styles.ImageBackground_572_64}
        />
        <View style={styles.View_572_68}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f25/28ee/cdc92f584a78d705ebafb1754873fbe6"
            }}
            style={styles.ImageBackground_572_69}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3996/0bd6/b5c55d5f383b967a5506d59d16c9f7e1"
            }}
            style={styles.ImageBackground_572_70}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/237d/c527/b51df68c7f97bf5832ae5e4fc75870b5"
        }}
        style={styles.ImageBackground_572_73}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_572_25: {
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
  View_572_26: {
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
  View_I572_26_8_36: {
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
  View_I572_26_8_51: {
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
  ImageBackground_I572_26_8_52: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("1.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I572_26_8_53: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("1.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I572_26_8_56: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: hp("1.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I572_26_8_59: {
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
  ImageBackground_I572_26_8_60: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("2.03125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I572_26_8_61: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("2.03125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I572_26_8_64: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("1.09375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I572_26_8_68: {
    flexGrow: 1,
    width: wp("8.685709635416666%"),
    height: hp("1.4837646484375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.888888888888889%"),
    top: hp("1.19232177734375%")
  },
  View_572_27: {
    width: wp("84.16666666666667%"),
    minWidth: wp("84.16666666666667%"),
    minHeight: hp("4.53125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.166666666666666%"),
    top: hp("16.5625%")
  },
  Text_572_27: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_28: {
    width: wp("63.05555555555556%"),
    minWidth: wp("63.05555555555556%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.166666666666666%"),
    top: hp("21.09375%")
  },
  Text_572_28: {
    color: "rgba(18, 116, 231, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_572_29: {
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
  View_572_30: {
    width: wp("89.44444444444444%"),
    minWidth: wp("89.44444444444444%"),
    height: hp("42.46765613555908%"),
    minHeight: hp("42.46765613555908%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.833333333333333%"),
    top: hp("29.21875%")
  },
  View_572_31: {
    width: wp("89.44444444444444%"),
    minWidth: wp("89.44444444444444%"),
    height: hp("42.46765613555908%"),
    minHeight: hp("42.46765613555908%"),
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
  ImageBackground_572_32: {
    width: wp("89.44444444444444%"),
    minWidth: wp("89.44444444444444%"),
    height: hp("42.46765613555908%"),
    minHeight: hp("42.46765613555908%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_572_33: {
    width: wp("12.222222222222221%"),
    minWidth: wp("12.222222222222221%"),
    minHeight: hp("3.4375000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("32.1875%")
  },
  Text_572_33: {
    color: "rgba(0, 12, 44, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_34: {
    width: wp("41.94444444444444%"),
    minWidth: wp("41.94444444444444%"),
    minHeight: hp("3.4375000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.65193006727431%"),
    top: hp("32.15740203857422%")
  },
  Text_572_34: {
    color: "rgba(0, 12, 44, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_572_35: {
    width: wp("14.166666666666666%"),
    minWidth: wp("14.166666666666666%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.5%"),
    top: hp("36.53240203857422%")
  },
  View_572_36: {
    width: wp("76.11111111111111%"),
    minWidth: wp("76.11111111111111%"),
    height: hp("6.275290250778198%"),
    minHeight: hp("6.275290250778198%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.5%"),
    top: hp("52.56870269775391%")
  },
  ImageBackground_572_37: {
    width: wp("6.666666666666667%"),
    height: hp("3.502487540245056%"),
    top: hp("1.1674880981445312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888888888888893%")
  },
  View_572_40: {
    width: wp("76.11111111111111%"),
    minWidth: wp("76.11111111111111%"),
    height: hp("6.275290250778198%"),
    minHeight: hp("6.275290250778198%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_572_41: {
    width: wp("40.07067362467448%"),
    minWidth: wp("40.07067362467448%"),
    minHeight: hp("3.1745162606239314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.27679443359375%"),
    top: hp("1.5449333190917898%")
  },
  Text_572_41: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_42: {
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
  View_572_43: {
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
  View_572_44: {
    width: wp("52.77777777777778%"),
    minWidth: wp("52.77777777777778%"),
    minHeight: hp("3.28125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.5%"),
    top: hp("1.875%")
  },
  Text_572_44: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_45: {
    width: wp("76.11111111111111%"),
    minWidth: wp("76.11111111111111%"),
    height: hp("6.275290250778198%"),
    minHeight: hp("6.275290250778198%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.5%"),
    top: hp("42.20710754394531%")
  },
  View_572_46: {
    width: wp("76.11111111111111%"),
    minWidth: wp("76.11111111111111%"),
    height: hp("6.275290250778198%"),
    minHeight: hp("6.275290250778198%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_572_47: {
    width: wp("27.667844560411243%"),
    minWidth: wp("27.667844560411243%"),
    minHeight: hp("3.0074360966682434%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.27679443359375%"),
    top: hp("1.8817520141601562%")
  },
  Text_572_47: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_572_48: {
    width: wp("6.666666666666667%"),
    height: hp("3.502487540245056%"),
    top: hp("1.4593696594238281%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888888888888893%")
  },
  View_572_51: {
    width: wp("35.27777777777778%"),
    minWidth: wp("35.27777777777778%"),
    minHeight: hp("2.65625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.111111111111114%"),
    top: hp("60.43865203857421%")
  },
  Text_572_51: {
    color: "rgba(18, 116, 231, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_572_52: {
    width: wp("13.88888888888889%"),
    minWidth: wp("13.88888888888889%"),
    height: hp("7.8125%"),
    minHeight: hp("7.8125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.944444444444443%"),
    top: hp("78.75%")
  },
  ImageBackground_572_55: {
    width: wp("13.88888888888889%"),
    minWidth: wp("13.88888888888889%"),
    height: hp("7.8125%"),
    minHeight: hp("7.8125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.72222222222223%"),
    top: hp("78.75%")
  },
  ImageBackground_572_58: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("80.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.282809787326386%")
  },
  View_572_63: {
    width: wp("17.1232721540663%"),
    minWidth: wp("17.1232721540663%"),
    height: hp("9.631840586662292%"),
    minHeight: hp("9.631840586662292%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.30154588487413%"),
    top: hp("66.87049865722656%")
  },
  ImageBackground_572_64: {
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
  View_572_68: {
    width: wp("14.528837203979492%"),
    minWidth: wp("14.528837203979492%"),
    height: hp("8.172470927238464%"),
    minHeight: hp("8.172470927238464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2972089979383696%"),
    top: hp("0.72967529296875%")
  },
  ImageBackground_572_69: {
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
  ImageBackground_572_70: {
    width: wp("9.08052338494195%"),
    height: hp("5.107794404029846%"),
    top: hp("1.4593124389648438%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.594434950086807%")
  },
  ImageBackground_572_73: {
    width: wp("6.666666666666667%"),
    height: hp("3.5937499999999996%"),
    top: hp("80.625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.55555555555556%")
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
