import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather, SimpleLineIcons } from '@expo/vector-icons';
import postPhoto from '../../assets/img/postPhoto.jpg';

export default function PostsItem() {
  return (
    <View style={styles.container}>
      <Image
        source={postPhoto}
        style={styles.image}
      />
      <Text style={styles.text}>Post Name</Text>
      <View style={styles.cardInfo}>
        <View style={styles.infoList}>
          <View style={styles.infoItem}>
            <TouchableOpacity>
              <Feather
                name='message-circle'
                size={24}
                color={
                  // isCommented ? '#FF6C00' :
                  '#535352d2'
                }
              />
            </TouchableOpacity>
            <Text>Coments</Text>
          </View>
          <View style={styles.infoItem}>
            <TouchableOpacity>
              <Feather
                name='thumbs-up'
                size={24}
                color={
                  // isLiked ? '#FF6C00' :
                  '#535352d2'
                }
              />
            </TouchableOpacity>
            <Text>Likes</Text>
          </View>
          <View style={[styles.infoItem]}>
            <TouchableOpacity>
              <SimpleLineIcons
                name='location-pin'
                size={24}
                color='#BDBDBD'
              />
            </TouchableOpacity>
            <Text style={[styles.text, styles.loc]}>Location</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    borderRadius: 8,
    marginVertical: 35,
  },
  image: {
    width: '100%',
    height: 240,
    borderRadius: 8,
  },
  text: {
    color: '#212121',
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
  },
  loc: {
    textDecorationLine: 'underline',
  },

  cardInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoList: {
    flexDirection: 'row',
    gap: 24,
    alignItems: 'center',
  },
  infoItem: {
    flexDirection: 'row',
    gap: 5,
  },
});