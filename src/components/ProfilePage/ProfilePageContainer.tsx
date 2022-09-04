import { Component } from "react";
import { connect } from "react-redux";
import { ProfilePage } from "./index";
import axios from "axios";
import { RootState } from "../../redux/store";
import {
  ProfileDataType,
  setUserProfile,
} from "../../redux/reducers/profileReducer";
import { useParams } from "react-router-dom";

class ProfilePageContainer extends Component<
  ProfileContainerPropsType & { params: string | undefined }
> {
  componentDidMount() {
    let userId = this.props.params;
    if (!userId) userId = "2";
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((res) => {
        this.props.setUserProfile(res.data);
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
    console.log(userId);
    return <Component {...props} params={userId} />;
  }

  return ComponentWithRouterProp;
};

export default connect(mapStateToProps, { setUserProfile })(
  withRouter(ProfilePageContainer)
);
