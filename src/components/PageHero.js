import React from 'react';
import { Box, Stack, useTheme } from '@chakra-ui/core';

import { PageHeading, PageSubtitle } from '../components';

const PageHero = ({ title, subtitle, heroImageUrl, hasFadedHeroImage }) => {
  const theme = useTheme();

  const gradientFade =
    'linear-gradient(180deg, rgba(0, 0, 0, 0.76) 42.26%, rgba(151, 151, 151, 0.58) 58.6%, rgba(213, 214, 212, 0.81) 70.71%, rgba(247, 247, 242, 0.96) 86.19%, #FFFFFF 101%), ';
  return (
    <>
      {heroImageUrl && (
        <Box
          position="absolute"
          zIndex={-9}
          top={0}
          left={0}
          width="100%"
          height="100vh"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="top center"
          backgroundImage={`${
            hasFadedHeroImage ? gradientFade : ''
          } url(${heroImageUrl})`}
        />
      )}
      <Box as="header" position="relative" color={theme.colors['rbb-white']}>
        <Stack
          zIndex={2}
          display="block"
          flexDirection="column"
          alignItems="center"
          padding="70px 24px 1.5rem"
          minHeight="240px"
        >
          <PageHeading>{title}</PageHeading>
          <PageSubtitle>{subtitle}</PageSubtitle>
        </Stack>
      </Box>
    </>
  );
};

export default PageHero;
