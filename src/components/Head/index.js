import React from 'react'
import Helmet from 'react-helmet'

const Head = ({ title, description, url, image }) => (
  <div>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Helmet>
  </div>
)

Head.defaultProps = {
  title: 'Gatsby Bootstrap 3 Starter',
  description: 'Gatsby Bootstrap 3 Starter',
  url: 'http://example.com',
  image: 'http://example.com/image.jpg'
}

export default Head
