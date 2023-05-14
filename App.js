import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyNavigation from './navigation'

const ignoreWarns = [
	"AsyncStorage has been extracted from react-native",
];

const warn = console.warn;

console.warn = (...arg) => {

	for (const warning of ignoreWarns) {
		if (arg[0].startsWith(warning)) {
			return;
		}
	}
	warn(...arg);
};

LogBox.ignoreLogs(ignoreWarns);

export default function App() {
  return (
    <NavigationContainer>
        <MyNavigation />
    </NavigationContainer>
  )
}

