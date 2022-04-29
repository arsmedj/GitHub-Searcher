import { Fragment, useState } from "react";
import { connect } from "react-redux";
import List from "../components/List/List";
import RepoListItem from "../components/RepoListItem/RepoListItem";
import SearchBar from "../components/SearchBar/SearchBar";
import { RootState } from "../store";
import { IUserRepo } from "../types/userReposTypes";

interface IReposContainerProps {
  repos: IUserRepo[] | null;
  loading: boolean;
  error: string | null;
}

const ReposContainer: React.FC<IReposContainerProps> = ({
  repos,
  loading,
  error,
}) => {
  const [filter, setFilter] = useState<string>("");

  const handleFilterRepos = (value: string) => {
    setFilter(value);
  };

  return (
    <Fragment>
      <SearchBar
        searchDelay={0}
        placeholder="Search for User`s Repositories"
        changeSearch={handleFilterRepos}
      />
      {repos && (
        <List
          items={repos.filter((item) =>
            item.name.toLowerCase().includes(filter.toLowerCase())
          )}
          loading={loading}
          error={error}
          renderItem={(repo: IUserRepo) => (
            <RepoListItem key={repo.id} repo={repo} />
          )}
        />
      )}
    </Fragment>
  );
};

const mapStateToProps = (state: RootState) => ({
  repos: state.repos.items,
  loading: state.repos.loading,
  error: state.repos.error,
});

export default connect(mapStateToProps, {})(ReposContainer);
