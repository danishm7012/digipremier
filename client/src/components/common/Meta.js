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
  title: 'Welcome To DigiPremier | Home',
  description: 'Digital marketing company',
  keywords:
    'real estate marketing, import and export advertisment, shipping and logistics marketing',
}

export default Meta
