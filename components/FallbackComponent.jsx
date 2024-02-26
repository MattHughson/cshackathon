import { Section, Text } from '@react-email/components'

export function FallbackComponent({ blok }) {
  return (
    <Section className="bg-red-100 my-4">
      <Text className="text-center text-2xl">
        Component <b>{blok.component}</b> does not exist yet.
      </Text>
    </Section>
  )
}
