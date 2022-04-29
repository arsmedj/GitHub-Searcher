import { Link } from "react-router-dom";
import { IUserRepo } from "../../types/userReposTypes";

interface IRepoListItemProps {
  repo: IUserRepo;
}

const RepoListItem: React.FC<IRepoListItemProps> = ({ repo }) => {
  return (
    <a href={`${repo.html_url}`} target="_blank">
      <div className="item">
        <p>{repo.name}</p>
        <div className="repo-info">
          <p>{repo.forks_count} Forks</p>
          <p>{repo.stargazers_count} Stars</p>
          <p></p>
        </div>
      </div>
    </a>
  );
};

export default RepoListItem;
