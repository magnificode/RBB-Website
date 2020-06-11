import PropTypes from 'prop-types';
import React, { useState } from 'react';

import ResultCard from '../ResultCard';
import NoResultsCard from '../Cards/NoResultsCard';
import { Box, SimpleGrid, useTheme } from '@chakra-ui/core';

import BusinessFilter from '../Filters/BusinessFilter';
import { getLocationZip } from '../../utils/locationUtils';

function BusinessFeed({ businesses }) {
  const theme = useTheme();
  const [businessFilters, setBusinessFilters] = useState({
    type: '',
    location: '',
    need: 'true',
  });

  return (
    <Box
      maxW={theme.containers.main}
      paddingX={[null, theme.spacing.base, theme.spacing.lg]}
    >
      <BusinessFilter onSearch={filters => setBusinessFilters(filters)} />
      {businesses.length > 0 ? (
        <SimpleGrid columns={[null, 1, 2]} spacing={10}>
          {businesses.map(business => {
            return (
              <ResultCard
                key={business.objectID}
                name={business.business_name}
                category={business.category}
                description={business.business_description}
                location={business.zip_code}
                websiteUrl={business.website}
              />
            );
          })}
        </SimpleGrid>
      ) : (
        <NoResultsCard type="businesses" />
      )}
    </Box>
  );
}

BusinessFeed.propTypes = {
  businesses: PropTypes.arrayOf(PropTypes.object),
};

export default BusinessFeed;
