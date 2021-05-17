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
      <View style={styles.View_1342_711} />
      <View style={styles.View_1342_712} />
      <View style={styles.View_1342_713}>
        <Text style={styles.Text_1342_713}>Profit &amp; Loss</Text>
      </View>
      <View style={styles.View_1342_714}>
        <Text style={styles.Text_1342_714}>My Trade</Text>
      </View>
      <View style={styles.View_1342_715}>
        <Text style={styles.Text_1342_715}>+1,076.10</Text>
      </View>
      <View style={styles.View_1342_716}>
        <Text style={styles.Text_1342_716}>Total</Text>
      </View>
      <View style={styles.View_1342_718}>
        <View style={styles.View_1342_719} />
        <View style={styles.View_1342_720}>
          <Text style={styles.Text_1342_720}>+250.74</Text>
        </View>
        <View style={styles.View_1342_721}>
          <View style={styles.View_1342_722}>
            <Text style={styles.Text_1342_722}>Order ID </Text>
          </View>
          <View style={styles.View_1342_723}>
            <Text style={styles.Text_1342_723}>1234567890</Text>
          </View>
        </View>
        <View style={styles.View_1342_724}>
          <View style={styles.View_1342_725}>
            <Text style={styles.Text_1342_725}>Order Time</Text>
          </View>
          <View style={styles.View_1342_726}>
            <Text style={styles.Text_1342_726}>21/10/21 12:50:41</Text>
          </View>
        </View>
        <View style={styles.View_1342_727}>
          <View style={styles.View_1342_728}>
            <Text style={styles.Text_1342_728}>Lot Size</Text>
          </View>
          <View style={styles.View_1342_729}>
            <Text style={styles.Text_1342_729}>53</Text>
          </View>
        </View>
        <View style={styles.View_1342_730}>
          <View style={styles.View_1342_731}>
            <Text style={styles.Text_1342_731}>Entry Price</Text>
          </View>
          <View style={styles.View_1342_732}>
            <Text style={styles.Text_1342_732}>51.34</Text>
          </View>
        </View>
        <View style={styles.View_1342_733}>
          <View style={styles.View_1342_734}>
            <Text style={styles.Text_1342_734}>Stop Price</Text>
          </View>
          <View style={styles.View_1342_735}>
            <Text style={styles.Text_1342_735}>0.21</Text>
          </View>
        </View>
        <View style={styles.View_1342_736}>
          <View style={styles.View_1342_737}>
            <Text style={styles.Text_1342_737}>Status</Text>
          </View>
          <View style={styles.View_1342_738}>
            <Text style={styles.Text_1342_738}>Closed</Text>
          </View>
        </View>
        <View style={styles.View_1342_739}>
          <Text style={styles.Text_1342_739}>PNL</Text>
        </View>
        <View style={styles.View_1342_740}>
          <Text style={styles.Text_1342_740}>AUD/USD</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b435/5415/4ee607afc20858eba71d95385687b5b5"
          }}
          style={styles.ImageBackground_1342_741}
        />
      </View>
      <View style={styles.View_1342_742}>
        <View style={styles.View_1342_743} />
        <View style={styles.View_1342_744}>
          <Text style={styles.Text_1342_744}>-210.11</Text>
        </View>
        <View style={styles.View_1342_745}>
          <View style={styles.View_1342_746}>
            <Text style={styles.Text_1342_746}>Order ID </Text>
          </View>
          <View style={styles.View_1342_747}>
            <Text style={styles.Text_1342_747}>1234567890</Text>
          </View>
        </View>
        <View style={styles.View_1342_748}>
          <View style={styles.View_1342_749}>
            <Text style={styles.Text_1342_749}>Order Time</Text>
          </View>
          <View style={styles.View_1342_750}>
            <Text style={styles.Text_1342_750}>21/10/21 12:50:41</Text>
          </View>
        </View>
        <View style={styles.View_1342_751}>
          <View style={styles.View_1342_752}>
            <Text style={styles.Text_1342_752}>Lot Size</Text>
          </View>
          <View style={styles.View_1342_753}>
            <Text style={styles.Text_1342_753}>53</Text>
          </View>
        </View>
        <View style={styles.View_1342_754}>
          <View style={styles.View_1342_755}>
            <Text style={styles.Text_1342_755}>Entry Price</Text>
          </View>
          <View style={styles.View_1342_756}>
            <Text style={styles.Text_1342_756}>51.34</Text>
          </View>
        </View>
        <View style={styles.View_1342_757}>
          <View style={styles.View_1342_758}>
            <Text style={styles.Text_1342_758}>Stop Price</Text>
          </View>
          <View style={styles.View_1342_759}>
            <Text style={styles.Text_1342_759}>0.21</Text>
          </View>
        </View>
        <View style={styles.View_1342_760}>
          <View style={styles.View_1342_761}>
            <Text style={styles.Text_1342_761}>Status</Text>
          </View>
          <View style={styles.View_1342_762}>
            <Text style={styles.Text_1342_762}>Open</Text>
          </View>
        </View>
        <View style={styles.View_1342_763}>
          <Text style={styles.Text_1342_763}>PNL</Text>
        </View>
        <View style={styles.View_1342_764}>
          <Text style={styles.Text_1342_764}>AUD/USD</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b435/5415/4ee607afc20858eba71d95385687b5b5"
          }}
          style={styles.ImageBackground_1342_765}
        />
      </View>
      <View style={styles.View_1342_766}>
        <View style={styles.View_1342_767} />
        <View style={styles.View_1342_768}>
          <Text style={styles.Text_1342_768}>-210.11</Text>
        </View>
        <View style={styles.View_1342_769}>
          <View style={styles.View_1342_770}>
            <Text style={styles.Text_1342_770}>Order ID </Text>
          </View>
          <View style={styles.View_1342_771}>
            <Text style={styles.Text_1342_771}>1234567890</Text>
          </View>
        </View>
        <View style={styles.View_1342_772}>
          <View style={styles.View_1342_773}>
            <Text style={styles.Text_1342_773}>Order Time</Text>
          </View>
          <View style={styles.View_1342_774}>
            <Text style={styles.Text_1342_774}>21/10/21 12:50:41</Text>
          </View>
        </View>
        <View style={styles.View_1342_775}>
          <View style={styles.View_1342_776}>
            <Text style={styles.Text_1342_776}>Lot Size</Text>
          </View>
          <View style={styles.View_1342_777}>
            <Text style={styles.Text_1342_777}>53</Text>
          </View>
        </View>
        <View style={styles.View_1342_778}>
          <View style={styles.View_1342_779}>
            <Text style={styles.Text_1342_779}>Entry Price</Text>
          </View>
          <View style={styles.View_1342_780}>
            <Text style={styles.Text_1342_780}>51.34</Text>
          </View>
        </View>
        <View style={styles.View_1342_781}>
          <View style={styles.View_1342_782}>
            <Text style={styles.Text_1342_782}>Stop Price</Text>
          </View>
          <View style={styles.View_1342_783}>
            <Text style={styles.Text_1342_783}>0.21</Text>
          </View>
        </View>
        <View style={styles.View_1342_784}>
          <View style={styles.View_1342_785}>
            <Text style={styles.Text_1342_785}>Status</Text>
          </View>
          <View style={styles.View_1342_786}>
            <Text style={styles.Text_1342_786}>Cancelled</Text>
          </View>
        </View>
        <View style={styles.View_1342_787}>
          <Text style={styles.Text_1342_787}>PNL</Text>
        </View>
        <View style={styles.View_1342_788}>
          <Text style={styles.Text_1342_788}>AUD/USD</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b435/5415/4ee607afc20858eba71d95385687b5b5"
          }}
          style={styles.ImageBackground_1342_789}
        />
      </View>
      <View style={styles.View_1342_790}>
        <View style={styles.View_1342_791} />
        <View style={styles.View_1342_792}>
          <Text style={styles.Text_1342_792}>-210.11</Text>
        </View>
        <View style={styles.View_1342_793}>
          <View style={styles.View_1342_794}>
            <Text style={styles.Text_1342_794}>Order ID </Text>
          </View>
          <View style={styles.View_1342_795}>
            <Text style={styles.Text_1342_795}>1234567890</Text>
          </View>
        </View>
        <View style={styles.View_1342_796}>
          <View style={styles.View_1342_797}>
            <Text style={styles.Text_1342_797}>Order Time</Text>
          </View>
          <View style={styles.View_1342_798}>
            <Text style={styles.Text_1342_798}>21/10/21 12:50:41</Text>
          </View>
        </View>
        <View style={styles.View_1342_799}>
          <View style={styles.View_1342_800}>
            <Text style={styles.Text_1342_800}>Lot Size</Text>
          </View>
          <View style={styles.View_1342_801}>
            <Text style={styles.Text_1342_801}>53</Text>
          </View>
        </View>
        <View style={styles.View_1342_802}>
          <View style={styles.View_1342_803}>
            <Text style={styles.Text_1342_803}>Entry Price</Text>
          </View>
          <View style={styles.View_1342_804}>
            <Text style={styles.Text_1342_804}>51.34</Text>
          </View>
        </View>
        <View style={styles.View_1342_805}>
          <View style={styles.View_1342_806}>
            <Text style={styles.Text_1342_806}>Stop Price</Text>
          </View>
          <View style={styles.View_1342_807}>
            <Text style={styles.Text_1342_807}>0.21</Text>
          </View>
        </View>
        <View style={styles.View_1342_808}>
          <View style={styles.View_1342_809}>
            <Text style={styles.Text_1342_809}>Status</Text>
          </View>
          <View style={styles.View_1342_810}>
            <Text style={styles.Text_1342_810}>Closed</Text>
          </View>
        </View>
        <View style={styles.View_1342_811}>
          <Text style={styles.Text_1342_811}>PNL</Text>
        </View>
        <View style={styles.View_1342_812}>
          <Text style={styles.Text_1342_812}>AUD/USD</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b435/5415/4ee607afc20858eba71d95385687b5b5"
          }}
          style={styles.ImageBackground_1342_813}
        />
      </View>
      <View style={styles.View_1342_814}>
        <View style={styles.View_1342_815} />
        <View style={styles.View_1342_816}>
          <Text style={styles.Text_1342_816}>-210.11</Text>
        </View>
        <View style={styles.View_1342_817}>
          <View style={styles.View_1342_818}>
            <Text style={styles.Text_1342_818}>Order ID </Text>
          </View>
          <View style={styles.View_1342_819}>
            <Text style={styles.Text_1342_819}>1234567890</Text>
          </View>
        </View>
        <View style={styles.View_1342_820}>
          <View style={styles.View_1342_821}>
            <Text style={styles.Text_1342_821}>Order Time</Text>
          </View>
          <View style={styles.View_1342_822}>
            <Text style={styles.Text_1342_822}>21/10/21 12:50:41</Text>
          </View>
        </View>
        <View style={styles.View_1342_823}>
          <View style={styles.View_1342_824}>
            <Text style={styles.Text_1342_824}>Lot Size</Text>
          </View>
          <View style={styles.View_1342_825}>
            <Text style={styles.Text_1342_825}>53</Text>
          </View>
        </View>
        <View style={styles.View_1342_826}>
          <View style={styles.View_1342_827}>
            <Text style={styles.Text_1342_827}>Entry Price</Text>
          </View>
          <View style={styles.View_1342_828}>
            <Text style={styles.Text_1342_828}>51.34</Text>
          </View>
        </View>
        <View style={styles.View_1342_829}>
          <View style={styles.View_1342_830}>
            <Text style={styles.Text_1342_830}>Stop Price</Text>
          </View>
          <View style={styles.View_1342_831}>
            <Text style={styles.Text_1342_831}>0.21</Text>
          </View>
        </View>
        <View style={styles.View_1342_832}>
          <View style={styles.View_1342_833}>
            <Text style={styles.Text_1342_833}>Status</Text>
          </View>
          <View style={styles.View_1342_834}>
            <Text style={styles.Text_1342_834}>Closed</Text>
          </View>
        </View>
        <View style={styles.View_1342_835}>
          <Text style={styles.Text_1342_835}>PNL</Text>
        </View>
        <View style={styles.View_1342_836}>
          <Text style={styles.Text_1342_836}>AUD/USD</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b435/5415/4ee607afc20858eba71d95385687b5b5"
          }}
          style={styles.ImageBackground_1342_837}
        />
      </View>
      <View style={styles.View_1342_838}>
        <View style={styles.View_1342_839}>
          <View style={styles.View_1342_840} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed6a/adf9/f79069c523535415099d63e313d7d05b"
          }}
          style={styles.ImageBackground_1342_842}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9696/e12b/1609bcd09b18f1c944c65fbae12d1901"
          }}
          style={styles.ImageBackground_1342_843}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9b3/ca1b/c5ba92b0573b38c995864832a6a46fd2"
          }}
          style={styles.ImageBackground_1342_844}
        />
        <View style={styles.View_1385_708}>
          <View style={styles.View_1342_841} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/448c/f32c/9da6930f72239e34637363e86d3787c5"
            }}
            style={styles.ImageBackground_1342_845}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/046c/e867/5acaa4d493f2eea22a452ae3450cb556"
          }}
          style={styles.ImageBackground_1342_846}
        />
      </View>
      <View style={styles.View_1342_847} />
      <View style={styles.View_1342_848}>
        <View style={styles.View_1342_849}>
          <View style={styles.View_1342_850} />
        </View>
        <View style={styles.View_1342_851}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67ce/4bb5/25857e0c713544668f524a4f7518b7bf"
            }}
            style={styles.ImageBackground_1342_852}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b36/25b2/ac6e400dbb11832bb84ee7a55991e78a"
            }}
            style={styles.ImageBackground_1342_853}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd54/a89d/5c3e97121a2f09ff13af4ad16165123d"
            }}
            style={styles.ImageBackground_1342_856}
          />
        </View>
        <View style={styles.View_1342_859}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df7c/8f9e/6b781ac7185e888cbb03df7c0b8e641d"
            }}
            style={styles.ImageBackground_1342_860}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e34/dccc/c33348fd5ec8f061c70eebc077658044"
            }}
            style={styles.ImageBackground_1342_861}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2c3/fe86/287ca379da875d4826f8b415c6ada88f"
            }}
            style={styles.ImageBackground_1342_864}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3801/24d6/79ed7859c987f019895939c9f545b1fa"
          }}
          style={styles.ImageBackground_1342_868}
        />
      </View>
      <View source={{ uri: "null" }} style={styles.View_1342_869} />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1342_711: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16.939890710382514%"),
    minHeight: hp("16.939890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 244, 255, 1)"
  },
  View_1342_712: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("10.245901639344263%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1342_713: {
    width: wp("36.666666666666664%"),
    minWidth: wp("36.666666666666664%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("15.163934426229508%")
  },
  Text_1342_713: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_714: {
    width: wp("36.666666666666664%"),
    minWidth: wp("36.666666666666664%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.111111111111111%"),
    top: hp("25.136612021857925%")
  },
  Text_1342_714: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_715: {
    width: wp("22.77777777777778%"),
    minWidth: wp("22.77777777777778%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.888888888888886%"),
    top: hp("15.027322404371585%")
  },
  Text_1342_715: {
    color: "rgba(71, 211, 111, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_716: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("13.661202185792352%")
  },
  Text_1342_716: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_718: {
    width: wp("101.66666666666666%"),
    minWidth: wp("101.66666666666666%"),
    height: hp("18.442622950819672%"),
    minHeight: hp("18.442622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.147540983606557%")
  },
  View_1342_719: {
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
  View_1342_720: {
    width: wp("15.833333333333332%"),
    minWidth: wp("15.833333333333332%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.11111111111111%"),
    top: hp("1.9125683060109289%")
  },
  Text_1342_720: {
    color: "rgba(71, 211, 111, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_721: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.111111111111111%"),
    top: hp("6.967213114754099%")
  },
  View_1342_722: {
    width: wp("12.5%"),
    minWidth: wp("12.5%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1342_722: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_723: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726775%")
  },
  Text_1342_723: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_724: {
    width: wp("25.833333333333336%"),
    minWidth: wp("25.833333333333336%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.111111111111111%"),
    top: hp("12.15846994535519%")
  },
  View_1342_725: {
    width: wp("16.944444444444446%"),
    minWidth: wp("16.944444444444446%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1342_725: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_726: {
    width: wp("25.833333333333336%"),
    minWidth: wp("25.833333333333336%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726775%")
  },
  Text_1342_726: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_727: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.27777777777778%"),
    top: hp("6.967213114754099%")
  },
  View_1342_728: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1342_728: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_729: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726775%")
  },
  Text_1342_729: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_730: {
    width: wp("15.833333333333332%"),
    minWidth: wp("15.833333333333332%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.11111111111111%"),
    top: hp("6.967213114754099%")
  },
  View_1342_731: {
    width: wp("15.833333333333332%"),
    minWidth: wp("15.833333333333332%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1342_731: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_732: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726775%")
  },
  Text_1342_732: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_733: {
    width: wp("15.277777777777779%"),
    minWidth: wp("15.277777777777779%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.11111111111111%"),
    top: hp("12.295081967213111%")
  },
  View_1342_734: {
    width: wp("15.277777777777779%"),
    minWidth: wp("15.277777777777779%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1342_734: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_735: {
    width: wp("5.833333333333333%"),
    minWidth: wp("5.833333333333333%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%")
  },
  Text_1342_735: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_736: {
    width: wp("11.666666666666666%"),
    minWidth: wp("11.666666666666666%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.27777777777778%"),
    top: hp("12.295081967213111%")
  },
  View_1342_737: {
    width: wp("9.722222222222223%"),
    minWidth: wp("9.722222222222223%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1342_737: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_738: {
    width: wp("11.666666666666666%"),
    minWidth: wp("11.666666666666666%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%")
  },
  Text_1342_738: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_739: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.44444444444444%"),
    top: hp("2.04918032786885%")
  },
  Text_1342_739: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_740: {
    width: wp("18.055555555555554%"),
    minWidth: wp("18.055555555555554%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.111111111111111%"),
    top: hp("2.04918032786885%")
  },
  Text_1342_740: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1342_741: {
    width: wp("92.77777777777779%"),
    minWidth: wp("92.77777777777779%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6111111111111107%"),
    top: hp("5.464480874316944%")
  },
  View_1342_742: {
    width: wp("101.66666666666666%"),
    minWidth: wp("101.66666666666666%"),
    height: hp("18.442622950819672%"),
    minHeight: hp("18.442622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("51.775956284153004%")
  },
  View_1342_743: {
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
  View_1342_744: {
    width: wp("12.222222222222221%"),
    minWidth: wp("12.222222222222221%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.11111111111111%"),
    top: hp("1.9125683060109324%")
  },
  Text_1342_744: {
    color: "rgba(211, 71, 71, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_745: {
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
  View_1342_746: {
    width: wp("12.5%"),
    minWidth: wp("12.5%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1342_746: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_747: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%")
  },
  Text_1342_747: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_748: {
    width: wp("25.833333333333336%"),
    minWidth: wp("25.833333333333336%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.111111111111111%"),
    top: hp("12.1584699453552%")
  },
  View_1342_749: {
    width: wp("16.944444444444446%"),
    minWidth: wp("16.944444444444446%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1342_749: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_750: {
    width: wp("25.833333333333336%"),
    minWidth: wp("25.833333333333336%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.1857923497267677%")
  },
  Text_1342_750: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_751: {
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
  View_1342_752: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1342_752: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_753: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%")
  },
  Text_1342_753: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_754: {
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
  View_1342_755: {
    width: wp("15.833333333333332%"),
    minWidth: wp("15.833333333333332%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1342_755: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_756: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%")
  },
  Text_1342_756: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_757: {
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
  View_1342_758: {
    width: wp("15.277777777777779%"),
    minWidth: wp("15.277777777777779%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1342_758: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_759: {
    width: wp("5.833333333333333%"),
    minWidth: wp("5.833333333333333%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%")
  },
  Text_1342_759: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_760: {
    width: wp("9.722222222222223%"),
    minWidth: wp("9.722222222222223%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.27777777777778%"),
    top: hp("12.295081967213115%")
  },
  View_1342_761: {
    width: wp("9.722222222222223%"),
    minWidth: wp("9.722222222222223%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1342_761: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_762: {
    width: wp("9.166666666666666%"),
    minWidth: wp("9.166666666666666%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%")
  },
  Text_1342_762: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_763: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.44444444444444%"),
    top: hp("2.0491803278688607%")
  },
  Text_1342_763: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_764: {
    width: wp("18.055555555555554%"),
    minWidth: wp("18.055555555555554%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.111111111111111%"),
    top: hp("2.0491803278688607%")
  },
  Text_1342_764: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1342_765: {
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
  View_1342_766: {
    width: wp("101.66666666666666%"),
    minWidth: wp("101.66666666666666%"),
    height: hp("18.442622950819672%"),
    minHeight: hp("18.442622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("72.40437158469946%")
  },
  View_1342_767: {
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
  View_1342_768: {
    width: wp("12.222222222222221%"),
    minWidth: wp("12.222222222222221%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.11111111111111%"),
    top: hp("1.9125683060109253%")
  },
  Text_1342_768: {
    color: "rgba(211, 71, 71, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_769: {
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
  View_1342_770: {
    width: wp("12.5%"),
    minWidth: wp("12.5%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1342_770: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_771: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.1857923497267535%")
  },
  Text_1342_771: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_772: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.111111111111111%"),
    top: hp("12.15846994535518%")
  },
  View_1342_773: {
    width: wp("16.944444444444446%"),
    minWidth: wp("16.944444444444446%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1342_773: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_774: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%")
  },
  Text_1342_774: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_775: {
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
  View_1342_776: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1342_776: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_777: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.1857923497267535%")
  },
  Text_1342_777: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_778: {
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
  View_1342_779: {
    width: wp("15.833333333333332%"),
    minWidth: wp("15.833333333333332%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1342_779: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_780: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.1857923497267535%")
  },
  Text_1342_780: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_781: {
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
  View_1342_782: {
    width: wp("15.277777777777779%"),
    minWidth: wp("15.277777777777779%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1342_782: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_783: {
    width: wp("5.833333333333333%"),
    minWidth: wp("5.833333333333333%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.1857923497267677%")
  },
  Text_1342_783: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_784: {
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
  View_1342_785: {
    width: wp("9.722222222222223%"),
    minWidth: wp("9.722222222222223%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1342_785: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_786: {
    width: wp("17.22222222222222%"),
    minWidth: wp("17.22222222222222%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.1857923497267677%")
  },
  Text_1342_786: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_787: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.44444444444444%"),
    top: hp("2.0491803278688394%")
  },
  Text_1342_787: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_788: {
    width: wp("18.055555555555554%"),
    minWidth: wp("18.055555555555554%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.111111111111111%"),
    top: hp("2.0491803278688394%")
  },
  Text_1342_788: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1342_789: {
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
  View_1342_790: {
    width: wp("101.66666666666666%"),
    minWidth: wp("101.66666666666666%"),
    height: hp("18.442622950819672%"),
    minHeight: hp("18.442622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("93.0327868852459%")
  },
  View_1342_791: {
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
  View_1342_792: {
    width: wp("12.222222222222221%"),
    minWidth: wp("12.222222222222221%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.11111111111111%"),
    top: hp("1.9125683060109395%")
  },
  Text_1342_792: {
    color: "rgba(211, 71, 71, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_793: {
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
  View_1342_794: {
    width: wp("12.5%"),
    minWidth: wp("12.5%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1342_794: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_795: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%")
  },
  Text_1342_795: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_796: {
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
  View_1342_797: {
    width: wp("16.944444444444446%"),
    minWidth: wp("16.944444444444446%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1342_797: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_798: {
    width: wp("25.833333333333336%"),
    minWidth: wp("25.833333333333336%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%")
  },
  Text_1342_798: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_799: {
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
  View_1342_800: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1342_800: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_801: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%")
  },
  Text_1342_801: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_802: {
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
  View_1342_803: {
    width: wp("15.833333333333332%"),
    minWidth: wp("15.833333333333332%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1342_803: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_804: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%")
  },
  Text_1342_804: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_805: {
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
  View_1342_806: {
    width: wp("15.277777777777779%"),
    minWidth: wp("15.277777777777779%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1342_806: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_807: {
    width: wp("5.833333333333333%"),
    minWidth: wp("5.833333333333333%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%")
  },
  Text_1342_807: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_808: {
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
  View_1342_809: {
    width: wp("9.722222222222223%"),
    minWidth: wp("9.722222222222223%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1342_809: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_810: {
    width: wp("11.666666666666666%"),
    minWidth: wp("11.666666666666666%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%")
  },
  Text_1342_810: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_811: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.44444444444444%"),
    top: hp("2.0491803278688536%")
  },
  Text_1342_811: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_812: {
    width: wp("18.055555555555554%"),
    minWidth: wp("18.055555555555554%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.111111111111111%"),
    top: hp("2.0491803278688536%")
  },
  Text_1342_812: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1342_813: {
    width: wp("92.77777777777779%"),
    minWidth: wp("92.77777777777779%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6111111111111107%"),
    top: hp("5.464480874316948%")
  },
  View_1342_814: {
    width: wp("101.66666666666666%"),
    minWidth: wp("101.66666666666666%"),
    height: hp("18.442622950819672%"),
    minHeight: hp("18.442622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("113.66120218579235%")
  },
  View_1342_815: {
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
  View_1342_816: {
    width: wp("12.222222222222221%"),
    minWidth: wp("12.222222222222221%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.11111111111111%"),
    top: hp("1.9125683060109395%")
  },
  Text_1342_816: {
    color: "rgba(211, 71, 71, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_817: {
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
  View_1342_818: {
    width: wp("12.5%"),
    minWidth: wp("12.5%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1342_818: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_819: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%")
  },
  Text_1342_819: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_820: {
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
  View_1342_821: {
    width: wp("16.944444444444446%"),
    minWidth: wp("16.944444444444446%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1342_821: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_822: {
    width: wp("25.833333333333336%"),
    minWidth: wp("25.833333333333336%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%")
  },
  Text_1342_822: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_823: {
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
  View_1342_824: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1342_824: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_825: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%")
  },
  Text_1342_825: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_826: {
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
  View_1342_827: {
    width: wp("15.833333333333332%"),
    minWidth: wp("15.833333333333332%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1342_827: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_828: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%")
  },
  Text_1342_828: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_829: {
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
  View_1342_830: {
    width: wp("15.277777777777779%"),
    minWidth: wp("15.277777777777779%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1342_830: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_831: {
    width: wp("5.833333333333333%"),
    minWidth: wp("5.833333333333333%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%")
  },
  Text_1342_831: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_832: {
    width: wp("11.666666666666666%"),
    minWidth: wp("11.666666666666666%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.27777777777778%"),
    top: hp("12.295081967213108%")
  },
  View_1342_833: {
    width: wp("9.722222222222223%"),
    minWidth: wp("9.722222222222223%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1342_833: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_834: {
    width: wp("11.666666666666666%"),
    minWidth: wp("11.666666666666666%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%")
  },
  Text_1342_834: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_835: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.44444444444444%"),
    top: hp("2.0491803278688394%")
  },
  Text_1342_835: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1342_836: {
    width: wp("18.055555555555554%"),
    minWidth: wp("18.055555555555554%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.111111111111111%"),
    top: hp("2.0491803278688394%")
  },
  Text_1342_836: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1342_837: {
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
  View_1342_838: {
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
  View_1342_839: {
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
  View_1342_840: {
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
  ImageBackground_1342_842: {
    width: wp("7.38425890604655%"),
    height: hp("3.243410391885726%"),
    top: hp("4.867870560109296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.335693359375%")
  },
  ImageBackground_1342_843: {
    width: wp("5.555555555555555%"),
    height: hp("3.0054644808743167%"),
    top: hp("5.191256830601105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.44444444444444%")
  },
  ImageBackground_1342_844: {
    width: wp("4.444444444444445%"),
    height: hp("3.0054644808743167%"),
    top: hp("5.191256830601105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.11111111111111%")
  },
  View_1385_708: {
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
  View_1342_841: {
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
  ImageBackground_1342_845: {
    width: wp("9.95371182759603%"),
    height: hp("4.895269675332992%"),
    top: hp("2.049180327868868%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.44444444444445%")
  },
  ImageBackground_1342_846: {
    width: wp("5.4166740841335725%"),
    height: hp("2.959927313966178%"),
    top: hp("5.077457949112031%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.180555555555554%")
  },
  View_1342_847: {
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
  View_1342_848: {
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
  View_1342_849: {
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
  View_1342_850: {
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
  View_1342_851: {
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
  ImageBackground_1342_852: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1342_853: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1342_856: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1342_859: {
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
  ImageBackground_1342_860: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1342_861: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1342_864: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1342_868: {
    width: wp("8.685709635416666%"),
    minWidth: wp("8.685709635416666%"),
    height: hp("1.2972805669398906%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888888888888884%"),
    top: hp("1.0424671277322404%")
  },
  View_1342_869: {
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
