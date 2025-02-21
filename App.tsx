import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList, Button, Image, SectionList, Switch } from 'react-native';
import React, {useState} from 'react';
export default function App() {

  const [theme, SetTheme] = useState(true);  //true = lightmode; false = darkmode
  const toggleSwitch = ()=> {SetTheme(!theme);}
  return (

    <View style={[styles.container, theme === false ? styles.darkmode : styles.lightmode]}>
      <StatusBar style="auto" />
      <View>
        <Image source={require('./assets/favicon.png')} />
        <Text style={theme === false ? styles.darkmode : styles.lightmode}>Arturo Andres</Text>
      </View>

      <View>
        <Text style={[theme === false ? styles.darkmode : styles.lightmode]}>Description</Text>
      </View>

      <View>
        <SectionList
        
        sections={[
          {title: 'Skills', data: ['Art', 'Programming', 'Writing'] },
          {title: 'Contact Info', data: ['Email'] },
        ]}
          
          renderItem={({ item }) => <Text style={[theme === false ? styles.darkmode : styles.lightmode]}>{item}</Text>}
          renderSectionHeader ={({ section }) => <Text style={[theme === false ? styles.darkmode : styles.lightmode]}> {section.title}</Text>}
        />
      </View>

      <View>
        <FlatList
        style={[theme === false ? styles.darkmode : styles.lightmode]}
        data={[{key: 'One'}, {key: 'Two'}]}
        renderItem={({item}) => <Button title={item.key} ></Button>}
        />
      </View>
      
      <View>
        <Switch
        trackColor={{false: '#767577' , true: '#81b0ff'}}
        thumbColor={'#f5dd4b'}
        ios_backgroundColor={'#f5dd4b'}
        onValueChange={toggleSwitch}
        value={theme}
        
        />
      </View>
{/**
      <View>
        <FlatList
          data={[{ key: 'Alice' }, { key: 'Bob' }]}
          renderItem={({ item }) => <Button title={item.key}></Button>}
        />
      </View>

 */}
      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  darkmode: {
    color: '#fff',
    backgroundColor: '#000'
  },

  lightmode: {
    color: '#000',
    backgroundColor: '#fff'
  }

});
