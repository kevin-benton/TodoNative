import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';

export default class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const routes = ['Todos', 'Settings'];

    return (
      <Container>
        <Content>
          <List
            dataArray={routes}
            contentContainerStyle={{ marginTop: 120 }}
            renderRow={data => {
              return (
                <ListItem
                  button
                  noBorder
                  onPress={() => this.props.navigation.navigate(data)}
                >
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
