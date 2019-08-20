import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleProvider} from 'native-base';

import getTheme from 'TodoNative/native-base-theme/components';
import AppNavigation from 'TodoNative/App/Navigation/AppNavigation';

class RootContainer extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.theme.currentTheme.containerBgColor !==
      this.props.theme.currentTheme.containerBgColor
    );
  }

  render() {
    return (
      <StyleProvider style={getTheme(this.props.theme.currentTheme)}>
        <AppNavigation />
      </StyleProvider>
    );
  }
}

const mapStateToProps = state => {
  return {...state};
};

export default connect(mapStateToProps)(RootContainer);
