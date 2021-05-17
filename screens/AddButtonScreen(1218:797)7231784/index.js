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
        style={styles.ImageBackground_1218_800}
      />
      <View style={styles.View_1218_801} />
      <View style={styles.View_1218_802} />
      <View style={styles.View_1218_803} />
      <View style={styles.View_1218_804}>
        <Text style={styles.Text_1218_804}>AUD/USD</Text>
      </View>
      <View style={styles.View_1218_805}>
        <Text style={styles.Text_1218_805}>AUD/USD</Text>
      </View>
      <View style={styles.View_1218_806}>
        <Text style={styles.Text_1218_806}>AUD/USD</Text>
      </View>
      <View style={styles.View_1218_807}>
        <Text style={styles.Text_1218_807}>0.53 Cents</Text>
      </View>
      <View style={styles.View_1218_808}>
        <Text style={styles.Text_1218_808}>0.53 Cents</Text>
      </View>
      <View style={styles.View_1218_809}>
        <Text style={styles.Text_1218_809}>0.53 Cents</Text>
      </View>
      <View style={styles.View_1218_810}>
        <Text style={styles.Text_1218_810}>+2150.01</Text>
      </View>
      <View style={styles.View_1218_811}>
        <Text style={styles.Text_1218_811}>+2150.01</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6797/cbec/b245179848c10119c5f2149dadc293af"
        }}
        style={styles.ImageBackground_1218_812}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6797/cbec/b245179848c10119c5f2149dadc293af"
        }}
        style={styles.ImageBackground_1218_813}
      />
      <View style={styles.View_1218_814}>
        <Text style={styles.Text_1218_814}>-452.30</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3d9/211a/88f93ed6bdd0d4fb1dbc4a1a9ce2d64d"
        }}
        style={styles.ImageBackground_1218_815}
      />
      <View style={styles.View_1218_816}>
        <Text style={styles.Text_1218_816}>Courses</Text>
      </View>
      <View style={styles.View_1218_817}>
        <Text style={styles.Text_1218_817}>Video</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b44/07db/0989446b1fb50ff5b8f0539f7537b064"
        }}
        style={styles.ImageBackground_1218_818}
      />
      <View style={styles.View_1218_819} />
      <View style={styles.View_1218_820}>
        <Text style={styles.Text_1218_820}>PDFs</Text>
      </View>
      <View style={styles.View_1218_821}>
        <View style={styles.View_1218_822}>
          <View style={styles.View_I1218_822_361_758} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5607/1a17/8153b172e3e38f45150688de65b9edb9"
            }}
            style={styles.ImageBackground_I1218_822_361_759}
          />
          <View style={styles.View_I1218_822_361_760}>
            <Text style={styles.Text_I1218_822_361_760}>Course Title</Text>
          </View>
          <View style={styles.View_I1218_822_361_761}>
            <Text style={styles.Text_I1218_822_361_761}>
              Course description little bit or more information.....
            </Text>
          </View>
        </View>
        <View style={styles.View_1218_823}>
          <View style={styles.View_I1218_823_361_763} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5607/1a17/8153b172e3e38f45150688de65b9edb9"
            }}
            style={styles.ImageBackground_I1218_823_361_764}
          />
          <View style={styles.View_I1218_823_361_765}>
            <Text style={styles.Text_I1218_823_361_765}>Course Title</Text>
          </View>
          <View style={styles.View_I1218_823_361_766}>
            <Text style={styles.Text_I1218_823_361_766}>
              Course description little bit or more information.....
            </Text>
          </View>
        </View>
        <View style={styles.View_1218_824}>
          <View style={styles.View_I1218_824_361_768} />
          <View style={styles.View_I1218_824_361_769}>
            <Text style={styles.Text_I1218_824_361_769}>View more</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1218_825} />
      <View style={styles.View_1218_826} />
      <View style={styles.View_1218_827}>
        <View style={styles.View_1218_828}>
          <View style={styles.View_I1218_828_361_1198} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d4f/e3dc/e4b4044705e440d94ecbc3bc7fb474a0"
            }}
            style={styles.ImageBackground_I1218_828_361_1199}
          />
        </View>
        <View style={styles.View_1218_829}>
          <View style={styles.View_I1218_829_361_1200} />
          <View style={styles.View_I1218_829_361_1201}>
            <Text style={styles.Text_I1218_829_361_1201}>AUD/USD</Text>
          </View>
          <View style={styles.View_I1218_829_361_1202}>
            <Text style={styles.Text_I1218_829_361_1202}>
              Description little bit or more information.
            </Text>
          </View>
          <View style={styles.View_I1218_829_361_1203}>
            <Text style={styles.Text_I1218_829_361_1203}>-120.00</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7f5/4255/cbbfc7b2f75c1e08c61e8767d78892ad"
            }}
            style={styles.ImageBackground_I1218_829_361_1204}
          />
        </View>
        <View style={styles.View_1218_830}>
          <View style={styles.View_I1218_830_361_1206} />
          <View style={styles.View_I1218_830_361_1207}>
            <Text style={styles.Text_I1218_830_361_1207}>AUD/USD</Text>
          </View>
          <View style={styles.View_I1218_830_361_1208}>
            <Text style={styles.Text_I1218_830_361_1208}>+2150.50</Text>
          </View>
          <View style={styles.View_I1218_830_361_1209}>
            <Text style={styles.Text_I1218_830_361_1209}>
              Description little bit or more information.
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ade/95e3/84ee92b177fab9d1bfc4d5ff9f10039b"
            }}
            style={styles.ImageBackground_I1218_830_361_1210}
          />
        </View>
      </View>
      <View style={styles.View_1218_831}>
        <View style={styles.View_1218_832} />
        <View style={styles.View_1218_833} />
        <View style={styles.View_1218_834} />
        <View style={styles.View_1218_835}>
          <Text style={styles.Text_1218_835}>Course Title</Text>
        </View>
        <View style={styles.View_1218_836}>
          <Text style={styles.Text_1218_836}>
            Course description little bit or more information.....
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b66/0ab5/80d5a388d8c482f56a9dec6baac866b9"
          }}
          style={styles.ImageBackground_1218_837}
        />
      </View>
      <View style={styles.View_1218_841}>
        <View style={styles.View_1218_842} />
        <View style={styles.View_1218_843} />
        <View style={styles.View_1218_844} />
        <View style={styles.View_1218_845}>
          <Text style={styles.Text_1218_845}>Course Title</Text>
        </View>
        <View style={styles.View_1218_846}>
          <Text style={styles.Text_1218_846}>
            Course description little bit or more information.....
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b66/0ab5/80d5a388d8c482f56a9dec6baac866b9"
          }}
          style={styles.ImageBackground_1218_847}
        />
      </View>
      <View style={styles.View_1218_1366} />
      <View style={styles.View_1218_851}>
        <View style={styles.View_1218_852}>
          <View style={styles.View_1218_853} />
        </View>
        <View style={styles.View_1218_854}>
          <View style={styles.View_1218_855} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a23f/273e/243f09830efb80ee0b6857024c6b4dc6"
            }}
            style={styles.ImageBackground_1218_856}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/226d/19e4/7f660071bb66d8fd32b931bae758b087"
          }}
          style={styles.ImageBackground_1218_857}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9696/e12b/1609bcd09b18f1c944c65fbae12d1901"
          }}
          style={styles.ImageBackground_1218_858}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9b3/ca1b/c5ba92b0573b38c995864832a6a46fd2"
          }}
          style={styles.ImageBackground_1218_859}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/046c/e867/5acaa4d493f2eea22a452ae3450cb556"
          }}
          style={styles.ImageBackground_1218_860}
        />
      </View>
      <View style={styles.View_1218_861} />
      <View style={styles.View_1218_862}>
        <View style={styles.View_1218_863} />
        <View style={styles.View_1218_864}>
          <Text style={styles.Text_1218_864}>Welcome, Akshay!</Text>
        </View>
      </View>
      <View style={styles.View_1218_865}>
        <View style={styles.View_1218_866}>
          <View style={styles.View_1218_867} />
        </View>
        <View style={styles.View_1218_868}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67ce/4bb5/25857e0c713544668f524a4f7518b7bf"
            }}
            style={styles.ImageBackground_1218_869}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b36/25b2/ac6e400dbb11832bb84ee7a55991e78a"
            }}
            style={styles.ImageBackground_1218_870}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd54/a89d/5c3e97121a2f09ff13af4ad16165123d"
            }}
            style={styles.ImageBackground_1218_873}
          />
        </View>
        <View style={styles.View_1218_876}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df7c/8f9e/6b781ac7185e888cbb03df7c0b8e641d"
            }}
            style={styles.ImageBackground_1218_877}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e34/dccc/c33348fd5ec8f061c70eebc077658044"
            }}
            style={styles.ImageBackground_1218_878}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2c3/fe86/287ca379da875d4826f8b415c6ada88f"
            }}
            style={styles.ImageBackground_1218_881}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3801/24d6/79ed7859c987f019895939c9f545b1fa"
          }}
          style={styles.ImageBackground_1218_885}
        />
      </View>
      <View source={{ uri: "null" }} style={styles.View_1218_886} />
      <View style={styles.View_1218_887}>
        <View style={styles.View_1218_888} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3452/5cd6/132f3a9542380ee997d9c29f0b8c569a"
          }}
          style={styles.ImageBackground_1218_889}
        />
      </View>
      <View style={styles.View_1218_890} />
      <View style={styles.View_1218_891}>
        <View style={styles.View_1218_892}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/648d/dc2f/e0df73c23d04bf6e6a93e172e24c0b41"
            }}
            style={styles.ImageBackground_1218_893}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f65/072b/18de0e53cf055d1527886b2e7c98c33f"
            }}
            style={styles.ImageBackground_1218_894}
          />
          <View style={styles.View_1218_895}>
            <Text style={styles.Text_1218_895}>1</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27a3/ff70/9d8d72eaee2e6f017810ccb65aa029d7"
        }}
        style={styles.ImageBackground_1218_896}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3452/5cd6/132f3a9542380ee997d9c29f0b8c569a"
        }}
        style={styles.ImageBackground_1218_897}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f917/caa1/f26035c56e049dcd68f43f6d818f081b"
        }}
        style={styles.ImageBackground_1218_898}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71f0/c86c/0af612749e53085d977792d53ac573ab"
        }}
        style={styles.ImageBackground_1218_899}
      />
      <View style={styles.View_1218_900}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/723e/987c/95c95c9750c12b91881167657a64202e"
          }}
          style={styles.ImageBackground_1218_901}
        />
      </View>
      <View style={styles.View_1218_1003} />
      <View style={styles.View_1218_928} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a296/f949/97e778734c757ce10e3cc7308e49fd40"
        }}
        style={styles.ImageBackground_1218_929}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3308/4ba2/18116bee2d560694386663551d2ef41d"
        }}
        style={styles.ImageBackground_1218_930}
      />
      <View style={styles.View_1218_931}>
        <Text style={styles.Text_1218_931}>Forex Pair</Text>
      </View>
      <View style={styles.View_1218_932}>
        <Text style={styles.Text_1218_932}>Crypto</Text>
      </View>
      <View style={styles.View_1218_933}>
        <Text style={styles.Text_1218_933}>Metals</Text>
      </View>
      <View style={styles.View_1218_934}>
        <View style={styles.View_1218_935} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8063/df73/f0388e2d3a458e6260b03eb4bccd7158"
          }}
          style={styles.ImageBackground_1218_936}
        />
        <View style={styles.View_1218_939}>
          <Text style={styles.Text_1218_939}>Search</Text>
        </View>
      </View>
      <View style={styles.View_1218_941} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0e7/0d25/2f5a445b22c5e15529ce14813bb700ee"
        }}
        style={styles.ImageBackground_1218_942}
      />
      <View style={styles.View_1218_945}>
        <View style={styles.View_1218_946}>
          <Text style={styles.Text_1218_946}>AUD/USD</Text>
        </View>
        <View style={styles.View_1218_947}>
          <Text style={styles.Text_1218_947}>0.53 Cents</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/113b/9b5c/e6127955dedfd6b9260a7c439d03c8e9"
        }}
        style={styles.ImageBackground_1218_948}
      />
      <View style={styles.View_1218_950} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0e7/0d25/2f5a445b22c5e15529ce14813bb700ee"
        }}
        style={styles.ImageBackground_1218_951}
      />
      <View style={styles.View_1218_954}>
        <View style={styles.View_1218_955}>
          <Text style={styles.Text_1218_955}>AUD/USD</Text>
        </View>
        <View style={styles.View_1218_956}>
          <Text style={styles.Text_1218_956}>0.53 Cents</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/113b/9b5c/e6127955dedfd6b9260a7c439d03c8e9"
        }}
        style={styles.ImageBackground_1218_957}
      />
      <View style={styles.View_1218_959} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0e7/0d25/2f5a445b22c5e15529ce14813bb700ee"
        }}
        style={styles.ImageBackground_1218_960}
      />
      <View style={styles.View_1218_963}>
        <View style={styles.View_1218_964}>
          <Text style={styles.Text_1218_964}>AUD/USD</Text>
        </View>
        <View style={styles.View_1218_965}>
          <Text style={styles.Text_1218_965}>0.53 Cents</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/113b/9b5c/e6127955dedfd6b9260a7c439d03c8e9"
        }}
        style={styles.ImageBackground_1218_966}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/113b/9b5c/e6127955dedfd6b9260a7c439d03c8e9"
        }}
        style={styles.ImageBackground_1218_967}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/113b/9b5c/e6127955dedfd6b9260a7c439d03c8e9"
        }}
        style={styles.ImageBackground_1218_968}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/113b/9b5c/e6127955dedfd6b9260a7c439d03c8e9"
        }}
        style={styles.ImageBackground_1218_969}
      />
      <View style={styles.View_1218_970}>
        <View style={styles.View_1218_971} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0e7/0d25/2f5a445b22c5e15529ce14813bb700ee"
          }}
          style={styles.ImageBackground_1218_972}
        />
      </View>
      <View style={styles.View_1218_975}>
        <View style={styles.View_1218_976}>
          <Text style={styles.Text_1218_976}>AUD/USD</Text>
        </View>
        <View style={styles.View_1218_977}>
          <Text style={styles.Text_1218_977}>0.53 Cents</Text>
        </View>
      </View>
      <View style={styles.View_1218_978}>
        <View style={styles.View_1218_979} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0e7/0d25/2f5a445b22c5e15529ce14813bb700ee"
          }}
          style={styles.ImageBackground_1218_980}
        />
      </View>
      <View style={styles.View_1218_983}>
        <View style={styles.View_1218_984}>
          <Text style={styles.Text_1218_984}>AUD/USD</Text>
        </View>
        <View style={styles.View_1218_985}>
          <Text style={styles.Text_1218_985}>0.53 Cents</Text>
        </View>
      </View>
      <View style={styles.View_1218_986}>
        <View style={styles.View_1218_987} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0e7/0d25/2f5a445b22c5e15529ce14813bb700ee"
          }}
          style={styles.ImageBackground_1218_988}
        />
      </View>
      <View style={styles.View_1218_991}>
        <View style={styles.View_1218_992}>
          <Text style={styles.Text_1218_992}>AUD/USD</Text>
        </View>
        <View style={styles.View_1218_993}>
          <Text style={styles.Text_1218_993}>0.53 Cents</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/113b/9b5c/e6127955dedfd6b9260a7c439d03c8e9"
        }}
        style={styles.ImageBackground_1218_994}
      />
      <View style={styles.View_1218_995}>
        <View style={styles.View_1218_996} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0e7/0d25/2f5a445b22c5e15529ce14813bb700ee"
          }}
          style={styles.ImageBackground_1218_997}
        />
      </View>
      <View style={styles.View_1218_1000}>
        <View style={styles.View_1218_1001}>
          <Text style={styles.Text_1218_1001}>AUD/USD</Text>
        </View>
        <View style={styles.View_1218_1002}>
          <Text style={styles.Text_1218_1002}>0.53 Cents</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_1218_800: {
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
  View_1218_801: {
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
  View_1218_802: {
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
  View_1218_803: {
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
  View_1218_804: {
    width: wp("32.77777777777778%"),
    minWidth: wp("32.77777777777778%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.61111111111111%"),
    top: hp("38.79781420765027%")
  },
  Text_1218_804: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_805: {
    width: wp("32.77777777777778%"),
    minWidth: wp("32.77777777777778%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.61111111111111%"),
    top: hp("59.56284153005464%")
  },
  Text_1218_805: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_806: {
    width: wp("32.77777777777778%"),
    minWidth: wp("32.77777777777778%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.61111111111111%"),
    top: hp("49.18032786885246%")
  },
  Text_1218_806: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_807: {
    width: wp("16.11111111111111%"),
    minWidth: wp("16.11111111111111%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.61111111111111%"),
    top: hp("41.66666666666667%")
  },
  Text_1218_807: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_808: {
    width: wp("16.11111111111111%"),
    minWidth: wp("16.11111111111111%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.61111111111111%"),
    top: hp("62.431693989071036%")
  },
  Text_1218_808: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_809: {
    width: wp("16.11111111111111%"),
    minWidth: wp("16.11111111111111%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.61111111111111%"),
    top: hp("52.04918032786885%")
  },
  Text_1218_809: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_810: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.5%"),
    top: hp("41.66666666666667%")
  },
  Text_1218_810: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_811: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.5%"),
    top: hp("62.431693989071036%")
  },
  Text_1218_811: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1218_812: {
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
  ImageBackground_1218_813: {
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
  View_1218_814: {
    width: wp("10.833333333333334%"),
    minWidth: wp("10.833333333333334%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.61111111111111%"),
    top: hp("52.04918032786885%")
  },
  Text_1218_814: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1218_815: {
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
  View_1218_816: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("69.67213114754098%")
  },
  Text_1218_816: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_817: {
    width: wp("12.777777777777777%"),
    minWidth: wp("12.777777777777777%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("76.50273224043715%")
  },
  Text_1218_817: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1218_818: {
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
  View_1218_819: {
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
  View_1218_820: {
    width: wp("10.277777777777777%"),
    minWidth: wp("10.277777777777777%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.277777777777778%"),
    top: hp("112.56830601092895%")
  },
  Text_1218_820: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_821: {
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
  View_1218_822: {
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
  View_I1218_822_361_758: {
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
  ImageBackground_I1218_822_361_759: {
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
  View_I1218_822_361_760: {
    flexGrow: 1,
    width: wp("36.26477559407552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527777%"),
    top: hp("17.622950819672127%")
  },
  Text_I1218_822_361_760: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1218_822_361_761: {
    flexGrow: 1,
    width: wp("39.64538998074002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527777%"),
    top: hp("20.77116419057377%")
  },
  Text_I1218_822_361_761: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_823: {
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
  View_I1218_823_361_763: {
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
  ImageBackground_I1218_823_361_764: {
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
  View_I1218_823_361_765: {
    flexGrow: 1,
    width: wp("36.26477559407552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527715%"),
    top: hp("17.622950819672127%")
  },
  Text_I1218_823_361_765: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1218_823_361_766: {
    flexGrow: 1,
    width: wp("39.64538998074002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527715%"),
    top: hp("20.77116419057377%")
  },
  Text_I1218_823_361_766: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_824: {
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
  View_I1218_824_361_768: {
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
  View_I1218_824_361_769: {
    flexGrow: 1,
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.444444444444443%"),
    top: hp("7.377049180327873%")
  },
  Text_I1218_824_361_769: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_825: {
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
  View_1218_826: {
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
  View_1218_827: {
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
  View_1218_828: {
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
  View_I1218_828_361_1198: {
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
  ImageBackground_I1218_828_361_1199: {
    flexGrow: 1,
    width: wp("11.38888888888889%"),
    height: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.722222222222214%"),
    top: hp("4.78142076502732%")
  },
  View_1218_829: {
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
  View_I1218_829_361_1200: {
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
  View_I1218_829_361_1201: {
    flexGrow: 1,
    width: wp("32.77777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("10.928961748633881%")
  },
  Text_I1218_829_361_1201: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1218_829_361_1202: {
    flexGrow: 1,
    width: wp("32.77777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("13.661202185792348%")
  },
  Text_I1218_829_361_1202: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1218_829_361_1203: {
    flexGrow: 1,
    width: wp("10.277777777777777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("7.513661202185794%")
  },
  Text_I1218_829_361_1203: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1218_829_361_1204: {
    flexGrow: 1,
    width: wp("30.833333333333336%"),
    height: hp("5.491209811851626%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9166666666666643%"),
    top: hp("1.5691705088797825%")
  },
  View_1218_830: {
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
  View_I1218_830_361_1206: {
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
  View_I1218_830_361_1207: {
    flexGrow: 1,
    width: wp("32.77777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4999999999999996%"),
    top: hp("10.928961748633881%")
  },
  Text_I1218_830_361_1207: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1218_830_361_1208: {
    flexGrow: 1,
    width: wp("12.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4999999999999996%"),
    top: hp("7.6502732240437155%")
  },
  Text_I1218_830_361_1208: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1218_830_361_1209: {
    flexGrow: 1,
    width: wp("32.77777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4999999999999996%"),
    top: hp("13.661202185792348%")
  },
  Text_I1218_830_361_1209: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1218_830_361_1210: {
    flexGrow: 1,
    width: wp("31.38888888888889%"),
    height: hp("3.6020419636710743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: hp("2.5956284153005456%")
  },
  View_1218_831: {
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
  View_1218_832: {
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
  View_1218_833: {
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
  View_1218_834: {
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
  View_1218_835: {
    width: wp("36.26477983262804%"),
    top: hp("17.091578082308743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527777%")
  },
  Text_1218_835: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_836: {
    width: wp("39.645394219292534%"),
    top: hp("20.443375384221284%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527777%")
  },
  Text_1218_836: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1218_837: {
    width: wp("4.889918433295356%"),
    height: hp("3.3071882737790297%"),
    top: hp("10.661074112021836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.03553602430555%")
  },
  View_1218_841: {
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
  View_1218_842: {
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
  View_1218_843: {
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
  View_1218_844: {
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
  View_1218_845: {
    width: wp("36.26477983262804%"),
    top: hp("17.091578082308743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527786%")
  },
  Text_1218_845: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_846: {
    width: wp("39.645394219292534%"),
    top: hp("20.443375384221284%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439398871527786%")
  },
  Text_1218_846: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1218_847: {
    width: wp("4.889918433295356%"),
    height: hp("3.3071882737790297%"),
    top: hp("10.661074112021836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.03553602430554%")
  },
  View_1218_1366: {
    width: wp("31.38888888888889%"),
    minWidth: wp("31.38888888888889%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.166666666666664%"),
    top: hp("11.475409836065573%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1218_851: {
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
  View_1218_852: {
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
  View_1218_853: {
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
  View_1218_854: {
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
  View_1218_855: {
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
  ImageBackground_1218_856: {
    width: wp("9.95371182759603%"),
    height: hp("4.895269675332992%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.44444444444445%")
  },
  ImageBackground_1218_857: {
    width: wp("7.38425890604655%"),
    height: hp("3.243410391885726%"),
    top: hp("4.867870560109296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.335693359375%")
  },
  ImageBackground_1218_858: {
    width: wp("5.555555555555555%"),
    height: hp("3.0054644808743167%"),
    top: hp("5.191256830601105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.44444444444444%")
  },
  ImageBackground_1218_859: {
    width: wp("4.444444444444445%"),
    height: hp("3.0054644808743167%"),
    top: hp("5.191256830601105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.11111111111111%")
  },
  ImageBackground_1218_860: {
    width: wp("5.4166740841335725%"),
    height: hp("2.959927313966178%"),
    top: hp("5.077457949112031%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.180555555555554%")
  },
  View_1218_861: {
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
  View_1218_862: {
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
  View_1218_863: {
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
  View_1218_864: {
    width: wp("46.38888888888889%"),
    minWidth: wp("46.38888888888889%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2.5956284153005464%")
  },
  Text_1218_864: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_865: {
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
  View_1218_866: {
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
  View_1218_867: {
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
  View_1218_868: {
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
  ImageBackground_1218_869: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1218_870: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1218_873: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1218_876: {
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
  ImageBackground_1218_877: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1218_878: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1218_881: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1218_885: {
    width: wp("8.685709635416666%"),
    minWidth: wp("8.685709635416666%"),
    height: hp("1.2972805669398906%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.888888888888889%"),
    top: hp("1.0424671277322404%")
  },
  View_1218_886: {
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
  View_1218_887: {
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
  View_1218_888: {
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
  ImageBackground_1218_889: {
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
  View_1218_890: {
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
  View_1218_891: {
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
  View_1218_892: {
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
  ImageBackground_1218_893: {
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
  ImageBackground_1218_894: {
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
  View_1218_895: {
    width: wp("1.3020833333333335%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%")
  },
  Text_1218_895: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1218_896: {
    width: wp("6.111111111111111%"),
    height: hp("2.0491803278688523%"),
    top: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.55555555555556%")
  },
  ImageBackground_1218_897: {
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
  ImageBackground_1218_898: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.1044921875%"),
    top: hp("4.72352074795082%")
  },
  ImageBackground_1218_899: {
    width: wp("1.1111111111111112%"),
    minWidth: wp("1.1111111111111112%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.21560329861111%"),
    top: hp("5.269968835382514%")
  },
  View_1218_900: {
    width: wp("6.0763894187079535%"),
    height: hp("2.6895502225948813%"),
    top: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.55555555555556%")
  },
  ImageBackground_1218_901: {
    width: wp("6.0763894187079535%"),
    height: hp("2.6895502225948813%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1218_1003: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("84.15300546448088%"),
    minHeight: hp("84.15300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.1420765027322406%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.699999988079071
  },
  View_1218_928: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("76.50273224043715%"),
    minHeight: hp("76.50273224043715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.92896174863388%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_1218_929: {
    width: wp("23.333333333333332%"),
    minWidth: wp("23.333333333333332%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.333333333333336%"),
    top: hp("14.48087431693989%")
  },
  ImageBackground_1218_930: {
    width: wp("27.77777777777778%"),
    minWidth: wp("27.77777777777778%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("21.44808743169399%")
  },
  View_1218_931: {
    width: wp("18.88888888888889%"),
    top: hp("17.92397420914447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.61111111111111%")
  },
  Text_1218_931: {
    color: "rgba(15, 114, 231, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_932: {
    width: wp("13.333333333333334%"),
    top: hp("17.92397420914447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.333333333333336%")
  },
  Text_1218_932: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_933: {
    width: wp("13.055555555555557%"),
    top: hp("17.92397420914447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.5%")
  },
  Text_1218_933: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_934: {
    width: wp("90.27777777777779%"),
    minWidth: wp("90.27777777777779%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.722222222222222%"),
    top: hp("24.726775956284154%")
  },
  View_1218_935: {
    width: wp("90.27777777777779%"),
    minWidth: wp("90.27777777777779%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(101, 109, 115, 1)",
    borderColor: "rgba(101, 109, 115, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  ImageBackground_1218_936: {
    width: wp("6.111111111111111%"),
    height: hp("3.0054644808743167%"),
    top: hp("1.0928961748633874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888888888888884%")
  },
  View_1218_939: {
    width: wp("13.88888888888889%"),
    minWidth: wp("13.88888888888889%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.88888888888889%"),
    top: hp("1.639344262295083%")
  },
  Text_1218_939: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_941: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.88888888888889%"),
    top: hp("33.33333333333333%"),
    backgroundColor: "rgba(15, 114, 231, 1)",
    borderColor: "rgba(15, 114, 231, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  ImageBackground_1218_942: {
    width: wp("3.9057238896687823%"),
    minWidth: wp("3.9057238896687823%"),
    height: hp("1.9208478145912045%"),
    minHeight: hp("1.9208478145912045%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.08588324652777%"),
    top: hp("34.41368895150273%")
  },
  View_1218_945: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.055555555555555%"),
    top: hp("33.19672131147541%")
  },
  View_1218_946: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1218_946: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_947: {
    width: wp("14.722222222222223%"),
    minWidth: wp("14.722222222222223%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.4590163934426243%")
  },
  Text_1218_947: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1218_948: {
    width: wp("90.55555555555556%"),
    minWidth: wp("90.55555555555556%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.722222222222222%"),
    top: hp("39.48087431693989%")
  },
  View_1218_950: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.88888888888889%"),
    top: hp("41.2568306010929%"),
    backgroundColor: "rgba(15, 114, 231, 1)",
    borderColor: "rgba(15, 114, 231, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  ImageBackground_1218_951: {
    width: wp("3.9057238896687823%"),
    minWidth: wp("3.9057238896687823%"),
    height: hp("1.9208478145912045%"),
    minHeight: hp("1.9208478145912045%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.08588324652777%"),
    top: hp("42.33718621926229%")
  },
  View_1218_954: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.055555555555555%"),
    top: hp("41.12021857923497%")
  },
  View_1218_955: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1218_955: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_956: {
    width: wp("14.722222222222223%"),
    minWidth: wp("14.722222222222223%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.4590163934426243%")
  },
  Text_1218_956: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1218_957: {
    width: wp("90.55555555555556%"),
    minWidth: wp("90.55555555555556%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.722222222222222%"),
    top: hp("47.404371584699454%")
  },
  View_1218_959: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.88888888888889%"),
    top: hp("49.18032786885246%"),
    backgroundColor: "rgba(15, 114, 231, 1)",
    borderColor: "rgba(15, 114, 231, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  ImageBackground_1218_960: {
    width: wp("3.9057238896687823%"),
    minWidth: wp("3.9057238896687823%"),
    height: hp("1.9208478145912045%"),
    minHeight: hp("1.9208478145912045%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.08588324652777%"),
    top: hp("50.260683487021865%")
  },
  View_1218_963: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.055555555555555%"),
    top: hp("49.04371584699454%")
  },
  View_1218_964: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1218_964: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_965: {
    width: wp("14.722222222222223%"),
    minWidth: wp("14.722222222222223%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.4590163934426172%")
  },
  Text_1218_965: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1218_966: {
    width: wp("90.55555555555556%"),
    minWidth: wp("90.55555555555556%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.722222222222222%"),
    top: hp("55.32786885245902%")
  },
  ImageBackground_1218_967: {
    width: wp("90.55555555555556%"),
    minWidth: wp("90.55555555555556%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.722222222222222%"),
    top: hp("63.25136612021858%")
  },
  ImageBackground_1218_968: {
    width: wp("90.55555555555556%"),
    minWidth: wp("90.55555555555556%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.722222222222222%"),
    top: hp("71.17486338797814%")
  },
  ImageBackground_1218_969: {
    width: wp("90.55555555555556%"),
    minWidth: wp("90.55555555555556%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.722222222222222%"),
    top: hp("87.02185792349727%")
  },
  View_1218_970: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.88888888888889%"),
    top: hp("57.103825136612016%")
  },
  View_1218_971: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(15, 114, 231, 1)",
    borderColor: "rgba(15, 114, 231, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  ImageBackground_1218_972: {
    width: wp("3.9057238896687823%"),
    minWidth: wp("3.9057238896687823%"),
    height: hp("1.9208478145912045%"),
    minHeight: hp("1.9208478145912045%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1969943576388857%"),
    top: hp("1.0803556181694063%")
  },
  View_1218_975: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.055555555555555%"),
    top: hp("56.9672131147541%")
  },
  View_1218_976: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1218_976: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_977: {
    width: wp("14.722222222222223%"),
    minWidth: wp("14.722222222222223%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.4590163934426243%")
  },
  Text_1218_977: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_978: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.88888888888889%"),
    top: hp("65.02732240437157%")
  },
  View_1218_979: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(15, 114, 231, 1)",
    borderColor: "rgba(15, 114, 231, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  ImageBackground_1218_980: {
    width: wp("3.9057238896687823%"),
    minWidth: wp("3.9057238896687823%"),
    height: hp("1.9208478145912045%"),
    minHeight: hp("1.9208478145912045%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1969943576388857%"),
    top: hp("1.0803556181694063%")
  },
  View_1218_983: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.055555555555555%"),
    top: hp("64.89071038251366%")
  },
  View_1218_984: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1218_984: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_985: {
    width: wp("14.722222222222223%"),
    minWidth: wp("14.722222222222223%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.4590163934426243%")
  },
  Text_1218_985: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_986: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.88888888888889%"),
    top: hp("72.95081967213115%")
  },
  View_1218_987: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(15, 114, 231, 1)",
    borderColor: "rgba(15, 114, 231, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  ImageBackground_1218_988: {
    width: wp("3.9057238896687823%"),
    minWidth: wp("3.9057238896687823%"),
    height: hp("1.9208478145912045%"),
    minHeight: hp("1.9208478145912045%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1969943576388857%"),
    top: hp("1.080355618169392%")
  },
  View_1218_991: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.055555555555555%"),
    top: hp("72.81420765027322%")
  },
  View_1218_992: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1218_992: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_993: {
    width: wp("14.722222222222223%"),
    minWidth: wp("14.722222222222223%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.4590163934426243%")
  },
  Text_1218_993: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1218_994: {
    width: wp("90.55555555555556%"),
    minWidth: wp("90.55555555555556%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.722222222222222%"),
    top: hp("79.09836065573771%")
  },
  View_1218_995: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.88888888888889%"),
    top: hp("80.87431693989072%")
  },
  View_1218_996: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(15, 114, 231, 1)",
    borderColor: "rgba(15, 114, 231, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  ImageBackground_1218_997: {
    width: wp("3.9057238896687823%"),
    minWidth: wp("3.9057238896687823%"),
    height: hp("1.9208478145912045%"),
    minHeight: hp("1.9208478145912045%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1969943576388857%"),
    top: hp("1.080355618169392%")
  },
  View_1218_1000: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.055555555555555%"),
    top: hp("80.73770491803278%")
  },
  View_1218_1001: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1218_1001: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_1002: {
    width: wp("14.722222222222223%"),
    minWidth: wp("14.722222222222223%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.4590163934426386%")
  },
  Text_1218_1002: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
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
