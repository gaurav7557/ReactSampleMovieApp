import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

/** 
 * ProfileThumb is rendered in MovieScreen FlatList, used to render both, Cast's ThumbNail and Crew's ThumbNail.
 * It takes "item" prop, which has the data about a person, renders their thumbnail image and name
*/

const ProfileThumb = ({ item }) => {
  return (
    <View style={styles.profileThumb}>
      <>
        <Image
          source={{
            uri: `http://image.tmdb.org/t/p/w342${item?.profile_path}`,
          }}
          style={styles.crewImages}
        />
      </>
      <View style={styles.nameCard}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </View>
  );
};

export default ProfileThumb;

const styles = StyleSheet.create({
  crewImages: {
    width: 200,
    height: '100%',
    borderColor: 'black',
  },

  profileThumb: {
    height: '100%',
    flexDirection: 'column',
    width: 200,
    backgroundColor: '#212121',
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 10,
    overflow: 'hidden',
  },
  nameCard: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    paddingVertical: 10,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
