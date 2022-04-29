import React, { useEffect, useState } from "react";

interface ISearchBarProps {
  changeSearch: (query: string) => void;
  searchDelay: number;
  placeholder: string;
}

const SearchBar: React.FC<ISearchBarProps> = ({
  changeSearch,
  searchDelay,
  placeholder,
}) => {
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      changeSearch(searchValue);
    }, searchDelay);

    return () => clearTimeout(delayDebounceFn);
  }, [searchValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder={placeholder}
        value={searchValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
