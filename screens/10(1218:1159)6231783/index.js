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
        style={styles.ImageBackground_1218_1162}
      />
      <View style={styles.View_1218_1163} />
      <View style={styles.View_1218_1164} />
      <View style={styles.View_1218_1165} />
      <View style={styles.View_1218_1166}>
        <Text style={styles.Text_1218_1166}>AUD/USD</Text>
      </View>
      <View style={styles.View_1218_1167}>
        <Text style={styles.Text_1218_1167}>AUD/USD</Text>
      </View>
      <View style={styles.View_1218_1168}>
        <Text style={styles.Text_1218_1168}>AUD/USD</Text>
      </View>
      <View style={styles.View_1218_1169}>
        <Text style={styles.Text_1218_1169}>0.53 Cents</Text>
      </View>
      <View style={styles.View_1218_1170}>
        <Text style={styles.Text_1218_1170}>0.53 Cents</Text>
      </View>
      <View style={styles.View_1218_1171}>
        <Text style={styles.Text_1218_1171}>0.53 Cents</Text>
      </View>
      <View style={styles.View_1218_1172}>
        <Text style={styles.Text_1218_1172}>+2150.01</Text>
      </View>
      <View style={styles.View_1218_1173}>
        <Text style={styles.Text_1218_1173}>+2150.01</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa1a/b55b/94ba7694b651d98f8749e4c36eccc6de"
        }}
        style={styles.ImageBackground_1218_1174}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa1a/b55b/94ba7694b651d98f8749e4c36eccc6de"
        }}
        style={styles.ImageBackground_1218_1175}
      />
      <View style={styles.View_1218_1176}>
        <Text style={styles.Text_1218_1176}>-452.30</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f98a/d53e/22fdcd099ed88eeb39e9f93afae444b5"
        }}
        style={styles.ImageBackground_1218_1177}
      />
      <View style={styles.View_1218_1178}>
        <Text style={styles.Text_1218_1178}>Courses</Text>
      </View>
      <View style={styles.View_1218_1179}>
        <Text style={styles.Text_1218_1179}>Video</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b44/07db/0989446b1fb50ff5b8f0539f7537b064"
        }}
        style={styles.ImageBackground_1218_1180}
      />
      <View style={styles.View_1218_1181} />
      <View style={styles.View_1218_1182}>
        <Text style={styles.Text_1218_1182}>PDFs</Text>
      </View>
      <View style={styles.View_1218_1183}>
        <View style={styles.View_1218_1184}>
          <View style={styles.View_I1218_1184_361_758} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5607/1a17/8153b172e3e38f45150688de65b9edb9"
            }}
            style={styles.ImageBackground_I1218_1184_361_759}
          />
          <View style={styles.View_I1218_1184_361_760}>
            <Text style={styles.Text_I1218_1184_361_760}>Course Title</Text>
          </View>
          <View style={styles.View_I1218_1184_361_761}>
            <Text style={styles.Text_I1218_1184_361_761}>
              Course description little bit or more information.....
            </Text>
          </View>
        </View>
        <View style={styles.View_1218_1185}>
          <View style={styles.View_I1218_1185_361_763} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5607/1a17/8153b172e3e38f45150688de65b9edb9"
            }}
            style={styles.ImageBackground_I1218_1185_361_764}
          />
          <View style={styles.View_I1218_1185_361_765}>
            <Text style={styles.Text_I1218_1185_361_765}>Course Title</Text>
          </View>
          <View style={styles.View_I1218_1185_361_766}>
            <Text style={styles.Text_I1218_1185_361_766}>
              Course description little bit or more information.....
            </Text>
          </View>
        </View>
        <View style={styles.View_1218_1186}>
          <View style={styles.View_I1218_1186_361_768} />
          <View style={styles.View_I1218_1186_361_769}>
            <Text style={styles.Text_I1218_1186_361_769}>View more</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1218_1187} />
      <View style={styles.View_1218_1188} />
      <View style={styles.View_1218_1189}>
        <View style={styles.View_1218_1190}>
          <View style={styles.View_I1218_1190_361_1198} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d4f/e3dc/e4b4044705e440d94ecbc3bc7fb474a0"
            }}
            style={styles.ImageBackground_I1218_1190_361_1199}
          />
        </View>
        <View style={styles.View_1218_1191}>
          <View style={styles.View_I1218_1191_361_1200} />
          <View style={styles.View_I1218_1191_361_1201}>
            <Text style={styles.Text_I1218_1191_361_1201}>AUD/USD</Text>
          </View>
          <View style={styles.View_I1218_1191_361_1202}>
            <Text style={styles.Text_I1218_1191_361_1202}>
              Description little bit or more information.
            </Text>
          </View>
          <View style={styles.View_I1218_1191_361_1203}>
            <Text style={styles.Text_I1218_1191_361_1203}>-120.00</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7f5/4255/cbbfc7b2f75c1e08c61e8767d78892ad"
            }}
            style={styles.ImageBackground_I1218_1191_361_1204}
          />
        </View>
        <View style={styles.View_1218_1192}>
          <View style={styles.View_I1218_1192_361_1206} />
          <View style={styles.View_I1218_1192_361_1207}>
            <Text style={styles.Text_I1218_1192_361_1207}>AUD/USD</Text>
          </View>
          <View style={styles.View_I1218_1192_361_1208}>
            <Text style={styles.Text_I1218_1192_361_1208}>+2150.50</Text>
          </View>
          <View style={styles.View_I1218_1192_361_1209}>
            <Text style={styles.Text_I1218_1192_361_1209}>
              Description little bit or more information.
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1e3/de09/b278cc095fb336ef4dd3f051eb5bf8d0"
            }}
            style={styles.ImageBackground_I1218_1192_361_1210}
          />
        </View>
      </View>
      <View style={styles.View_1218_1193}>
        <View style={styles.View_1218_1194} />
        <View style={styles.View_1218_1195} />
        <View style={styles.View_1218_1196} />
        <View style={styles.View_1218_1197}>
          <Text style={styles.Text_1218_1197}>Course Title</Text>
        </View>
        <View style={styles.View_1218_1198}>
          <Text style={styles.Text_1218_1198}>
            Course description little bit or more information.....
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b66/0ab5/80d5a388d8c482f56a9dec6baac866b9"
          }}
          style={styles.ImageBackground_1218_1199}
        />
      </View>
      <View style={styles.View_1218_1203}>
        <View style={styles.View_1218_1204} />
        <View style={styles.View_1218_1205} />
        <View style={styles.View_1218_1206} />
        <View style={styles.View_1218_1207}>
          <Text style={styles.Text_1218_1207}>Course Title</Text>
        </View>
        <View style={styles.View_1218_1208}>
          <Text style={styles.Text_1218_1208}>
            Course description little bit or more information.....
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b66/0ab5/80d5a388d8c482f56a9dec6baac866b9"
          }}
          style={styles.ImageBackground_1218_1209}
        />
      </View>
      <View style={styles.View_1218_1213}>
        <View style={styles.View_1218_1214}>
          <View style={styles.View_1218_1215} />
        </View>
        <View style={styles.View_1218_1216}>
          <View style={styles.View_1218_1217} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a23f/273e/243f09830efb80ee0b6857024c6b4dc6"
            }}
            style={styles.ImageBackground_1218_1218}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/226d/19e4/7f660071bb66d8fd32b931bae758b087"
          }}
          style={styles.ImageBackground_1218_1219}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9696/e12b/1609bcd09b18f1c944c65fbae12d1901"
          }}
          style={styles.ImageBackground_1218_1220}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9b3/ca1b/c5ba92b0573b38c995864832a6a46fd2"
          }}
          style={styles.ImageBackground_1218_1221}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/046c/e867/5acaa4d493f2eea22a452ae3450cb556"
          }}
          style={styles.ImageBackground_1218_1222}
        />
      </View>
      <View style={styles.View_1218_1223} />
      <View style={styles.View_1218_1224}>
        <View style={styles.View_1218_1225} />
        <View style={styles.View_1218_1226}>
          <Text style={styles.Text_1218_1226}>Welcome, Akshay!</Text>
        </View>
      </View>
      <View style={styles.View_1218_1227}>
        <View style={styles.View_1218_1228}>
          <View style={styles.View_1218_1229} />
        </View>
        <View style={styles.View_1218_1230}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67ce/4bb5/25857e0c713544668f524a4f7518b7bf"
            }}
            style={styles.ImageBackground_1218_1231}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b36/25b2/ac6e400dbb11832bb84ee7a55991e78a"
            }}
            style={styles.ImageBackground_1218_1232}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd54/a89d/5c3e97121a2f09ff13af4ad16165123d"
            }}
            style={styles.ImageBackground_1218_1235}
          />
        </View>
        <View style={styles.View_1218_1238}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df7c/8f9e/6b781ac7185e888cbb03df7c0b8e641d"
            }}
            style={styles.ImageBackground_1218_1239}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e34/dccc/c33348fd5ec8f061c70eebc077658044"
            }}
            style={styles.ImageBackground_1218_1240}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2c3/fe86/287ca379da875d4826f8b415c6ada88f"
            }}
            style={styles.ImageBackground_1218_1243}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3801/24d6/79ed7859c987f019895939c9f545b1fa"
          }}
          style={styles.ImageBackground_1218_1247}
        />
      </View>
      <View source={{ uri: "null" }} style={styles.View_1218_1248} />
      <View style={styles.View_1218_1249}>
        <View style={styles.View_1218_1250} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3452/5cd6/132f3a9542380ee997d9c29f0b8c569a"
          }}
          style={styles.ImageBackground_1218_1251}
        />
      </View>
      <View style={styles.View_1218_1252} />
      <View style={styles.View_1218_1253}>
        <View style={styles.View_1218_1254}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/648d/dc2f/e0df73c23d04bf6e6a93e172e24c0b41"
            }}
            style={styles.ImageBackground_1218_1255}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f65/072b/18de0e53cf055d1527886b2e7c98c33f"
            }}
            style={styles.ImageBackground_1218_1256}
          />
          <View style={styles.View_1218_1257}>
            <Text style={styles.Text_1218_1257}>1</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27a3/ff70/9d8d72eaee2e6f017810ccb65aa029d7"
        }}
        style={styles.ImageBackground_1218_1258}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3452/5cd6/132f3a9542380ee997d9c29f0b8c569a"
        }}
        style={styles.ImageBackground_1218_1259}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f917/caa1/f26035c56e049dcd68f43f6d818f081b"
        }}
        style={styles.ImageBackground_1218_1260}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71f0/c86c/0af612749e53085d977792d53ac573ab"
        }}
        style={styles.ImageBackground_1218_1261}
      />
      <View style={styles.View_1218_1262}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/723e/987c/95c95c9750c12b91881167657a64202e"
          }}
          style={styles.ImageBackground_1218_1263}
        />
      </View>
      <View style={styles.View_1218_1288}>
        <View style={styles.View_1218_1289} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a296/f949/97e778734c757ce10e3cc7308e49fd40"
          }}
          style={styles.ImageBackground_1218_1290}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3308/4ba2/18116bee2d560694386663551d2ef41d"
          }}
          style={styles.ImageBackground_1218_1291}
        />
        <View style={styles.View_1218_1292}>
          <Text style={styles.Text_1218_1292}>Forex Pair</Text>
        </View>
        <View style={styles.View_1218_1293}>
          <Text style={styles.Text_1218_1293}>Crypto</Text>
        </View>
        <View style={styles.View_1218_1294}>
          <Text style={styles.Text_1218_1294}>Metals</Text>
        </View>
        <View style={styles.View_1218_1295}>
          <View style={styles.View_1218_1296} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8063/df73/f0388e2d3a458e6260b03eb4bccd7158"
            }}
            style={styles.ImageBackground_1218_1297}
          />
          <View style={styles.View_1218_1300}>
            <Text style={styles.Text_1218_1300}>Search</Text>
          </View>
        </View>
        <View style={styles.View_1218_1301}>
          <View style={styles.View_1218_1302} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0e7/0d25/2f5a445b22c5e15529ce14813bb700ee"
            }}
            style={styles.ImageBackground_1218_1303}
          />
        </View>
        <View style={styles.View_1218_1306}>
          <View style={styles.View_1218_1307}>
            <Text style={styles.Text_1218_1307}>AUD/USD</Text>
          </View>
          <View style={styles.View_1218_1308}>
            <Text style={styles.Text_1218_1308}>0.53 Cents</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/113b/9b5c/e6127955dedfd6b9260a7c439d03c8e9"
          }}
          style={styles.ImageBackground_1218_1309}
        />
        <View style={styles.View_1218_1310}>
          <View style={styles.View_1218_1311} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0e7/0d25/2f5a445b22c5e15529ce14813bb700ee"
            }}
            style={styles.ImageBackground_1218_1312}
          />
        </View>
        <View style={styles.View_1218_1315}>
          <View style={styles.View_1218_1316}>
            <Text style={styles.Text_1218_1316}>AUD/USD</Text>
          </View>
          <View style={styles.View_1218_1317}>
            <Text style={styles.Text_1218_1317}>0.53 Cents</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/113b/9b5c/e6127955dedfd6b9260a7c439d03c8e9"
          }}
          style={styles.ImageBackground_1218_1318}
        />
        <View style={styles.View_1218_1319}>
          <View style={styles.View_1218_1320} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0e7/0d25/2f5a445b22c5e15529ce14813bb700ee"
            }}
            style={styles.ImageBackground_1218_1321}
          />
        </View>
        <View style={styles.View_1218_1324}>
          <View style={styles.View_1218_1325}>
            <Text style={styles.Text_1218_1325}>AUD/USD</Text>
          </View>
          <View style={styles.View_1218_1326}>
            <Text style={styles.Text_1218_1326}>0.53 Cents</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/113b/9b5c/e6127955dedfd6b9260a7c439d03c8e9"
          }}
          style={styles.ImageBackground_1218_1327}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/113b/9b5c/e6127955dedfd6b9260a7c439d03c8e9"
          }}
          style={styles.ImageBackground_1218_1328}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/113b/9b5c/e6127955dedfd6b9260a7c439d03c8e9"
          }}
          style={styles.ImageBackground_1218_1329}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/113b/9b5c/e6127955dedfd6b9260a7c439d03c8e9"
          }}
          style={styles.ImageBackground_1218_1330}
        />
        <View style={styles.View_1218_1331}>
          <View style={styles.View_1218_1332} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0e7/0d25/2f5a445b22c5e15529ce14813bb700ee"
            }}
            style={styles.ImageBackground_1218_1333}
          />
        </View>
        <View style={styles.View_1218_1336}>
          <View style={styles.View_1218_1337}>
            <Text style={styles.Text_1218_1337}>AUD/USD</Text>
          </View>
          <View style={styles.View_1218_1338}>
            <Text style={styles.Text_1218_1338}>0.53 Cents</Text>
          </View>
        </View>
        <View style={styles.View_1218_1339}>
          <View style={styles.View_1218_1340} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0e7/0d25/2f5a445b22c5e15529ce14813bb700ee"
            }}
            style={styles.ImageBackground_1218_1341}
          />
        </View>
        <View style={styles.View_1218_1344}>
          <View style={styles.View_1218_1345}>
            <Text style={styles.Text_1218_1345}>AUD/USD</Text>
          </View>
          <View style={styles.View_1218_1346}>
            <Text style={styles.Text_1218_1346}>0.53 Cents</Text>
          </View>
        </View>
        <View style={styles.View_1218_1347}>
          <View style={styles.View_1218_1348} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0e7/0d25/2f5a445b22c5e15529ce14813bb700ee"
            }}
            style={styles.ImageBackground_1218_1349}
          />
        </View>
        <View style={styles.View_1218_1352}>
          <View style={styles.View_1218_1353}>
            <Text style={styles.Text_1218_1353}>AUD/USD</Text>
          </View>
          <View style={styles.View_1218_1354}>
            <Text style={styles.Text_1218_1354}>0.53 Cents</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/113b/9b5c/e6127955dedfd6b9260a7c439d03c8e9"
          }}
          style={styles.ImageBackground_1218_1355}
        />
        <View style={styles.View_1218_1356}>
          <View style={styles.View_1218_1357} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0e7/0d25/2f5a445b22c5e15529ce14813bb700ee"
            }}
            style={styles.ImageBackground_1218_1358}
          />
        </View>
        <View style={styles.View_1218_1361}>
          <View style={styles.View_1218_1362}>
            <Text style={styles.Text_1218_1362}>AUD/USD</Text>
          </View>
          <View style={styles.View_1218_1363}>
            <Text style={styles.Text_1218_1363}>0.53 Cents</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_1218_1162: {
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
  View_1218_1163: {
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
  View_1218_1164: {
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
  View_1218_1165: {
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
  View_1218_1166: {
    width: wp("32.77777777777778%"),
    minWidth: wp("32.77777777777778%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.61111111111111%"),
    top: hp("38.79781420765027%")
  },
  Text_1218_1166: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_1167: {
    width: wp("32.77777777777778%"),
    minWidth: wp("32.77777777777778%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.61111111111111%"),
    top: hp("59.56284153005464%")
  },
  Text_1218_1167: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_1168: {
    width: wp("32.77777777777778%"),
    minWidth: wp("32.77777777777778%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.61111111111111%"),
    top: hp("49.18032786885246%")
  },
  Text_1218_1168: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_1169: {
    width: wp("16.11111111111111%"),
    minWidth: wp("16.11111111111111%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.61111111111111%"),
    top: hp("41.66666666666667%")
  },
  Text_1218_1169: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_1170: {
    width: wp("16.11111111111111%"),
    minWidth: wp("16.11111111111111%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.61111111111111%"),
    top: hp("62.431693989071036%")
  },
  Text_1218_1170: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_1171: {
    width: wp("16.11111111111111%"),
    minWidth: wp("16.11111111111111%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.61111111111111%"),
    top: hp("52.04918032786885%")
  },
  Text_1218_1171: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_1172: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.5%"),
    top: hp("41.66666666666667%")
  },
  Text_1218_1172: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_1173: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.5%"),
    top: hp("62.431693989071036%")
  },
  Text_1218_1173: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1218_1174: {
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
  ImageBackground_1218_1175: {
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
  View_1218_1176: {
    width: wp("10.833333333333334%"),
    minWidth: wp("10.833333333333334%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.61111111111111%"),
    top: hp("52.04918032786885%")
  },
  Text_1218_1176: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1218_1177: {
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
  View_1218_1178: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("69.67213114754098%")
  },
  Text_1218_1178: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_1179: {
    width: wp("12.777777777777777%"),
    minWidth: wp("12.777777777777777%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("76.50273224043715%")
  },
  Text_1218_1179: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1218_1180: {
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
  View_1218_1181: {
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
  View_1218_1182: {
    width: wp("10.277777777777777%"),
    minWidth: wp("10.277777777777777%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.277777777777778%"),
    top: hp("112.56830601092895%")
  },
  Text_1218_1182: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_1183: {
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
  View_1218_1184: {
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
  View_I1218_1184_361_758: {
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
  ImageBackground_I1218_1184_361_759: {
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
  View_I1218_1184_361_760: {
    flexGrow: 1,
    width: wp("36.26477559407552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.843973795572916%"),
    top: hp("17.622950819672127%")
  },
  Text_I1218_1184_361_760: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1218_1184_361_761: {
    flexGrow: 1,
    width: wp("39.64538998074002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.843973795572916%"),
    top: hp("20.77116419057377%")
  },
  Text_I1218_1184_361_761: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_1185: {
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
  View_I1218_1185_361_763: {
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
  ImageBackground_I1218_1185_361_764: {
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
  View_I1218_1185_361_765: {
    flexGrow: 1,
    width: wp("36.26477559407552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439737955729072%"),
    top: hp("17.622950819672127%")
  },
  Text_I1218_1185_361_765: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1218_1185_361_766: {
    flexGrow: 1,
    width: wp("39.64538998074002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439737955729072%"),
    top: hp("20.77116419057377%")
  },
  Text_I1218_1185_361_766: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_1186: {
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
  View_I1218_1186_361_768: {
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
  View_I1218_1186_361_769: {
    flexGrow: 1,
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.444444444444443%"),
    top: hp("7.377049180327873%")
  },
  Text_I1218_1186_361_769: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_1187: {
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
  View_1218_1188: {
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
  View_1218_1189: {
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
  View_1218_1190: {
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
  View_I1218_1190_361_1198: {
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
  ImageBackground_I1218_1190_361_1199: {
    flexGrow: 1,
    width: wp("11.38888888888889%"),
    height: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.722222222222214%"),
    top: hp("4.78142076502732%")
  },
  View_1218_1191: {
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
  View_I1218_1191_361_1200: {
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
  View_I1218_1191_361_1201: {
    flexGrow: 1,
    width: wp("32.77777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("10.928961748633881%")
  },
  Text_I1218_1191_361_1201: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1218_1191_361_1202: {
    flexGrow: 1,
    width: wp("32.77777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("13.661202185792348%")
  },
  Text_I1218_1191_361_1202: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1218_1191_361_1203: {
    flexGrow: 1,
    width: wp("10.277777777777777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("7.513661202185794%")
  },
  Text_I1218_1191_361_1203: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1218_1191_361_1204: {
    flexGrow: 1,
    width: wp("30.833333333333336%"),
    height: hp("5.491209811851626%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9166666666666643%"),
    top: hp("1.5691705088797825%")
  },
  View_1218_1192: {
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
  View_I1218_1192_361_1206: {
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
  View_I1218_1192_361_1207: {
    flexGrow: 1,
    width: wp("32.77777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4999999999999996%"),
    top: hp("10.928961748633881%")
  },
  Text_I1218_1192_361_1207: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1218_1192_361_1208: {
    flexGrow: 1,
    width: wp("12.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4999999999999996%"),
    top: hp("7.6502732240437155%")
  },
  Text_I1218_1192_361_1208: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1218_1192_361_1209: {
    flexGrow: 1,
    width: wp("32.77777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4999999999999996%"),
    top: hp("13.661202185792348%")
  },
  Text_I1218_1192_361_1209: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1218_1192_361_1210: {
    flexGrow: 1,
    width: wp("31.38888888888889%"),
    height: hp("3.6020419636710743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: hp("2.5956284153005456%")
  },
  View_1218_1193: {
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
  View_1218_1194: {
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
  View_1218_1195: {
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
  View_1218_1196: {
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
  View_1218_1197: {
    width: wp("36.26477983262804%"),
    top: hp("17.091578082308743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.843973795572917%")
  },
  Text_1218_1197: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_1198: {
    width: wp("39.645394219292534%"),
    top: hp("20.443375384221284%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.843973795572917%")
  },
  Text_1218_1198: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1218_1199: {
    width: wp("4.889918433295356%"),
    height: hp("3.3071882737790297%"),
    top: hp("10.661074112021836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.03546820746528%")
  },
  View_1218_1203: {
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
  View_1218_1204: {
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
  View_1218_1205: {
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
  View_1218_1206: {
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
  View_1218_1207: {
    width: wp("36.26477983262804%"),
    top: hp("17.091578082308743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439737955729143%")
  },
  Text_1218_1207: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_1208: {
    width: wp("39.645394219292534%"),
    top: hp("20.443375384221284%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439737955729143%")
  },
  Text_1218_1208: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1218_1209: {
    width: wp("4.889918433295356%"),
    height: hp("3.3071882737790297%"),
    top: hp("10.661074112021836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.03546820746527%")
  },
  View_1218_1213: {
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
  View_1218_1214: {
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
  View_1218_1215: {
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
  View_1218_1216: {
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
  View_1218_1217: {
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
  ImageBackground_1218_1218: {
    width: wp("9.95371182759603%"),
    height: hp("4.895269675332992%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.44444444444445%")
  },
  ImageBackground_1218_1219: {
    width: wp("7.38425890604655%"),
    height: hp("3.243410391885726%"),
    top: hp("4.867870560109296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.335659450954861%")
  },
  ImageBackground_1218_1220: {
    width: wp("5.555555555555555%"),
    height: hp("3.0054644808743167%"),
    top: hp("5.191256830601105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.44444444444444%")
  },
  ImageBackground_1218_1221: {
    width: wp("4.444444444444445%"),
    height: hp("3.0054644808743167%"),
    top: hp("5.191256830601105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.11111111111111%")
  },
  ImageBackground_1218_1222: {
    width: wp("5.4166740841335725%"),
    height: hp("2.959927313966178%"),
    top: hp("5.077457949112031%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.180555555555554%")
  },
  View_1218_1223: {
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
  View_1218_1224: {
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
  View_1218_1225: {
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
  View_1218_1226: {
    width: wp("46.38888888888889%"),
    minWidth: wp("46.38888888888889%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2.5956284153005464%")
  },
  Text_1218_1226: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_1227: {
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
  View_1218_1228: {
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
  View_1218_1229: {
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
  View_1218_1230: {
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
  ImageBackground_1218_1231: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1218_1232: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1218_1235: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1218_1238: {
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
  ImageBackground_1218_1239: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1218_1240: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1218_1243: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1218_1247: {
    width: wp("8.685709635416666%"),
    minWidth: wp("8.685709635416666%"),
    height: hp("1.2972805669398906%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.888888888888889%"),
    top: hp("1.0424671277322404%")
  },
  View_1218_1248: {
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
  View_1218_1249: {
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
  View_1218_1250: {
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
  ImageBackground_1218_1251: {
    width: wp("5.320186614990234%"),
    minWidth: wp("5.320186614990234%"),
    height: hp("2.6164852204870006%"),
    minHeight: hp("2.6164852204870006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.333333333333343%"),
    top: hp("-0.6830601092896176%")
  },
  View_1218_1252: {
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
  View_1218_1253: {
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
  View_1218_1254: {
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
  ImageBackground_1218_1255: {
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
  ImageBackground_1218_1256: {
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
  View_1218_1257: {
    width: wp("1.3020833333333335%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%")
  },
  Text_1218_1257: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1218_1258: {
    width: wp("6.111111111111111%"),
    height: hp("2.0491803278688523%"),
    top: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.55555555555556%")
  },
  ImageBackground_1218_1259: {
    width: wp("5.320186614990234%"),
    minWidth: wp("5.320186614990234%"),
    height: hp("2.6164852204870006%"),
    minHeight: hp("2.6164852204870006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.11111111111111%"),
    top: hp("4.2349726775956285%")
  },
  ImageBackground_1218_1260: {
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
  ImageBackground_1218_1261: {
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
  View_1218_1262: {
    width: wp("6.0763894187079535%"),
    height: hp("2.6895502225948813%"),
    top: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.55555555555556%")
  },
  ImageBackground_1218_1263: {
    width: wp("6.0763894187079535%"),
    height: hp("2.6895502225948813%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1218_1288: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("76.50273224043715%"),
    minHeight: hp("76.50273224043715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("87.70491803278688%")
  },
  View_1218_1289: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("76.50273224043715%"),
    minHeight: hp("76.50273224043715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_1218_1290: {
    width: wp("23.333333333333332%"),
    minWidth: wp("23.333333333333332%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.333333333333336%"),
    top: hp("3.415300546448094%")
  },
  ImageBackground_1218_1291: {
    width: wp("27.77777777777778%"),
    minWidth: wp("27.77777777777778%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("10.519125683060125%")
  },
  View_1218_1292: {
    width: wp("18.88888888888889%"),
    top: hp("6.995029136782804%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.61111111111111%")
  },
  Text_1218_1292: {
    color: "rgba(15, 114, 231, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_1293: {
    width: wp("13.333333333333334%"),
    top: hp("6.995029136782804%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.333333333333336%")
  },
  Text_1218_1293: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_1294: {
    width: wp("13.055555555555557%"),
    top: hp("6.995029136782804%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.5%")
  },
  Text_1218_1294: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_1295: {
    width: wp("90.27777777777779%"),
    minWidth: wp("90.27777777777779%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.722222222222222%"),
    top: hp("13.797814207650276%")
  },
  View_1218_1296: {
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
  ImageBackground_1218_1297: {
    width: wp("6.111111111111111%"),
    height: hp("3.0054644808743167%"),
    top: hp("1.0928961748633839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888888888888884%")
  },
  View_1218_1300: {
    width: wp("13.88888888888889%"),
    minWidth: wp("13.88888888888889%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.88888888888889%"),
    top: hp("1.639344262295083%")
  },
  Text_1218_1300: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_1301: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.88888888888889%"),
    top: hp("22.40437158469946%")
  },
  View_1218_1302: {
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
  ImageBackground_1218_1303: {
    width: wp("3.9057238896687823%"),
    minWidth: wp("3.9057238896687823%"),
    height: hp("1.9208478145912045%"),
    minHeight: hp("1.9208478145912045%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.196943495008682%"),
    top: hp("1.080355618169392%")
  },
  View_1218_1306: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.055555555555555%"),
    top: hp("22.267759562841533%")
  },
  View_1218_1307: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1218_1307: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_1308: {
    width: wp("14.722222222222223%"),
    minWidth: wp("14.722222222222223%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.4590163934426386%")
  },
  Text_1218_1308: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1218_1309: {
    width: wp("90.55555555555556%"),
    minWidth: wp("90.55555555555556%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.722222222222222%"),
    top: hp("28.551912568306008%")
  },
  View_1218_1310: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.88888888888889%"),
    top: hp("30.32786885245902%")
  },
  View_1218_1311: {
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
  ImageBackground_1218_1312: {
    width: wp("3.9057238896687823%"),
    minWidth: wp("3.9057238896687823%"),
    height: hp("1.9208478145912045%"),
    minHeight: hp("1.9208478145912045%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.196943495008682%"),
    top: hp("1.080355618169392%")
  },
  View_1218_1315: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.055555555555555%"),
    top: hp("30.19125683060109%")
  },
  View_1218_1316: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1218_1316: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_1317: {
    width: wp("14.722222222222223%"),
    minWidth: wp("14.722222222222223%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.4590163934426386%")
  },
  Text_1218_1317: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1218_1318: {
    width: wp("90.55555555555556%"),
    minWidth: wp("90.55555555555556%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.722222222222222%"),
    top: hp("36.475409836065595%")
  },
  View_1218_1319: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.88888888888889%"),
    top: hp("38.25136612021858%")
  },
  View_1218_1320: {
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
  ImageBackground_1218_1321: {
    width: wp("3.9057238896687823%"),
    minWidth: wp("3.9057238896687823%"),
    height: hp("1.9208478145912045%"),
    minHeight: hp("1.9208478145912045%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.196943495008682%"),
    top: hp("1.080355618169392%")
  },
  View_1218_1324: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.055555555555555%"),
    top: hp("38.11475409836065%")
  },
  View_1218_1325: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1218_1325: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_1326: {
    width: wp("14.722222222222223%"),
    minWidth: wp("14.722222222222223%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.4590163934426386%")
  },
  Text_1218_1326: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1218_1327: {
    width: wp("90.55555555555556%"),
    minWidth: wp("90.55555555555556%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.722222222222222%"),
    top: hp("44.39890710382514%")
  },
  ImageBackground_1218_1328: {
    width: wp("90.55555555555556%"),
    minWidth: wp("90.55555555555556%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.722222222222222%"),
    top: hp("52.322404371584724%")
  },
  ImageBackground_1218_1329: {
    width: wp("90.55555555555556%"),
    minWidth: wp("90.55555555555556%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.722222222222222%"),
    top: hp("60.24590163934428%")
  },
  ImageBackground_1218_1330: {
    width: wp("90.55555555555556%"),
    minWidth: wp("90.55555555555556%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.722222222222222%"),
    top: hp("76.0928961748634%")
  },
  View_1218_1331: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.88888888888889%"),
    top: hp("46.17486338797815%")
  },
  View_1218_1332: {
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
  ImageBackground_1218_1333: {
    width: wp("3.9057238896687823%"),
    minWidth: wp("3.9057238896687823%"),
    height: hp("1.9208478145912045%"),
    minHeight: hp("1.9208478145912045%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.196943495008682%"),
    top: hp("1.0803556181694205%")
  },
  View_1218_1336: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.055555555555555%"),
    top: hp("46.03825136612025%")
  },
  View_1218_1337: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1218_1337: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_1338: {
    width: wp("14.722222222222223%"),
    minWidth: wp("14.722222222222223%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.459016393442596%")
  },
  Text_1218_1338: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_1339: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.88888888888889%"),
    top: hp("54.09836065573771%")
  },
  View_1218_1340: {
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
  ImageBackground_1218_1341: {
    width: wp("3.9057238896687823%"),
    minWidth: wp("3.9057238896687823%"),
    height: hp("1.9208478145912045%"),
    minHeight: hp("1.9208478145912045%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.196943495008682%"),
    top: hp("1.0803556181694205%")
  },
  View_1218_1344: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.055555555555555%"),
    top: hp("53.96174863387981%")
  },
  View_1218_1345: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1218_1345: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_1346: {
    width: wp("14.722222222222223%"),
    minWidth: wp("14.722222222222223%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.459016393442596%")
  },
  Text_1218_1346: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_1347: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.88888888888889%"),
    top: hp("62.02185792349729%")
  },
  View_1218_1348: {
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
  ImageBackground_1218_1349: {
    width: wp("3.9057238896687823%"),
    minWidth: wp("3.9057238896687823%"),
    height: hp("1.9208478145912045%"),
    minHeight: hp("1.9208478145912045%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.196943495008682%"),
    top: hp("1.080355618169392%")
  },
  View_1218_1352: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.055555555555555%"),
    top: hp("61.885245901639365%")
  },
  View_1218_1353: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1218_1353: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_1354: {
    width: wp("14.722222222222223%"),
    minWidth: wp("14.722222222222223%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.459016393442596%")
  },
  Text_1218_1354: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1218_1355: {
    width: wp("90.55555555555556%"),
    minWidth: wp("90.55555555555556%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.722222222222222%"),
    top: hp("68.16939890710384%")
  },
  View_1218_1356: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.88888888888889%"),
    top: hp("69.94535519125685%")
  },
  View_1218_1357: {
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
  ImageBackground_1218_1358: {
    width: wp("3.9057238896687823%"),
    minWidth: wp("3.9057238896687823%"),
    height: hp("1.9208478145912045%"),
    minHeight: hp("1.9208478145912045%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.196943495008682%"),
    top: hp("1.080355618169392%")
  },
  View_1218_1361: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.055555555555555%"),
    top: hp("69.80874316939892%")
  },
  View_1218_1362: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1218_1362: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1218_1363: {
    width: wp("14.722222222222223%"),
    minWidth: wp("14.722222222222223%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.459016393442596%")
  },
  Text_1218_1363: {
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
