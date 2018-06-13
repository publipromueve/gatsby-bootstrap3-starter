import React from 'react'
import Helmet from 'react-helmet'

export default ({ title, description, url, image }) => (
  <div>
    <Helmet>
      <title>Title</title>
      <meta name="description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Helmet>
  </div>
)
