import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome To Paradise Group Of Companies | Home',
  description: 'We sell the best products for cheap',
  keywords: 'real estate, import and export, shipping and logistics',
}

export default Meta
