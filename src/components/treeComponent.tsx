import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { random } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { generateTree } from '../constants/generateTree';
import { StarCountTypes } from '../redux/reducers/starCountReducer';
import { TreePropertiesTypes } from '../redux/reducers/treePropertiesReducer';

const Tree = () => {
  const [starArr, setStarArr] = useState<string[]>([]);
  const starCount = useSelector((state: StarCountTypes) => state.starCount);
  const treeProperties = useSelector(
    (state: TreePropertiesTypes) => state.treeProperties
  );

  // const renderTree = () => {
  //   generateTree(treeSections, sectionHeight);
  //   return starArr.map((row) => <Text>{row}</Text>);
  // };

  useEffect(() => {
    let theTree = generateTree(
      treeProperties.treeSections,
      treeProperties.sectionHeight
    );

    setStarArr(theTree);
  }, []);

  return (
    <ScrollView
      style={{
        height: '100%',
        width: '75%'
        // justifyContent: 'center',
        // alignItems: 'center'
      }}
    >
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        {starArr.map((item) => (
          <Text
            style={{
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              fontFamily: 'noteserif'
            }}
            key={random(0, 5000.0)}
          >
            {item}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

export default Tree;
