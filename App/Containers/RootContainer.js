import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleProvider } from 'native-base';

import getTheme from 'TodoNative/native-base-theme/components';
import AppNavigation from 'TodoNative/App/Navigation/AppNavigation';

class RootContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyleProvider style={getTheme(this.props.theme)}>
        <AppNavigation />
      </StyleProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return { theme: state.theme.theme };
};

export default connect(mapStateToProps)(RootContainer);
