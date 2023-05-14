import { Component } from "react";
import { connect } from "react-redux";
import { ProfilePage } from "./index";
import { RootState } from "../../redux/store";
import {
  ProfileDataType,
  setUserProfile,
} from "../../redux/reducers/profileReducer";
import { useParams } from "react-router-dom";
import { profilesAPI } from "../../api/api";

class ProfilePageContainer extends Component<
  ProfileContainerPropsType & { params: string | undefined }
> {
  componentDidMount() {
    let userId = this.props.params;
    if (!userId) userId = "2";
    profilesAPI.getUserProfile(userId).then((data) => {
      this.props.setUserProfile(data);
    });
  }

  render() {
    return <ProfilePage profileData={this.props.profileData} />;
  }
}

type MapStatePropsType = {
  profileData: ProfileDataType | null;
};
type MapDispatchPropsType = {
  setUserProfile: (profileData: ProfileDataType) => void;
};

export type ProfileContainerPropsType = MapStatePropsType &
  MapDispatchPropsType;

const mapStateToProps = (state: RootState): MapStatePropsType => ({
  profileData: state.profilePage.profileData,
});

const withRouter = (Component: typeof ProfilePageContainer) => {
  function ComponentWithRouterProp(props: ProfileContainerPropsType) {
    const { userId } = useParams<{ userId: string | undefined }>();
    return <Component {...props} params={userId} />;
  }

  return ComponentWithRouterProp;
};

export default connect(mapStateToProps, { setUserProfile })(
  withRouter(ProfilePageContainer)
);
