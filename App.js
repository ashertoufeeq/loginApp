import React, {Component} from 'react';
import {  Text, View } from 'react-native';
import {Login} from './src/components/loginInfo';
import styles from './src/components/styles';
class App extends React {
  render() {const {containerApp,loginViewApp,loginTextApp} = styles;
    return (
      <View style={containerApp}>

        <View style={loginViewApp}>
            <Text style={loginTextApp}>Login Here</Text>
          <Login/>
        </View>
      </View>
    );
  }
}
