import { Flex } from '@chakra-ui/core';
import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import ErrorBoundary from '../ErrorBoundary';
import { Envelope } from './../SVG/Envelope';
import { Facebook } from './../SVG/Facebook';
import { Instagram } from './../SVG/Instagram';
import { Twitter } from './../SVG/Twitter';

const SocialLinks = () => {
  // @TODO: add paypal link to config and here once it is ready
  return (
    <ErrorBoundary>
      <StaticQuery
        query={Links}
        render={data => (
          <Flex
            w={['90%', '80%']}
            justify="space-evenly"
            mr={[0, 0, 0, 2]}
            ml={[0, 0, 0, 2]}
          >
            <Facebook
              link={`https://facebook.com/${data.site.siteMetadata.social.fbAppID}`}
            />
            <Instagram
              link={`https://instagram.com/${data.site.siteMetadata.social.instagram}`}
            />
            <Twitter
              link={`https://twitter.com/${data.site.siteMetadata.social.twitter}`}
            />
            <Envelope
              link={`mailto:${data.site.siteMetadata.social.contact}`}
            />
          </Flex>
        )}
      />
    </ErrorBoundary>
  );
};

export default SocialLinks;

const Links = graphql`
  query SocialLinksQuery {
    site {
      siteMetadata {
        social {
          twitter
          fbAppID
          instagram
          github
          contact
        }
      }
    }
  }
`;
