import React, { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';

/**
 * Shows a circular loading indicator in the center of the screen while fetching the data from TMDB.
*/

const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgb(21,21,21)',
      }}>
      <ActivityIndicator size="small" color="#0000ff" />
      <Text style={{ color: 'white', alignSelf: 'center', margin: 10 }}>
        Loading Results Please Wait...
      </Text>
    </View>
  );
};

export default Loading;
