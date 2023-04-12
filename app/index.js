import { View, Scrollview, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { COLORS, FONT, icons, SHADOWS, SIZES, } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';


function Home() {
  const router = useRouter();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite }, headerShadowVisible: false, 
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.profile} dimensions="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimensions="100%" />
          ),
          headerTitle: ""
        }}
        />

        <Scrollview showVerticalScrollIndicator={false}>
          <View style= {{ flex:1 , padding: SIZES.medium }}>
            <Welcome />
            <Popularjobs />
            <Nearbyjobs />
          </View>
        </Scrollview>
    </SafeAreaView>
  )
};

export default ScreenHeaderBtn;
