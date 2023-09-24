import { connect } from "react-redux";
import { RootState } from "../redux/store";
import React, { ComponentType } from "react";
import { Navigate } from "react-router-dom";

type MapStateToPropsType = {
  isAuth: boolean;
};
const mapStateToProps = (state: RootState): MapStateToPropsType => ({
  isAuth: state.auth.isAuth,
});

export function withAuthRedirect<T>(Component: ComponentType<T>) {
  const RedirectComponent: React.FC<MapStateToPropsType> = ({
    isAuth,
    ...restProps
  }) => {
    if (!isAuth) {
      return <Navigate to={"/login"} />;
    }
    return <Component {...(restProps as T)} />;
  };
  return connect(mapStateToProps)(RedirectComponent);
}
