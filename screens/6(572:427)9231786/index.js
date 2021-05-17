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
      <View style={styles.View_572_428}>
        <View style={styles.View_I572_428_361_758} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5607/1a17/8153b172e3e38f45150688de65b9edb9"
          }}
          style={styles.ImageBackground_I572_428_361_759}
        />
        <View style={styles.View_I572_428_361_760}>
          <Text style={styles.Text_I572_428_361_760}>Course Title</Text>
        </View>
        <View style={styles.View_I572_428_361_761}>
          <Text style={styles.Text_I572_428_361_761}>
            Course description little bit or more information.....
          </Text>
        </View>
      </View>
      <View style={styles.View_572_429}>
        <View style={styles.View_I572_429_361_758} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5607/1a17/8153b172e3e38f45150688de65b9edb9"
          }}
          style={styles.ImageBackground_I572_429_361_759}
        />
        <View style={styles.View_I572_429_361_760}>
          <Text style={styles.Text_I572_429_361_760}>Course Title</Text>
        </View>
        <View style={styles.View_I572_429_361_761}>
          <Text style={styles.Text_I572_429_361_761}>
            Course description little bit or more information.....
          </Text>
        </View>
      </View>
      <View style={styles.View_572_430}>
        <View style={styles.View_I572_430_361_758} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5607/1a17/8153b172e3e38f45150688de65b9edb9"
          }}
          style={styles.ImageBackground_I572_430_361_759}
        />
        <View style={styles.View_I572_430_361_760}>
          <Text style={styles.Text_I572_430_361_760}>Course Title</Text>
        </View>
        <View style={styles.View_I572_430_361_761}>
          <Text style={styles.Text_I572_430_361_761}>
            Course description little bit or more information.....
          </Text>
        </View>
      </View>
      <View style={styles.View_572_431}>
        <View style={styles.View_I572_431_361_758} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5607/1a17/8153b172e3e38f45150688de65b9edb9"
          }}
          style={styles.ImageBackground_I572_431_361_759}
        />
        <View style={styles.View_I572_431_361_760}>
          <Text style={styles.Text_I572_431_361_760}>Course Title</Text>
        </View>
        <View style={styles.View_I572_431_361_761}>
          <Text style={styles.Text_I572_431_361_761}>
            Course description little bit or more information.....
          </Text>
        </View>
      </View>
      <View style={styles.View_572_432}>
        <View style={styles.View_I572_432_361_758} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5607/1a17/8153b172e3e38f45150688de65b9edb9"
          }}
          style={styles.ImageBackground_I572_432_361_759}
        />
        <View style={styles.View_I572_432_361_760}>
          <Text style={styles.Text_I572_432_361_760}>Course Title</Text>
        </View>
        <View style={styles.View_I572_432_361_761}>
          <Text style={styles.Text_I572_432_361_761}>
            Course description little bit or more information.....
          </Text>
        </View>
      </View>
      <View style={styles.View_572_433}>
        <View style={styles.View_I572_433_361_763} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5607/1a17/8153b172e3e38f45150688de65b9edb9"
          }}
          style={styles.ImageBackground_I572_433_361_764}
        />
        <View style={styles.View_I572_433_361_765}>
          <Text style={styles.Text_I572_433_361_765}>Course Title</Text>
        </View>
        <View style={styles.View_I572_433_361_766}>
          <Text style={styles.Text_I572_433_361_766}>
            Course description little bit or more information.....
          </Text>
        </View>
      </View>
      <View style={styles.View_572_434}>
        <View style={styles.View_I572_434_361_763} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5607/1a17/8153b172e3e38f45150688de65b9edb9"
          }}
          style={styles.ImageBackground_I572_434_361_764}
        />
        <View style={styles.View_I572_434_361_765}>
          <Text style={styles.Text_I572_434_361_765}>Course Title</Text>
        </View>
        <View style={styles.View_I572_434_361_766}>
          <Text style={styles.Text_I572_434_361_766}>
            Course description little bit or more information.....
          </Text>
        </View>
      </View>
      <View style={styles.View_572_435}>
        <View style={styles.View_I572_435_361_763} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5607/1a17/8153b172e3e38f45150688de65b9edb9"
          }}
          style={styles.ImageBackground_I572_435_361_764}
        />
        <View style={styles.View_I572_435_361_765}>
          <Text style={styles.Text_I572_435_361_765}>Course Title</Text>
        </View>
        <View style={styles.View_I572_435_361_766}>
          <Text style={styles.Text_I572_435_361_766}>
            Course description little bit or more information.....
          </Text>
        </View>
      </View>
      <View style={styles.View_572_436}>
        <View style={styles.View_I572_436_361_763} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5607/1a17/8153b172e3e38f45150688de65b9edb9"
          }}
          style={styles.ImageBackground_I572_436_361_764}
        />
        <View style={styles.View_I572_436_361_765}>
          <Text style={styles.Text_I572_436_361_765}>Course Title</Text>
        </View>
        <View style={styles.View_I572_436_361_766}>
          <Text style={styles.Text_I572_436_361_766}>
            Course description little bit or more information.....
          </Text>
        </View>
      </View>
      <View style={styles.View_572_437}>
        <View style={styles.View_I572_437_361_763} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5607/1a17/8153b172e3e38f45150688de65b9edb9"
          }}
          style={styles.ImageBackground_I572_437_361_764}
        />
        <View style={styles.View_I572_437_361_765}>
          <Text style={styles.Text_I572_437_361_765}>Course Title</Text>
        </View>
        <View style={styles.View_I572_437_361_766}>
          <Text style={styles.Text_I572_437_361_766}>
            Course description little bit or more information.....
          </Text>
        </View>
      </View>
      <View style={styles.View_572_438}>
        <View style={styles.View_572_439} />
      </View>
      <View style={styles.View_572_440}>
        <Text style={styles.Text_572_440}>Video</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d90/7e4f/709a2824c5bc39fea147af48228773e1"
        }}
        style={styles.ImageBackground_572_441}
      />
      <View style={styles.View_572_442}>
        <Text style={styles.Text_572_442}>Pdfs</Text>
      </View>
      <View style={styles.View_572_443}>
        <View style={styles.View_572_444} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4765/2ac3/315a47056c549ca87118507a6630f84d"
          }}
          style={styles.ImageBackground_572_445}
        />
        <View style={styles.View_572_448}>
          <Text style={styles.Text_572_448}>Search</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6970/47eb/34925b0a170dbbc541c44963a4b2b1e7"
        }}
        style={styles.ImageBackground_572_449}
      />
      <View style={styles.View_572_452}>
        <View style={styles.View_572_453}>
          <View style={styles.View_572_454} />
        </View>
        <View style={styles.View_572_455} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed6a/adf9/f79069c523535415099d63e313d7d05b"
          }}
          style={styles.ImageBackground_572_456}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94e0/1fb5/d0380abcbad1b1db6b7e9ec7f6b40330"
          }}
          style={styles.ImageBackground_572_457}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9b3/ca1b/c5ba92b0573b38c995864832a6a46fd2"
          }}
          style={styles.ImageBackground_572_458}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a23f/273e/243f09830efb80ee0b6857024c6b4dc6"
          }}
          style={styles.ImageBackground_572_459}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/046c/e867/5acaa4d493f2eea22a452ae3450cb556"
          }}
          style={styles.ImageBackground_572_460}
        />
      </View>
      <View style={styles.View_572_461} />
      <View style={styles.View_572_462}>
        <View style={styles.View_572_463}>
          <View style={styles.View_572_464} />
        </View>
        <View style={styles.View_572_465}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67ce/4bb5/25857e0c713544668f524a4f7518b7bf"
            }}
            style={styles.ImageBackground_572_466}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b36/25b2/ac6e400dbb11832bb84ee7a55991e78a"
            }}
            style={styles.ImageBackground_572_467}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd54/a89d/5c3e97121a2f09ff13af4ad16165123d"
            }}
            style={styles.ImageBackground_572_470}
          />
        </View>
        <View style={styles.View_572_473}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df7c/8f9e/6b781ac7185e888cbb03df7c0b8e641d"
            }}
            style={styles.ImageBackground_572_474}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e34/dccc/c33348fd5ec8f061c70eebc077658044"
            }}
            style={styles.ImageBackground_572_475}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2c3/fe86/287ca379da875d4826f8b415c6ada88f"
            }}
            style={styles.ImageBackground_572_478}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3801/24d6/79ed7859c987f019895939c9f545b1fa"
          }}
          style={styles.ImageBackground_572_482}
        />
      </View>
      <View source={{ uri: "null" }} style={styles.View_572_483} />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_572_428: {
    width: wp("43.333333333333336%"),
    minWidth: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
    minHeight: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_428_361_758: {
    flexGrow: 1,
    width: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.019999999552965164,
    borderColor: "rgba(51, 51, 51, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  ImageBackground_I572_428_361_759: {
    flexGrow: 1,
    width: wp("43.204684787326386%"),
    height: hp("15.529291747046297%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_I572_428_361_760: {
    flexGrow: 1,
    width: wp("36.26477559407552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.843973795572917%"),
    top: hp("17.622950819672127%")
  },
  Text_I572_428_361_760: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_428_361_761: {
    flexGrow: 1,
    width: wp("39.64538998074002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.843973795572917%"),
    top: hp("20.77116419057377%")
  },
  Text_I572_428_361_761: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_429: {
    width: wp("43.333333333333336%"),
    minWidth: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
    minHeight: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("54.50819672131148%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_429_361_758: {
    flexGrow: 1,
    width: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.019999999552965164,
    borderColor: "rgba(51, 51, 51, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  ImageBackground_I572_429_361_759: {
    flexGrow: 1,
    width: wp("43.204684787326386%"),
    height: hp("15.529291747046297%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_I572_429_361_760: {
    flexGrow: 1,
    width: wp("36.26477559407552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.843973795572917%"),
    top: hp("17.622950819672127%")
  },
  Text_I572_429_361_760: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_429_361_761: {
    flexGrow: 1,
    width: wp("39.64538998074002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.843973795572917%"),
    top: hp("20.77116419057377%")
  },
  Text_I572_429_361_761: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_430: {
    width: wp("43.333333333333336%"),
    minWidth: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
    minHeight: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("84.01639344262296%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_430_361_758: {
    flexGrow: 1,
    width: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.019999999552965164,
    borderColor: "rgba(51, 51, 51, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  ImageBackground_I572_430_361_759: {
    flexGrow: 1,
    width: wp("43.204684787326386%"),
    height: hp("15.529291747046297%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_I572_430_361_760: {
    flexGrow: 1,
    width: wp("36.26477559407552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.843973795572917%"),
    top: hp("17.622950819672127%")
  },
  Text_I572_430_361_760: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_430_361_761: {
    flexGrow: 1,
    width: wp("39.64538998074002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.843973795572917%"),
    top: hp("20.771164190573757%")
  },
  Text_I572_430_361_761: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_431: {
    width: wp("43.333333333333336%"),
    minWidth: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
    minHeight: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("113.52459016393443%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_431_361_758: {
    flexGrow: 1,
    width: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.019999999552965164,
    borderColor: "rgba(51, 51, 51, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  ImageBackground_I572_431_361_759: {
    flexGrow: 1,
    width: wp("43.204684787326386%"),
    height: hp("15.529291747046297%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_I572_431_361_760: {
    flexGrow: 1,
    width: wp("36.26477559407552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.843973795572917%"),
    top: hp("17.622950819672113%")
  },
  Text_I572_431_361_760: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_431_361_761: {
    flexGrow: 1,
    width: wp("39.64538998074002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.843973795572917%"),
    top: hp("20.77116419057377%")
  },
  Text_I572_431_361_761: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_432: {
    width: wp("43.333333333333336%"),
    minWidth: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
    minHeight: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("143.0327868852459%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_432_361_758: {
    flexGrow: 1,
    width: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.019999999552965164,
    borderColor: "rgba(51, 51, 51, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  ImageBackground_I572_432_361_759: {
    flexGrow: 1,
    width: wp("43.204684787326386%"),
    height: hp("15.529291747046297%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_I572_432_361_760: {
    flexGrow: 1,
    width: wp("36.26477559407552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.843973795572917%"),
    top: hp("17.622950819672127%")
  },
  Text_I572_432_361_760: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_432_361_761: {
    flexGrow: 1,
    width: wp("39.64538998074002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.843973795572917%"),
    top: hp("20.771164190573757%")
  },
  Text_I572_432_361_761: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_433: {
    width: wp("43.333333333333336%"),
    minWidth: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
    minHeight: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.22222222222223%"),
    top: hp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_433_361_763: {
    flexGrow: 1,
    width: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.019999999552965164,
    borderColor: "rgba(51, 51, 51, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  ImageBackground_I572_433_361_764: {
    flexGrow: 1,
    width: wp("43.204684787326386%"),
    height: hp("15.529291747046297%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_I572_433_361_765: {
    flexGrow: 1,
    width: wp("36.26477559407552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527786%"),
    top: hp("17.622950819672127%")
  },
  Text_I572_433_361_765: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_433_361_766: {
    flexGrow: 1,
    width: wp("39.64538998074002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527786%"),
    top: hp("20.77116419057377%")
  },
  Text_I572_433_361_766: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_434: {
    width: wp("43.333333333333336%"),
    minWidth: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
    minHeight: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.22222222222223%"),
    top: hp("54.50819672131148%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_434_361_763: {
    flexGrow: 1,
    width: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.019999999552965164,
    borderColor: "rgba(51, 51, 51, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  ImageBackground_I572_434_361_764: {
    flexGrow: 1,
    width: wp("43.204684787326386%"),
    height: hp("15.529291747046297%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_I572_434_361_765: {
    flexGrow: 1,
    width: wp("36.26477559407552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527786%"),
    top: hp("17.622950819672127%")
  },
  Text_I572_434_361_765: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_434_361_766: {
    flexGrow: 1,
    width: wp("39.64538998074002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527786%"),
    top: hp("20.77116419057377%")
  },
  Text_I572_434_361_766: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_435: {
    width: wp("43.333333333333336%"),
    minWidth: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
    minHeight: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.22222222222223%"),
    top: hp("84.01639344262296%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_435_361_763: {
    flexGrow: 1,
    width: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.019999999552965164,
    borderColor: "rgba(51, 51, 51, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  ImageBackground_I572_435_361_764: {
    flexGrow: 1,
    width: wp("43.204684787326386%"),
    height: hp("15.529291747046297%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_I572_435_361_765: {
    flexGrow: 1,
    width: wp("36.26477559407552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527786%"),
    top: hp("17.622950819672127%")
  },
  Text_I572_435_361_765: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_435_361_766: {
    flexGrow: 1,
    width: wp("39.64538998074002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527786%"),
    top: hp("20.771164190573757%")
  },
  Text_I572_435_361_766: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_436: {
    width: wp("43.333333333333336%"),
    minWidth: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
    minHeight: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.22222222222223%"),
    top: hp("113.52459016393443%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_436_361_763: {
    flexGrow: 1,
    width: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.019999999552965164,
    borderColor: "rgba(51, 51, 51, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  ImageBackground_I572_436_361_764: {
    flexGrow: 1,
    width: wp("43.204684787326386%"),
    height: hp("15.529291747046297%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_I572_436_361_765: {
    flexGrow: 1,
    width: wp("36.26477559407552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527786%"),
    top: hp("17.622950819672113%")
  },
  Text_I572_436_361_765: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_436_361_766: {
    flexGrow: 1,
    width: wp("39.64538998074002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527786%"),
    top: hp("20.77116419057377%")
  },
  Text_I572_436_361_766: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_437: {
    width: wp("43.333333333333336%"),
    minWidth: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
    minHeight: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.22222222222223%"),
    top: hp("143.0327868852459%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_437_361_763: {
    flexGrow: 1,
    width: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.019999999552965164,
    borderColor: "rgba(51, 51, 51, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  ImageBackground_I572_437_361_764: {
    flexGrow: 1,
    width: wp("43.204684787326386%"),
    height: hp("15.529291747046297%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_I572_437_361_765: {
    flexGrow: 1,
    width: wp("36.26477559407552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527786%"),
    top: hp("17.622950819672127%")
  },
  Text_I572_437_361_765: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_437_361_766: {
    flexGrow: 1,
    width: wp("39.64538998074002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527786%"),
    top: hp("20.771164190573757%")
  },
  Text_I572_437_361_766: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_438: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14.344262295081966%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590164%")
  },
  View_572_439: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14.344262295081966%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(238, 241, 248, 1)"
  },
  View_572_440: {
    width: wp("13.055555555555557%"),
    minWidth: wp("13.055555555555557%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.944444444444445%"),
    top: hp("7.923497267759563%")
  },
  Text_572_440: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_572_441: {
    width: wp("17.22222222222222%"),
    minWidth: wp("17.22222222222222%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("11.202185792349727%")
  },
  View_572_442: {
    width: wp("9.444444444444445%"),
    minWidth: wp("9.444444444444445%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.444444444444446%"),
    top: hp("7.923497267759563%")
  },
  Text_572_442: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_443: {
    width: wp("90.27777777777779%"),
    minWidth: wp("90.27777777777779%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("14.617486338797814%")
  },
  View_572_444: {
    width: wp("90.27777777777779%"),
    minWidth: wp("90.27777777777779%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 112, 116, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  ImageBackground_572_445: {
    width: wp("6.111111111111111%"),
    height: hp("3.0054644808743167%"),
    top: hp("1.5027322404371581%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888888888888893%")
  },
  View_572_448: {
    width: wp("13.88888888888889%"),
    minWidth: wp("13.88888888888889%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.88888888888889%"),
    top: hp("2.04918032786885%")
  },
  Text_572_448: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_572_449: {
    width: wp("6.111111111111111%"),
    height: hp("3.0054644808743167%"),
    top: hp("16.120218579234972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.55555555555556%")
  },
  View_572_452: {
    width: wp("100.55555555555556%"),
    minWidth: wp("100.55555555555556%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.5555555555555556%"),
    top: hp("75.95628415300546%")
  },
  View_572_453: {
    width: wp("100.55555555555556%"),
    minWidth: wp("100.55555555555556%"),
    height: hp("8.60655737704918%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.732240437158481%")
  },
  View_572_454: {
    width: wp("100.55555555555556%"),
    minWidth: wp("100.55555555555556%"),
    height: hp("8.60655737704918%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_572_455: {
    width: wp("18.61111111111111%"),
    minWidth: wp("18.61111111111111%"),
    height: hp("9.153005464480875%"),
    minHeight: hp("9.153005464480875%"),
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
  ImageBackground_572_456: {
    width: wp("7.38425890604655%"),
    height: hp("3.243410391885726%"),
    top: hp("4.867870560109296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.335659450954861%")
  },
  ImageBackground_572_457: {
    width: wp("5.555555555555555%"),
    height: hp("3.0054644808743167%"),
    top: hp("5.191256830601105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.44444444444444%")
  },
  ImageBackground_572_458: {
    width: wp("4.444444444444445%"),
    height: hp("3.0054644808743167%"),
    top: hp("5.191256830601105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.11111111111111%")
  },
  ImageBackground_572_459: {
    width: wp("9.95371182759603%"),
    height: hp("4.895269675332992%"),
    top: hp("2.2654382257513817%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.99534776475695%")
  },
  ImageBackground_572_460: {
    width: wp("5.4166740841335725%"),
    height: hp("2.959927313966178%"),
    top: hp("5.077457949112031%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.180555555555554%")
  },
  View_572_461: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(1, 16, 56, 1)"
  },
  View_572_462: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2777777777777778%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_572_463: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_572_464: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.2777777777777778%"),
    top: hp("0.1366120218579235%")
  },
  View_572_465: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.83333333333334%"),
    top: hp("0.819672131147541%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_572_466: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_572_467: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_572_470: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_572_473: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.05555555555556%"),
    top: hp("0.6830601092896175%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_572_474: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_572_475: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_572_478: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_572_482: {
    width: wp("8.685709635416666%"),
    minWidth: wp("8.685709635416666%"),
    height: hp("1.2972805669398906%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888888888888884%"),
    top: hp("1.0424671277322404%")
  },
  View_572_483: {
    width: wp("21.944444444444443%"),
    minWidth: wp("21.944444444444443%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.44444444444444%"),
    top: hp("75.27322404371584%")
  },
  View_2: { height: 1280 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
