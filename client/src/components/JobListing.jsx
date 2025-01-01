import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const JobListing = () => {
  const { isSearched, searchedFilter } = useContext(AppContext);
  return (
    <div>
      {/* Sidebar */}
      <div>
        {/* Search Filter from Hero  */}
        {
            isSearched && (searchedFilter.title !== "" || searchedFilter.location !== "")&&(
                <>
                <h3>Current Search</h3>
                <div>
                  {searchedFilter.title &&(
                    <span>

                    </span>
                  )}{
                    searchedFilter.location && (
                      <span>

                      </span>
                    )
                  }
                </div>
                </>
            )
        }
      </div>
    </div>
  );
};

export default JobListing;
