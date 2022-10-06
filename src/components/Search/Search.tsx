import "./Search.scss";
import { FaSearch } from "react-icons/fa";

const Search = ({ open }: { open?: boolean }) => {
  return (
    <div className={`search-box ${open ? " open" : ""}`}>
      <div className="search-input">
        <input type="text" placeholder="Search for anything" />
      </div>

      <div className="search-icon">
        <FaSearch />
      </div>
    </div>
  );
};

export default Search;
