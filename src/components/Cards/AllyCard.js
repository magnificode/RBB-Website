import {
  Box,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useTheme,
} from '@chakra-ui/core';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React, { forwardRef, useRef } from 'react';
import { zipcodeConversion } from '../../utils/locationUtils';
import Button from '../Button';
import {
  CardButton,
  CardButtonGroup,
  CardContent,
  CardHeading,
  CardText,
  CardWrapper,
} from '../Card';
import ErrorBoundary from '../ErrorBoundary';
import Link from '../Link';

// @TODO :: Add proper content to this modal. Probably pull this out into its own file seeing as its going to be a form
const ModalForm = ({ isOpen, onClose, title }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader maxWidth="97%">{title}</ModalHeader>
      <ModalCloseButton />
      <ErrorBoundary>
        <StaticQuery
          query={ContactQuery}
          render={data => (
            <ModalBody>
              Please send an email to{' '}
              <Link
                variant="standard"
                href={`mailto:${data.site.siteMetadata.social.contact}`}
              >
                {data.site.siteMetadata.social.contact}
              </Link>{' '}
              to report or remove this listing.
            </ModalBody>
          )}
        />
      </ErrorBoundary>
      <ModalFooter>
        <Button variantColor="blue" m={3} onClick={onClose}>
          Close
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

const ContactQuery = graphql`
  query ReportRemoveContactQuery {
    site {
      siteMetadata {
        social {
          contact
        }
      }
    }
  }
`;

/**
 * @component
 * @example
 * return (
 *   <AllyCard
 *     name="Jane Example"
 *     email="example@example.com"
 *     specialty="Tech"
 *     location="Atlanta, GA"
 *   />
 * )
 */
const AllyCard = forwardRef(
  ({ first, last, email, specialty, location, ...props }, ref) => {
    const { onOpen, isOpen, onClose } = useDisclosure();
    const { reportRef, updateRef } = useRef();
    const theme = useTheme();

    const name = `${first} ${last}`;
    const zipInfo = zipcodeConversion(location);
    const formattedCity = zipInfo ? `${zipInfo.city}, ${zipInfo.state}` : null;

    return (
      <>
        <CardWrapper ref={ref} {...props}>
          <CardContent
            bg={theme.colors['rbb-white']}
            color={theme.colors['rbb-black-100']}
            display="flex"
            flexDirection="column"
          >
            <CardHeading
              fontFamily={theme.fonts['heading-slab']}
              textTransform="uppercase"
              fontSize={theme.fontSizes.xl}
              lineHeight="1"
              overflowWrap="break-word"
              wordWrap="break-word"
              wordBreak="break-word"
              hyphens="auto"
            >
              {name}
            </CardHeading>
            {formattedCity && (
              <CardText
                as="p"
                fontFamily={theme.fonts.heading}
                fontSize={theme.fontSizes.lg}
              >
                {formattedCity}
              </CardText>
            )}
            {specialty && (
              <CardText
                as="span"
                fontFamily={theme.fonts.heading}
                fontSize={theme.fontSizes.sm}
              >
                {specialty}
              </CardText>
            )}
            <Box marginTop="auto" paddingTop={theme.spacing.base}>
              <CardButtonGroup pb={3}>
                <CardButton as="a" href={`mailto:${email}`}>
                  Email
                </CardButton>
              </CardButtonGroup>
              <Text as="small" fontSize="sm" mt={3} isInline>
                <Icon
                  name="flag"
                  color={theme.colors['rbb-gray']}
                  mr={theme.spacing.xs}
                />
                <Link
                  as="button"
                  variant="cta"
                  onClick={onOpen}
                  ref={reportRef}
                >
                  Report
                </Link>{' '}
                or{' '}
                <Link
                  as="button"
                  variant="cta"
                  onClick={onOpen}
                  ref={updateRef}
                >
                  unlist
                </Link>
              </Text>
            </Box>
          </CardContent>
        </CardWrapper>

        <ModalForm
          isOpen={isOpen}
          title={`Report or Update the listing for "${name}"`}
          onClose={onClose}
        />
      </>
    );
  }
);

AllyCard.displayName = 'AllyCard';
AllyCard.propTypes = {
  specialty: PropTypes.string,
  first: PropTypes.string,
  last: PropTypes.string,
  location: PropTypes.string,
  email: PropTypes.string.isRequired,
};
export { AllyCard };
export default AllyCard;
