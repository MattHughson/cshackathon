import { Body, Head, Html, Preview } from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'
import * as React from 'react'
export function ReactEmail({ children }) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          {children}
        </Body>
      </Tailwind>
    </Html>
  )
}
