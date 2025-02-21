import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Switch, FlatList, ScrollView, ImageBackground, } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [theme, SetTheme] = useState(true); // true = lightmode; false = darkmode
  const toggleSwitch = () => SetTheme(!theme);  //switch

  //flatlistdata 
  const DATA = [
    {
      id: '1',
      title: 'Dead Elevator',
      description: 'Echoes of the past live in the apartments molden walls.',
      image: require('./assets/deadelevator.png'),
    },
    {
      id: '2',
      title: 'Rumplestiltskin',
      description: 'Early European tales of deception, royalty, feudalism and betrayal.',
      image: require('./assets/rumplestiltskin.png'),
    },
    {
      id: '3',
      title: 'Coin Crisis',
      description: 'The key to a good relationship is to have a enough money for yourself and the self that wants.',
      image: require('./assets/coincrisis.png'),
    },
  ];

  type ItemProps = { title: string, description: string, image: any }; //init flatlist props

  //flatlist item renderer
  const Item = ({ title, description, image }: ItemProps) => (
    <ImageBackground source={image}
      style={[styles.center, styles.flatImg,
      theme === false ? [styles.darkmode, styles.borderdarkmode] : [styles.lightmode, styles.borderlightmode]]}>

      <View style={[styles.flatText,
      theme === false ? [styles.darkmode, styles.borderdarkmode] : [styles.lightmode, styles.borderlightmode]]}>
        <Text style={[theme === false ? styles.darkmode : styles.lightmode, {fontSize:20}]}>{title}</Text>
        <Text style={theme === false ? styles.darkmode : styles.lightmode}>{description}</Text>
      </View>
    </ImageBackground>
  );

  return (
    //platform init
    <SafeAreaProvider style={[styles.center, theme === false ? styles.darkmode : styles.lightmode]}>
      <SafeAreaView style={[styles.container, theme === false ? styles.darkmode : styles.lightmode]}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>

          {/*Header*/}
          <View style={[styles.center, { marginTop: 20 }]}>
            <View style={[styles.center, styles.profile, theme === false ? styles.borderdarkmode : styles.borderlightmode]}>
              <Image source={require('./assets/profile.png')} />
            </View>
            <Text style={[theme === false ? styles.darkmode : styles.lightmode, { fontSize: 40, fontWeight: 'bold' }]}>
              ARTURO
            </Text>
          </View>

          {/* ABOUT */}
          <View style={[styles.center]}>
            <Text style={[theme === false ? styles.darkmode : styles.lightmode, { textAlign: 'center' }]}>
              2003, Artist, Writer. Arturo is a Computer Science Student on his 3rd Year.
            </Text>
          </View>

          {/*SKILLS AND CONTACT INFO*/}
          <View style={[styles.center,]}>
            <View style={[{ alignItems: 'center', padding: 20 }]}>
              <Text style={[styles.header, theme === false ? styles.darkmode : styles.lightmode]}> Skills </Text>
              <Text style={[theme === false ? styles.darkmode : styles.lightmode]}>C++ | SQL | C#</Text>
            </View>
            <View style={[{ alignItems: 'center' }]}>
              <Text style={[styles.header, theme === false ? styles.darkmode : styles.lightmode]}> Contacts </Text>
              <Text style={[theme === false ? styles.darkmode : styles.lightmode]}>GitHub: https://github.com/linhuuuu</Text>
              <Text style={[theme === false ? styles.darkmode : styles.lightmode]}>Email: arturo_andres_desilva@gmail.com</Text>
            </View>
          </View>

          {/*PROJECTS*/}
          <View style={[styles.center, { marginTop: 20 }]}>
            <Text style={styles.header}> Project </Text>
            <FlatList
              data={DATA}
              renderItem={({ item }) => <Item title={item.title} description={item.description} image={item.image} />}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
            />
          </View>

          {/* Theme Toggle */}
          <View style={[styles.center, { flexDirection: 'row', marginTop: 20 }]}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text
                style={[
                  theme === false ? styles.darkmode : styles.lightmode,
                  { marginRight: 10, color: '#737373', fontSize: 15 },
                ]}
              >
                {theme === false ? 'Dark Mode' : 'Light Mode'}
              </Text>
              <Switch
                trackColor={{ false: '#fff', true: '#000' }}
                thumbColor={ '#737373'}
                ios_backgroundColor={'#000'}
                onValueChange={toggleSwitch}
                value={theme}
                style={[theme === false ? styles.darkmode : styles.lightmode]}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 20,
  },
  darkmode: {
    color: '#fff',
    backgroundColor: '#000',
    borderColor: '#000'
  },
  lightmode: {
    color: '#000',
    backgroundColor: '#fff',
  },
  borderdarkmode: {
    borderColor: '#fff'
  },
  borderlightmode: {
    borderColor: '#000'
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  flatImg: {
    borderRadius: 20,
    margin: 20,
    height: 200,
    overflow: 'hidden',
    justifyContent: 'flex-end',
    borderWidth: 2
  },
  flatText: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    height: '50%',
    width: '100%',
    padding: 10,
    overflow: 'scroll',
    borderTopWidth: 2
  },
  profile: {
    width: 100, 
    height: 100, 
    overflow: 'hidden', 
    borderRadius: 100, 
    borderWidth: 2, 
    margin: 10 
  }
  
});