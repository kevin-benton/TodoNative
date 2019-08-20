import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Button, Icon} from 'native-base';
import {clearThemeCache} from 'native-base-shoutem-theme';

// This is the only place other than the theme redux file where the themes should be imported directly.
import MaterialLightTheme from 'TodoNative/App/Theme/MaterialLightTheme';

import Creators from 'TodoNative/App/Redux/ThemeRedux';

class ThemeChanger extends Component {
  constructor(props) {
    super(props);
  }

  toggleTheme() {
    const currentBgColor = this.props.theme.currentTheme.containerBgColor;
    const lightBgColor = MaterialLightTheme.containerBgColor;

    clearThemeCache();

    if (currentBgColor === lightBgColor) {
      this.props.useDimTheme();
    } else {
      this.props.useLightTheme();
    }
  }

  render() {
    const icon =
      this.props.theme.currentTheme.containerBgColor ===
      MaterialLightTheme.containerBgColor
        ? 'md-cloud'
        : 'md-cloud-outline';

    return (
      <Button primary transparent onPress={() => this.toggleTheme()}>
        <Icon name={icon} />
      </Button>
    );
  }
}

ThemeChanger.navigationOptions = ({navigation}) => {
  return {
    header: null,
  };
};

const mapStateToProps = state => {
  return {...state};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      ...Creators,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ThemeChanger);
