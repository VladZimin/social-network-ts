import React from "react";
import Header from "./index";
import { connect } from "react-redux";
import { RootState } from "../../redux/store";
import { getAuthUserDataTC } from "../../redux/reducers/authReducer";

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
  componentDidMount() {
    this.props.getAuthUserDataTC();
  }

  render() {
    return <Header login={this.props.login} isAuth={this.props.isAuth} />;
  }
}

type mapDispatchToPropsType = {
  getAuthUserDataTC: () => void;
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

export default connect(mapStateToProps, { getAuthUserDataTC })(HeaderContainer);
