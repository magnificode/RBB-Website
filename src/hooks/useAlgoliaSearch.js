import { useState, useEffect } from 'react';
import algoliasearch from 'algoliasearch/lite';

const client = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
);
const index = client.initIndex(process.env.GATSBY_ALGOLIA_INDEX);

const LOADING_STATE = {
  NONE: 'none',
  INITIAL: 'intial',
  SEARCHING: 'searching',
};

function useAlgoliaSearch({ page = 1 } = {}) {
  const [results, setResults] = useState([]);
  const [loadingState, setLoadingState] = useState(LOADING_STATE.INITIAL);
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(page);

  useEffect(() => {
    async function getBusinesses() {
      try {
        const algoliaResponse = await index.search('', {
          page: currentPage,
        });

        setResults(algoliaResponse.hits);
        setTotalPages(algoliaResponse.nbPages);
        setTotalResults(algoliaResponse.nbHits);
        setLoadingState(LOADING_STATE.NONE);
      } catch (e) {
        console.log('error searching', e);
      }
    }

    getBusinesses();
  }, [currentPage]);

  return {
    results,
    totalPages,
    totalResults,
    loadingState,
    setSearchPage: setCurrentPage,
  };
}

export default useAlgoliaSearch;
export { LOADING_STATE };
