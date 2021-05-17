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
      <View style={styles.View_1495_3} />
      <View style={styles.View_1495_4}>
        <Text style={styles.Text_1495_4}>My Trade</Text>
      </View>
      <View style={styles.View_1495_6}>
        <View style={styles.View_1495_7} />
        <View style={styles.View_1495_8}>
          <Text style={styles.Text_1495_8}>+250.74</Text>
        </View>
        <View style={styles.View_1495_9}>
          <View style={styles.View_1495_10}>
            <Text style={styles.Text_1495_10}>Order ID </Text>
          </View>
          <View style={styles.View_1495_11}>
            <Text style={styles.Text_1495_11}>1234567890</Text>
          </View>
        </View>
        <View style={styles.View_1495_12}>
          <View style={styles.View_1495_13}>
            <Text style={styles.Text_1495_13}>Order Time</Text>
          </View>
          <View style={styles.View_1495_14}>
            <Text style={styles.Text_1495_14}>21/10/21 12:50:41</Text>
          </View>
        </View>
        <View style={styles.View_1495_15}>
          <View style={styles.View_1495_16}>
            <Text style={styles.Text_1495_16}>Lot Size</Text>
          </View>
          <View style={styles.View_1495_17}>
            <Text style={styles.Text_1495_17}>53</Text>
          </View>
        </View>
        <View style={styles.View_1495_18}>
          <View style={styles.View_1495_19}>
            <Text style={styles.Text_1495_19}>Entry Price</Text>
          </View>
          <View style={styles.View_1495_20}>
            <Text style={styles.Text_1495_20}>51.34</Text>
          </View>
        </View>
        <View style={styles.View_1495_21}>
          <View style={styles.View_1495_22}>
            <Text style={styles.Text_1495_22}>Stop Price</Text>
          </View>
          <View style={styles.View_1495_23}>
            <Text style={styles.Text_1495_23}>0.21</Text>
          </View>
        </View>
        <View style={styles.View_1495_24}>
          <View style={styles.View_1495_25}>
            <Text style={styles.Text_1495_25}>Status</Text>
          </View>
          <View style={styles.View_1495_26}>
            <Text style={styles.Text_1495_26}>Closed</Text>
          </View>
        </View>
        <View style={styles.View_1495_27}>
          <Text style={styles.Text_1495_27}>PNL</Text>
        </View>
        <View style={styles.View_1495_28}>
          <Text style={styles.Text_1495_28}>AUD/USD</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b435/5415/4ee607afc20858eba71d95385687b5b5"
          }}
          style={styles.ImageBackground_1495_29}
        />
      </View>
      <View style={styles.View_1495_30}>
        <View style={styles.View_1495_31} />
        <View style={styles.View_1495_32}>
          <Text style={styles.Text_1495_32}>-210.11</Text>
        </View>
        <View style={styles.View_1495_33}>
          <View style={styles.View_1495_34}>
            <Text style={styles.Text_1495_34}>Order ID </Text>
          </View>
          <View style={styles.View_1495_35}>
            <Text style={styles.Text_1495_35}>1234567890</Text>
          </View>
        </View>
        <View style={styles.View_1495_36}>
          <View style={styles.View_1495_37}>
            <Text style={styles.Text_1495_37}>Order Time</Text>
          </View>
          <View style={styles.View_1495_38}>
            <Text style={styles.Text_1495_38}>21/10/21 12:50:41</Text>
          </View>
        </View>
        <View style={styles.View_1495_39}>
          <View style={styles.View_1495_40}>
            <Text style={styles.Text_1495_40}>Lot Size</Text>
          </View>
          <View style={styles.View_1495_41}>
            <Text style={styles.Text_1495_41}>53</Text>
          </View>
        </View>
        <View style={styles.View_1495_42}>
          <View style={styles.View_1495_43}>
            <Text style={styles.Text_1495_43}>Entry Price</Text>
          </View>
          <View style={styles.View_1495_44}>
            <Text style={styles.Text_1495_44}>51.34</Text>
          </View>
        </View>
        <View style={styles.View_1495_45}>
          <View style={styles.View_1495_46}>
            <Text style={styles.Text_1495_46}>Stop Price</Text>
          </View>
          <View style={styles.View_1495_47}>
            <Text style={styles.Text_1495_47}>0.21</Text>
          </View>
        </View>
        <View style={styles.View_1495_48}>
          <View style={styles.View_1495_49}>
            <Text style={styles.Text_1495_49}>Status</Text>
          </View>
          <View style={styles.View_1495_50}>
            <Text style={styles.Text_1495_50}>Open</Text>
          </View>
        </View>
        <View style={styles.View_1495_51}>
          <Text style={styles.Text_1495_51}>PNL</Text>
        </View>
        <View style={styles.View_1495_52}>
          <Text style={styles.Text_1495_52}>AUD/USD</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b435/5415/4ee607afc20858eba71d95385687b5b5"
          }}
          style={styles.ImageBackground_1495_53}
        />
      </View>
      <View style={styles.View_1495_54}>
        <View style={styles.View_1495_55} />
        <View style={styles.View_1495_56}>
          <Text style={styles.Text_1495_56}>-210.11</Text>
        </View>
        <View style={styles.View_1495_57}>
          <View style={styles.View_1495_58}>
            <Text style={styles.Text_1495_58}>Order ID </Text>
          </View>
          <View style={styles.View_1495_59}>
            <Text style={styles.Text_1495_59}>1234567890</Text>
          </View>
        </View>
        <View style={styles.View_1495_60}>
          <View style={styles.View_1495_61}>
            <Text style={styles.Text_1495_61}>Order Time</Text>
          </View>
          <View style={styles.View_1495_62}>
            <Text style={styles.Text_1495_62}>21/10/21 12:50:41</Text>
          </View>
        </View>
        <View style={styles.View_1495_63}>
          <View style={styles.View_1495_64}>
            <Text style={styles.Text_1495_64}>Lot Size</Text>
          </View>
          <View style={styles.View_1495_65}>
            <Text style={styles.Text_1495_65}>53</Text>
          </View>
        </View>
        <View style={styles.View_1495_66}>
          <View style={styles.View_1495_67}>
            <Text style={styles.Text_1495_67}>Entry Price</Text>
          </View>
          <View style={styles.View_1495_68}>
            <Text style={styles.Text_1495_68}>51.34</Text>
          </View>
        </View>
        <View style={styles.View_1495_69}>
          <View style={styles.View_1495_70}>
            <Text style={styles.Text_1495_70}>Stop Price</Text>
          </View>
          <View style={styles.View_1495_71}>
            <Text style={styles.Text_1495_71}>0.21</Text>
          </View>
        </View>
        <View style={styles.View_1495_72}>
          <View style={styles.View_1495_73}>
            <Text style={styles.Text_1495_73}>Status</Text>
          </View>
          <View style={styles.View_1495_74}>
            <Text style={styles.Text_1495_74}>Cancelled</Text>
          </View>
        </View>
        <View style={styles.View_1495_75}>
          <Text style={styles.Text_1495_75}>PNL</Text>
        </View>
        <View style={styles.View_1495_76}>
          <Text style={styles.Text_1495_76}>AUD/USD</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b435/5415/4ee607afc20858eba71d95385687b5b5"
          }}
          style={styles.ImageBackground_1495_77}
        />
      </View>
      <View style={styles.View_1495_78}>
        <View style={styles.View_1495_79} />
        <View style={styles.View_1495_80}>
          <Text style={styles.Text_1495_80}>-210.11</Text>
        </View>
        <View style={styles.View_1495_81}>
          <View style={styles.View_1495_82}>
            <Text style={styles.Text_1495_82}>Order ID </Text>
          </View>
          <View style={styles.View_1495_83}>
            <Text style={styles.Text_1495_83}>1234567890</Text>
          </View>
        </View>
        <View style={styles.View_1495_84}>
          <View style={styles.View_1495_85}>
            <Text style={styles.Text_1495_85}>Order Time</Text>
          </View>
          <View style={styles.View_1495_86}>
            <Text style={styles.Text_1495_86}>21/10/21 12:50:41</Text>
          </View>
        </View>
        <View style={styles.View_1495_87}>
          <View style={styles.View_1495_88}>
            <Text style={styles.Text_1495_88}>Lot Size</Text>
          </View>
          <View style={styles.View_1495_89}>
            <Text style={styles.Text_1495_89}>53</Text>
          </View>
        </View>
        <View style={styles.View_1495_90}>
          <View style={styles.View_1495_91}>
            <Text style={styles.Text_1495_91}>Entry Price</Text>
          </View>
          <View style={styles.View_1495_92}>
            <Text style={styles.Text_1495_92}>51.34</Text>
          </View>
        </View>
        <View style={styles.View_1495_93}>
          <View style={styles.View_1495_94}>
            <Text style={styles.Text_1495_94}>Stop Price</Text>
          </View>
          <View style={styles.View_1495_95}>
            <Text style={styles.Text_1495_95}>0.21</Text>
          </View>
        </View>
        <View style={styles.View_1495_96}>
          <View style={styles.View_1495_97}>
            <Text style={styles.Text_1495_97}>Status</Text>
          </View>
          <View style={styles.View_1495_98}>
            <Text style={styles.Text_1495_98}>Closed</Text>
          </View>
        </View>
        <View style={styles.View_1495_99}>
          <Text style={styles.Text_1495_99}>PNL</Text>
        </View>
        <View style={styles.View_1495_100}>
          <Text style={styles.Text_1495_100}>AUD/USD</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b435/5415/4ee607afc20858eba71d95385687b5b5"
          }}
          style={styles.ImageBackground_1495_101}
        />
      </View>
      <View style={styles.View_1495_102}>
        <View style={styles.View_1495_103} />
        <View style={styles.View_1495_104}>
          <Text style={styles.Text_1495_104}>-210.11</Text>
        </View>
        <View style={styles.View_1495_105}>
          <View style={styles.View_1495_106}>
            <Text style={styles.Text_1495_106}>Order ID </Text>
          </View>
          <View style={styles.View_1495_107}>
            <Text style={styles.Text_1495_107}>1234567890</Text>
          </View>
        </View>
        <View style={styles.View_1495_108}>
          <View style={styles.View_1495_109}>
            <Text style={styles.Text_1495_109}>Order Time</Text>
          </View>
          <View style={styles.View_1495_110}>
            <Text style={styles.Text_1495_110}>21/10/21 12:50:41</Text>
          </View>
        </View>
        <View style={styles.View_1495_111}>
          <View style={styles.View_1495_112}>
            <Text style={styles.Text_1495_112}>Lot Size</Text>
          </View>
          <View style={styles.View_1495_113}>
            <Text style={styles.Text_1495_113}>53</Text>
          </View>
        </View>
        <View style={styles.View_1495_114}>
          <View style={styles.View_1495_115}>
            <Text style={styles.Text_1495_115}>Entry Price</Text>
          </View>
          <View style={styles.View_1495_116}>
            <Text style={styles.Text_1495_116}>51.34</Text>
          </View>
        </View>
        <View style={styles.View_1495_117}>
          <View style={styles.View_1495_118}>
            <Text style={styles.Text_1495_118}>Stop Price</Text>
          </View>
          <View style={styles.View_1495_119}>
            <Text style={styles.Text_1495_119}>0.21</Text>
          </View>
        </View>
        <View style={styles.View_1495_120}>
          <View style={styles.View_1495_121}>
            <Text style={styles.Text_1495_121}>Status</Text>
          </View>
          <View style={styles.View_1495_122}>
            <Text style={styles.Text_1495_122}>Closed</Text>
          </View>
        </View>
        <View style={styles.View_1495_123}>
          <Text style={styles.Text_1495_123}>PNL</Text>
        </View>
        <View style={styles.View_1495_124}>
          <Text style={styles.Text_1495_124}>AUD/USD</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b435/5415/4ee607afc20858eba71d95385687b5b5"
          }}
          style={styles.ImageBackground_1495_125}
        />
      </View>
      <View style={styles.View_1495_126}>
        <View style={styles.View_1495_127} />
        <View style={styles.View_1495_128}>
          <Text style={styles.Text_1495_128}>AUD/USD</Text>
        </View>
        <View style={styles.View_1495_129}>
          <Text style={styles.Text_1495_129}>
            You influencer wants you to buy this now
          </Text>
        </View>
        <View style={styles.View_1495_130}>
          <Text style={styles.Text_1495_130}>Price</Text>
        </View>
        <View style={styles.View_1495_131}>
          <Text style={styles.Text_1495_131}>Lot Size</Text>
        </View>
        <View style={styles.View_1495_132}>
          <Text style={styles.Text_1495_132}>53.05</Text>
        </View>
        <View style={styles.View_1495_133}>
          <Text style={styles.Text_1495_133}>23</Text>
        </View>
        <View style={styles.View_1495_134} />
        <View style={styles.View_1495_135}>
          <Text style={styles.Text_1495_135}>Accept</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3bf/bfd8/88069811412e93645078d61f62e8c981"
          }}
          style={styles.ImageBackground_1495_136}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34fc/9084/93c0c8fb8334b1e9f5711382d84ee0e6"
          }}
          style={styles.ImageBackground_1495_137}
        />
      </View>
      <View style={styles.View_1495_140}>
        <View style={styles.View_1495_141} />
      </View>
      <View style={styles.View_1495_142}>
        <View style={styles.View_1495_143}>
          <View style={styles.View_1495_144} />
        </View>
        <View style={styles.View_1495_145} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed6a/adf9/f79069c523535415099d63e313d7d05b"
          }}
          style={styles.ImageBackground_1495_146}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9696/e12b/1609bcd09b18f1c944c65fbae12d1901"
          }}
          style={styles.ImageBackground_1495_147}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9b3/ca1b/c5ba92b0573b38c995864832a6a46fd2"
          }}
          style={styles.ImageBackground_1495_148}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/448c/f32c/9da6930f72239e34637363e86d3787c5"
          }}
          style={styles.ImageBackground_1495_149}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/046c/e867/5acaa4d493f2eea22a452ae3450cb556"
          }}
          style={styles.ImageBackground_1495_150}
        />
      </View>
      <View style={styles.View_1495_151} />
      <View style={styles.View_1495_152}>
        <View style={styles.View_1495_153}>
          <View style={styles.View_1495_154} />
        </View>
        <View style={styles.View_1495_155}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67ce/4bb5/25857e0c713544668f524a4f7518b7bf"
            }}
            style={styles.ImageBackground_1495_156}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b36/25b2/ac6e400dbb11832bb84ee7a55991e78a"
            }}
            style={styles.ImageBackground_1495_157}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd54/a89d/5c3e97121a2f09ff13af4ad16165123d"
            }}
            style={styles.ImageBackground_1495_160}
          />
        </View>
        <View style={styles.View_1495_163}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df7c/8f9e/6b781ac7185e888cbb03df7c0b8e641d"
            }}
            style={styles.ImageBackground_1495_164}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e34/dccc/c33348fd5ec8f061c70eebc077658044"
            }}
            style={styles.ImageBackground_1495_165}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2c3/fe86/287ca379da875d4826f8b415c6ada88f"
            }}
            style={styles.ImageBackground_1495_168}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3801/24d6/79ed7859c987f019895939c9f545b1fa"
          }}
          style={styles.ImageBackground_1495_172}
        />
      </View>
      <View source={{ uri: "null" }} style={styles.View_1495_173} />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1495_3: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.546448087431694%"),
    backgroundColor: "rgba(240, 244, 255, 1)"
  },
  View_1495_4: {
    width: wp("36.666666666666664%"),
    minWidth: wp("36.666666666666664%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.111111111111111%"),
    top: hp("27.049180327868854%")
  },
  Text_1495_4: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_6: {
    width: wp("101.66666666666666%"),
    minWidth: wp("101.66666666666666%"),
    height: hp("18.442622950819672%"),
    minHeight: hp("18.442622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.060109289617486%")
  },
  View_1495_7: {
    width: wp("101.66666666666666%"),
    height: hp("18.442622950819672%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(64, 70, 75, 1)",
    opacity: 0.03999999910593033,
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_1495_8: {
    width: wp("15.833333333333332%"),
    minWidth: wp("15.833333333333332%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.11111111111111%"),
    top: hp("1.9125683060109324%")
  },
  Text_1495_8: {
    color: "rgba(71, 211, 111, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_9: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.111111111111111%"),
    top: hp("6.967213114754095%")
  },
  View_1495_10: {
    width: wp("12.5%"),
    minWidth: wp("12.5%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1495_10: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_11: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%")
  },
  Text_1495_11: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_12: {
    width: wp("25.833333333333336%"),
    minWidth: wp("25.833333333333336%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.111111111111111%"),
    top: hp("12.158469945355193%")
  },
  View_1495_13: {
    width: wp("16.944444444444446%"),
    minWidth: wp("16.944444444444446%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1495_13: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_14: {
    width: wp("25.833333333333336%"),
    minWidth: wp("25.833333333333336%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726775%")
  },
  Text_1495_14: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_15: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.27777777777778%"),
    top: hp("6.967213114754095%")
  },
  View_1495_16: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1495_16: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_17: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%")
  },
  Text_1495_17: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_18: {
    width: wp("15.833333333333332%"),
    minWidth: wp("15.833333333333332%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.11111111111111%"),
    top: hp("6.967213114754095%")
  },
  View_1495_19: {
    width: wp("15.833333333333332%"),
    minWidth: wp("15.833333333333332%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1495_19: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_20: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%")
  },
  Text_1495_20: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_21: {
    width: wp("15.277777777777779%"),
    minWidth: wp("15.277777777777779%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.11111111111111%"),
    top: hp("12.295081967213115%")
  },
  View_1495_22: {
    width: wp("15.277777777777779%"),
    minWidth: wp("15.277777777777779%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1495_22: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_23: {
    width: wp("5.833333333333333%"),
    minWidth: wp("5.833333333333333%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726775%")
  },
  Text_1495_23: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_24: {
    width: wp("11.666666666666666%"),
    minWidth: wp("11.666666666666666%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.27777777777778%"),
    top: hp("12.295081967213115%")
  },
  View_1495_25: {
    width: wp("9.722222222222223%"),
    minWidth: wp("9.722222222222223%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1495_25: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_26: {
    width: wp("11.666666666666666%"),
    minWidth: wp("11.666666666666666%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726775%")
  },
  Text_1495_26: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_27: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.44444444444444%"),
    top: hp("2.0491803278688536%")
  },
  Text_1495_27: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_28: {
    width: wp("18.055555555555554%"),
    minWidth: wp("18.055555555555554%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.111111111111111%"),
    top: hp("2.0491803278688536%")
  },
  Text_1495_28: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1495_29: {
    width: wp("92.77777777777779%"),
    minWidth: wp("92.77777777777779%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6111111111111107%"),
    top: hp("5.464480874316941%")
  },
  View_1495_30: {
    width: wp("101.66666666666666%"),
    minWidth: wp("101.66666666666666%"),
    height: hp("18.442622950819672%"),
    minHeight: hp("18.442622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53.68852459016394%")
  },
  View_1495_31: {
    width: wp("101.66666666666666%"),
    height: hp("18.442622950819672%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(64, 70, 75, 1)",
    opacity: 0.03999999910593033,
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_1495_32: {
    width: wp("12.222222222222221%"),
    minWidth: wp("12.222222222222221%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.11111111111111%"),
    top: hp("1.9125683060109253%")
  },
  Text_1495_32: {
    color: "rgba(211, 71, 71, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_33: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.111111111111111%"),
    top: hp("6.967213114754095%")
  },
  View_1495_34: {
    width: wp("12.5%"),
    minWidth: wp("12.5%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1495_34: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_35: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%")
  },
  Text_1495_35: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_36: {
    width: wp("25.833333333333336%"),
    minWidth: wp("25.833333333333336%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.111111111111111%"),
    top: hp("12.15846994535518%")
  },
  View_1495_37: {
    width: wp("16.944444444444446%"),
    minWidth: wp("16.944444444444446%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1495_37: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_38: {
    width: wp("25.833333333333336%"),
    minWidth: wp("25.833333333333336%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%")
  },
  Text_1495_38: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_39: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.27777777777778%"),
    top: hp("6.967213114754095%")
  },
  View_1495_40: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1495_40: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_41: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%")
  },
  Text_1495_41: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_42: {
    width: wp("15.833333333333332%"),
    minWidth: wp("15.833333333333332%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.11111111111111%"),
    top: hp("6.967213114754095%")
  },
  View_1495_43: {
    width: wp("15.833333333333332%"),
    minWidth: wp("15.833333333333332%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1495_43: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_44: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%")
  },
  Text_1495_44: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_45: {
    width: wp("15.277777777777779%"),
    minWidth: wp("15.277777777777779%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.11111111111111%"),
    top: hp("12.295081967213108%")
  },
  View_1495_46: {
    width: wp("15.277777777777779%"),
    minWidth: wp("15.277777777777779%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1495_46: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_47: {
    width: wp("5.833333333333333%"),
    minWidth: wp("5.833333333333333%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%")
  },
  Text_1495_47: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_48: {
    width: wp("9.722222222222223%"),
    minWidth: wp("9.722222222222223%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.27777777777778%"),
    top: hp("12.295081967213108%")
  },
  View_1495_49: {
    width: wp("9.722222222222223%"),
    minWidth: wp("9.722222222222223%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1495_49: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_50: {
    width: wp("9.166666666666666%"),
    minWidth: wp("9.166666666666666%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%")
  },
  Text_1495_50: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_51: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.44444444444444%"),
    top: hp("2.0491803278688465%")
  },
  Text_1495_51: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_52: {
    width: wp("18.055555555555554%"),
    minWidth: wp("18.055555555555554%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.111111111111111%"),
    top: hp("2.0491803278688465%")
  },
  Text_1495_52: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1495_53: {
    width: wp("92.77777777777779%"),
    minWidth: wp("92.77777777777779%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6111111111111107%"),
    top: hp("5.464480874316941%")
  },
  View_1495_54: {
    width: wp("101.66666666666666%"),
    minWidth: wp("101.66666666666666%"),
    height: hp("18.442622950819672%"),
    minHeight: hp("18.442622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("74.31693989071039%")
  },
  View_1495_55: {
    width: wp("101.66666666666666%"),
    height: hp("18.442622950819672%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(64, 70, 75, 1)",
    opacity: 0.03999999910593033,
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_1495_56: {
    width: wp("12.222222222222221%"),
    minWidth: wp("12.222222222222221%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.11111111111111%"),
    top: hp("1.9125683060109253%")
  },
  Text_1495_56: {
    color: "rgba(211, 71, 71, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_57: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.111111111111111%"),
    top: hp("6.967213114754088%")
  },
  View_1495_58: {
    width: wp("12.5%"),
    minWidth: wp("12.5%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1495_58: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_59: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%")
  },
  Text_1495_59: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_60: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.111111111111111%"),
    top: hp("12.158469945355193%")
  },
  View_1495_61: {
    width: wp("16.944444444444446%"),
    minWidth: wp("16.944444444444446%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1495_61: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_62: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.1857923497267677%")
  },
  Text_1495_62: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_63: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.27777777777778%"),
    top: hp("6.967213114754088%")
  },
  View_1495_64: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1495_64: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_65: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%")
  },
  Text_1495_65: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_66: {
    width: wp("15.833333333333332%"),
    minWidth: wp("15.833333333333332%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.11111111111111%"),
    top: hp("6.967213114754088%")
  },
  View_1495_67: {
    width: wp("15.833333333333332%"),
    minWidth: wp("15.833333333333332%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1495_67: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_68: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%")
  },
  Text_1495_68: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_69: {
    width: wp("15.277777777777779%"),
    minWidth: wp("15.277777777777779%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.11111111111111%"),
    top: hp("12.295081967213108%")
  },
  View_1495_70: {
    width: wp("15.277777777777779%"),
    minWidth: wp("15.277777777777779%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1495_70: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_71: {
    width: wp("5.833333333333333%"),
    minWidth: wp("5.833333333333333%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%")
  },
  Text_1495_71: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_72: {
    width: wp("17.22222222222222%"),
    minWidth: wp("17.22222222222222%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.27777777777778%"),
    top: hp("12.295081967213108%")
  },
  View_1495_73: {
    width: wp("9.722222222222223%"),
    minWidth: wp("9.722222222222223%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1495_73: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_74: {
    width: wp("17.22222222222222%"),
    minWidth: wp("17.22222222222222%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%")
  },
  Text_1495_74: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_75: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.44444444444444%"),
    top: hp("2.0491803278688536%")
  },
  Text_1495_75: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_76: {
    width: wp("18.055555555555554%"),
    minWidth: wp("18.055555555555554%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.111111111111111%"),
    top: hp("2.0491803278688536%")
  },
  Text_1495_76: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1495_77: {
    width: wp("92.77777777777779%"),
    minWidth: wp("92.77777777777779%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6111111111111107%"),
    top: hp("5.4644808743169335%")
  },
  View_1495_78: {
    width: wp("101.66666666666666%"),
    minWidth: wp("101.66666666666666%"),
    height: hp("18.442622950819672%"),
    minHeight: hp("18.442622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("94.94535519125684%")
  },
  View_1495_79: {
    width: wp("101.66666666666666%"),
    height: hp("18.442622950819672%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(64, 70, 75, 1)",
    opacity: 0.03999999910593033,
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_1495_80: {
    width: wp("12.222222222222221%"),
    minWidth: wp("12.222222222222221%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.11111111111111%"),
    top: hp("1.9125683060109253%")
  },
  Text_1495_80: {
    color: "rgba(211, 71, 71, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_81: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.111111111111111%"),
    top: hp("6.967213114754088%")
  },
  View_1495_82: {
    width: wp("12.5%"),
    minWidth: wp("12.5%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1495_82: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_83: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.1857923497267677%")
  },
  Text_1495_83: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_84: {
    width: wp("25.833333333333336%"),
    minWidth: wp("25.833333333333336%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.111111111111111%"),
    top: hp("12.158469945355193%")
  },
  View_1495_85: {
    width: wp("16.944444444444446%"),
    minWidth: wp("16.944444444444446%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1495_85: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_86: {
    width: wp("25.833333333333336%"),
    minWidth: wp("25.833333333333336%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%")
  },
  Text_1495_86: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_87: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.27777777777778%"),
    top: hp("6.967213114754088%")
  },
  View_1495_88: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1495_88: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_89: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.1857923497267677%")
  },
  Text_1495_89: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_90: {
    width: wp("15.833333333333332%"),
    minWidth: wp("15.833333333333332%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.11111111111111%"),
    top: hp("6.967213114754088%")
  },
  View_1495_91: {
    width: wp("15.833333333333332%"),
    minWidth: wp("15.833333333333332%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1495_91: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_92: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.1857923497267677%")
  },
  Text_1495_92: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_93: {
    width: wp("15.277777777777779%"),
    minWidth: wp("15.277777777777779%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.11111111111111%"),
    top: hp("12.295081967213093%")
  },
  View_1495_94: {
    width: wp("15.277777777777779%"),
    minWidth: wp("15.277777777777779%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1495_94: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_95: {
    width: wp("5.833333333333333%"),
    minWidth: wp("5.833333333333333%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%")
  },
  Text_1495_95: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_96: {
    width: wp("11.666666666666666%"),
    minWidth: wp("11.666666666666666%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.27777777777778%"),
    top: hp("12.295081967213093%")
  },
  View_1495_97: {
    width: wp("9.722222222222223%"),
    minWidth: wp("9.722222222222223%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1495_97: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_98: {
    width: wp("11.666666666666666%"),
    minWidth: wp("11.666666666666666%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%")
  },
  Text_1495_98: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_99: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.44444444444444%"),
    top: hp("2.0491803278688394%")
  },
  Text_1495_99: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_100: {
    width: wp("18.055555555555554%"),
    minWidth: wp("18.055555555555554%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.111111111111111%"),
    top: hp("2.0491803278688394%")
  },
  Text_1495_100: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1495_101: {
    width: wp("92.77777777777779%"),
    minWidth: wp("92.77777777777779%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6111111111111107%"),
    top: hp("5.4644808743169335%")
  },
  View_1495_102: {
    width: wp("101.66666666666666%"),
    minWidth: wp("101.66666666666666%"),
    height: hp("18.442622950819672%"),
    minHeight: hp("18.442622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("115.57377049180329%")
  },
  View_1495_103: {
    width: wp("101.66666666666666%"),
    height: hp("18.442622950819672%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(64, 70, 75, 1)",
    opacity: 0.03999999910593033,
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_1495_104: {
    width: wp("12.222222222222221%"),
    minWidth: wp("12.222222222222221%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.11111111111111%"),
    top: hp("1.912568306010911%")
  },
  Text_1495_104: {
    color: "rgba(211, 71, 71, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_105: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.111111111111111%"),
    top: hp("6.967213114754102%")
  },
  View_1495_106: {
    width: wp("12.5%"),
    minWidth: wp("12.5%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1495_106: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_107: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.1857923497267677%")
  },
  Text_1495_107: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_108: {
    width: wp("25.833333333333336%"),
    minWidth: wp("25.833333333333336%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.111111111111111%"),
    top: hp("12.15846994535518%")
  },
  View_1495_109: {
    width: wp("16.944444444444446%"),
    minWidth: wp("16.944444444444446%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1495_109: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_110: {
    width: wp("25.833333333333336%"),
    minWidth: wp("25.833333333333336%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%")
  },
  Text_1495_110: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_111: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.27777777777778%"),
    top: hp("6.967213114754102%")
  },
  View_1495_112: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1495_112: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_113: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.1857923497267677%")
  },
  Text_1495_113: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_114: {
    width: wp("15.833333333333332%"),
    minWidth: wp("15.833333333333332%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.11111111111111%"),
    top: hp("6.967213114754102%")
  },
  View_1495_115: {
    width: wp("15.833333333333332%"),
    minWidth: wp("15.833333333333332%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1495_115: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_116: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.1857923497267677%")
  },
  Text_1495_116: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_117: {
    width: wp("15.277777777777779%"),
    minWidth: wp("15.277777777777779%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.11111111111111%"),
    top: hp("12.295081967213122%")
  },
  View_1495_118: {
    width: wp("15.277777777777779%"),
    minWidth: wp("15.277777777777779%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1495_118: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_119: {
    width: wp("5.833333333333333%"),
    minWidth: wp("5.833333333333333%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.1857923497267393%")
  },
  Text_1495_119: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_120: {
    width: wp("11.666666666666666%"),
    minWidth: wp("11.666666666666666%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.27777777777778%"),
    top: hp("12.295081967213122%")
  },
  View_1495_121: {
    width: wp("9.722222222222223%"),
    minWidth: wp("9.722222222222223%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1495_121: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_122: {
    width: wp("11.666666666666666%"),
    minWidth: wp("11.666666666666666%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.1857923497267393%")
  },
  Text_1495_122: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_123: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.44444444444444%"),
    top: hp("2.0491803278688394%")
  },
  Text_1495_123: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_124: {
    width: wp("18.055555555555554%"),
    minWidth: wp("18.055555555555554%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.111111111111111%"),
    top: hp("2.0491803278688394%")
  },
  Text_1495_124: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1495_125: {
    width: wp("92.77777777777779%"),
    minWidth: wp("92.77777777777779%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6111111111111107%"),
    top: hp("5.464480874316919%")
  },
  View_1495_126: {
    width: wp("90.55555555555556%"),
    minWidth: wp("90.55555555555556%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("6.0109289617486334%")
  },
  View_1495_127: {
    width: wp("88.05555555555556%"),
    minWidth: wp("88.05555555555556%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792352%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1495_128: {
    width: wp("18.055555555555554%"),
    minWidth: wp("18.055555555555554%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6111111111111107%"),
    top: hp("3.688524590163934%")
  },
  Text_1495_128: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_129: {
    width: wp("50.83333333333333%"),
    minWidth: wp("50.83333333333333%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6111111111111107%"),
    top: hp("6.147540983606558%")
  },
  Text_1495_129: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_130: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6111111111111107%"),
    top: hp("8.606557377049182%")
  },
  Text_1495_130: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_131: {
    width: wp("10.277777777777777%"),
    minWidth: wp("10.277777777777777%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.555555555555557%"),
    top: hp("8.606557377049182%")
  },
  Text_1495_131: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_132: {
    width: wp("7.5%"),
    minWidth: wp("7.5%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.944444444444446%"),
    top: hp("8.606557377049182%")
  },
  Text_1495_132: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_133: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.22222222222222%"),
    top: hp("8.606557377049182%")
  },
  Text_1495_133: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1495_134: {
    width: wp("18.88888888888889%"),
    minWidth: wp("18.88888888888889%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.777777777777786%"),
    top: hp("4.781420765027323%"),
    backgroundColor: "rgba(191, 255, 198, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_1495_135: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.22222222222221%"),
    top: hp("5.8743169398907105%")
  },
  Text_1495_135: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1495_136: {
    width: wp("6.111111111111111%"),
    minWidth: wp("6.111111111111111%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.44444444444444%"),
    top: hp("0%")
  },
  ImageBackground_1495_137: {
    width: wp("3.3333333333333335%"),
    height: hp("1.639344262295082%"),
    top: hp("0.6830601092896185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.83333333333333%")
  },
  View_1495_140: {
    width: wp("78.52199130588107%"),
    minWidth: wp("78.52199130588107%"),
    height: hp("9.745709361925803%"),
    minHeight: hp("9.745709361925803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96.533203125%"),
    top: hp("8.333333333333332%")
  },
  View_1495_141: {
    width: wp("78.52199130588107%"),
    minWidth: wp("78.52199130588107%"),
    height: hp("9.745709361925803%"),
    minHeight: hp("9.745709361925803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1495_142: {
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
  View_1495_143: {
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
  View_1495_144: {
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
  View_1495_145: {
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
  ImageBackground_1495_146: {
    width: wp("7.38425890604655%"),
    height: hp("3.243410391885726%"),
    top: hp("4.867870560109296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.335693359375%")
  },
  ImageBackground_1495_147: {
    width: wp("5.555555555555555%"),
    height: hp("3.0054644808743167%"),
    top: hp("5.191256830601105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.44444444444444%")
  },
  ImageBackground_1495_148: {
    width: wp("4.444444444444445%"),
    height: hp("3.0054644808743167%"),
    top: hp("5.191256830601105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.11111111111111%")
  },
  ImageBackground_1495_149: {
    width: wp("9.95371182759603%"),
    height: hp("4.895269675332992%"),
    top: hp("2.049180327868868%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.111111111111114%")
  },
  ImageBackground_1495_150: {
    width: wp("5.4166740841335725%"),
    height: hp("2.959927313966178%"),
    top: hp("5.077457949112031%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.180555555555554%")
  },
  View_1495_151: {
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
  View_1495_152: {
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
  View_1495_153: {
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
  View_1495_154: {
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
  View_1495_155: {
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
  ImageBackground_1495_156: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1495_157: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1495_160: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1495_163: {
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
  ImageBackground_1495_164: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1495_165: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1495_168: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1495_172: {
    width: wp("8.685709635416666%"),
    minWidth: wp("8.685709635416666%"),
    height: hp("1.2972805669398906%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888888888888884%"),
    top: hp("1.0424671277322404%")
  },
  View_1495_173: {
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
