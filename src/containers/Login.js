import React,{Component} from "react";

import Typography from "@material-ui/core/Typography";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { toggleThemeMode, swapThemeColors } from "../store/settings/settings";
import PaddingLayout from '../components/PaddingLayout';

class Login extends Component{
  render(){
    return(
<PaddingLayout>
<Typography variant="headline">Login</Typography>

</PaddingLayout>
);
}

}

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      toggleThemeMode: checked => toggleThemeMode(checked),
      swapThemeColors: checked => swapThemeColors(checked)
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
