import { storyblokEditable } from '@storyblok/react'
import {
  Img,
  Row,
  Button,
  Section,
  Link,
  Heading,
  Text,
} from '@react-email/components'

const Hero = ({ blok }) => {
  return (
    <Section {...storyblokEditable(blok)} className="p-[10px]">
      <Img
        className="my-4 border p-4"
        src={blok.logo.filename}
        alt="Your Company"
      />
      <Text className="border p-2 block rounded-full w-full">
        Anim aute id magna aliqua ad ad non deserunt sunt.{' '}
        <Link href="#" className="whitespace-nowrap font-semibold ">
          Read more.
        </Link>
      </Text>
      <Heading className="mt-24 p-4 text-[36px] font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
        {blok.Header}
      </Heading>

      <Section className="text-center mt-[32px] mb-[32px]">
        <Button className="bg-[#000000] rounded-full text-[#fff]  p-4" href="#">
          Join the team
        </Button>
      </Section>
      <Img className="my-4 p-4" src={blok.heroimage?.filename} alt="" />
    </Section>
  )
}

export default Hero
