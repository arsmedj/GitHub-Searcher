interface IUserInfoProps {
  login: string;
  email: string | null;
  location: string;
  created_at: string;
  followers: number;
  following: number;
  avatar_url: string;
  bio: string | null;
}

const UserInfo: React.FC<IUserInfoProps> = ({
  login,
  location,
  followers,
  following,
  email,
  created_at,
  avatar_url,
  bio,
}) => {
  return (
    <div className="info-block">
      <div className="main">
        <img src={avatar_url} alt="ava" />
        <div className="text">
          <p>{login}</p>
          <p>{email}</p>
          <p>{location}</p>
          <p>{new Date(created_at).toLocaleDateString("en-US")}</p>
          <p>{followers} Followers</p>
          <p>Following {following}</p>
        </div>
      </div>
      <p className="bio-text">{bio}</p>
    </div>
  );
};

export default UserInfo;
