import React, {Component} from 'react';
import {
  Container,
  Content,
  Footer,
  Left,
  List,
  ListItem,
  Text,
} from 'native-base';

import ThemeChanger from 'TodoNative/App/Components/ThemeChanger';

export default class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const routes = ['Todos'];

    return (
      <Container>
        <Content>
          <List
            dataArray={routes}
            contentContainerStyle={{marginTop: 120}}
            renderRow={data => {
              return (
                <ListItem
                  button
                  noBorder
                  onPress={() => this.props.navigation.navigate(data)}>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
        <Footer>
          <Left>
            <ThemeChanger />
          </Left>
        </Footer>
      </Container>
    );
  }
}
