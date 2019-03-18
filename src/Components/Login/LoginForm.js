import React, { Component } from 'react';
import {
  Container, Header, Content, Form, Item, Input, Button, Text
} from 'native-base';

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
      <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input
                placeholder="Username"
                value={this.state.user}
                onChangeText={user => this.setState({ user })}
              />
            </Item>
            <Item last>
              <Input
                secureTextEntry
                placeholder="Password"
                value={this.state.password}  
                onChangeText={password => this.setState({ password })}
              />
            </Item>
            <Button block>
              <Text> Salvar </Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
