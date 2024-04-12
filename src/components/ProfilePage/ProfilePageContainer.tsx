import { Component, ComponentType } from "react";
import { connect } from "react-redux";
import { ProfilePage } from "./index";
import { RootState } from "../../redux/store";
import {
  getUserProfileTC,
  ProfileDataType,
  updateProfileStatusTC,
} from "../../redux/reducers/profileReducer";
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfilePageContainer extends Component<
  ProfileContainerPropsType & { params: string | undefined }
> {
  componentDidMount() {
    let userId = this.props.params;
    if (!userId) userId = "19364";
    this.props.getUserProfileTC(userId);
  }

  render() {
    return (
      <ProfilePage
        profileData={this.props.profileData}
        status={this.props.profileStatus}
        updateStatus={this.props.updateProfileStatusTC}
      />
    );
  }
}

type MapStatePropsType = {
  profileData: ProfileDataType | null;
  profileStatus: string;
};
type MapDispatchPropsType = {
  getUserProfileTC: (userId: string) => void;
  updateProfileStatusTC: (status: string) => void;
};

export type ProfileContainerPropsType = MapStatePropsType &
  MapDispatchPropsType;

const mapStateToProps = (state: RootState): MapStatePropsType => ({
  profileData: state.profilePage.profileData,
  profileStatus: state.profilePage.profileStatus,
});

const withRouter = (Component: typeof ProfilePageContainer) => {
  function ComponentWithRouterProp(props: ProfileContainerPropsType) {
    const { userId } = useParams<{ userId: string | undefined }>();
    return <Component {...props} params={userId} />;
  }

  return ComponentWithRouterProp;
};

export default compose<ComponentType>(
  withAuthRedirect,
  connect(mapStateToProps, { getUserProfileTC, updateProfileStatusTC }),
  withRouter
)(ProfilePageContainer);
