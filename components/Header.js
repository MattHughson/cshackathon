import React from 'react'

const Header = ({blok}) => {
    const {heading, tagline} = blok
  return (
    <div className="bg-white px-4 py-20 sm:py-28 lg:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{heading}</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
         {tagline}
        </p>
      </div>
    </div>
  )
}

export default Header