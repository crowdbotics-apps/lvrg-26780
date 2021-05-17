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
      <View style={styles.View_1014_28} />
      <View style={styles.View_1014_29} />
      <View style={styles.View_1014_31}>
        <Text style={styles.Text_1014_31}>Hello Yash!</Text>
      </View>
      <View style={styles.View_1036_2}>
        <View style={styles.View_1014_30} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2012/0488/54e96f6ee53e105739518e4a65b4ed17"
          }}
          style={styles.ImageBackground_1014_32}
        />
      </View>
      <View style={styles.View_1014_49}>
        <View style={styles.View_1014_50}>
          <Text style={styles.Text_1014_50}>Forex Ind</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07bd/270f/7cda8ae316256e650ff38776e923ea76"
          }}
          style={styles.ImageBackground_1014_51}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f8a/f407/2ce702c7e37981f69fe2a96cb1903520"
        }}
        style={styles.ImageBackground_1014_52}
      />
      <View style={styles.View_1014_267} />
      <View style={styles.View_1014_268} />
      <View style={styles.View_1014_269} />
      <View style={styles.View_1014_270}>
        <Text style={styles.Text_1014_270}>Hey there! How are you?</Text>
      </View>
      <View style={styles.View_1014_271}>
        <Text style={styles.Text_1014_271}>
          Hey there! How are you? asdfa dadsfasa
        </Text>
      </View>
      <View style={styles.View_1014_272}>
        <Text style={styles.Text_1014_272}>
          Hey there! How are you? asdfa dadsfasa
        </Text>
      </View>
      <View style={styles.View_1014_273}>
        <Text style={styles.Text_1014_273}>Shivam</Text>
      </View>
      <View style={styles.View_1014_274}>
        <Text style={styles.Text_1014_274}>Akshay</Text>
      </View>
      <View style={styles.View_1014_275}>
        <Text style={styles.Text_1014_275}>Akshay</Text>
      </View>
      <View style={styles.View_1014_276}>
        <Text style={styles.Text_1014_276}>12:30 PM</Text>
      </View>
      <View style={styles.View_1014_277} />
      <View style={styles.View_1014_278}>
        <Text style={styles.Text_1014_278}>Hey! I am good</Text>
      </View>
      <View style={styles.View_1014_279}>
        <Text style={styles.Text_1014_279}>12:30 PM</Text>
      </View>
      <View style={styles.View_1014_280}>
        <Text style={styles.Text_1014_280}>12:30 PM</Text>
      </View>
      <View style={styles.View_1014_281}>
        <Text style={styles.Text_1014_281}>12:30 PM</Text>
      </View>
      <View style={styles.View_1014_282}>
        <Text style={styles.Text_1014_282}>12:30 PM</Text>
      </View>
      <View style={styles.View_1014_283} />
      <View style={styles.View_1014_284}>
        <Text style={styles.Text_1014_284}>Today</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fae5/b5f0/6ea161e729c581977fc2fb359d6cef50"
        }}
        style={styles.ImageBackground_1014_285}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd1d/c915/65f03beb86555906c645f8fa483183a8"
        }}
        style={styles.ImageBackground_1014_286}
      />
      <View style={styles.View_1014_287}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f3c/05a7/f27478c140d1ccf31dd64600f422c57d"
          }}
          style={styles.ImageBackground_1014_288}
        />
        <View style={styles.View_1014_289}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f3c/05a7/f27478c140d1ccf31dd64600f422c57d"
            }}
            style={styles.ImageBackground_1014_290}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd19/e5d1/ba7db0fd41d474c0e6e920454852ea33"
            }}
            style={styles.ImageBackground_1014_291}
          />
        </View>
      </View>
      <View style={styles.View_1036_130} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14e3/8986/f623650a13446d57138ba167ca72ba9d"
        }}
        style={styles.ImageBackground_1036_131}
      />
      <View style={styles.View_1014_53} />
      <View style={styles.View_1014_54}>
        <View style={styles.View_1014_55}>
          <View style={styles.View_1014_56} />
        </View>
        <View style={styles.View_1014_57}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67ce/4bb5/25857e0c713544668f524a4f7518b7bf"
            }}
            style={styles.ImageBackground_1014_58}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b36/25b2/ac6e400dbb11832bb84ee7a55991e78a"
            }}
            style={styles.ImageBackground_1014_59}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd54/a89d/5c3e97121a2f09ff13af4ad16165123d"
            }}
            style={styles.ImageBackground_1014_62}
          />
        </View>
        <View style={styles.View_1014_65}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df7c/8f9e/6b781ac7185e888cbb03df7c0b8e641d"
            }}
            style={styles.ImageBackground_1014_66}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e34/dccc/c33348fd5ec8f061c70eebc077658044"
            }}
            style={styles.ImageBackground_1014_67}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2c3/fe86/287ca379da875d4826f8b415c6ada88f"
            }}
            style={styles.ImageBackground_1014_70}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3801/24d6/79ed7859c987f019895939c9f545b1fa"
          }}
          style={styles.ImageBackground_1014_74}
        />
      </View>
      <View source={{ uri: "null" }} style={styles.View_1014_75} />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1014_28: {
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
  View_1014_29: {
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
  View_1014_31: {
    width: wp("24.166666666666668%"),
    minWidth: wp("24.166666666666668%"),
    minHeight: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.111111111111111%"),
    top: hp("93.59375%")
  },
  Text_1014_31: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1036_2: {
    width: wp("11.944444444444445%"),
    minWidth: wp("11.944444444444445%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.16666666666667%"),
    top: hp("91.5625%")
  },
  View_1014_30: {
    width: wp("11.944444444444445%"),
    minWidth: wp("11.944444444444445%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 39, 97, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  ImageBackground_1014_32: {
    width: wp("9.428089989556208%"),
    height: hp("5.303300619125366%"),
    top: hp("0.46875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5555555555555429%")
  },
  View_1014_49: {
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
  View_1014_50: {
    width: wp("22.77777777777778%"),
    minWidth: wp("22.77777777777778%"),
    minHeight: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.777777777777779%"),
    top: hp("1.875%")
  },
  Text_1014_50: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1014_51: {
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
  ImageBackground_1014_52: {
    width: wp("5.555555555555555%"),
    height: hp("3.125%"),
    top: hp("93.28125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.16666666666667%")
  },
  View_1014_267: {
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
  View_1014_268: {
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
  View_1014_269: {
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
  View_1014_270: {
    width: wp("46.94444444444444%"),
    minWidth: wp("46.94444444444444%"),
    minHeight: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.77777777777778%"),
    top: hp("74.0625%")
  },
  Text_1014_270: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1014_271: {
    width: wp("59.166666666666664%"),
    minWidth: wp("59.166666666666664%"),
    minHeight: hp("4.375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.77777777777778%"),
    top: hp("59.375%")
  },
  Text_1014_271: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1014_272: {
    width: wp("59.166666666666664%"),
    minWidth: wp("59.166666666666664%"),
    minHeight: hp("4.375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.77777777777778%"),
    top: hp("44.6875%")
  },
  Text_1014_272: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1014_273: {
    width: wp("12.5%"),
    minWidth: wp("12.5%"),
    minHeight: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.77777777777778%"),
    top: hp("69.0625%")
  },
  Text_1014_273: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1014_274: {
    width: wp("12.222222222222221%"),
    minWidth: wp("12.222222222222221%"),
    minHeight: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.77777777777778%"),
    top: hp("54.37499999999999%")
  },
  Text_1014_274: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1014_275: {
    width: wp("12.222222222222221%"),
    minWidth: wp("12.222222222222221%"),
    minHeight: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.77777777777778%"),
    top: hp("39.6875%")
  },
  Text_1014_275: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1014_276: {
    width: wp("11.38888888888889%"),
    minWidth: wp("11.38888888888889%"),
    minHeight: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.5%"),
    top: hp("84.84375%")
  },
  Text_1014_276: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1014_277: {
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
  View_1014_278: {
    width: wp("29.444444444444446%"),
    minWidth: wp("29.444444444444446%"),
    minHeight: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.27777777777778%"),
    top: hp("83.75%")
  },
  Text_1014_278: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1014_279: {
    width: wp("11.38888888888889%"),
    minWidth: wp("11.38888888888889%"),
    minHeight: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.5%"),
    top: hp("84.84375%")
  },
  Text_1014_279: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1014_280: {
    width: wp("11.38888888888889%"),
    minWidth: wp("11.38888888888889%"),
    minHeight: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.5%"),
    top: hp("75.15625%")
  },
  Text_1014_280: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1014_281: {
    width: wp("11.38888888888889%"),
    minWidth: wp("11.38888888888889%"),
    minHeight: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.5%"),
    top: hp("62.65625%")
  },
  Text_1014_281: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1014_282: {
    width: wp("11.38888888888889%"),
    minWidth: wp("11.38888888888889%"),
    minHeight: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.5%"),
    top: hp("47.96875%")
  },
  Text_1014_282: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1014_283: {
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
  View_1014_284: {
    width: wp("10.555555555555555%"),
    minWidth: wp("10.555555555555555%"),
    minHeight: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.72222222222222%"),
    top: hp("33.28125%")
  },
  Text_1014_284: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1014_285: {
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
  ImageBackground_1014_286: {
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
  View_1014_287: {
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
  ImageBackground_1014_288: {
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
  View_1014_289: {
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
  ImageBackground_1014_290: {
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
  ImageBackground_1014_291: {
    width: wp("7.777777777777778%"),
    height: hp("4.375%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1036_130: {
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
  ImageBackground_1036_131: {
    width: wp("3.191666867997911%"),
    height: hp("2.96875%"),
    top: hp("7.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%")
  },
  View_1014_53: {
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
  View_1014_54: {
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
  View_1014_55: {
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
  View_1014_56: {
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
  View_1014_57: {
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
  ImageBackground_1014_58: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("1.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1014_59: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("1.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1014_62: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: hp("1.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1014_65: {
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
  ImageBackground_1014_66: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("2.03125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1014_67: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("2.03125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1014_70: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("1.09375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1014_74: {
    width: wp("8.685709635416666%"),
    minWidth: wp("8.685709635416666%"),
    height: hp("1.4837646484375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.888888888888889%"),
    top: hp("1.19232177734375%")
  },
  View_1014_75: {
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
