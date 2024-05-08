import { Component, ComponentType } from "react";
import { connect } from "react-redux";
import { ProfilePage } from "./index";
import { RootState } from "../../redux/store";
import {
  getUserProfileTC,
  ProfileDataType,
  updateProfileDataTC,
  updateProfilePhotoTC,
  updateProfileStatusTC,
} from "../../redux/reducers/profileReducer";
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { ProfileFormDataType } from "./ProfileInfo/ProfileFormData";

class ProfilePageContainer extends Component<
  ProfileContainerPropsType & { params: string | undefined }
> {
  componentDidMount() {
    let userId = this.props.params;
    if (!userId) userId = this.props.authorizedUserId?.toString();
    if (userId) this.props.getUserProfileTC(userId);
  }

  render() {
    return (
      <ProfilePage
        profileData={this.props.profileData}
        status={this.props.profileStatus}
        updateStatus={this.props.updateProfileStatusTC}
        isOwner={!this.props.params}
        savePhoto={this.props.updateProfilePhotoTC}
        updateProfile={this.props.updateProfileDataTC}
      />
    );
  }
}

type MapStatePropsType = {
  profileData: ProfileDataType | null;
  profileStatus: string;
  authorizedUserId: number | null;
};
type MapDispatchPropsType = {
  getUserProfileTC: (userId: string) => void;
  updateProfileStatusTC: (status: string) => void;
  updateProfilePhotoTC: (file: File) => void;
  updateProfileDataTC: (data: ProfileFormDataType) => void;
};

export type ProfileContainerPropsType = MapStatePropsType &
  MapDispatchPropsType;

const mapStateToProps = (state: RootState): MapStatePropsType => ({
  profileData: state.profilePage.profileData,
  profileStatus: state.profilePage.profileStatus,
  authorizedUserId: state.auth.id,
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
  connect(mapStateToProps, {
    getUserProfileTC,
    updateProfileStatusTC,
    updateProfilePhotoTC,
    updateProfileDataTC,
  }),
  withRouter
)(ProfilePageContainer);
