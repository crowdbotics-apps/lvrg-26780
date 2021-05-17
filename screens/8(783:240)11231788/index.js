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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a6c/8454/f3358f499e5577933e2307d4e956fab7"
        }}
        style={styles.ImageBackground_783_241}
      />
      <View style={styles.View_783_242} />
      <View style={styles.View_783_243} />
      <View style={styles.View_783_244} />
      <View style={styles.View_783_245}>
        <Text style={styles.Text_783_245}>AUD/USD</Text>
      </View>
      <View style={styles.View_783_246}>
        <Text style={styles.Text_783_246}>AUD/USD</Text>
      </View>
      <View style={styles.View_783_247}>
        <Text style={styles.Text_783_247}>AUD/USD</Text>
      </View>
      <View style={styles.View_783_248}>
        <Text style={styles.Text_783_248}>0.53 Cents</Text>
      </View>
      <View style={styles.View_783_249}>
        <Text style={styles.Text_783_249}>0.53 Cents</Text>
      </View>
      <View style={styles.View_783_250}>
        <Text style={styles.Text_783_250}>0.53 Cents</Text>
      </View>
      <View style={styles.View_783_251}>
        <Text style={styles.Text_783_251}>+2150.01</Text>
      </View>
      <View style={styles.View_783_252}>
        <Text style={styles.Text_783_252}>+2150.01</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6797/cbec/b245179848c10119c5f2149dadc293af"
        }}
        style={styles.ImageBackground_783_253}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6797/cbec/b245179848c10119c5f2149dadc293af"
        }}
        style={styles.ImageBackground_783_254}
      />
      <View style={styles.View_783_255}>
        <Text style={styles.Text_783_255}>-452.30</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3d9/211a/88f93ed6bdd0d4fb1dbc4a1a9ce2d64d"
        }}
        style={styles.ImageBackground_783_256}
      />
      <View style={styles.View_783_257}>
        <Text style={styles.Text_783_257}>Courses</Text>
      </View>
      <View style={styles.View_783_258}>
        <Text style={styles.Text_783_258}>Video</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b44/07db/0989446b1fb50ff5b8f0539f7537b064"
        }}
        style={styles.ImageBackground_783_259}
      />
      <View style={styles.View_783_260} />
      <View style={styles.View_783_261}>
        <Text style={styles.Text_783_261}>PDFs</Text>
      </View>
      <View style={styles.View_783_262}>
        <View style={styles.View_783_263}>
          <View style={styles.View_I783_263_361_758} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5607/1a17/8153b172e3e38f45150688de65b9edb9"
            }}
            style={styles.ImageBackground_I783_263_361_759}
          />
          <View style={styles.View_I783_263_361_760}>
            <Text style={styles.Text_I783_263_361_760}>Course Title</Text>
          </View>
          <View style={styles.View_I783_263_361_761}>
            <Text style={styles.Text_I783_263_361_761}>
              Course description little bit or more information.....
            </Text>
          </View>
        </View>
        <View style={styles.View_783_264}>
          <View style={styles.View_I783_264_361_763} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5607/1a17/8153b172e3e38f45150688de65b9edb9"
            }}
            style={styles.ImageBackground_I783_264_361_764}
          />
          <View style={styles.View_I783_264_361_765}>
            <Text style={styles.Text_I783_264_361_765}>Course Title</Text>
          </View>
          <View style={styles.View_I783_264_361_766}>
            <Text style={styles.Text_I783_264_361_766}>
              Course description little bit or more information.....
            </Text>
          </View>
        </View>
        <View style={styles.View_783_265}>
          <View style={styles.View_I783_265_361_768} />
          <View style={styles.View_I783_265_361_769}>
            <Text style={styles.Text_I783_265_361_769}>View more</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_783_266} />
      <View style={styles.View_783_267} />
      <View style={styles.View_783_268}>
        <View style={styles.View_783_269}>
          <View style={styles.View_I783_269_361_1198} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d4f/e3dc/e4b4044705e440d94ecbc3bc7fb474a0"
            }}
            style={styles.ImageBackground_I783_269_361_1199}
          />
        </View>
        <View style={styles.View_783_270}>
          <View style={styles.View_I783_270_361_1200} />
          <View style={styles.View_I783_270_361_1201}>
            <Text style={styles.Text_I783_270_361_1201}>AUD/USD</Text>
          </View>
          <View style={styles.View_I783_270_361_1202}>
            <Text style={styles.Text_I783_270_361_1202}>
              Description little bit or more information.
            </Text>
          </View>
          <View style={styles.View_I783_270_361_1203}>
            <Text style={styles.Text_I783_270_361_1203}>-120.00</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7f5/4255/cbbfc7b2f75c1e08c61e8767d78892ad"
            }}
            style={styles.ImageBackground_I783_270_361_1204}
          />
        </View>
        <View style={styles.View_783_271}>
          <View style={styles.View_I783_271_361_1206} />
          <View style={styles.View_I783_271_361_1207}>
            <Text style={styles.Text_I783_271_361_1207}>AUD/USD</Text>
          </View>
          <View style={styles.View_I783_271_361_1208}>
            <Text style={styles.Text_I783_271_361_1208}>+2150.50</Text>
          </View>
          <View style={styles.View_I783_271_361_1209}>
            <Text style={styles.Text_I783_271_361_1209}>
              Description little bit or more information.
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1e3/de09/b278cc095fb336ef4dd3f051eb5bf8d0"
            }}
            style={styles.ImageBackground_I783_271_361_1210}
          />
        </View>
      </View>
      <View style={styles.View_783_272}>
        <View style={styles.View_783_273} />
        <View style={styles.View_783_274} />
        <View style={styles.View_783_275} />
        <View style={styles.View_783_276}>
          <Text style={styles.Text_783_276}>Course Title</Text>
        </View>
        <View style={styles.View_783_277}>
          <Text style={styles.Text_783_277}>
            Course description little bit or more information.....
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b66/0ab5/80d5a388d8c482f56a9dec6baac866b9"
          }}
          style={styles.ImageBackground_783_278}
        />
      </View>
      <View style={styles.View_783_282}>
        <View style={styles.View_783_283} />
        <View style={styles.View_783_284} />
        <View style={styles.View_783_285} />
        <View style={styles.View_783_286}>
          <Text style={styles.Text_783_286}>Course Title</Text>
        </View>
        <View style={styles.View_783_287}>
          <Text style={styles.Text_783_287}>
            Course description little bit or more information.....
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b66/0ab5/80d5a388d8c482f56a9dec6baac866b9"
          }}
          style={styles.ImageBackground_783_288}
        />
      </View>
      <View style={styles.View_783_292} />
      <View style={styles.View_783_293}>
        <View style={styles.View_783_294}>
          <View style={styles.View_783_295} />
        </View>
        <View style={styles.View_783_296} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/226d/19e4/7f660071bb66d8fd32b931bae758b087"
          }}
          style={styles.ImageBackground_783_297}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9696/e12b/1609bcd09b18f1c944c65fbae12d1901"
          }}
          style={styles.ImageBackground_783_298}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9b3/ca1b/c5ba92b0573b38c995864832a6a46fd2"
          }}
          style={styles.ImageBackground_783_299}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a23f/273e/243f09830efb80ee0b6857024c6b4dc6"
          }}
          style={styles.ImageBackground_783_300}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/046c/e867/5acaa4d493f2eea22a452ae3450cb556"
          }}
          style={styles.ImageBackground_783_301}
        />
      </View>
      <View style={styles.View_783_302} />
      <View style={styles.View_783_303}>
        <View style={styles.View_783_304} />
      </View>
      <View style={styles.View_783_305}>
        <View style={styles.View_783_306}>
          <View style={styles.View_783_307} />
        </View>
        <View style={styles.View_783_308}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67ce/4bb5/25857e0c713544668f524a4f7518b7bf"
            }}
            style={styles.ImageBackground_783_309}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b36/25b2/ac6e400dbb11832bb84ee7a55991e78a"
            }}
            style={styles.ImageBackground_783_310}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd54/a89d/5c3e97121a2f09ff13af4ad16165123d"
            }}
            style={styles.ImageBackground_783_313}
          />
        </View>
        <View style={styles.View_783_316}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df7c/8f9e/6b781ac7185e888cbb03df7c0b8e641d"
            }}
            style={styles.ImageBackground_783_317}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e34/dccc/c33348fd5ec8f061c70eebc077658044"
            }}
            style={styles.ImageBackground_783_318}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2c3/fe86/287ca379da875d4826f8b415c6ada88f"
            }}
            style={styles.ImageBackground_783_321}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3801/24d6/79ed7859c987f019895939c9f545b1fa"
          }}
          style={styles.ImageBackground_783_325}
        />
      </View>
      <View source={{ uri: "null" }} style={styles.View_783_326} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b11/f559/d2cafdf8f9c606904b951b505d2a431e"
        }}
        style={styles.ImageBackground_783_327}
      />
      <View style={styles.View_783_330}>
        <Text style={styles.Text_783_330}>Live</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e18c/8a32/b360694be25edac5abe6ebfb1e5f5b20"
        }}
        style={styles.ImageBackground_783_331}
      />
      <View style={styles.View_783_332}>
        <Text style={styles.Text_783_332}>Akshay is not live right now </Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_783_241: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.22222222222223%"),
    top: hp("4.918032786885246%")
  },
  View_783_242: {
    width: wp("101.66666666666666%"),
    height: hp("9.01639344262295%"),
    top: hp("36.74863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.5555555555555556%"),
    backgroundColor: "rgba(64, 70, 75, 1)",
    opacity: 0.03999999910593033,
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_783_243: {
    width: wp("101.66666666666666%"),
    height: hp("9.01639344262295%"),
    top: hp("57.513661202185794%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.5555555555555556%"),
    backgroundColor: "rgba(64, 70, 75, 1)",
    opacity: 0.03999999910593033,
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_783_244: {
    width: wp("101.66666666666666%"),
    height: hp("9.01639344262295%"),
    top: hp("47.13114754098361%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.5555555555555556%"),
    backgroundColor: "rgba(64, 70, 75, 1)",
    opacity: 0.03999999910593033,
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_783_245: {
    width: wp("32.77777777777778%"),
    minWidth: wp("32.77777777777778%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.61111111111111%"),
    top: hp("38.79781420765027%")
  },
  Text_783_245: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_783_246: {
    width: wp("32.77777777777778%"),
    minWidth: wp("32.77777777777778%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.61111111111111%"),
    top: hp("59.56284153005464%")
  },
  Text_783_246: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_783_247: {
    width: wp("32.77777777777778%"),
    minWidth: wp("32.77777777777778%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.61111111111111%"),
    top: hp("49.18032786885246%")
  },
  Text_783_247: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_783_248: {
    width: wp("16.11111111111111%"),
    minWidth: wp("16.11111111111111%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.61111111111111%"),
    top: hp("41.66666666666667%")
  },
  Text_783_248: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_783_249: {
    width: wp("16.11111111111111%"),
    minWidth: wp("16.11111111111111%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.61111111111111%"),
    top: hp("62.431693989071036%")
  },
  Text_783_249: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_783_250: {
    width: wp("16.11111111111111%"),
    minWidth: wp("16.11111111111111%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.61111111111111%"),
    top: hp("52.04918032786885%")
  },
  Text_783_250: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_783_251: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.5%"),
    top: hp("41.66666666666667%")
  },
  Text_783_251: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_783_252: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.5%"),
    top: hp("62.431693989071036%")
  },
  Text_783_252: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_783_253: {
    width: wp("27.22222222222222%"),
    minWidth: wp("27.22222222222222%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.61111111111111%"),
    top: hp("59.2896174863388%")
  },
  ImageBackground_783_254: {
    width: wp("27.22222222222222%"),
    minWidth: wp("27.22222222222222%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.61111111111111%"),
    top: hp("38.52459016393443%")
  },
  View_783_255: {
    width: wp("10.833333333333334%"),
    minWidth: wp("10.833333333333334%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.61111111111111%"),
    top: hp("52.04918032786885%")
  },
  Text_783_255: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_783_256: {
    width: wp("28.055555555555557%"),
    minWidth: wp("28.055555555555557%"),
    height: hp("2.33470677026634%"),
    minHeight: hp("2.33470677026634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.888888888888886%"),
    top: hp("48.49726775956284%")
  },
  View_783_257: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("69.67213114754098%")
  },
  Text_783_257: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_783_258: {
    width: wp("12.777777777777777%"),
    minWidth: wp("12.777777777777777%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("76.50273224043715%")
  },
  Text_783_258: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_783_259: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("73.224043715847%")
  },
  View_783_260: {
    width: wp("12.222222222222221%"),
    minWidth: wp("12.222222222222221%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.77777777777779%"),
    top: hp("4.918032786885246%"),
    backgroundColor: "rgba(160, 160, 160, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_783_261: {
    width: wp("10.277777777777777%"),
    minWidth: wp("10.277777777777777%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.277777777777778%"),
    top: hp("112.56830601092895%")
  },
  Text_783_261: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_783_262: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("26.229508196721312%"),
    minHeight: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("81.69398907103826%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_783_263: {
    width: wp("43.333333333333336%"),
    minWidth: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
    minHeight: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I783_263_361_758: {
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
  ImageBackground_I783_263_361_759: {
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
  View_I783_263_361_760: {
    flexGrow: 1,
    width: wp("36.26477559407552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.843973795572916%"),
    top: hp("17.622950819672127%")
  },
  Text_I783_263_361_760: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I783_263_361_761: {
    flexGrow: 1,
    width: wp("39.64538998074002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.843973795572916%"),
    top: hp("20.77116419057377%")
  },
  Text_I783_263_361_761: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_783_264: {
    width: wp("43.333333333333336%"),
    minWidth: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
    minHeight: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.66666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I783_264_361_763: {
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
  ImageBackground_I783_264_361_764: {
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
  View_I783_264_361_765: {
    flexGrow: 1,
    width: wp("36.26477559407552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439737955729072%"),
    top: hp("17.622950819672127%")
  },
  Text_I783_264_361_765: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I783_264_361_766: {
    flexGrow: 1,
    width: wp("39.64538998074002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439737955729072%"),
    top: hp("20.77116419057377%")
  },
  Text_I783_264_361_766: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_783_265: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    height: hp("16.39344262295082%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.33333333333333%"),
    top: hp("4.9180327868852345%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I783_265_361_768: {
    flexGrow: 1,
    width: wp("33.33333333333333%"),
    height: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.019999999552965164,
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_I783_265_361_769: {
    flexGrow: 1,
    width: wp("14.722222222222223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.444444444444443%"),
    top: hp("7.377049180327873%")
  },
  Text_I783_265_361_769: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_783_266: {
    width: wp("38.88888888888889%"),
    minWidth: wp("38.88888888888889%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("14.48087431693989%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_783_267: {
    width: wp("38.88888888888889%"),
    minWidth: wp("38.88888888888889%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.77777777777778%"),
    top: hp("14.48087431693989%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_783_268: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("14.48087431693989%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_783_269: {
    width: wp("30.555555555555557%"),
    minWidth: wp("30.555555555555557%"),
    height: hp("15.027322404371585%"),
    minHeight: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.11111111111111%"),
    top: hp("2.0491803278688536%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I783_269_361_1198: {
    flexGrow: 1,
    width: wp("30.555555555555557%"),
    height: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.009999999776482582,
    borderColor: "rgba(51, 51, 51, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  ImageBackground_I783_269_361_1199: {
    flexGrow: 1,
    width: wp("11.38888888888889%"),
    height: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.722222222222214%"),
    top: hp("4.78142076502732%")
  },
  View_783_270: {
    width: wp("38.88888888888889%"),
    minWidth: wp("38.88888888888889%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.22222222222222%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I783_270_361_1200: {
    flexGrow: 1,
    width: wp("38.88888888888889%"),
    height: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.009999999776482582,
    borderColor: "rgba(51, 51, 51, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_I783_270_361_1201: {
    flexGrow: 1,
    width: wp("32.77777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("10.928961748633881%")
  },
  Text_I783_270_361_1201: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I783_270_361_1202: {
    flexGrow: 1,
    width: wp("32.77777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("13.661202185792348%")
  },
  Text_I783_270_361_1202: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I783_270_361_1203: {
    flexGrow: 1,
    width: wp("10.277777777777777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("7.513661202185794%")
  },
  Text_I783_270_361_1203: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I783_270_361_1204: {
    flexGrow: 1,
    width: wp("30.833333333333336%"),
    height: hp("5.491209811851626%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9166666666666643%"),
    top: hp("1.5691705088797825%")
  },
  View_783_271: {
    width: wp("38.88888888888889%"),
    minWidth: wp("38.88888888888889%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.6666666666666665%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I783_271_361_1206: {
    flexGrow: 1,
    width: wp("38.88888888888889%"),
    height: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.009999999776482582,
    borderColor: "rgba(51, 51, 51, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_I783_271_361_1207: {
    flexGrow: 1,
    width: wp("32.77777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4999999999999996%"),
    top: hp("10.928961748633881%")
  },
  Text_I783_271_361_1207: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I783_271_361_1208: {
    flexGrow: 1,
    width: wp("12.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4999999999999996%"),
    top: hp("7.6502732240437155%")
  },
  Text_I783_271_361_1208: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I783_271_361_1209: {
    flexGrow: 1,
    width: wp("32.77777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4999999999999996%"),
    top: hp("13.661202185792348%")
  },
  Text_I783_271_361_1209: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I783_271_361_1210: {
    flexGrow: 1,
    width: wp("31.38888888888889%"),
    height: hp("3.6020419636710743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: hp("2.5956284153005456%")
  },
  View_783_272: {
    width: wp("43.333333333333336%"),
    minWidth: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
    minHeight: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("117.75956284153007%")
  },
  View_783_273: {
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
  View_783_274: {
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
  View_783_275: {
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
  View_783_276: {
    width: wp("36.26477983262804%"),
    top: hp("17.091578082308743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.843973795572917%")
  },
  Text_783_276: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_783_277: {
    width: wp("39.645394219292534%"),
    top: hp("20.443375384221284%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.843973795572917%")
  },
  Text_783_277: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_783_278: {
    width: wp("4.889918433295356%"),
    height: hp("3.3071882737790297%"),
    top: hp("10.661074112021836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.03546820746528%")
  },
  View_783_282: {
    width: wp("43.333333333333336%"),
    minWidth: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
    minHeight: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.22222222222223%"),
    top: hp("117.75956284153007%")
  },
  View_783_283: {
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
  View_783_284: {
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
  View_783_285: {
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
  View_783_286: {
    width: wp("36.26477983262804%"),
    top: hp("17.091578082308743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439737955729143%")
  },
  Text_783_286: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_783_287: {
    width: wp("39.645394219292534%"),
    top: hp("20.443375384221284%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439737955729143%")
  },
  Text_783_287: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_783_288: {
    width: wp("4.889918433295356%"),
    height: hp("3.3071882737790297%"),
    top: hp("10.661074112021836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.03546820746527%")
  },
  View_783_292: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("141.80327868852459%"),
    minHeight: hp("141.80327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.295081967213115%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.699999988079071
  },
  View_783_293: {
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
  View_783_294: {
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
  View_783_295: {
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
  View_783_296: {
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
  ImageBackground_783_297: {
    width: wp("7.38425890604655%"),
    height: hp("3.243410391885726%"),
    top: hp("4.867870560109296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.335659450954861%")
  },
  ImageBackground_783_298: {
    width: wp("5.555555555555555%"),
    height: hp("3.0054644808743167%"),
    top: hp("5.191256830601105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.44444444444444%")
  },
  ImageBackground_783_299: {
    width: wp("4.444444444444445%"),
    height: hp("3.0054644808743167%"),
    top: hp("5.191256830601105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.11111111111111%")
  },
  ImageBackground_783_300: {
    width: wp("9.95371182759603%"),
    height: hp("4.895269675332992%"),
    top: hp("2.2654382257513817%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.99534776475695%")
  },
  ImageBackground_783_301: {
    width: wp("5.4166740841335725%"),
    height: hp("2.959927313966178%"),
    top: hp("5.077457949112031%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.180555555555554%")
  },
  View_783_302: {
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
  View_783_303: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("22.131147540983605%"),
    minHeight: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590164%")
  },
  View_783_304: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("22.131147540983605%"),
    minHeight: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(249, 251, 255, 1)"
  },
  View_783_305: {
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
  View_783_306: {
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
  View_783_307: {
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
  View_783_308: {
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
  ImageBackground_783_309: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_783_310: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_783_313: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_783_316: {
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
  ImageBackground_783_317: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_783_318: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_783_321: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_783_325: {
    width: wp("8.685709635416666%"),
    minWidth: wp("8.685709635416666%"),
    height: hp("1.2972805669398906%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888888888888884%"),
    top: hp("1.0424671277322404%")
  },
  View_783_326: {
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
  ImageBackground_783_327: {
    width: wp("6.666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.33333333333333%")
  },
  View_783_330: {
    width: wp("12.777777777777777%"),
    minWidth: wp("12.777777777777777%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("5.601092896174864%")
  },
  Text_783_330: {
    color: "rgba(0, 12, 44, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_783_331: {
    width: wp("16.11111111111111%"),
    minWidth: wp("16.11111111111111%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.277777777777778%"),
    top: hp("14.071038251366119%")
  },
  View_783_332: {
    width: wp("59.72222222222222%"),
    minWidth: wp("59.72222222222222%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.944444444444443%"),
    top: hp("16.39344262295082%")
  },
  Text_783_332: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
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
