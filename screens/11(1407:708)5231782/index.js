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
        style={styles.ImageBackground_1407_711}
      />
      <View style={styles.View_1407_712} />
      <View style={styles.View_1407_713} />
      <View style={styles.View_1407_714} />
      <View style={styles.View_1407_715}>
        <Text style={styles.Text_1407_715}>AUD/USD</Text>
      </View>
      <View style={styles.View_1407_716}>
        <Text style={styles.Text_1407_716}>AUD/USD</Text>
      </View>
      <View style={styles.View_1407_717}>
        <Text style={styles.Text_1407_717}>AUD/USD</Text>
      </View>
      <View style={styles.View_1407_718}>
        <Text style={styles.Text_1407_718}>0.53 Cents</Text>
      </View>
      <View style={styles.View_1407_719}>
        <Text style={styles.Text_1407_719}>0.53 Cents</Text>
      </View>
      <View style={styles.View_1407_720}>
        <Text style={styles.Text_1407_720}>0.53 Cents</Text>
      </View>
      <View style={styles.View_1407_721}>
        <Text style={styles.Text_1407_721}>+2150.01</Text>
      </View>
      <View style={styles.View_1407_722}>
        <Text style={styles.Text_1407_722}>+2150.01</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6797/cbec/b245179848c10119c5f2149dadc293af"
        }}
        style={styles.ImageBackground_1407_723}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6797/cbec/b245179848c10119c5f2149dadc293af"
        }}
        style={styles.ImageBackground_1407_724}
      />
      <View style={styles.View_1407_725}>
        <Text style={styles.Text_1407_725}>-452.30</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/377e/c241/31b4e48ea1130d04e5845d44852b891d"
        }}
        style={styles.ImageBackground_1407_726}
      />
      <View style={styles.View_1407_727}>
        <Text style={styles.Text_1407_727}>Courses</Text>
      </View>
      <View style={styles.View_1407_728}>
        <Text style={styles.Text_1407_728}>Video</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b44/07db/0989446b1fb50ff5b8f0539f7537b064"
        }}
        style={styles.ImageBackground_1407_729}
      />
      <View style={styles.View_1407_730} />
      <View style={styles.View_1407_731}>
        <Text style={styles.Text_1407_731}>PDFs</Text>
      </View>
      <View style={styles.View_1407_733}>
        <View style={styles.View_I1407_733_361_758} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5607/1a17/8153b172e3e38f45150688de65b9edb9"
          }}
          style={styles.ImageBackground_I1407_733_361_759}
        />
        <View style={styles.View_I1407_733_361_760}>
          <Text style={styles.Text_I1407_733_361_760}>Course Title</Text>
        </View>
        <View style={styles.View_I1407_733_361_761}>
          <Text style={styles.Text_I1407_733_361_761}>
            Course description little bit or more information.....
          </Text>
        </View>
      </View>
      <View style={styles.View_1407_734}>
        <View style={styles.View_I1407_734_361_763} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5607/1a17/8153b172e3e38f45150688de65b9edb9"
          }}
          style={styles.ImageBackground_I1407_734_361_764}
        />
        <View style={styles.View_I1407_734_361_765}>
          <Text style={styles.Text_I1407_734_361_765}>Course Title</Text>
        </View>
        <View style={styles.View_I1407_734_361_766}>
          <Text style={styles.Text_I1407_734_361_766}>
            Course description little bit or more information.....
          </Text>
        </View>
      </View>
      <View style={styles.View_1407_845}>
        <View style={styles.View_1407_844} />
        <View style={styles.View_1407_843}>
          <Text style={styles.Text_1407_843}>View more</Text>
        </View>
      </View>
      <View style={styles.View_1407_849}>
        <View style={styles.View_1407_850} />
        <View style={styles.View_1407_851}>
          <Text style={styles.Text_1407_851}>View more</Text>
        </View>
      </View>
      <View style={styles.View_1407_736} />
      <View style={styles.View_1407_737} />
      <View style={styles.View_1407_738}>
        <View style={styles.View_1407_739}>
          <View style={styles.View_I1407_739_361_1198} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d4f/e3dc/e4b4044705e440d94ecbc3bc7fb474a0"
            }}
            style={styles.ImageBackground_I1407_739_361_1199}
          />
        </View>
        <View style={styles.View_1407_740}>
          <View style={styles.View_I1407_740_361_1198} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d4f/e3dc/e4b4044705e440d94ecbc3bc7fb474a0"
            }}
            style={styles.ImageBackground_I1407_740_361_1199}
          />
        </View>
        <View style={styles.View_1407_741}>
          <View style={styles.View_I1407_741_361_1198} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d4f/e3dc/e4b4044705e440d94ecbc3bc7fb474a0"
            }}
            style={styles.ImageBackground_I1407_741_361_1199}
          />
        </View>
        <View style={styles.View_1407_742}>
          <View style={styles.View_I1407_742_361_1200} />
          <View style={styles.View_I1407_742_361_1201}>
            <Text style={styles.Text_I1407_742_361_1201}>AUD/USD</Text>
          </View>
          <View style={styles.View_I1407_742_361_1202}>
            <Text style={styles.Text_I1407_742_361_1202}>
              Description little bit or more information.
            </Text>
          </View>
          <View style={styles.View_I1407_742_361_1203}>
            <Text style={styles.Text_I1407_742_361_1203}>-120.00</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7f5/4255/cbbfc7b2f75c1e08c61e8767d78892ad"
            }}
            style={styles.ImageBackground_I1407_742_361_1204}
          />
        </View>
        <View style={styles.View_1407_743}>
          <View style={styles.View_I1407_743_361_1206} />
          <View style={styles.View_I1407_743_361_1207}>
            <Text style={styles.Text_I1407_743_361_1207}>AUD/USD</Text>
          </View>
          <View style={styles.View_I1407_743_361_1208}>
            <Text style={styles.Text_I1407_743_361_1208}>+2150.50</Text>
          </View>
          <View style={styles.View_I1407_743_361_1209}>
            <Text style={styles.Text_I1407_743_361_1209}>
              Description little bit or more information.
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1e3/de09/b278cc095fb336ef4dd3f051eb5bf8d0"
            }}
            style={styles.ImageBackground_I1407_743_361_1210}
          />
        </View>
      </View>
      <View style={styles.View_1407_744}>
        <View style={styles.View_1407_745} />
        <View style={styles.View_1407_746} />
        <View style={styles.View_1407_747} />
        <View style={styles.View_1407_748}>
          <Text style={styles.Text_1407_748}>Course Title</Text>
        </View>
        <View style={styles.View_1407_749}>
          <Text style={styles.Text_1407_749}>
            Course description little bit or more information.....
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b66/0ab5/80d5a388d8c482f56a9dec6baac866b9"
          }}
          style={styles.ImageBackground_1407_750}
        />
      </View>
      <View style={styles.View_1407_754}>
        <View style={styles.View_1407_755} />
        <View style={styles.View_1407_756} />
        <View style={styles.View_1407_757} />
        <View style={styles.View_1407_758}>
          <Text style={styles.Text_1407_758}>Course Title</Text>
        </View>
        <View style={styles.View_1407_759}>
          <Text style={styles.Text_1407_759}>
            Course description little bit or more information.....
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b66/0ab5/80d5a388d8c482f56a9dec6baac866b9"
          }}
          style={styles.ImageBackground_1407_760}
        />
      </View>
      <View style={styles.View_1407_764}>
        <View style={styles.View_1407_765}>
          <View style={styles.View_1407_766} />
        </View>
        <View style={styles.View_1407_767}>
          <View style={styles.View_1407_768} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a23f/273e/243f09830efb80ee0b6857024c6b4dc6"
            }}
            style={styles.ImageBackground_1407_769}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/226d/19e4/7f660071bb66d8fd32b931bae758b087"
          }}
          style={styles.ImageBackground_1407_770}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9696/e12b/1609bcd09b18f1c944c65fbae12d1901"
          }}
          style={styles.ImageBackground_1407_771}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9b3/ca1b/c5ba92b0573b38c995864832a6a46fd2"
          }}
          style={styles.ImageBackground_1407_772}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/046c/e867/5acaa4d493f2eea22a452ae3450cb556"
          }}
          style={styles.ImageBackground_1407_773}
        />
      </View>
      <View style={styles.View_1407_774} />
      <View style={styles.View_1407_775}>
        <View style={styles.View_1407_776} />
        <View style={styles.View_1407_777}>
          <Text style={styles.Text_1407_777}>Welcome, Akshay!</Text>
        </View>
      </View>
      <View style={styles.View_1407_778}>
        <View style={styles.View_1407_779}>
          <View style={styles.View_1407_780} />
        </View>
        <View style={styles.View_1407_781}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67ce/4bb5/25857e0c713544668f524a4f7518b7bf"
            }}
            style={styles.ImageBackground_1407_782}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b36/25b2/ac6e400dbb11832bb84ee7a55991e78a"
            }}
            style={styles.ImageBackground_1407_783}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd54/a89d/5c3e97121a2f09ff13af4ad16165123d"
            }}
            style={styles.ImageBackground_1407_786}
          />
        </View>
        <View style={styles.View_1407_789}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df7c/8f9e/6b781ac7185e888cbb03df7c0b8e641d"
            }}
            style={styles.ImageBackground_1407_790}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e34/dccc/c33348fd5ec8f061c70eebc077658044"
            }}
            style={styles.ImageBackground_1407_791}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2c3/fe86/287ca379da875d4826f8b415c6ada88f"
            }}
            style={styles.ImageBackground_1407_794}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3801/24d6/79ed7859c987f019895939c9f545b1fa"
          }}
          style={styles.ImageBackground_1407_798}
        />
      </View>
      <View source={{ uri: "null" }} style={styles.View_1407_799} />
      <View style={styles.View_1407_800}>
        <View style={styles.View_1407_801} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3452/5cd6/132f3a9542380ee997d9c29f0b8c569a"
          }}
          style={styles.ImageBackground_1407_802}
        />
      </View>
      <View style={styles.View_1407_803} />
      <View style={styles.View_1407_804}>
        <View style={styles.View_1407_805}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/648d/dc2f/e0df73c23d04bf6e6a93e172e24c0b41"
            }}
            style={styles.ImageBackground_1407_806}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f65/072b/18de0e53cf055d1527886b2e7c98c33f"
            }}
            style={styles.ImageBackground_1407_807}
          />
          <View style={styles.View_1407_808}>
            <Text style={styles.Text_1407_808}>1</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27a3/ff70/9d8d72eaee2e6f017810ccb65aa029d7"
        }}
        style={styles.ImageBackground_1407_809}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3452/5cd6/132f3a9542380ee997d9c29f0b8c569a"
        }}
        style={styles.ImageBackground_1407_810}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f917/caa1/f26035c56e049dcd68f43f6d818f081b"
        }}
        style={styles.ImageBackground_1407_811}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71f0/c86c/0af612749e53085d977792d53ac573ab"
        }}
        style={styles.ImageBackground_1407_812}
      />
      <View style={styles.View_1407_813}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/723e/987c/95c95c9750c12b91881167657a64202e"
          }}
          style={styles.ImageBackground_1407_814}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_1407_711: {
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
  View_1407_712: {
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
  View_1407_713: {
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
  View_1407_714: {
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
  View_1407_715: {
    width: wp("32.77777777777778%"),
    minWidth: wp("32.77777777777778%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.61111111111111%"),
    top: hp("38.79781420765027%")
  },
  Text_1407_715: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1407_716: {
    width: wp("32.77777777777778%"),
    minWidth: wp("32.77777777777778%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.61111111111111%"),
    top: hp("59.56284153005464%")
  },
  Text_1407_716: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1407_717: {
    width: wp("32.77777777777778%"),
    minWidth: wp("32.77777777777778%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.61111111111111%"),
    top: hp("49.18032786885246%")
  },
  Text_1407_717: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1407_718: {
    width: wp("16.11111111111111%"),
    minWidth: wp("16.11111111111111%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.61111111111111%"),
    top: hp("41.66666666666667%")
  },
  Text_1407_718: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1407_719: {
    width: wp("16.11111111111111%"),
    minWidth: wp("16.11111111111111%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.61111111111111%"),
    top: hp("62.431693989071036%")
  },
  Text_1407_719: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1407_720: {
    width: wp("16.11111111111111%"),
    minWidth: wp("16.11111111111111%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.61111111111111%"),
    top: hp("52.04918032786885%")
  },
  Text_1407_720: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1407_721: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.5%"),
    top: hp("41.66666666666667%")
  },
  Text_1407_721: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1407_722: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.5%"),
    top: hp("62.431693989071036%")
  },
  Text_1407_722: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1407_723: {
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
  ImageBackground_1407_724: {
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
  View_1407_725: {
    width: wp("10.833333333333334%"),
    minWidth: wp("10.833333333333334%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.61111111111111%"),
    top: hp("52.04918032786885%")
  },
  Text_1407_725: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1407_726: {
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
  View_1407_727: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("69.67213114754098%")
  },
  Text_1407_727: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1407_728: {
    width: wp("12.777777777777777%"),
    minWidth: wp("12.777777777777777%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.277777777777778%"),
    top: hp("76.50273224043715%")
  },
  Text_1407_728: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1407_729: {
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
  View_1407_730: {
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
  View_1407_731: {
    width: wp("10.277777777777777%"),
    minWidth: wp("10.277777777777777%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.277777777777778%"),
    top: hp("112.56830601092895%")
  },
  Text_1407_731: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1407_733: {
    width: wp("43.333333333333336%"),
    minWidth: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
    minHeight: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("81.69398907103826%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1407_733_361_758: {
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
  ImageBackground_I1407_733_361_759: {
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
  View_I1407_733_361_760: {
    flexGrow: 1,
    width: wp("36.26477559407552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527777%"),
    top: hp("17.622950819672127%")
  },
  Text_I1407_733_361_760: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1407_733_361_761: {
    flexGrow: 1,
    width: wp("39.64538998074002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527777%"),
    top: hp("20.77116419057377%")
  },
  Text_I1407_733_361_761: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1407_734: {
    width: wp("43.333333333333336%"),
    minWidth: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
    minHeight: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.77777777777778%"),
    top: hp("81.69398907103826%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1407_734_361_763: {
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
  ImageBackground_I1407_734_361_764: {
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
  View_I1407_734_361_765: {
    flexGrow: 1,
    width: wp("36.26477559407552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527786%"),
    top: hp("17.622950819672127%")
  },
  Text_I1407_734_361_765: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1407_734_361_766: {
    flexGrow: 1,
    width: wp("39.64538998074002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527786%"),
    top: hp("20.77116419057377%")
  },
  Text_I1407_734_361_766: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1407_845: {
    width: wp("20.555555555555554%"),
    minWidth: wp("20.555555555555554%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.88888888888889%"),
    top: hp("75.68306010928961%")
  },
  View_1407_844: {
    width: wp("20.555555555555554%"),
    minWidth: wp("20.555555555555554%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.05000000074505806,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_1407_843: {
    width: wp("14.722222222222223%"),
    minWidth: wp("14.722222222222223%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.055555555555557%"),
    top: hp("0.9562841530054698%")
  },
  Text_1407_843: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1407_849: {
    width: wp("20.555555555555554%"),
    minWidth: wp("20.555555555555554%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.88888888888889%"),
    top: hp("111.47540983606557%")
  },
  View_1407_850: {
    width: wp("20.555555555555554%"),
    minWidth: wp("20.555555555555554%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.05000000074505806,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_1407_851: {
    width: wp("14.722222222222223%"),
    minWidth: wp("14.722222222222223%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.055555555555557%"),
    top: hp("0.956284153005484%")
  },
  Text_1407_851: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1407_736: {
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
  View_1407_737: {
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
  View_1407_738: {
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
  View_1407_739: {
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
  View_I1407_739_361_1198: {
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
  ImageBackground_I1407_739_361_1199: {
    flexGrow: 1,
    width: wp("11.38888888888889%"),
    height: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.722222222222214%"),
    top: hp("4.78142076502732%")
  },
  View_1407_740: {
    width: wp("30.555555555555557%"),
    minWidth: wp("30.555555555555557%"),
    height: hp("15.027322404371585%"),
    minHeight: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.55555555555555%"),
    top: hp("-51.22950819672131%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1407_740_361_1198: {
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
  ImageBackground_I1407_740_361_1199: {
    flexGrow: 1,
    width: wp("11.38888888888889%"),
    height: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.722222222222221%"),
    top: hp("4.78142076502732%")
  },
  View_1407_741: {
    width: wp("30.555555555555557%"),
    minWidth: wp("30.555555555555557%"),
    height: hp("15.027322404371585%"),
    minHeight: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.11111111111111%"),
    top: hp("-58.87978142076503%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1407_741_361_1198: {
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
  ImageBackground_I1407_741_361_1199: {
    flexGrow: 1,
    width: wp("11.38888888888889%"),
    height: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.722222222222214%"),
    top: hp("4.7814207650273275%")
  },
  View_1407_742: {
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
  View_I1407_742_361_1200: {
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
  View_I1407_742_361_1201: {
    flexGrow: 1,
    width: wp("32.77777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("10.928961748633881%")
  },
  Text_I1407_742_361_1201: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1407_742_361_1202: {
    flexGrow: 1,
    width: wp("32.77777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("13.661202185792348%")
  },
  Text_I1407_742_361_1202: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1407_742_361_1203: {
    flexGrow: 1,
    width: wp("10.277777777777777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("7.513661202185794%")
  },
  Text_I1407_742_361_1203: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1407_742_361_1204: {
    flexGrow: 1,
    width: wp("30.833333333333336%"),
    height: hp("5.491209811851626%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9166666666666643%"),
    top: hp("1.5691705088797825%")
  },
  View_1407_743: {
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
  View_I1407_743_361_1206: {
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
  View_I1407_743_361_1207: {
    flexGrow: 1,
    width: wp("32.77777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4999999999999996%"),
    top: hp("10.928961748633881%")
  },
  Text_I1407_743_361_1207: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1407_743_361_1208: {
    flexGrow: 1,
    width: wp("12.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4999999999999996%"),
    top: hp("7.6502732240437155%")
  },
  Text_I1407_743_361_1208: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1407_743_361_1209: {
    flexGrow: 1,
    width: wp("32.77777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4999999999999996%"),
    top: hp("13.661202185792348%")
  },
  Text_I1407_743_361_1209: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1407_743_361_1210: {
    flexGrow: 1,
    width: wp("31.38888888888889%"),
    height: hp("3.6020419636710743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: hp("2.5956284153005456%")
  },
  View_1407_744: {
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
  View_1407_745: {
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
  View_1407_746: {
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
  View_1407_747: {
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
  View_1407_748: {
    width: wp("36.26477983262804%"),
    top: hp("17.091578082308743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527777%")
  },
  Text_1407_748: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1407_749: {
    width: wp("39.645394219292534%"),
    top: hp("20.443375384221284%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527777%")
  },
  Text_1407_749: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1407_750: {
    width: wp("4.889918433295356%"),
    height: hp("3.3071882737790297%"),
    top: hp("10.661074112021836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.03546820746528%")
  },
  View_1407_754: {
    width: wp("43.333333333333336%"),
    minWidth: wp("43.333333333333336%"),
    height: hp("26.229508196721312%"),
    minHeight: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.77777777777778%"),
    top: hp("117.75956284153007%")
  },
  View_1407_755: {
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
  View_1407_756: {
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
  View_1407_757: {
    width: wp("12.293145921495226%"),
    height: hp("5.584346792085575%"),
    top: hp("9.476391734972665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.04017469618055%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.5
  },
  View_1407_758: {
    width: wp("36.26477983262804%"),
    top: hp("17.091578082308743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527786%")
  },
  Text_1407_758: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1407_759: {
    width: wp("39.645394219292534%"),
    top: hp("20.443375384221284%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527786%")
  },
  Text_1407_759: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1407_760: {
    width: wp("4.889918433295356%"),
    height: hp("3.3071882737790297%"),
    top: hp("10.661074112021836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.03546820746528%")
  },
  View_1407_764: {
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
  View_1407_765: {
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
  View_1407_766: {
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
  View_1407_767: {
    width: wp("18.61111111111111%"),
    minWidth: wp("18.61111111111111%"),
    height: hp("9.153005464480875%"),
    minHeight: hp("9.153005464480875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.666666666666664%"),
    top: hp("0%")
  },
  View_1407_768: {
    width: wp("18.61111111111111%"),
    minWidth: wp("18.61111111111111%"),
    height: hp("9.153005464480875%"),
    minHeight: hp("9.153005464480875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  ImageBackground_1407_769: {
    width: wp("9.95371182759603%"),
    height: hp("4.895269675332992%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.44444444444445%")
  },
  ImageBackground_1407_770: {
    width: wp("7.38425890604655%"),
    height: hp("3.243410391885726%"),
    top: hp("4.867870560109296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.335693359375%")
  },
  ImageBackground_1407_771: {
    width: wp("5.555555555555555%"),
    height: hp("3.0054644808743167%"),
    top: hp("5.191256830601105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.44444444444444%")
  },
  ImageBackground_1407_772: {
    width: wp("4.444444444444445%"),
    height: hp("3.0054644808743167%"),
    top: hp("5.191256830601105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.11111111111111%")
  },
  ImageBackground_1407_773: {
    width: wp("5.4166740841335725%"),
    height: hp("2.959927313966178%"),
    top: hp("5.077457949112031%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.180555555555554%")
  },
  View_1407_774: {
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
  View_1407_775: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.153005464480875%"),
    minHeight: hp("9.153005464480875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590164%")
  },
  View_1407_776: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.153005464480875%"),
    minHeight: hp("9.153005464480875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(238, 241, 248, 1)"
  },
  View_1407_777: {
    width: wp("46.38888888888889%"),
    minWidth: wp("46.38888888888889%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2.5956284153005464%")
  },
  Text_1407_777: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1407_778: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1407_779: {
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
  View_1407_780: {
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
  View_1407_781: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.83333333333333%"),
    top: hp("0.819672131147541%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1407_782: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1407_783: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1407_786: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1407_789: {
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
  ImageBackground_1407_790: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1407_791: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1407_794: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1407_798: {
    width: wp("8.685709635416666%"),
    minWidth: wp("8.685709635416666%"),
    height: hp("1.2972805669398906%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.888888888888889%"),
    top: hp("1.0424671277322404%")
  },
  View_1407_799: {
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
  View_1407_800: {
    width: wp("12.222222222222221%"),
    minWidth: wp("12.222222222222221%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.77777777777777%"),
    top: hp("4.918032786885246%")
  },
  View_1407_801: {
    width: wp("12.222222222222221%"),
    minWidth: wp("12.222222222222221%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(160, 160, 160, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  ImageBackground_1407_802: {
    width: wp("5.320186614990234%"),
    minWidth: wp("5.320186614990234%"),
    height: hp("2.6164852204870006%"),
    minHeight: hp("2.6164852204870006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.333333333333343%"),
    top: hp("-0.6830767855618172%")
  },
  View_1407_803: {
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
  View_1407_804: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.16666666666667%"),
    top: hp("5.737704918032787%")
  },
  View_1407_805: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1407_806: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1407_807: {
    width: wp("3.125%"),
    minWidth: wp("3.125%"),
    height: hp("1.5368852459016393%"),
    minHeight: hp("1.5368852459016393%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333286%"),
    top: hp("0.2561475409836067%")
  },
  View_1407_808: {
    width: wp("1.3020833333333335%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%")
  },
  Text_1407_808: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1407_809: {
    width: wp("6.111111111111111%"),
    height: hp("2.0491803278688523%"),
    top: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.55555555555556%")
  },
  ImageBackground_1407_810: {
    width: wp("5.320186614990234%"),
    minWidth: wp("5.320186614990234%"),
    height: hp("2.6164852204870006%"),
    minHeight: hp("2.6164852204870006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.11111111111111%"),
    top: hp("4.234956001323429%")
  },
  ImageBackground_1407_811: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.10456000434027%"),
    top: hp("4.72352074795082%")
  },
  ImageBackground_1407_812: {
    width: wp("1.1111111111111112%"),
    minWidth: wp("1.1111111111111112%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.21567111545139%"),
    top: hp("5.269968835382514%")
  },
  View_1407_813: {
    width: wp("6.0763894187079535%"),
    height: hp("2.6895502225948813%"),
    top: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.55555555555556%")
  },
  ImageBackground_1407_814: {
    width: wp("6.0763894187079535%"),
    height: hp("2.6895502225948813%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
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
