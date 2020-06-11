import { Divider, Flex, Heading, Text, theme } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * @component
 * @example
 * return (
 *   <Content
 *     heading="MISSION"
 *     message="Our mission statement..."
 *     marginTop="1rem"
 *     marginBottom="1rem"
 *     dividerMargin="1rem"
 *   />
 * )
 */
const Content = ({
  heading,
  message,
  marginTop,
  marginBottom,
  dividerMargin,
}) => {
  return (
    <Flex
      direction={['column', 'column', 'column', 'row', 'row']}
      marginTop={marginTop}
      marginBottom={marginBottom}
      width="100%"
    >
      <Heading
        as="h2"
        lineHeight="1"
        verticalAlign="top"
        fontFamily={theme.fonts['heading-slab']}
        color={theme.colors['rbb-black-200']}
        textAlign={['center', 'center', 'center', 'right']}
        minW="285px"
        paddingRight={['0', '0', '1.375rem']}
      >
        {heading}
      </Heading>
      <Divider
        marginLeft={[dividerMargin, dividerMargin, '0.1875rem', '0.1875rem']}
        marginRight={[dividerMargin, dividerMargin, '1.75rem', '1.75rem']}
        marginTop={['1.5625rem', '1.5625rem', '1.5625rem', 0]}
        marginBottom={['1.5625rem', '1.5625rem', '1.5625rem', 0]}
        border="1px solid"
        borderColor="#BA2A2A" // @TODO Chakra does not like us using a variable color for this
        orientation="vertical"
      />
      <Text
        style={{ whiteSpace: 'pre-wrap' }}
        textAlign={['center', 'center', 'center', 'left']}
        paddingLeft={[0, 0, '1.5625rem', '1.5625rem']}
        marginLeft={['1.5rem', '24p1.5rem', 0]}
        marginRight={['1.5rem', '1.5rem', 0]}
      >
        {message}
      </Text>
    </Flex>
  );
};

Content.propTypes = {
  heading: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string,
  dividerMargin: PropTypes.string,
};

export default Content;
