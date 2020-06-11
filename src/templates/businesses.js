import React from 'react';

import { Flex } from '@chakra-ui/core';
import { PageHero, BusinessFeed } from '../components';
import CardSkeleton from '../components/Loading/CardSkeleton';
import Pagination from '../components/Pagination';

import useAlgoliaSearch from '../hooks/useAlgoliaSearch';
import usePagination from '../hooks/usePagination';

export default function Businesses(props) {
  const { results, totalPages, setSearchPage } = useAlgoliaSearch();
  const page = usePagination(props.location, page => setSearchPage(page));

  const pageSubtitle = (
    <p>
      These business owners have been impacted during the protests. Your support
      will assist their rebuilding efforts. If you are a business owner in need,
      please <a href="#temp">sign up to be added to our list</a>
    </p>
  );

  const heroBackgroundImageUrl =
    '//res.cloudinary.com/rebuild-black-business/image/upload/c_scale,f_auto,h_0.6,q_auto/v1/assets/business-header';

  return (
    <>
      <Flex align="center" justify="center" direction="column">
        <PageHero
          title="Businesses"
          subtitle={pageSubtitle}
          heroImageUrl={heroBackgroundImageUrl}
          hasFadedHeroImage
        />

        <CardSkeleton data={results}>
          <BusinessFeed businesses={results} />
        </CardSkeleton>

        <Pagination
          location={props.location}
          currentPage={parseInt(page)}
          totalPages={parseInt(totalPages) - 1}
        />
      </Flex>
    </>
  );
}
