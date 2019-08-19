import React, { Component } from 'react';
import { Body, Button, Container, Content, Header, Icon, Left, List, ListItem, Right, Text, Title } from 'native-base';

export default class SettingsScreen extends Component {
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
            <Title>Settings</Title>
          </Body>
          <Right />
        </Header>
      )
    };
  };

  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem itemDivider>
              <Text>Personalization</Text>
            </ListItem>
            <ListItem button onPress={() => this.props.navigation.navigate('Theme')}>
              <Text>Display</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
