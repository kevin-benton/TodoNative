import React, {Component} from 'react';
import {
  Body,
  Button,
  Container,
  Header,
  Content,
  Icon,
  Left,
  Right,
  Title,
} from 'native-base';

export default class TodosScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Todos</Title>
          </Body>
          <Right />
        </Header>
        <Content padder />
      </Container>
    );
  }
}

TodosScreen.navigationOptions = ({navigation}) => {
  return {
    header: null,
  };
};
