import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleProvider} from 'native-base';

import AppNavigation from 'TodoNative/App/Navigation/AppNavigation';
import getTheme from 'TodoNative/App/Theme/components';
import materialLight from 'TodoNative/App/Theme/variables/materialLight';
import materialDim from 'TodoNative/App/Theme/variables/materialDim';

class RootContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const themes = {
      light: materialLight,
      dim: materialDim,
    };

    return (
      <StyleProvider style={getTheme(themes[this.props.theme.currentTheme])}>
        <AppNavigation />
      </StyleProvider>
    );
  }
}

const mapStateToProps = state => {
  return {...state};
};

export default connect(mapStateToProps)(RootContainer);
