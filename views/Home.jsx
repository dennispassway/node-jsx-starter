import React from 'react'
import { string } from 'prop-types'

import Page from './components/Page'

export default function Home({ title }) {
  return (
    <Page
      description={'Zijn de Wordpress sites wel up to date?'}
      host={'localhost'}
      title={title}
      twitter={'@kaliberinteract'}
    >
      {title}
    </Page>
  )
}

Home.propTypes = {
  title: string.isRequired,
}
