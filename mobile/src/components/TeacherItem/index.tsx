import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

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

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {' '}
          <Text style={styles.priceValue}>R$ 40,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>

    </View>
  );
} 
export default TeacherItem;