import { Container } from '@react-email/components'
import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import { Fragment } from 'react'
import { ReactEmail } from './ReactEmail'
export function Page({ renderEmail, blok }) {
  const Wrapper = renderEmail ? ReactEmail : Fragment

  return (
    <Wrapper>
      <Container
        {...storyblokEditable(blok)}
        className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]"
      >
        {blok.body.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </Container>
    </Wrapper>
  )
}
