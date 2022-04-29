import { connect } from "react-redux";
import UserProfile from "../components/UserProfile/UserProfile";
import { RootState } from "../store";
import { requestUserProfile } from "../store/actions/userProfile";
const mapStateToProps = (state: RootState) => ({
  profile: state.currentUser.profile,
  loading: state.currentUser.loading,
  error: state.currentUser.error,
});

export default connect(mapStateToProps, { requestUserProfile })(UserProfile);
