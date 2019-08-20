import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
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
            contentContainerStyle={styles.listContainer}
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

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 120,
  },
});
