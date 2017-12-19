
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';

import Note from './Note';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      noteText: '',
    }
  }
  render() {
    let notes = this.state.noteArray.map((val, key) => {
      return <Note key={key} keyval={key} val={val}
        deleteMethod={() => this.deleteNote(key)} />
    });

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Notes</Text>
        </View>
        <ScrollView style={styles.scrollContainer}>
          {notes}
        </ScrollView>
        <KeyboardAvoidingView style={styles.footer} behavior='padding'>
          <TextInput style={styles.textInput}
            onChangeText={(noteText) => this.setState({ noteText })}
            value={this.state.noteText}
            placeholder='type note here'
            placeholderTextColor='white'
            returnKeyType='done'
            onSubmitEditing={() => {this.addNote()}}
            >
          </TextInput>
          <TouchableOpacity style={styles.addButton} onPress={this.addNote.bind(this)}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
  addNote() {
    if (this.state.noteText) {
      var d = new Date();
      this.state.noteArray.push({
        'date': d.getDate() +
          "/" + (d.getMonth() + 1) +
          "/" + (d.getFullYear()),
        'note': this.state.noteText
      });
      this.setState({ noteArray: this.state.noteArray });
      this.setState({ noteText: '' });
    }
  }
  deleteNote(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({ noteArray: this.state.noteArray });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#e91e63',
    alignItems: 'center',
    justifyContent: 'center',

  },
  headerText: {
    color: 'white',
    fontSize: 18,
    padding: 26,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed',
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#E91E63',
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 32,
  },
});
