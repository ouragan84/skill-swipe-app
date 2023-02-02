import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Platform, TextInput} from 'react-native';

const URL="http://127.0.0.1:3000";
// const URL="https://reactnative.dev/movies.json";

class App extends Component {

  state = {
    logs: "Click FETCH to load Logs",
    title: "",
    log_count: "Count: -",
    content: "",
  };

  fetchLogs = async () => {
    const json_logs = await fetch(URL+'/log').then((response) => response.json());
    const logs_num = await fetch(URL+'/log/count').then((response) => response.json());

    this.setState({
      logs: JSON.stringify(json_logs, null, 2),
      log_count: "Count: " + logs_num
    });
  };

  changeTitle = (title_text) => {
    this.setState({
      title: title_text
    });
  };

  changeContent = (content_text) => {
    this.setState({
      content: content_text
    });
  };

  sendLogs = async () => {
    console.log(JSON.stringify({
      "title": this.state.title,
      "message": this.state.content
    }))
    fetch(URL+'/log', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: this.state.title,
        message: this.state.content
      }),
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={[styles.basetext, styles.title]}>LOGS APP</Text>
        </View>

        <TextInput
          style={styles.inputtitle}
          onChangeText={this.changeTitle}
          value={this.state.title}
          placeholder="Title"
        />
        <TextInput
          style={styles.inputcontent}
          onChangeText={this.changeContent}
          value={this.state.content}
          placeholder="Content"
        />

        <TouchableOpacity style={styles.button} onPress={this.sendLogs}>
          <Text>SEND</Text>
        </TouchableOpacity>
        
        <View>
          <Text style={[styles.basetext, styles.title]}> RESULT: </Text>
          <TouchableOpacity style={styles.button} onPress={this.fetchLogs}>
            <Text>FETCH</Text>
          </TouchableOpacity>
        </View>
        <View>
        <Text style={[styles.basetext]}>{this.state.log_count}</Text>
          <Text style={[styles.basetext, styles.logs]}>{this.state.logs}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
  basetext:{
    fontSize: '15',
    fontFamily: (Platform.OS === 'android' ? 'serif' : 'Cochin'),
    padding: 10,
  },
  title: {
    fontSize: '20',
    fontWeight: 'bold'
  },
  logs:{
    fontSize: 12,
    color: '#444444',
    fontFamily: (Platform.OS === 'ios' ? 'Courier New' : 'monospace'),
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#111111',
    padding: 10,
  },
  inputtitle:{
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputcontent:{
    height: 120,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    textAlign: 'center'
  }
});

export default App;