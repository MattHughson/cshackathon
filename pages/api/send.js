import { Resend } from 'resend'
import { Page } from '../../components/Page'
import { loadStoryblok } from '../../utility/loadStoryblok'
const resend = new Resend(process.env.RESEND_API_KEY)
import { getStoryblokApi } from '@storyblok/react'
loadStoryblok()
export default async (req, res) => {
  const body = req.body
  if (
    !body ||
    body.task.name !== 'Send Bulk Email' ||
    !body.dialog_values.slug
  ) {
    return res.status(400).json({ message: 'Sorry unknown trigger' })
  }
  const slug = body.dialog_values.slug
  let sbParams = {
    version: 'published', // or 'published'
  }
  const storyblokApi = getStoryblokApi()
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams)
  const story = data ? data.story : null
  if (!story) {
    return res.status(400).json({ message: 'No story content has been found' })
  }

  const users = await resend.contacts.list({
    audienceId: '22ca1698-d5c5-4c73-bb8d-7df23bdb8fd3',
  })
  if (users.error) {
    res.status(400).json({ message: 'No contact list found' })
  }
  const contacts = users.data.data

  try {
    const EmailTemplate = Page({ blok: story.content, renderEmail: true })
    const emailBatch = contacts.map((contact) => {
      return {
        from: 'Dipankar <dip@nodejs.dipankarmaikap.com>',
        to: [contact.email],
        subject: story?.content?.email_subject ?? 'Hello world',
        react: EmailTemplate,
      }
    })
    const { data, error } = await resend.batch.send(emailBatch)
    if (error) {
      res.status(400).json({ error })
    }
    res.status(200).json({ data })
  } catch (error) {
    res.status(400).json({ error })
  }
}
