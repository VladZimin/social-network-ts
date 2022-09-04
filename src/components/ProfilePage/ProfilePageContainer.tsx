import { Component } from "react";
import { connect } from "react-redux";
import { ProfilePage } from "./index";
import axios from "axios";
import { RootState } from "../../redux/store";
import {
  ProfileDataType,
  setUserProfile,
} from "../../redux/reducers/profileReducer";

class ProfilePageContainer extends Component<ProfileContainerType> {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export type ProfileContainerType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: RootState): MapStatePropsType => ({
  profileData: state.profilePage.profileData,
});
export default connect(mapStateToProps, { setUserProfile })(
  ProfilePageContainer
);
