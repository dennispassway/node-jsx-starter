import React from 'react'

import Page from './Page'

export default function Home() {
  return (
    <Page
      description={'Hier de description'}
      host={'localhost'}
      title={'Hier de title'}
      twitter={'@floephaan'}
    >
      <p>test</p>
    </Page>
  )
}
