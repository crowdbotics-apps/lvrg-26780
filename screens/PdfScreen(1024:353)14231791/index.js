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
      <View style={styles.View_1024_354} />
      <View style={styles.View_1024_539} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14e3/8986/f623650a13446d57138ba167ca72ba9d"
        }}
        style={styles.ImageBackground_1024_355}
      />
      <View style={styles.View_1024_356}>
        <Text style={styles.Text_1024_356}>Forex Introduction</Text>
      </View>
      <View style={styles.View_1024_357}>
        <Text style={styles.Text_1024_357}>
          Course description Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        </Text>
      </View>
      <View style={styles.View_1024_358}>
        <Text style={styles.Text_1024_358}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras sed
          felis eget velit aliquet sagittis id consectetur purus. Justo eget
          magna fermentum iaculis eu non diam. Diam quis enim lobortis
          scelerisque fermentum dui. Ac auctor augue mauris augue neque gravida
          in fermentum et. Purus sit amet volutpat consequat mauris nunc congue
          nisi vitae. Quisque id diam vel quam elementum. Fermentum odio eu
          feugiat pretium nibh ipsum. Ac ut consequat semper viverra nam libero
          justo laoreet. Id donec ultrices tincidunt. Ligula ullamcorper
          malesuada proin libero nunc consequat interdum varius sit. Sit amet
          consectetur adipiscing elit ut aliquam purus sit. Urna molestie at
          elementum eu facilisis sed odio morbi quis. Nibh sit amet commodo
          nulla facilisi nullam. Sed augue lacus viverra vitae congue eu
          consequat ac. Ut lectus arcu bibendum at. Et odio Est velit egestas
          dui id ornare arcu odio ut sem. Laoreet non curabitur gravida arcu ac.
          Turpis tincidunt id aliquet risus feugiat in ante metus. Eget arcu
          dictum varius duis at. Nisl pretium fusce id velit ut. Phasellus
          egestas tellus rutrum tellus pellentesque. Arcu non sodales neque
          sodales ut etiam sit amet nisl. Auctor augue mauris augue neque
          gravida in fermentum et sollicitudin. Risus nec feugiat in fermentum
          posuere urna.{" "}
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/212b/d587/4db61ff49c4535e6a86c705f5d179cc1"
        }}
        style={styles.ImageBackground_1024_359}
      />
      <View style={styles.View_1024_360} />
      <View style={styles.View_1024_361}>
        <Text style={styles.Text_1024_361}>A</Text>
      </View>
      <View style={styles.View_1024_362}>
        <Text style={styles.Text_1024_362}>PDFs</Text>
      </View>
      <View style={styles.View_1024_363}>
        <View style={styles.View_1024_364} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64af/1cc8/980672c1c092c182c1398d930a5eaa75"
          }}
          style={styles.ImageBackground_1024_365}
        />
      </View>
      <View style={styles.View_1024_366}>
        <View style={styles.View_1024_367} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2636/6621/5d41b8cee8df7cc20ba7018d09715d52"
          }}
          style={styles.ImageBackground_1024_368}
        />
      </View>
      <View style={styles.View_1024_369}>
        <View style={styles.View_1024_370} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29f0/a1bb/7905774b1d30183f54f80bba236b3ac1"
          }}
          style={styles.ImageBackground_1024_371}
        />
      </View>
      <View source={{ uri: "null" }} style={styles.View_1024_372} />
      <View style={styles.View_1024_373}>
        <View style={styles.View_1024_374} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e657/ad8e/998edc8ae95f4c6564ac0c0bb3b4935c"
          }}
          style={styles.ImageBackground_1024_375}
        />
      </View>
      <View style={styles.View_1024_376} />
      <View style={styles.View_1024_377}>
        <View style={styles.View_1024_378}>
          <View style={styles.View_1024_379} />
        </View>
        <View style={styles.View_1024_380}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67ce/4bb5/25857e0c713544668f524a4f7518b7bf"
            }}
            style={styles.ImageBackground_1024_381}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b36/25b2/ac6e400dbb11832bb84ee7a55991e78a"
            }}
            style={styles.ImageBackground_1024_382}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd54/a89d/5c3e97121a2f09ff13af4ad16165123d"
            }}
            style={styles.ImageBackground_1024_385}
          />
        </View>
        <View style={styles.View_1024_388}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df7c/8f9e/6b781ac7185e888cbb03df7c0b8e641d"
            }}
            style={styles.ImageBackground_1024_389}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e34/dccc/c33348fd5ec8f061c70eebc077658044"
            }}
            style={styles.ImageBackground_1024_390}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2c3/fe86/287ca379da875d4826f8b415c6ada88f"
            }}
            style={styles.ImageBackground_1024_393}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3801/24d6/79ed7859c987f019895939c9f545b1fa"
          }}
          style={styles.ImageBackground_1024_397}
        />
      </View>
      <View source={{ uri: "null" }} style={styles.View_1024_398} />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1024_354: {
    width: wp("100%"),
    height: hp("24.84375%"),
    top: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 245, 255, 1)"
  },
  View_1024_539: {
    width: wp("8.61111111111111%"),
    minWidth: wp("8.61111111111111%"),
    height: hp("4.84375%"),
    minHeight: hp("4.84375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%"),
    top: hp("6.406249999999999%"),
    backgroundColor: "rgba(235, 245, 255, 1)"
  },
  ImageBackground_1024_355: {
    width: wp("3.191666867997911%"),
    height: hp("2.96875%"),
    top: hp("7.34375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%")
  },
  View_1024_356: {
    width: wp("40.55555555555556%"),
    top: hp("7.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.72222222222222%")
  },
  Text_1024_356: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1024_357: {
    width: wp("86.66666666666667%"),
    top: hp("16.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%")
  },
  Text_1024_357: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1024_358: {
    width: wp("86.66666666666667%"),
    top: hp("31.406250000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%")
  },
  Text_1024_358: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1024_359: {
    width: wp("88.33333333333333%"),
    minWidth: wp("88.33333333333333%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.833333333333333%"),
    top: hp("13.4375%")
  },
  View_1024_360: {
    width: wp("104.16666666666667%"),
    minWidth: wp("104.16666666666667%"),
    height: hp("8.75%"),
    minHeight: hp("8.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.2222222222222223%"),
    top: hp("92.1875%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.20000000298023224
  },
  View_1024_361: {
    width: wp("4.722222222222222%"),
    top: hp("94.84375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.555555555555555%")
  },
  Text_1024_361: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1024_362: {
    width: wp("10.277777777777777%"),
    top: hp("95%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.72222222222223%")
  },
  Text_1024_362: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1024_363: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("3.75%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.05555555555556%"),
    top: hp("94.21875%")
  },
  View_1024_364: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("3.75%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 254, 254, 1)"
  },
  ImageBackground_1024_365: {
    width: wp("4.02777804268731%"),
    height: hp("1.875%"),
    top: hp("0.9375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%")
  },
  View_1024_366: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("3.75%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("94.21875%")
  },
  View_1024_367: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("3.75%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 254, 254, 1)"
  },
  ImageBackground_1024_368: {
    width: wp("4.027777777777778%"),
    height: hp("1.8749998509883883%"),
    top: hp("0.9375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%")
  },
  View_1024_369: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("3.75%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.72222222222222%"),
    top: hp("94.0625%")
  },
  View_1024_370: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("3.75%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_1024_371: {
    width: wp("3.888888888888889%"),
    height: hp("2.1875%"),
    top: hp("0.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888928%")
  },
  View_1024_372: {
    width: wp("3.3333333333333335%"),
    height: hp("0.267857164144516%"),
    top: hp("96.4285659790039%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%")
  },
  View_1024_373: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("3.75%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.722222222222222%"),
    top: hp("94.0625%")
  },
  View_1024_374: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("3.75%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_1024_375: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9444444444444446%"),
    top: hp("2.03125%")
  },
  View_1024_376: {
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
  View_1024_377: {
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
  View_1024_378: {
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
  View_1024_379: {
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
  View_1024_380: {
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
  ImageBackground_1024_381: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("1.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1024_382: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("1.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1024_385: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: hp("1.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1024_388: {
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
  ImageBackground_1024_389: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("2.03125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1024_390: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("2.03125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1024_393: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("1.09375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1024_397: {
    width: wp("8.685709635416666%"),
    minWidth: wp("8.685709635416666%"),
    height: hp("1.4837646484375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.888888888888889%"),
    top: hp("1.19232177734375%")
  },
  View_1024_398: {
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
