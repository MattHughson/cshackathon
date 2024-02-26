import { storyblokEditable } from '@storyblok/react'
import { Heading } from '@react-email/components'

const Teaser = ({ blok }) => {
  return (
    <Heading
      className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0"
      {...storyblokEditable(blok)}
    >
      {blok.headline}
    </Heading>
  )
}

export default Teaser
