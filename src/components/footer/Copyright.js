import React from 'react';
import { Flex, Text, useTheme } from '@chakra-ui/core';

const DynamicYear = new Date().getFullYear();

const Copyright = () => {
  const theme = useTheme();
  return (
    <Flex w="full" justify="center" align="center">
      <Flex
        w={['80%', '80%', '80%', 'full']}
        justify="center"
        textAlign="center"
      >
        <Text
          fontSize="12px"
          fontFamily={theme.fonts.heading}
          color={theme.colors['rbb-white']}
          opacity={0.5}
        >
          Copyright &copy; {DynamicYear} Rebuild Black Businesses. All rights
          reserved.
        </Text>
      </Flex>
    </Flex>
  );
};

export default Copyright;
