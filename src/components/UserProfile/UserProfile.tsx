import { Fragment, useEffect } from "react";
import { useParams } from "react-router";
import ReposContainer from "../../containers/ReposContainer";
import { IUserProfile } from "../../types/userProfileTypes";
import UserInfo from "../UserInfo/UserInfo";

interface IUserProfileProps {
  profile: IUserProfile | null;
  requestUserProfile: (login: string) => void;
  loading: boolean;
  error: string | null;
}

const UserProfile: React.FC<IUserProfileProps> = ({
  requestUserProfile,
  profile,
  loading,
  error,
}) => {
  const { login } = useParams() as any;
  useEffect(() => {
    requestUserProfile(login);
  }, [login]);

  if (error) {
    return <h1>{error}</h1>;
  }
  if (loading) return <h1>Loaing...</h1>;

  if (profile) {
    return (
      <div className="user-profile">
        <UserInfo {...profile} />
        <ReposContainer />
      </div>
    );
  }
  return <Fragment></Fragment>;
};

export default UserProfile;
