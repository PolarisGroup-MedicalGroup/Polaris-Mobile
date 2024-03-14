import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.footerContents}>
        <View style={styles.footerContacts}>
          <Text style={[styles.footerTitle, { fontSize: 20 }]}>Polaris Group</Text>
          <Text style={[styles.footerText, { fontSize: 16 }]}>Atendimento Online.</Text>
          <Text style={[styles.footerText, { fontSize: 16 }]}>Onde precisar, Quando precisar</Text>
          <View style={styles.socialMedia}>
            <TouchableOpacity style={styles.socialLink} onPress={() => console.log('Instagram pressed')}>
              <Text style={[styles.footerLink, { fontSize: 16 }]}>Instagram</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialLink} onPress={() => console.log('Facebook pressed')}>
              <Text style={[styles.footerLink, { fontSize: 16 }]}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialLink} onPress={() => console.log('WhatsApp pressed')}>
              <Text style={[styles.footerLink, { fontSize: 16 }]}>WhatsApp</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footerList}>
          <Text style={[styles.footerTitle, { fontSize: 20 }]}>Navegação</Text>
          <TouchableOpacity onPress={() => console.log('Home pressed')}>
            <Text style={[styles.footerLink, { fontSize: 16 }]}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Consultas pressed')}>
            <Text style={[styles.footerLink, { fontSize: 16 }]}>Consultas</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Planos pressed')}>
            <Text style={[styles.footerLink, { fontSize: 16 }]}>Planos</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Feedback pressed')}>
            <Text style={[styles.footerLink, { fontSize: 16 }]}>Feedback</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerList}>
          <Text style={[styles.footerTitle, { fontSize: 20 }]}>Ajuda</Text>
          <TouchableOpacity onPress={() => console.log('Contato pressed')}>
            <Text style={[styles.footerLink, { fontSize: 16 }]}>Contato</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Configurações pressed')}>
            <Text style={[styles.footerLink, { fontSize: 16 }]}>Configurações</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Sobre Nós pressed')}>
            <Text style={[styles.footerLink, { fontSize: 16 }]}>Sobre Nós</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Política de Privacidade pressed')}>
            <Text style={[styles.footerLink, { fontSize: 16 }]}>Política de Privacidade</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerSubscribe}>
          <TouchableOpacity onPress={() => console.log('Inscreva-se pressed')}>
            <Text style={[styles.subscribeTitle, { fontSize: 20 }]}>Inscreva-se</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Inscreva-se pressed')}>
            <Text style={[styles.subscribeText, { fontSize: 16 }]}>
              Se inscreva para fazer parte do melhor atendimento médico do Brasil!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.footerCopyright, { fontSize: 16 }]}>
        <Text>&#169; 2023 Polaris Group, todos os direitos reservados</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#272727',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  footerContents: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  footerContacts: {
    flex: 1,
    marginRight: 10,
  },
  footerList: {
    flex: 1,
    marginRight: 10,
  },
  footerSubscribe: {
    flex: 1,
    marginRight: 10,
  },
  socialMedia: {
    flexDirection: 'row',
    marginTop: 10,
  },
  socialLink: {
    marginRight: 10,
  },
  footerTitle: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  footerText: {
    color: '#fff',
    marginBottom: 5,
  },
  footerLink: {
    color: '#fff',
    marginBottom: 5,
  },
  subscribeTitle: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subscribeText: {
    color: '#fff',
    marginBottom: 5,
  },
  footerCopyright: {
    color: '#fff',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default Footer;
