import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Flex } from '@chakra-ui/core';
import ErrorBoundary from './../ErrorBoundary';
import { NavMenu, NavItem } from '../Nav';
import Link from './../Link';

const FooterLinks = () => {
  return (
    <ErrorBoundary>
      <StaticQuery
        query={MenuLinks}
        render={data => {
          return (
            <NavMenu
              as={Flex}
              w={['90%', '90%', '90%', 'full']}
              justify="space-evenly"
              wrap={['wrap', 'wrap', 'wrap', null]}
              align="center"
            >
              {[
                ...data.site.siteMetadata.menuLinks,
                {
                  name: 'Legal',
                  slug: '/legal',
                },
              ].map(link => (
                <NavItem
                  key={link.name}
                  mr="2"
                  mt={[2, 2, 2, null]}
                  display="flex"
                >
                  <Link variant="footer" to={link.slug}>
                    {link.name}
                  </Link>
                </NavItem>
              ))}
            </NavMenu>
          );
        }}
      />
    </ErrorBoundary>
  );
};

const MenuLinks = graphql`
  query FooterLinksQuery {
    site {
      siteMetadata {
        menuLinks {
          name
          slug
        }
      }
    }
  }
`;

export default FooterLinks;
