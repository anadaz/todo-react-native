import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Home from './src/components/home/home';


export default class App extends Component{
  render() {
    return (
     <Home></Home>
    );
  }
}

