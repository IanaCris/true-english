import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image 
          style={styles.avatar}
          source={{ uri: 'https://avatars0.githubusercontent.com/u/17826996?s=460&u=3e971178c46afeaaf60874fb37542042ff6f0d75&v=4' }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Iana Sousa</Text>
          <Text style={styles.subject}>Espanhol</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Entusiasta das melhores tecnologias de quimica avançada.
        {'\n'}{'\n'}
        Apaixnada por explodir coisas em laboratorio e por mudar a vida de pessoas
      </Text>
    </View>
  );
} 
export default TeacherItem;