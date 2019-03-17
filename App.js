/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import FormLogin from './Components/Login/LoginForm';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Container>
        <Content>
          <FormLogin></FormLogin>
        </Content>
      </Container>
    );
  }
};
