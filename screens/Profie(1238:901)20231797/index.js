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
      <View style={styles.View_1238_902}>
        <View style={styles.View_1238_903}>
          <View style={styles.View_1238_904} />
        </View>
        <View style={styles.View_1238_905} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed6a/adf9/f79069c523535415099d63e313d7d05b"
          }}
          style={styles.ImageBackground_1238_906}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9696/e12b/1609bcd09b18f1c944c65fbae12d1901"
          }}
          style={styles.ImageBackground_1238_907}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66e3/653a/d201646110f302b673ce4a4923db1f96"
          }}
          style={styles.ImageBackground_1238_908}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a23f/273e/243f09830efb80ee0b6857024c6b4dc6"
          }}
          style={styles.ImageBackground_1238_909}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/046c/e867/5acaa4d493f2eea22a452ae3450cb556"
          }}
          style={styles.ImageBackground_1238_910}
        />
      </View>
      <View style={styles.View_1238_911} />
      <View style={styles.View_1238_912} />
      <View style={styles.View_1238_913}>
        <Text style={styles.Text_1238_913}>Yash Parashar</Text>
      </View>
      <View style={styles.View_1238_914}>
        <Text style={styles.Text_1238_914}>parashar.yash13@gmail.com</Text>
      </View>
      <View style={styles.View_1238_915}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85de/6d6c/87a049f279f675db8f3edd230edbacd9"
          }}
          style={styles.ImageBackground_1238_916}
        />
        <View style={styles.View_1238_917}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85de/6d6c/87a049f279f675db8f3edd230edbacd9"
            }}
            style={styles.ImageBackground_1238_918}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f4b/edf5/066e29a87dca0e40cb5577b9005d71c9"
            }}
            style={styles.ImageBackground_1238_919}
          />
        </View>
      </View>
      <View style={styles.View_1238_920}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c768/b798/527e338cb2b5c894f5c4d24246d633bc"
          }}
          style={styles.ImageBackground_1238_921}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b257/b23f/633dffe19dce79e3ad3051a8f8b4d336"
          }}
          style={styles.ImageBackground_1238_922}
        />
      </View>
      <View style={styles.View_1238_923}>
        <View style={styles.View_1238_924} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd21/070e/2344f3bd823cf578afa2e3e226b581ab"
          }}
          style={styles.ImageBackground_1238_925}
        />
        <View style={styles.View_1238_926}>
          <Text style={styles.Text_1238_926}>Logout</Text>
        </View>
      </View>
      <View style={styles.View_1238_927} />
      <View style={styles.View_1238_928}>
        <View style={styles.View_1238_929}>
          <View style={styles.View_1238_930} />
        </View>
        <View style={styles.View_1238_931}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67ce/4bb5/25857e0c713544668f524a4f7518b7bf"
            }}
            style={styles.ImageBackground_1238_932}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b36/25b2/ac6e400dbb11832bb84ee7a55991e78a"
            }}
            style={styles.ImageBackground_1238_933}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd54/a89d/5c3e97121a2f09ff13af4ad16165123d"
            }}
            style={styles.ImageBackground_1238_936}
          />
        </View>
        <View style={styles.View_1238_939}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df7c/8f9e/6b781ac7185e888cbb03df7c0b8e641d"
            }}
            style={styles.ImageBackground_1238_940}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e34/dccc/c33348fd5ec8f061c70eebc077658044"
            }}
            style={styles.ImageBackground_1238_941}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2c3/fe86/287ca379da875d4826f8b415c6ada88f"
            }}
            style={styles.ImageBackground_1238_944}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3801/24d6/79ed7859c987f019895939c9f545b1fa"
          }}
          style={styles.ImageBackground_1238_948}
        />
      </View>
      <View source={{ uri: "null" }} style={styles.View_1238_949} />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1238_902: {
    width: wp("100.55555555555556%"),
    minWidth: wp("100.55555555555556%"),
    height: hp("12.968750000000002%"),
    minHeight: hp("12.968750000000002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.2777777777777778%"),
    top: hp("87.03125%")
  },
  View_1238_903: {
    width: wp("100.55555555555556%"),
    minWidth: wp("100.55555555555556%"),
    height: hp("9.84375%"),
    minHeight: hp("9.84375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.125%")
  },
  View_1238_904: {
    width: wp("100.55555555555556%"),
    minWidth: wp("100.55555555555556%"),
    height: hp("9.84375%"),
    minHeight: hp("9.84375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1238_905: {
    width: wp("18.61111111111111%"),
    minWidth: wp("18.61111111111111%"),
    height: hp("10.46875%"),
    minHeight: hp("10.46875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.666666666666664%"),
    top: hp("0%"),
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  ImageBackground_1238_906: {
    width: wp("7.38425890604655%"),
    height: hp("3.7096506357192993%"),
    top: hp("5.567626953125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.335693359375%")
  },
  ImageBackground_1238_907: {
    width: wp("5.555555555555555%"),
    height: hp("3.4375000000000004%"),
    top: hp("5.9375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.44444444444444%")
  },
  ImageBackground_1238_908: {
    width: wp("4.444444444444445%"),
    height: hp("3.4375000000000004%"),
    top: hp("5.9375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.83333333333333%")
  },
  ImageBackground_1238_909: {
    width: wp("9.95371182759603%"),
    height: hp("5.598964691162109%"),
    top: hp("2.591094970703125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.99527994791667%")
  },
  ImageBackground_1238_910: {
    width: wp("5.4166740841335725%"),
    height: hp("3.3854168653488155%"),
    top: hp("5.807342529296875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.180555555555557%")
  },
  View_1238_911: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("21.71875%"),
    minHeight: hp("21.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 244, 255, 1)"
  },
  View_1238_912: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("16.71875%"),
    minHeight: hp("16.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("13.28125%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1238_913: {
    width: wp("36.666666666666664%"),
    minWidth: wp("36.666666666666664%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.555555555555555%"),
    top: hp("18.59375%")
  },
  Text_1238_913: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1238_914: {
    width: wp("40.55555555555556%"),
    minWidth: wp("40.55555555555556%"),
    minHeight: hp("2.34375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.555555555555555%"),
    top: hp("22.96875%")
  },
  Text_1238_914: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1238_915: {
    width: wp("18.055555555555554%"),
    minWidth: wp("18.055555555555554%"),
    height: hp("10.15625%"),
    minHeight: hp("10.15625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.38888888888889%"),
    top: hp("16.5625%")
  },
  ImageBackground_1238_916: {
    width: wp("18.055555555555554%"),
    minWidth: wp("18.055555555555554%"),
    height: hp("10.15625%"),
    minHeight: hp("10.15625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1238_917: {
    width: wp("18.055555555555554%"),
    minWidth: wp("18.055555555555554%"),
    height: hp("10.15625%"),
    minHeight: hp("10.15625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1238_918: {
    width: wp("18.055555555555554%"),
    minWidth: wp("18.055555555555554%"),
    height: hp("10.15625%"),
    minHeight: hp("10.15625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1238_919: {
    width: wp("18.055555555555554%"),
    height: hp("10.15625%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1238_920: {
    width: wp("7.777777777777778%"),
    minWidth: wp("7.777777777777778%"),
    height: hp("4.375%"),
    minHeight: hp("4.375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.22222222222221%"),
    top: hp("23.125%")
  },
  ImageBackground_1238_921: {
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
  ImageBackground_1238_922: {
    width: wp("2.7777777777777777%"),
    height: hp("1.5625%"),
    top: hp("1.40625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%")
  },
  View_1238_923: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("8.125%"),
    minHeight: hp("8.125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("34.6875%")
  },
  View_1238_924: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("8.125%"),
    minHeight: hp("8.125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 247, 255, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  ImageBackground_1238_925: {
    width: wp("5.277777777777778%"),
    height: hp("3.125%"),
    top: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.33333333333334%")
  },
  View_1238_926: {
    width: wp("15.277777777777779%"),
    minWidth: wp("15.277777777777779%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("2.1875%")
  },
  Text_1238_926: {
    color: "rgba(8, 28, 82, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1238_927: {
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
  View_1238_928: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("3.75%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2777777777777778%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1238_929: {
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
  View_1238_930: {
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
  View_1238_931: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("1.875%"),
    minHeight: hp("1.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.83333333333334%"),
    top: hp("0.9375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1238_932: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("1.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1238_933: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("1.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1238_936: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: hp("1.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1238_939: {
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
  ImageBackground_1238_940: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("2.03125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1238_941: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("2.03125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1238_944: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("1.09375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1238_948: {
    width: wp("8.685709635416666%"),
    minWidth: wp("8.685709635416666%"),
    height: hp("1.4837646484375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888888888888884%"),
    top: hp("1.19232177734375%")
  },
  View_1238_949: {
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
