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
      <View style={styles.View_1014_79} />
      <View style={styles.View_1014_80} />
      <View style={styles.View_1014_81}>
        <Text style={styles.Text_1014_81}>Send Message...</Text>
      </View>
      <View style={styles.View_1014_82}>
        <View style={styles.View_1014_83}>
          <Text style={styles.Text_1014_83}>Forex Ind</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07bd/270f/7cda8ae316256e650ff38776e923ea76"
          }}
          style={styles.ImageBackground_1014_84}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f8a/f407/2ce702c7e37981f69fe2a96cb1903520"
        }}
        style={styles.ImageBackground_1014_101}
      />
      <View style={styles.View_1014_195} />
      <View style={styles.View_1014_196} />
      <View style={styles.View_1014_197} />
      <View style={styles.View_1014_198}>
        <Text style={styles.Text_1014_198}>Hey there! How are you?</Text>
      </View>
      <View style={styles.View_1014_199}>
        <Text style={styles.Text_1014_199}>
          Hey there! How are you? asdfa dadsfasa
        </Text>
      </View>
      <View style={styles.View_1014_200}>
        <Text style={styles.Text_1014_200}>
          Hey there! How are you? asdfa dadsfasa
        </Text>
      </View>
      <View style={styles.View_1014_201}>
        <Text style={styles.Text_1014_201}>Shivam</Text>
      </View>
      <View style={styles.View_1014_202}>
        <Text style={styles.Text_1014_202}>Akshay</Text>
      </View>
      <View style={styles.View_1014_203}>
        <Text style={styles.Text_1014_203}>Akshay</Text>
      </View>
      <View style={styles.View_1014_204}>
        <Text style={styles.Text_1014_204}>12:30 PM</Text>
      </View>
      <View style={styles.View_1014_205} />
      <View style={styles.View_1014_206}>
        <Text style={styles.Text_1014_206}>Hey! I am good</Text>
      </View>
      <View style={styles.View_1014_207}>
        <Text style={styles.Text_1014_207}>12:30 PM</Text>
      </View>
      <View style={styles.View_1014_208}>
        <Text style={styles.Text_1014_208}>12:30 PM</Text>
      </View>
      <View style={styles.View_1014_209}>
        <Text style={styles.Text_1014_209}>12:30 PM</Text>
      </View>
      <View style={styles.View_1014_210}>
        <Text style={styles.Text_1014_210}>12:30 PM</Text>
      </View>
      <View style={styles.View_1014_211} />
      <View style={styles.View_1014_212}>
        <Text style={styles.Text_1014_212}>Today</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fae5/b5f0/6ea161e729c581977fc2fb359d6cef50"
        }}
        style={styles.ImageBackground_1014_213}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd1d/c915/65f03beb86555906c645f8fa483183a8"
        }}
        style={styles.ImageBackground_1014_214}
      />
      <View style={styles.View_1014_215}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f3c/05a7/f27478c140d1ccf31dd64600f422c57d"
          }}
          style={styles.ImageBackground_1014_216}
        />
        <View style={styles.View_1014_217}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f3c/05a7/f27478c140d1ccf31dd64600f422c57d"
            }}
            style={styles.ImageBackground_1014_218}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd19/e5d1/ba7db0fd41d474c0e6e920454852ea33"
            }}
            style={styles.ImageBackground_1014_219}
          />
        </View>
      </View>
      <View style={styles.View_1036_132} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14e3/8986/f623650a13446d57138ba167ca72ba9d"
        }}
        style={styles.ImageBackground_1036_133}
      />
      <View style={styles.View_1014_102} />
      <View style={styles.View_1014_103}>
        <View style={styles.View_1014_104}>
          <View style={styles.View_1014_105} />
        </View>
        <View style={styles.View_1014_106}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67ce/4bb5/25857e0c713544668f524a4f7518b7bf"
            }}
            style={styles.ImageBackground_1014_107}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b36/25b2/ac6e400dbb11832bb84ee7a55991e78a"
            }}
            style={styles.ImageBackground_1014_108}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd54/a89d/5c3e97121a2f09ff13af4ad16165123d"
            }}
            style={styles.ImageBackground_1014_111}
          />
        </View>
        <View style={styles.View_1014_114}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df7c/8f9e/6b781ac7185e888cbb03df7c0b8e641d"
            }}
            style={styles.ImageBackground_1014_115}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e34/dccc/c33348fd5ec8f061c70eebc077658044"
            }}
            style={styles.ImageBackground_1014_116}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2c3/fe86/287ca379da875d4826f8b415c6ada88f"
            }}
            style={styles.ImageBackground_1014_119}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3801/24d6/79ed7859c987f019895939c9f545b1fa"
          }}
          style={styles.ImageBackground_1014_123}
        />
      </View>
      <View source={{ uri: "null" }} style={styles.View_1014_124} />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1014_79: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.46875%"),
    minHeight: hp("10.46875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.75%"),
    backgroundColor: "rgba(238, 241, 248, 1)"
  },
  View_1014_80: {
    width: wp("94.44444444444444%"),
    minWidth: wp("94.44444444444444%"),
    height: hp("7.5%"),
    minHeight: hp("7.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777777%"),
    top: hp("90.9375%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.10000000149011612,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_1014_81: {
    width: wp("35.27777777777778%"),
    minWidth: wp("35.27777777777778%"),
    minHeight: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.111111111111111%"),
    top: hp("93.75%")
  },
  Text_1014_81: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1014_82: {
    width: wp("35.55555555555556%"),
    minWidth: wp("35.55555555555556%"),
    height: hp("5.3125%"),
    minHeight: hp("5.3125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.22222222222222%"),
    top: hp("6.25%")
  },
  View_1014_83: {
    width: wp("22.77777777777778%"),
    minWidth: wp("22.77777777777778%"),
    minHeight: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.777777777777779%"),
    top: hp("1.875%")
  },
  Text_1014_83: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1014_84: {
    width: wp("9.444444444444445%"),
    minWidth: wp("9.444444444444445%"),
    height: hp("5.3125%"),
    minHeight: hp("5.3125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1014_101: {
    width: wp("5.555555555555555%"),
    height: hp("3.125%"),
    top: hp("93.28125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.22222222222223%")
  },
  View_1014_195: {
    width: wp("67.77777777777779%"),
    minWidth: wp("67.77777777777779%"),
    height: hp("6.5625%"),
    minHeight: hp("6.5625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("71.875%"),
    backgroundColor: "rgba(245, 246, 251, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 0
  },
  View_1014_196: {
    width: wp("67.77777777777779%"),
    minWidth: wp("67.77777777777779%"),
    height: hp("8.75%"),
    minHeight: hp("8.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("57.1875%"),
    backgroundColor: "rgba(245, 246, 251, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 0
  },
  View_1014_197: {
    width: wp("67.77777777777779%"),
    minWidth: wp("67.77777777777779%"),
    height: hp("8.75%"),
    minHeight: hp("8.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("42.5%"),
    backgroundColor: "rgba(245, 246, 251, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 0
  },
  View_1014_198: {
    width: wp("46.94444444444444%"),
    minWidth: wp("46.94444444444444%"),
    minHeight: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.77777777777778%"),
    top: hp("74.0625%")
  },
  Text_1014_198: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1014_199: {
    width: wp("59.166666666666664%"),
    minWidth: wp("59.166666666666664%"),
    minHeight: hp("4.375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.77777777777778%"),
    top: hp("59.375%")
  },
  Text_1014_199: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1014_200: {
    width: wp("59.166666666666664%"),
    minWidth: wp("59.166666666666664%"),
    minHeight: hp("4.375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.77777777777778%"),
    top: hp("44.6875%")
  },
  Text_1014_200: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1014_201: {
    width: wp("12.5%"),
    minWidth: wp("12.5%"),
    minHeight: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.77777777777778%"),
    top: hp("69.0625%")
  },
  Text_1014_201: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1014_202: {
    width: wp("12.222222222222221%"),
    minWidth: wp("12.222222222222221%"),
    minHeight: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.77777777777778%"),
    top: hp("54.37499999999999%")
  },
  Text_1014_202: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1014_203: {
    width: wp("12.222222222222221%"),
    minWidth: wp("12.222222222222221%"),
    minHeight: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.77777777777778%"),
    top: hp("39.6875%")
  },
  Text_1014_203: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1014_204: {
    width: wp("11.38888888888889%"),
    minWidth: wp("11.38888888888889%"),
    minHeight: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.5%"),
    top: hp("84.84375%")
  },
  Text_1014_204: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1014_205: {
    width: wp("50.27777777777778%"),
    minWidth: wp("50.27777777777778%"),
    height: hp("6.5625%"),
    minHeight: hp("6.5625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.83333333333333%"),
    top: hp("81.5625%"),
    backgroundColor: "rgba(18, 39, 97, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 16
  },
  View_1014_206: {
    width: wp("29.444444444444446%"),
    minWidth: wp("29.444444444444446%"),
    minHeight: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.27777777777778%"),
    top: hp("83.75%")
  },
  Text_1014_206: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1014_207: {
    width: wp("11.38888888888889%"),
    minWidth: wp("11.38888888888889%"),
    minHeight: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.5%"),
    top: hp("84.84375%")
  },
  Text_1014_207: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1014_208: {
    width: wp("11.38888888888889%"),
    minWidth: wp("11.38888888888889%"),
    minHeight: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.5%"),
    top: hp("75.15625%")
  },
  Text_1014_208: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1014_209: {
    width: wp("11.38888888888889%"),
    minWidth: wp("11.38888888888889%"),
    minHeight: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.5%"),
    top: hp("62.65625%")
  },
  Text_1014_209: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1014_210: {
    width: wp("11.38888888888889%"),
    minWidth: wp("11.38888888888889%"),
    minHeight: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.5%"),
    top: hp("47.96875%")
  },
  Text_1014_210: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1014_211: {
    width: wp("16.11111111111111%"),
    minWidth: wp("16.11111111111111%"),
    height: hp("4.375%"),
    minHeight: hp("4.375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.94444444444444%"),
    top: hp("32.1875%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.10000000149011612,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1014_212: {
    width: wp("10.555555555555555%"),
    minWidth: wp("10.555555555555555%"),
    minHeight: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.72222222222222%"),
    top: hp("33.28125%")
  },
  Text_1014_212: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1014_213: {
    width: wp("7.777777777777778%"),
    minWidth: wp("7.777777777777778%"),
    height: hp("4.375%"),
    minHeight: hp("4.375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: hp("62.34375%")
  },
  ImageBackground_1014_214: {
    width: wp("7.777777777777778%"),
    minWidth: wp("7.777777777777778%"),
    height: hp("4.375%"),
    minHeight: hp("4.375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: hp("74.6875%")
  },
  View_1014_215: {
    width: wp("7.777777777777778%"),
    minWidth: wp("7.777777777777778%"),
    height: hp("4.375%"),
    minHeight: hp("4.375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: hp("47.65625%")
  },
  ImageBackground_1014_216: {
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
  View_1014_217: {
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
  ImageBackground_1014_218: {
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
  ImageBackground_1014_219: {
    width: wp("7.777777777777778%"),
    height: hp("4.375%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1036_132: {
    width: wp("8.61111111111111%"),
    minWidth: wp("8.61111111111111%"),
    height: hp("4.84375%"),
    minHeight: hp("4.84375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%"),
    top: hp("6.5625%"),
    backgroundColor: "rgba(235, 245, 255, 1)"
  },
  ImageBackground_1036_133: {
    width: wp("3.191666867997911%"),
    height: hp("2.96875%"),
    top: hp("7.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%")
  },
  View_1014_102: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("3.75%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(1, 16, 56, 1)"
  },
  View_1014_103: {
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
  View_1014_104: {
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
  View_1014_105: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("3.4375000000000004%"),
    minHeight: hp("3.4375000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.2777777777777778%"),
    top: hp("0.15625%")
  },
  View_1014_106: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("1.875%"),
    minHeight: hp("1.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.83333333333333%"),
    top: hp("0.9375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1014_107: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("1.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1014_108: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("1.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1014_111: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: hp("1.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1014_114: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("2.03125%"),
    minHeight: hp("2.03125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.05555555555556%"),
    top: hp("0.78125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1014_115: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("2.03125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1014_116: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("2.03125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1014_119: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("1.09375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1014_123: {
    width: wp("8.685709635416666%"),
    minWidth: wp("8.685709635416666%"),
    height: hp("1.4837646484375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.888888888888889%"),
    top: hp("1.19232177734375%")
  },
  View_1014_124: {
    width: wp("21.944444444444443%"),
    minWidth: wp("21.944444444444443%"),
    height: hp("12.34375%"),
    minHeight: hp("12.34375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.44444444444444%"),
    top: hp("86.09375%")
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
