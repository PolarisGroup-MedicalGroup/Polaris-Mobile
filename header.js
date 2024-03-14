import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <View style={styles.header}>
      <View style={styles.logo}>
        <Image
          source={require('./Imagens_Polaris/Polaris-logo.png')}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => console.log('Home pressed')}>
          <Text style={styles.navLink}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Consultas pressed')}>
          <Text style={styles.navLink}>Consultas</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Sobre Nós pressed')}>
          <Text style={styles.navLink}>Sobre Nós</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Planos pressed')}>
          <Text style={styles.navLink}>Planos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Feedback pressed')}>
          <Text style={styles.navLink}>Feedback</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.logcad}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.navLink}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Cadastro pressed')}>
          <Text style={styles.navLink}>Cadastro</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={toggleOptions} style={styles.userButton}>
          <Image
            source={require('./Imagens_Polaris/UserIcon.png')}
            style={styles.userIcon}
          />
        </TouchableOpacity>
        {showOptions && (
          <View style={styles.optionsContainer}>
            <TouchableOpacity onPress={() => console.log('Configurações pressed')}>
              <Text style={styles.optionText}>Configurações</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Logout pressed')}>
              <Text style={styles.optionText}>Logout</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ffffff',
    elevation: 4,
    height:130,
    paddingHorizontal: 100,
  },
  logo: {
    flex: 1,
    alignItems: 'left',
  },
  logoImage: {
    width: 200,
    height: 120,
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
  },
  navLink: {
    color: '#333333',
    fontSize: 20,
  },
  logcad: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 70,
    marginRight: 50,
    gap: 20,
  },
  buttonContainer: {
    position: 'relative',
  },
  userButton: {
    padding: 10,
    
  },
  userIcon: {
    width: 50,
    height: 50,
  },
  
  optionText: {
    fontSize: 16,
    color: '#333333',
  },
});

export default Header;
