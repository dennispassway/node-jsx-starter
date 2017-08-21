import React from 'react'
import { node, string } from 'prop-types'

const isProd = process.env.NODE_ENV === 'production'

export default function Page({ children, title, description, twitter, host }) {
  return (
    <html lang={'nl'}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="application-name" content={title} />
        <meta name="description" content={description} />

        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content={`${host}/static/images/og-image.jpg`} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={twitter} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${host}`} />
        <meta property="og:image" content={`${host}/static/images/og-image.jpg`} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={title} />

        <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" href="/static/favicons/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/static/favicons/favicon-16x16.png" sizes="16x16" />
        <link rel="manifest" href="/static/favicons/manifest.json" />
        <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#2e294e" />
        <link rel="shortcut icon" href="/static/favicons/favicon.ico" />
        <meta name="msapplication-config" content="/static/favicons/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      </head>

      <body>
        {children}

        <script src={isProd ? '/dist/bundle.js' : 'http://0.0.0.0:3000/dist/bundle.js'} />
      </body>
    </html>
  )
}

Page.propTypes = {
  children: node,
  description: string.isRequired,
  host: string.isRequired,
  title: string.isRequired,
  twitter: string,
}

Page.defaultProps = {
  children: {},
  twitter: '@dennispassway',
}
