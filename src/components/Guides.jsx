import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const guides = [
  {
    href: '/authentication',
    name: 'Before Arrival',
    description: 'Get ready for your move by exploring options for university housing, private rentals, and temporary accommodation like hostels or Airbnb.',
  },
  {
    href: '/pagination',
    name: 'First Steps After Arrival',
    description: 'Learn how to register for DVV, Identity Card, set up your mobile services and internet, and open a bank account.',
  },
  {
    href: '/errors',
    name: 'Transportation and Mobility',
    description:
      'Discover how to use public buses, buy a car or bike, use public scooters, and understand Finnish driving license requirements.',
  },
  {
    href: '/webhooks',
    name: 'Settling In',
    description:
      'Learn how to programmatically configure webhooks for your app.',
  },
]

export function Guides() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="guides">
        Guides
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 sm:grid-cols-2 xl:grid-cols-4 dark:border-white/5">
        {guides.map((guide) => (
          <div key={guide.href}>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {guide.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {guide.description}
            </p>
            <p className="mt-4">
              <Button href={guide.href} variant="text" arrow="right">
                Read more
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
