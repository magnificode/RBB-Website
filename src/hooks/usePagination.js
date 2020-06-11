import { useState, useEffect } from 'react';

function usePagination(location, onChange) {
  const [page, setPage] = useState(1);

  useEffect(() => {
    const pageParam = new URLSearchParams(location.search).get('page');

    if (pageParam) {
      setPage(pageParam);
      onChange(pageParam);
    } else {
      setPage(1);
      onChange(1);
    }
  }, [location.search, onChange]);

  return page;
}

export default usePagination;
