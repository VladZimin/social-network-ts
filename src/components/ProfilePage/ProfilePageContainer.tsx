import { Component } from "react";
import { connect } from "react-redux";
import { ProfilePage } from "./index";
import { RootState } from "../../redux/store";
import {
  getUserProfileTC,
  ProfileDataType,
} from "../../redux/reducers/profileReducer";
import { useParams } from "react-router-dom";

class ProfilePageContainer extends Component<
  ProfileContainerPropsType & { params: string | undefined }
> {
  componentDidMount() {
    let userId = this.props.params;
    if (!userId) userId = "2";
    this.props.getUserProfileTC(userId);
  }

  render() {
    return <ProfilePage profileData={this.props.profileData} />;
  }
}

type MapStatePropsType = {
  profileData: ProfileDataType | null;
};
type MapDispatchPropsType = {
  getUserProfileTC: (userId: string) => void;
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

export default connect(mapStateToProps, { getUserProfileTC })(
  withRouter(ProfilePageContainer)
);
