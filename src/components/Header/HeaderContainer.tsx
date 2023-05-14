import React from "react";
import Header from "./index";
import {
  AuthDataType,
  setAuthUserData,
} from "../../redux/reducers/authReducer";
import { connect } from "react-redux";
import { RootState } from "../../redux/store";
import { authAPI } from "../../api/api";

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
  componentDidMount() {
    authAPI.getAuthUserData().then((data) => {
      if (data.resultCode === 0) {
        this.props.setAuthUserData(data.data);
      }
    });
  }

  render() {
    return <Header login={this.props.login} isAuth={this.props.isAuth} />;
  }
}

type mapDispatchToPropsType = {
  setAuthUserData: (authUserData: AuthDataType) => void;
};
type mapStateToPropsType = {
  isAuth: boolean;
  login: null | string;
};
type HeaderContainerPropsType = mapDispatchToPropsType & mapStateToPropsType;

const mapStateToProps = (state: RootState): mapStateToPropsType => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
