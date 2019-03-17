import React, { Component } from 'react';
import { AppRegistry, TextInput } from 'react-native';

export default class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
    };
  }

  render() {
    return (
      <view>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={user => this.setState({ user })}
          placeholder="Digite seu usuário"
          // eslint-disable-next-line react/destructuring-assignment
          value={this.state.user}
        />

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={password => this.setState({ password })}
          // eslint-disable-next-line react/destructuring-assignment
          value={this.state.password}
        />
      </view>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('coke-counter', () => FormLogin);
