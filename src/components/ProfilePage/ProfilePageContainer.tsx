import { Component } from "react";
import { connect } from "react-redux";
import { ProfilePage } from "./index";
import axios from "axios";
import { RootState } from "../../redux/store";
import { ProfileDataType } from "../../redux/state";
import { setUserProfile } from "../../redux/reducers/profileReducer";

export type ProfileContainerType = {
  profileData: ProfileDataType | null;
  setUserProfile: (profileData: ProfileDataType) => void;
};

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

const mapStateToProps = (state: RootState) => ({
  profileData: state.profilePage.profileData,
});
export default connect(mapStateToProps, { setUserProfile })(
  ProfilePageContainer
);
