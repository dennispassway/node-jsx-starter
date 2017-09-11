import React from 'react'
import { string } from 'prop-types'

import Page from './components/Page'

export default function Home({ title }) {
  return (
    <Page
      description={'Description'}
      host={'localhost'}
      title={title}
      twitter={'@dennispassway'}
    >
      {title}
    </Page>
  )
}

Home.propTypes = {
  title: string.isRequired,
}
