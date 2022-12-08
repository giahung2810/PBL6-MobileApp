import DescriptionJob from '../DescriptionJob/DescriptionJob'
import CompanyJob from '../companyJob/CompanyJob'
import React, {useState} from 'react';
import { Text, View ,StyleSheet} from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';

export default function DescriptionScreen({item}) {

  const [customStyleIndex, setCustomStyleIndex] = useState(0);
  const handleCustomIndexSelect = (index) => {
    //handle tab selection for custom Tab Selection SegmentedControlTab
    setCustomStyleIndex(index);
  };
  return (
      // <Tab.Navigator
      //   screenOptions={{
      //     tabBarLabelStyle: { fontSize: 12,  },
      //     tabBarStyle: { backgroundColor: '#FAFAFA' },
      //     tabBarContentContainerStyle:{},
      //   }}
      // >
      //   <Tab.Screen name="Description" component={DescriptionJob} />
      //   <Tab.Screen name="Settings" component={SettingsScreen} />
      // </Tab.Navigator>
      <View>
        <SegmentedControl
          values={['Description', 'Company']}
          selectedIndex={customStyleIndex}
          onChange={(event) => handleCustomIndexSelect(event.nativeEvent.selectedSegmentIndex)}
          onTabPress={handleCustomIndexSelect}
          borderRadius={20}
          // width={3}
          marginHorizontal={50}
          tabsContainerStyle={{ height: 30, backgroundColor: '#eeeef0'}}
          tabStyle={{
            backgroundColor: '#fff',
            borderWidth: 0,
            borderColor: 'transparent',
          }}
          activeTabStyle={{ backgroundColor: 'white', marginTop: 2, padding:10 }}
          tabTextStyle={{ color: '#444444', fontWeight: 'bold' }}
          activeTabTextStyle={{ color: '#888888' }}
        />
        {customStyleIndex === 0 && (
          <View style={styles.boxdescription}>
            <DescriptionJob item = {item}/>
          </View>
        )}
        {customStyleIndex === 1 && (
          <View style={styles.boxdescription}>
            <CompanyJob item = {item}/>
          </View>
        )}
      </View>
  );
}

const styles = StyleSheet.create({
  boxdescription:{
    height: '100%',
  }
})