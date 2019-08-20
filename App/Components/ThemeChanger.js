import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Button, Icon} from 'native-base';
import {clearThemeCache} from 'native-base-shoutem-theme';

import Creators, {LIGHT_THEME} from 'TodoNative/App/Redux/ThemeRedux';

class ThemeChanger extends Component {
  constructor(props) {
    super(props);
  }

  toggleTheme() {
    const currentTheme = this.props.theme.currentTheme;
    clearThemeCache();

    if (currentTheme === LIGHT_THEME) {
      this.props.useDimTheme();
    } else {
      this.props.useLightTheme();
    }
  }

  render() {
    const icon =
      this.props.theme.currentTheme === LIGHT_THEME
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
