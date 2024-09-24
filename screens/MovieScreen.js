import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import Loading from '../components/Loading';
import ProgressBar from '../components/ProgressBar';
import ProfileThumb from '../components/ProfileThumb';
import BackButton from '../components/BackButton';
import InfoCard from '../components/InfoCard';
const screen = Dimensions.get('window');
import { fetchCredits } from '../services/services';

export default function MovieScreen({ navigation, route }) {
  const [credits, setCredits] = useState(null);
  const [loading, setLoading] = useState(true);
  const [director, setDirector] = useState('');
  /**
   * getting the params that we passed while navigating from HomeScreen.
   * To be used to make an fetch request to get crew and cast list based on movie.id.
   */
  const { movie } = route.params;

  useEffect(() => {
     // set the loading state to true as we start fetching credit details. while loading is true we will
    setLoading(true);
    /**
     * Call Fetch Credits with movie's id
     * which will return us the list of cast, crew, and director
     */
    fetchCredits(movie.id).then((data) => {
      if(data === undefined || data.length === 0) {
        Alert.alert('Request Failure','Movie Details not Found, Please try again..',[{text:"OK", onPress:() => navigation.pop()}],{ cancelable: false })
        return
      }
      setCredits(data.credits);
      setDirector(data.director);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <View style={styles.container}>
      <View>
        {/** we will pass navigation prop too, so that we can return back to HomeScreen */}
        <BackButton navigation={navigation} />
        <Image
          source={{
            uri: `http://image.tmdb.org/t/p/w780${movie?.backdrop_path}`,
          }}
          style={styles.banner}
        />
        {/** <InfoCard/> component takes movie and director props, which we used in the previous section. */}
        <InfoCard movie={movie} director={director} />
      </View>
      <View style={styles.credit}>
        <>
          <Text style={styles.title}>CAST</Text>
          {credits && (
            <FlatList
              data={credits.cast}
              renderItem={({ item }) => <ProfileThumb item={item} />}
              horizontal
            />
          )}
        </>
        <>
          <Text style={styles.title}>CREW</Text>
          {credits && (
            <FlatList
              data={credits.crew}
              renderItem={({ item }) => <ProfileThumb item={item} />}
              horizontal
            />
          )}
        </>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: { width: window.width, height: 200 },
  credit: {
    flex: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#212121',
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
