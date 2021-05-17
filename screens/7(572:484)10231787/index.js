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
      <View style={styles.View_572_485}>
        <View style={styles.View_572_486} />
        <View style={styles.View_572_487} />
        <View style={styles.View_572_488} />
        <View style={styles.View_572_489}>
          <Text style={styles.Text_572_489}>Course Title</Text>
        </View>
        <View style={styles.View_572_490}>
          <Text style={styles.Text_572_490}>
            Course description little bit or more information.....
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b66/0ab5/80d5a388d8c482f56a9dec6baac866b9"
          }}
          style={styles.ImageBackground_572_491}
        />
      </View>
      <View style={styles.View_572_495}>
        <View style={styles.View_572_496} />
        <View style={styles.View_572_497} />
        <View style={styles.View_572_498} />
        <View style={styles.View_572_499}>
          <Text style={styles.Text_572_499}>Course Title</Text>
        </View>
        <View style={styles.View_572_500}>
          <Text style={styles.Text_572_500}>
            Course description little bit or more information.....
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b66/0ab5/80d5a388d8c482f56a9dec6baac866b9"
          }}
          style={styles.ImageBackground_572_501}
        />
      </View>
      <View style={styles.View_572_505}>
        <View style={styles.View_572_506} />
        <View style={styles.View_572_507} />
        <View style={styles.View_572_508} />
        <View style={styles.View_572_509}>
          <Text style={styles.Text_572_509}>Course Title</Text>
        </View>
        <View style={styles.View_572_510}>
          <Text style={styles.Text_572_510}>
            Course description little bit or more information.....
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b66/0ab5/80d5a388d8c482f56a9dec6baac866b9"
          }}
          style={styles.ImageBackground_572_511}
        />
      </View>
      <View style={styles.View_572_515}>
        <View style={styles.View_572_516} />
        <View style={styles.View_572_517} />
        <View style={styles.View_572_518} />
        <View style={styles.View_572_519}>
          <Text style={styles.Text_572_519}>Course Title</Text>
        </View>
        <View style={styles.View_572_520}>
          <Text style={styles.Text_572_520}>
            Course description little bit or more information.....
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b66/0ab5/80d5a388d8c482f56a9dec6baac866b9"
          }}
          style={styles.ImageBackground_572_521}
        />
      </View>
      <View style={styles.View_572_525}>
        <View style={styles.View_572_526} />
        <View style={styles.View_572_527} />
        <View style={styles.View_572_528} />
        <View style={styles.View_572_529}>
          <Text style={styles.Text_572_529}>Course Title</Text>
        </View>
        <View style={styles.View_572_530}>
          <Text style={styles.Text_572_530}>
            Course description little bit or more information.....
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b66/0ab5/80d5a388d8c482f56a9dec6baac866b9"
          }}
          style={styles.ImageBackground_572_531}
        />
      </View>
      <View style={styles.View_572_535}>
        <View style={styles.View_572_536} />
        <View style={styles.View_572_537} />
        <View style={styles.View_572_538} />
        <View style={styles.View_572_539}>
          <Text style={styles.Text_572_539}>Course Title</Text>
        </View>
        <View style={styles.View_572_540}>
          <Text style={styles.Text_572_540}>
            Course description little bit or more information.....
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b66/0ab5/80d5a388d8c482f56a9dec6baac866b9"
          }}
          style={styles.ImageBackground_572_541}
        />
      </View>
      <View style={styles.View_572_545}>
        <View style={styles.View_572_546} />
        <View style={styles.View_572_547} />
        <View style={styles.View_572_548} />
        <View style={styles.View_572_549}>
          <Text style={styles.Text_572_549}>Course Title</Text>
        </View>
        <View style={styles.View_572_550}>
          <Text style={styles.Text_572_550}>
            Course description little bit or more information.....
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b66/0ab5/80d5a388d8c482f56a9dec6baac866b9"
          }}
          style={styles.ImageBackground_572_551}
        />
      </View>
      <View style={styles.View_572_555}>
        <View style={styles.View_572_556} />
        <View style={styles.View_572_557} />
        <View style={styles.View_572_558} />
        <View style={styles.View_572_559}>
          <Text style={styles.Text_572_559}>Course Title</Text>
        </View>
        <View style={styles.View_572_560}>
          <Text style={styles.Text_572_560}>
            Course description little bit or more information.....
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b66/0ab5/80d5a388d8c482f56a9dec6baac866b9"
          }}
          style={styles.ImageBackground_572_561}
        />
      </View>
      <View style={styles.View_572_565}>
        <View style={styles.View_572_566} />
        <View style={styles.View_572_567} />
        <View style={styles.View_572_568} />
        <View style={styles.View_572_569}>
          <Text style={styles.Text_572_569}>Course Title</Text>
        </View>
        <View style={styles.View_572_570}>
          <Text style={styles.Text_572_570}>
            Course description little bit or more information.....
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b66/0ab5/80d5a388d8c482f56a9dec6baac866b9"
          }}
          style={styles.ImageBackground_572_571}
        />
      </View>
      <View style={styles.View_572_575}>
        <View style={styles.View_572_576} />
        <View style={styles.View_572_577} />
        <View style={styles.View_572_578} />
        <View style={styles.View_572_579}>
          <Text style={styles.Text_572_579}>Course Title</Text>
        </View>
        <View style={styles.View_572_580}>
          <Text style={styles.Text_572_580}>
            Course description little bit or more information.....
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b66/0ab5/80d5a388d8c482f56a9dec6baac866b9"
          }}
          style={styles.ImageBackground_572_581}
        />
      </View>
      <View style={styles.View_572_585}>
        <View style={styles.View_572_586} />
      </View>
      <View style={styles.View_572_587}>
        <Text style={styles.Text_572_587}>Video</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d90/7e4f/709a2824c5bc39fea147af48228773e1"
        }}
        style={styles.ImageBackground_572_588}
      />
      <View style={styles.View_572_589}>
        <Text style={styles.Text_572_589}>Pdfs</Text>
      </View>
      <View style={styles.View_572_590} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4765/2ac3/315a47056c549ca87118507a6630f84d"
        }}
        style={styles.ImageBackground_572_591}
      />
      <View style={styles.View_572_594}>
        <Text style={styles.Text_572_594}>Search</Text>
      </View>
      <View style={styles.View_572_595}>
        <View style={styles.View_572_596}>
          <View style={styles.View_572_597} />
        </View>
        <View style={styles.View_572_598} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed6a/adf9/f79069c523535415099d63e313d7d05b"
          }}
          style={styles.ImageBackground_572_599}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94e0/1fb5/d0380abcbad1b1db6b7e9ec7f6b40330"
          }}
          style={styles.ImageBackground_572_600}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9b3/ca1b/c5ba92b0573b38c995864832a6a46fd2"
          }}
          style={styles.ImageBackground_572_601}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a23f/273e/243f09830efb80ee0b6857024c6b4dc6"
          }}
          style={styles.ImageBackground_572_602}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/046c/e867/5acaa4d493f2eea22a452ae3450cb556"
          }}
          style={styles.ImageBackground_572_603}
        />
      </View>
      <View style={styles.View_572_604} />
      <View style={styles.View_572_605}>
        <View style={styles.View_572_606}>
          <View style={styles.View_572_607} />
        </View>
        <View style={styles.View_572_608}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67ce/4bb5/25857e0c713544668f524a4f7518b7bf"
            }}
            style={styles.ImageBackground_572_609}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b36/25b2/ac6e400dbb11832bb84ee7a55991e78a"
            }}
            style={styles.ImageBackground_572_610}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd54/a89d/5c3e97121a2f09ff13af4ad16165123d"
            }}
            style={styles.ImageBackground_572_613}
          />
        </View>
        <View style={styles.View_572_616}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df7c/8f9e/6b781ac7185e888cbb03df7c0b8e641d"
            }}
            style={styles.ImageBackground_572_617}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e34/dccc/c33348fd5ec8f061c70eebc077658044"
            }}
            style={styles.ImageBackground_572_618}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2c3/fe86/287ca379da875d4826f8b415c6ada88f"
            }}
            style={styles.ImageBackground_572_621}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3801/24d6/79ed7859c987f019895939c9f545b1fa"
          }}
          style={styles.ImageBackground_572_625}
        />
      </View>
      <View source={{ uri: "null" }} style={styles.View_572_626} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6970/47eb/34925b0a170dbbc541c44963a4b2b1e7"
        }}
        style={styles.ImageBackground_572_627}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_572_485: {
    width: wp("43.333333333333336%"),
    minWidth: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
    minHeight: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("25%")
  },
  View_572_486: {
    width: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
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
  View_572_487: {
    width: wp("43.333333333333336%"),
    height: hp("15.060814612550164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(175, 202, 227, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_572_488: {
    width: wp("12.293145921495226%"),
    height: hp("5.584346792085575%"),
    top: hp("9.47639173497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.040174696180557%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.5
  },
  View_572_489: {
    width: wp("36.26477983262804%"),
    top: hp("17.091578082308743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527777%")
  },
  Text_572_489: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_490: {
    width: wp("39.645394219292534%"),
    top: hp("20.443375384221312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527777%")
  },
  Text_572_490: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_572_491: {
    width: wp("4.889918433295356%"),
    height: hp("3.3071882737790297%"),
    top: hp("10.661074112021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.03546820746528%")
  },
  View_572_495: {
    width: wp("43.333333333333336%"),
    minWidth: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
    minHeight: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("54.50819672131148%")
  },
  View_572_496: {
    width: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
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
  View_572_497: {
    width: wp("43.333333333333336%"),
    height: hp("15.060814612550164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(220, 175, 227, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_572_498: {
    width: wp("12.293145921495226%"),
    height: hp("5.584346792085575%"),
    top: hp("9.476391734972673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.040174696180557%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.5
  },
  View_572_499: {
    width: wp("36.26477983262804%"),
    top: hp("17.091578082308743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527777%")
  },
  Text_572_499: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_500: {
    width: wp("39.645394219292534%"),
    top: hp("20.443375384221298%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527777%")
  },
  Text_572_500: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_572_501: {
    width: wp("4.889918433295356%"),
    height: hp("3.3071882737790297%"),
    top: hp("10.661074112021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.03546820746528%")
  },
  View_572_505: {
    width: wp("43.333333333333336%"),
    minWidth: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
    minHeight: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("84.01639344262296%")
  },
  View_572_506: {
    width: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
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
  View_572_507: {
    width: wp("43.333333333333336%"),
    height: hp("15.060814612550164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(175, 202, 227, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_572_508: {
    width: wp("12.293145921495226%"),
    height: hp("5.584346792085575%"),
    top: hp("9.476391734972665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.040174696180557%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.5
  },
  View_572_509: {
    width: wp("36.26477983262804%"),
    top: hp("17.091578082308743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527777%")
  },
  Text_572_509: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_510: {
    width: wp("39.645394219292534%"),
    top: hp("20.443375384221312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527777%")
  },
  Text_572_510: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_572_511: {
    width: wp("4.889918433295356%"),
    height: hp("3.3071882737790297%"),
    top: hp("10.66107411202185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.03546820746528%")
  },
  View_572_515: {
    width: wp("43.333333333333336%"),
    minWidth: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
    minHeight: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("113.52459016393443%")
  },
  View_572_516: {
    width: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
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
  View_572_517: {
    width: wp("43.333333333333336%"),
    height: hp("15.060814612550164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(175, 202, 227, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_572_518: {
    width: wp("12.293145921495226%"),
    height: hp("5.584346792085575%"),
    top: hp("9.47639173497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.040174696180557%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.5
  },
  View_572_519: {
    width: wp("36.26477983262804%"),
    top: hp("17.091578082308715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527777%")
  },
  Text_572_519: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_520: {
    width: wp("39.645394219292534%"),
    top: hp("20.443375384221312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527777%")
  },
  Text_572_520: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_572_521: {
    width: wp("4.889918433295356%"),
    height: hp("3.3071882737790297%"),
    top: hp("10.661074112021836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.03546820746528%")
  },
  View_572_525: {
    width: wp("43.333333333333336%"),
    minWidth: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
    minHeight: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("143.0327868852459%")
  },
  View_572_526: {
    width: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
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
  View_572_527: {
    width: wp("43.333333333333336%"),
    height: hp("15.060814612550164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(175, 202, 227, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_572_528: {
    width: wp("12.293145921495226%"),
    height: hp("5.584346792085575%"),
    top: hp("9.476391734972651%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.040174696180557%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.5
  },
  View_572_529: {
    width: wp("36.26477983262804%"),
    top: hp("17.09157808230873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527777%")
  },
  Text_572_529: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_530: {
    width: wp("39.645394219292534%"),
    top: hp("20.443375384221298%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527777%")
  },
  Text_572_530: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_572_531: {
    width: wp("4.889918433295356%"),
    height: hp("3.3071882737790297%"),
    top: hp("10.66107411202185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.03546820746528%")
  },
  View_572_535: {
    width: wp("43.333333333333336%"),
    minWidth: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
    minHeight: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.66666666666667%"),
    top: hp("25%")
  },
  View_572_536: {
    width: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
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
  View_572_537: {
    width: wp("43.333333333333336%"),
    height: hp("15.060814612550164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(175, 187, 227, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_572_538: {
    width: wp("12.293145921495226%"),
    height: hp("5.584346792085575%"),
    top: hp("9.47639173497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.040174696180557%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.5
  },
  View_572_539: {
    width: wp("36.26477983262804%"),
    top: hp("17.091578082308743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527715%")
  },
  Text_572_539: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_540: {
    width: wp("39.645394219292534%"),
    top: hp("20.443375384221312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527715%")
  },
  Text_572_540: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_572_541: {
    width: wp("4.889918433295356%"),
    height: hp("3.3071882737790297%"),
    top: hp("10.661074112021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.03546820746527%")
  },
  View_572_545: {
    width: wp("43.333333333333336%"),
    minWidth: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
    minHeight: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.66666666666667%"),
    top: hp("54.50819672131148%")
  },
  View_572_546: {
    width: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
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
  View_572_547: {
    width: wp("43.333333333333336%"),
    height: hp("15.060814612550164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(175, 227, 180, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_572_548: {
    width: wp("12.293145921495226%"),
    height: hp("5.584346792085575%"),
    top: hp("9.476391734972673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.040174696180557%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.5
  },
  View_572_549: {
    width: wp("36.26477983262804%"),
    top: hp("17.091578082308743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527715%")
  },
  Text_572_549: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_550: {
    width: wp("39.645394219292534%"),
    top: hp("20.443375384221298%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527715%")
  },
  Text_572_550: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_572_551: {
    width: wp("4.889918433295356%"),
    height: hp("3.3071882737790297%"),
    top: hp("10.661074112021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.03546820746527%")
  },
  View_572_555: {
    width: wp("43.333333333333336%"),
    minWidth: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
    minHeight: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.66666666666667%"),
    top: hp("84.01639344262296%")
  },
  View_572_556: {
    width: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
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
  View_572_557: {
    width: wp("43.333333333333336%"),
    height: hp("15.060814612550164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(175, 187, 227, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_572_558: {
    width: wp("12.293145921495226%"),
    height: hp("5.584346792085575%"),
    top: hp("9.476391734972665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.040174696180557%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.5
  },
  View_572_559: {
    width: wp("36.26477983262804%"),
    top: hp("17.091578082308743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527715%")
  },
  Text_572_559: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_560: {
    width: wp("39.645394219292534%"),
    top: hp("20.443375384221312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527715%")
  },
  Text_572_560: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_572_561: {
    width: wp("4.889918433295356%"),
    height: hp("3.3071882737790297%"),
    top: hp("10.66107411202185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.03546820746527%")
  },
  View_572_565: {
    width: wp("43.333333333333336%"),
    minWidth: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
    minHeight: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.66666666666667%"),
    top: hp("113.52459016393443%")
  },
  View_572_566: {
    width: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
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
  View_572_567: {
    width: wp("43.333333333333336%"),
    height: hp("15.060814612550164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(175, 187, 227, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_572_568: {
    width: wp("12.293145921495226%"),
    height: hp("5.584346792085575%"),
    top: hp("9.47639173497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.040174696180557%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.5
  },
  View_572_569: {
    width: wp("36.26477983262804%"),
    top: hp("17.091578082308715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527715%")
  },
  Text_572_569: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_570: {
    width: wp("39.645394219292534%"),
    top: hp("20.443375384221312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527715%")
  },
  Text_572_570: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_572_571: {
    width: wp("4.889918433295356%"),
    height: hp("3.3071882737790297%"),
    top: hp("10.661074112021836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.03546820746527%")
  },
  View_572_575: {
    width: wp("43.333333333333336%"),
    minWidth: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
    minHeight: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.66666666666667%"),
    top: hp("143.0327868852459%")
  },
  View_572_576: {
    width: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
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
  View_572_577: {
    width: wp("43.333333333333336%"),
    height: hp("15.060814612550164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(175, 187, 227, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_572_578: {
    width: wp("12.293145921495226%"),
    height: hp("5.584346792085575%"),
    top: hp("9.476391734972651%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.040174696180557%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.5
  },
  View_572_579: {
    width: wp("36.26477983262804%"),
    top: hp("17.09157808230873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527715%")
  },
  Text_572_579: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_580: {
    width: wp("39.645394219292534%"),
    top: hp("20.443375384221298%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527715%")
  },
  Text_572_580: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_572_581: {
    width: wp("4.889918433295356%"),
    height: hp("3.3071882737790297%"),
    top: hp("10.66107411202185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.03546820746527%")
  },
  View_572_585: {
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
  View_572_586: {
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
  View_572_587: {
    width: wp("12.777777777777777%"),
    minWidth: wp("12.777777777777777%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.944444444444445%"),
    top: hp("7.923497267759563%")
  },
  Text_572_587: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_572_588: {
    width: wp("17.22222222222222%"),
    minWidth: wp("17.22222222222222%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.555555555555554%"),
    top: hp("11.202185792349727%")
  },
  View_572_589: {
    width: wp("9.722222222222223%"),
    minWidth: wp("9.722222222222223%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.444444444444446%"),
    top: hp("7.923497267759563%")
  },
  Text_572_589: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_590: {
    width: wp("90.27777777777779%"),
    minWidth: wp("90.27777777777779%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("14.617486338797814%"),
    backgroundColor: "rgba(107, 112, 116, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  ImageBackground_572_591: {
    width: wp("6.111111111111111%"),
    height: hp("3.0054644808743167%"),
    top: hp("16.120218579234972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.88888888888889%")
  },
  View_572_594: {
    width: wp("13.88888888888889%"),
    minWidth: wp("13.88888888888889%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.88888888888889%"),
    top: hp("16.666666666666664%")
  },
  Text_572_594: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_595: {
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
  View_572_596: {
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
  View_572_597: {
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
  View_572_598: {
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
  ImageBackground_572_599: {
    width: wp("7.38425890604655%"),
    height: hp("3.243410391885726%"),
    top: hp("4.867870560109296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.335693359375%")
  },
  ImageBackground_572_600: {
    width: wp("5.555555555555555%"),
    height: hp("3.0054644808743167%"),
    top: hp("5.191256830601105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.44444444444444%")
  },
  ImageBackground_572_601: {
    width: wp("4.444444444444445%"),
    height: hp("3.0054644808743167%"),
    top: hp("5.191256830601105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.11111111111111%")
  },
  ImageBackground_572_602: {
    width: wp("9.95371182759603%"),
    height: hp("4.895269675332992%"),
    top: hp("2.2654382257513817%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.99534776475695%")
  },
  ImageBackground_572_603: {
    width: wp("5.4166740841335725%"),
    height: hp("2.959927313966178%"),
    top: hp("5.077457949112031%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.180555555555554%")
  },
  View_572_604: {
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
  View_572_605: {
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
  View_572_606: {
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
  View_572_607: {
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
  View_572_608: {
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
  ImageBackground_572_609: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_572_610: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_572_613: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_572_616: {
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
  ImageBackground_572_617: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_572_618: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_572_621: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_572_625: {
    width: wp("8.685709635416666%"),
    minWidth: wp("8.685709635416666%"),
    height: hp("1.2972805669398906%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888888888888884%"),
    top: hp("1.0424671277322404%")
  },
  View_572_626: {
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
  ImageBackground_572_627: {
    width: wp("6.111111111111111%"),
    height: hp("3.0054644808743167%"),
    top: hp("16.120218579234972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.55555555555556%")
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
