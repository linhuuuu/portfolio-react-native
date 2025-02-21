import React, { useState } from 'react';
import {StyleSheet,Text,View,Image,SectionList,Switch,FlatList,} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [theme, SetTheme] = useState(true); // true = lightmode; false = darkmode
  const toggleSwitch = () => SetTheme(!theme);

  // Define the type for items in flatlistData
  type FlatlistItem = {
    id: string;
    title: string;
    description: string;
    image: any; // Use `ImageSourcePropType` from 'react-native' for stricter typing
  };

  const flatlistData: FlatlistItem[] = [
    {
      id: '1',
      title: 'Dead Elevator',
      description:
        'Video game requirement for our Elective Finals. You play as a paranormal detective trying to escape an elevator against ghosts',
      image: require('./assets/favicon.png'),
    },
    {
      id: '2',
      title: 'Dead Elevator',
      description:
        'Video game requirement for our Elective Finals. You play as a paranormal detective trying to escape an elevator against ghosts',
      image: require('./assets/favicon.png'),
    },
  ];

  // Functional component for rendering FlatList items
  const RenderFlatlistItem: React.FC<{ item: FlatlistItem }> = ({ item }) => {
    return (
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <Image source={item.image} style={{ width: 80, height: 80 }} />
        <Text style={[theme === false ? styles.darkmode : styles.lightmode]}>
          {item.title}
        </Text>
        <Text style={[theme === false ? styles.darkmode : styles.lightmode]}>
          {item.description}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaProvider style={[styles.center, theme === false ? styles.darkmode : styles.lightmode]}>
      <SafeAreaView style={[styles.container, styles.center, theme === false ? styles.darkmode : styles.lightmode]}>
        
        {/* Header */}
        <View style={[styles.center, { flex: 2, marginTop: 100 }]}>
          <Image source={require('./assets/favicon.png')} />
          <Text style={theme === false ? styles.darkmode : styles.lightmode}>
            Arturo Andres
          </Text>
        </View>

        {/* About Section */}
        <View style={[styles.center, { flex: 3, flexDirection: 'column' }]}>
          <View style={[styles.center]}>
            <Text style={[theme === false ? styles.darkmode : styles.lightmode]}>
              2003, Artist, Writer. Arturo is a Computer Science Student on his 3rd Year.
            </Text>
          </View>

          {/* Skills and Contact Info */}
          <View style={[styles.center, { marginTop: 40 }]}>
            <SectionList
              contentContainerStyle={[styles.center, { marginBottom: 8 }]}
              sections={[
                { title: 'Skills', data: ['Art', 'Programming', 'Writing'] },
                { title: 'Contact Info', data: ['Email'] },
              ]}
              renderItem={({ item }) => (
                <Text style={[theme === false ? styles.darkmode : styles.lightmode]}>
                  {item}
                </Text>
              )}
              renderSectionHeader={({ section }) => (
                <Text style={[theme === false ? styles.darkmode : styles.lightmode]}>
                  {section.title}
                </Text>
              )}
              keyExtractor={(item, index) => item + index}
            />
          </View>

          {/* Projects Section */}
          <View style={{ flex: 2 }}>
            <Text>Projects</Text>
            <FlatList
              data={flatlistData}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <RenderFlatlistItem item={item} />}
              contentContainerStyle={styles.center}
            />
          </View>
        </View>

        {/* Theme Toggle */}
        <View style={[styles.center, { flexDirection: 'row', flex: 2, marginTop: 20 }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text
              style={[
                theme === false ? styles.darkmode : styles.lightmode,
                { marginRight: 10 },
              ]}
            >
              {theme === false ? 'Dark Mode' : 'Light Mode'}
            </Text>
            <Switch
              trackColor={{ false: '#fff', true: '#000' }}
              thumbColor={'#fff'}
              ios_backgroundColor={'#000'}
              onValueChange={toggleSwitch}
              value={theme}
              style={[theme === false ? styles.darkmode : styles.lightmode]}
            />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    flexWrap: 'nowrap',
    width: '80%',
    height: '100%',
    backgroundColor: '#fff',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  darkmode: {
    color: '#fff',
    backgroundColor: '#000',
  },
  lightmode: {
    color: '#000',
    backgroundColor: '#fff',
  },
});