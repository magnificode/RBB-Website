import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

const SEO = ({ canonicalUrl }) => {
  const { site } = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            title
            description
            siteUrl
            image
            author {
              name
            }
            organization {
              name
              url
              logo
            }
            social {
              twitter
              fbAppID
            }
          }
        }
      }
    `
  );

  const { siteMetadata: seo, social } = site;

  const title = seo?.title;
  const description = seo?.description;
  const image = seo?.image;
  const url = seo?.siteUrl;

  return (
    <>
      <Helmet
        defaultTitle={title}
        titleTemplate={`%s - ${title}`}
        htmlAttributes={{ lang: 'en' }}
      >
        {/* General tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <link rel="canonical" href={canonicalUrl} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="fb:app_id" content={social?.fbAppID} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={social?.twitter} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <script
          src="https://cdn.usefathom.com/script.js"
          spa="auto"
          site={process.env.FATHOM_SITE_ID}
          defer
        />
      </Helmet>
    </>
  );
};

SEO.propTypes = {
  canonicalUrl: PropTypes.string,
};

export default SEO;
