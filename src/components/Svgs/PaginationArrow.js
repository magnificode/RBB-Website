import React from 'react';
import { PseudoBox, Box, IconButton } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

/**
 * @function PaginationArrow
 *
 * @param {function} onClick - Callback function that runs when icon is clicked
 * @param {boolean} isDisabled - Boolean that determines whether the icon is disabled
 * @param {string} direction - Direction the arrow points
 *
 */

const PaginationArrow = ({ hidden, direction, linkTo }) => {
  return hidden ? (
    <Box width={10} height={10} />
  ) : (
    <PseudoBox
      display="flex"
      alignItems="center"
      justifyContent="center"
      height={10}
      width={10}
      stroke="rbb-black"
      _hover={{
        color: 'rbb-orange',
      }}
      _active={{
        color: 'rbb-white',
      }}
      _focus={{
        color: 'rbb-white',
      }}
    >
      <Link to={linkTo}>
        <IconButton
          display="flex"
          alignItems="center"
          justifyContent="center"
          aria-label={`Go to ${
            direction === 'NEXT' ? 'next' : 'previous'
          } page`}
          variant="unstyled"
          icon={direction === 'NEXT' ? 'arrowRight' : 'arrowLeft'}
          fontSize="28px"
          minWidth={0}
        />
      </Link>
    </PseudoBox>
  );
};

PaginationArrow.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  direction: PropTypes.oneOf(['PREVIOUS', 'NEXT']).isRequired,
  linkTo: PropTypes.string.isRequired,
};

export default PaginationArrow;
