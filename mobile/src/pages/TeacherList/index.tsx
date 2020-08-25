import React from 'react';
import { View } from 'react-native';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles';

function TeacherList() {
  return (
    <View style={styles.container}>
      <PageHeader title="Professores disponíveis" />

      <TeacherItem />
    </View>
  );
} 
export default TeacherList;
