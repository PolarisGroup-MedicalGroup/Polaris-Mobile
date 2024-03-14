import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <View style={styles.sectionContent}>
          <Image
            source={require('./Imagens_Polaris/section_servicos.png')}
            style={styles.mainImage}
          />
        </View>
        <View style={styles.vermais}>
          <TouchableOpacity onPress={() => console.log('Ver mais pressed')}>
            <Image
              source={require('./Imagens_Polaris/Polaris-botão-ver-mais.png')}
              style={styles.vermaisImage}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.section}>
        <Image
          source={require('./Imagens_Polaris/Polaris-home.png')}
          style={styles.mainImage}
        />
      </View>
      <View style={styles.section}>
        <View style={styles.sectionContent}>
          <Image
            source={require('./Imagens_Polaris/Polaris-section_atendimento.png')}
            style={styles.mainImage}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',

  },
  section: {
    marginBottom: 20,
  },
  sectionContent: {
    marginBottom: 10,
  },
  mainImage: {
    width: 1350, // Ajuste o tamanho conforme necessário
    height: 820, // Ajuste o tamanho conforme necessário
  },
  vermais: {
    alignItems: 'center',
    
  },
  vermaisImage: {
    width: 320, // Ajuste o tamanho conforme necessário
    height: 90, // Ajuste o tamanho conforme necessário
  },
});

export default App;
