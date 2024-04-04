import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';
import {
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

function HomeScreen():React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const onPressLearnMore = () => {
    console.log(11111);
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <TextInput placeholder="请输入您的问题" />
        <Button onPress={onPressLearnMore} title="搜索" color="#841584" />
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;