import React from 'react';
import { View } from 'react-native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

function TeacherList() {
  return (
    <View style={styles.container}>
      <PageHeader title="Professores disponíveis" />
    </View>
  );
} 
export default TeacherList;
