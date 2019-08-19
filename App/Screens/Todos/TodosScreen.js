import React, { Component } from 'react';
import { Body, Button, Container, Header, Content, Card, CardItem, Icon, Left, Right, Spinner, Text, Title } from 'native-base';

export default class TodosScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <Header>
          <Left>
            <Button transparent onPress={() => navigation.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Todos</Title>
          </Body>
          <Right />
        </Header>
      )
    };
  };

  render() {
    return (
      <Container>
        <Content padder>

        </Content>
      </Container>
    );
  }
}
