import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { MDXComponents } from './mdxComponents'

import Layout from './components/layout'

import { LocaleProvider } from './components/localeProvider'
import { RootSEO } from './components/rootSeo'

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={MDXComponents}>{element}</MDXProvider>
}

export const wrapPageElement = ({ element, props }) => {
  const { pageContext, location } = props

  return Object.keys(pageContext).length !== 0 ? (
    <LocaleProvider value={pageContext}>
      <RootSEO pageContext={pageContext} location={location} />
      <Layout {...props}>{element}</Layout>
    </LocaleProvider>
  ) : (
    element
  )
}
