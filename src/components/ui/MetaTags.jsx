import React from 'react';
import { Helmet } from 'react-helmet';

const MetaTags = (props) => {
   const {title, description, imageUrl, websiteUrl} = props;
   return (
  <Helmet>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={imageUrl} />
    <meta property="og:url" content={websiteUrl} />
    <meta property="og:type" content="website" />
  </Helmet>
  )
};

export default MetaTags;
