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
      <View source={{ uri: "null" }} style={styles.View_1058_637} />
      <View style={styles.View_1058_619} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14e3/8986/f623650a13446d57138ba167ca72ba9d"
        }}
        style={styles.ImageBackground_1058_620}
      />
      <View style={styles.View_1058_664}>
        <Text style={styles.Text_1058_664}>Video Element</Text>
      </View>
      <View style={styles.View_1058_621}>
        <Text style={styles.Text_1058_621}>
          Video Title Lorem ipsum dolor sitamet, consectetur adipiscing elit.
        </Text>
      </View>
      <View style={styles.View_1058_667}>
        <Text style={styles.Text_1058_667}>Upcoming Video</Text>
      </View>
      <View style={styles.View_1058_665}>
        <Text style={styles.Text_1058_665}>Published on</Text>
      </View>
      <View style={styles.View_1058_666}>
        <Text style={styles.Text_1058_666}>08/01/2021</Text>
      </View>
      <View style={styles.View_1058_622}>
        <Text style={styles.Text_1058_622}>
          Video description Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        </Text>
      </View>
      <View style={styles.View_1061_630}>
        <View style={styles.View_1061_631} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5607/1a17/8153b172e3e38f45150688de65b9edb9"
          }}
          style={styles.ImageBackground_1061_632}
        />
        <View style={styles.View_1061_633}>
          <Text style={styles.Text_1061_633}>Video Title</Text>
        </View>
        <View style={styles.View_1061_634}>
          <Text style={styles.Text_1061_634}>
            Course description little bit or more information.....
          </Text>
        </View>
      </View>
      <View style={styles.View_1061_636} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5607/1a17/8153b172e3e38f45150688de65b9edb9"
        }}
        style={styles.ImageBackground_1061_637}
      />
      <View style={styles.View_1061_638}>
        <Text style={styles.Text_1061_638}>Video Title</Text>
      </View>
      <View style={styles.View_1061_639}>
        <Text style={styles.Text_1061_639}>
          Course description little bit or more information.....
        </Text>
      </View>
      <View style={styles.View_1061_635} />
      <View style={styles.View_1058_641} />
      <View style={styles.View_1058_642}>
        <View style={styles.View_1058_643}>
          <View style={styles.View_1058_644} />
        </View>
        <View style={styles.View_1058_645}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67ce/4bb5/25857e0c713544668f524a4f7518b7bf"
            }}
            style={styles.ImageBackground_1058_646}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b36/25b2/ac6e400dbb11832bb84ee7a55991e78a"
            }}
            style={styles.ImageBackground_1058_647}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd54/a89d/5c3e97121a2f09ff13af4ad16165123d"
            }}
            style={styles.ImageBackground_1058_650}
          />
        </View>
        <View style={styles.View_1058_653}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df7c/8f9e/6b781ac7185e888cbb03df7c0b8e641d"
            }}
            style={styles.ImageBackground_1058_654}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e34/dccc/c33348fd5ec8f061c70eebc077658044"
            }}
            style={styles.ImageBackground_1058_655}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2c3/fe86/287ca379da875d4826f8b415c6ada88f"
            }}
            style={styles.ImageBackground_1058_658}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3801/24d6/79ed7859c987f019895939c9f545b1fa"
          }}
          style={styles.ImageBackground_1058_662}
        />
      </View>
      <View source={{ uri: "null" }} style={styles.View_1058_663} />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1058_637: {
    width: wp("3.3333333333333335%"),
    height: hp("0.2678621554699319%"),
    top: hp("96.42856615213692%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%")
  },
  View_1058_619: {
    width: wp("100%"),
    height: hp("24.05446293494705%"),
    top: hp("11.951588502269288%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.2777777777777778%"),
    backgroundColor: "rgba(226, 226, 226, 1)"
  },
  ImageBackground_1058_620: {
    width: wp("3.191666867997911%"),
    height: hp("2.8744326777609683%"),
    top: hp("6.051437216338881%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.944444444444445%")
  },
  View_1058_664: {
    width: wp("32.22222222222222%"),
    top: hp("22.995461422087747%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.611111111111114%")
  },
  Text_1058_664: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1058_621: {
    width: wp("86.66666666666667%"),
    top: hp("37.821482602118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.277777777777778%")
  },
  Text_1058_621: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1058_667: {
    width: wp("37.5%"),
    top: hp("62.178517397882%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.277777777777778%")
  },
  Text_1058_667: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1058_665: {
    width: wp("21.38888888888889%"),
    top: hp("45.688350983358546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.277777777777778%")
  },
  Text_1058_665: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1058_666: {
    width: wp("17.77777777777778%"),
    top: hp("45.688350983358546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.055555555555557%")
  },
  Text_1058_666: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1058_622: {
    width: wp("88.33333333333333%"),
    top: hp("49.62178517397882%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.277777777777778%")
  },
  Text_1058_622: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1061_630: {
    width: wp("43.333333333333336%"),
    minWidth: wp("43.333333333333336%"),
    height: hp("29.046898638426626%"),
    minHeight: hp("29.046898638426626%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.277777777777778%"),
    top: hp("67.62481089258698%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1061_631: {
    width: wp("43.333333333333336%"),
    height: hp("29.046898638426626%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.019999999552965164,
    borderColor: "rgba(51, 51, 51, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  ImageBackground_1061_632: {
    width: wp("43.204684787326386%"),
    height: hp("17.197339725927215%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_1061_633: {
    width: wp("36.26477559407552%"),
    top: hp("19.5158850226929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527786%")
  },
  Text_1061_633: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1061_634: {
    width: wp("39.64538998074002%"),
    top: hp("23.002257469742815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527786%")
  },
  Text_1061_634: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1061_636: {
    width: wp("43.333333333333336%"),
    height: hp("29.046898638426626%"),
    top: hp("67.62481089258698%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.94444444444445%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.019999999552965164,
    borderColor: "rgba(51, 51, 51, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  ImageBackground_1061_637: {
    width: wp("43.204684787326386%"),
    height: hp("17.197339725927215%"),
    top: hp("67.62481089258698%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.94444444444445%"),
    resizeMode: "cover",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_1061_638: {
    width: wp("36.26477559407552%"),
    top: hp("87.14069591527988%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.78838433159723%")
  },
  Text_1061_638: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1061_639: {
    width: wp("39.64538998074002%"),
    top: hp("90.6270683623298%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.78838433159723%")
  },
  Text_1061_639: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1061_635: {
    width: wp("43.333333333333336%"),
    minWidth: wp("43.333333333333336%"),
    height: hp("29.046898638426626%"),
    minHeight: hp("29.046898638426626%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.72222222222222%"),
    top: hp("67.62481089258698%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1058_641: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("3.6308623298033282%"),
    minHeight: hp("3.6308623298033282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(1, 16, 56, 1)"
  },
  View_1058_642: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("3.6308623298033282%"),
    minHeight: hp("3.6308623298033282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1058_643: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("3.6308623298033282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1058_644: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("3.3282904689863844%"),
    minHeight: hp("3.3282904689863844%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.2777777777777778%"),
    top: hp("0.15128593040847202%")
  },
  View_1058_645: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("1.8154311649016641%"),
    minHeight: hp("1.8154311649016641%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.83333333333333%"),
    top: hp("0.9077155824508321%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1058_646: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("1.8154311649016641%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1058_647: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("1.8154311649016641%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1058_650: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: hp("1.8154311649016641%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1058_653: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("1.9667170953101363%"),
    minHeight: hp("1.9667170953101363%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.05555555555556%"),
    top: hp("0.7564296520423601%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1058_654: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("1.9667170953101363%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1058_655: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("1.9667170953101363%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1058_658: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("1.059001512859304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1058_662: {
    width: wp("8.685709635416666%"),
    minWidth: wp("8.685709635416666%"),
    height: hp("1.436625378214826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.888888888888889%"),
    top: hp("1.1544416603630863%")
  },
  View_1058_663: {
    width: wp("21.944444444444443%"),
    minWidth: wp("21.944444444444443%"),
    height: hp("11.951588502269288%"),
    minHeight: hp("11.951588502269288%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.44444444444444%"),
    top: hp("83.35854765506808%")
  },
  View_2: { height: 661 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
