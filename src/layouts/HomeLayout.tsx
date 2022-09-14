import React from 'react';
import { ScrollView, StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function HomeLayout() {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Hello World!!!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeLayout;
