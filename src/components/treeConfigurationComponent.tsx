import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { setTreeConfig } from '../redux/actionCreators';

const TreeConfiguration = () => {
  const dispatch = useDispatch();
  const [sectionValue, changeSectionValue] = useState(3);
  const [rowValue, changeRowValue] = useState(4);

  useEffect(() => {
    if (sectionValue < 1) {
      changeSectionValue(1);
    }

    if (rowValue < 1) {
      changeRowValue(1);
    }
  }, [rowValue, sectionValue]);

  return (
    <View style={styles.outerMostContainerStyle}>
      <View style={{ width: '90%' }}>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.descriptionLabelTextStyle}>
            How many sections on the tree?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              width: '100%'
            }}
          >
            <TouchableOpacity
              style={styles.upDownButtonStyle}
              onPress={() => changeSectionValue(sectionValue - 1)}
            >
              <View>
                <Text
                  style={{
                    justifyContent: 'center',
                    textAlign: 'center',
                    alignItems: 'center'
                  }}
                >
                  ▼
                </Text>
              </View>
            </TouchableOpacity>
            <View style={styles.valueLabelContainerStyle}>
              <Text style={styles.valueLabelTextStyle}>{sectionValue}</Text>
            </View>

            <TouchableOpacity
              style={styles.upDownButtonStyle}
              onPress={() => changeSectionValue(sectionValue + 1)}
            >
              <View>
                <Text
                  style={{
                    justifyContent: 'center',
                    textAlign: 'center',
                    alignItems: 'center'
                  }}
                >
                  ▲
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.descriptionLabelTextStyle}>
            How many rows will each section be?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              width: '100%'
            }}
          >
            <TouchableOpacity
              style={styles.upDownButtonStyle}
              onPress={() => changeRowValue(rowValue - 1)}
            >
              <View>
                <Text>▼</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.valueLabelContainerStyle}>
              <Text style={styles.valueLabelTextStyle}>{rowValue}</Text>
            </View>
            <TouchableOpacity
              style={styles.upDownButtonStyle}
              onPress={() => changeRowValue(rowValue + 1)}
            >
              <View>
                <Text>▲</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 5,
            width: '100%'
          }}
        >
          <TouchableOpacity
            style={styles.submitButtonStyle}
            onPress={() => dispatch(setTreeConfig(sectionValue, rowValue))}
          >
            <View>
              <Text>Submit</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerMostContainerStyle: {
    height: '100%',
    width: '25%',
    backgroundColor: '#228b22',
    justifyContent: 'center',
    alignItems: 'center'
  },
  upDownButtonStyle: {
    height: 40,
    minWidth: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 25,
    borderColor: 'black'
  },
  valueLabelContainerStyle: {
    width: '20%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  valueLabelTextStyle: { fontSize: 20 },
  descriptionLabelTextStyle: { marginBottom: 10 },
  submitButtonStyle: {
    height: 35,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 25
  }
});

export default TreeConfiguration;
