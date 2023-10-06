import '@/theme/globals.css'
import type { Metadata } from 'next'
import { Anton, Poppins } from 'next/font/google'
import { Header } from './components/Header'
import clsx from 'clsx'
import { notFound } from 'next/navigation'
import { FormattedMessage } from '@/components/FormattedMessage.component'
import { Analytics } from '@vercel/analytics/react'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-poppins',
})

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-anton',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const locales = ['en', 'es']

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const isValidLocale = locales.some((cur) => cur === locale)
  if (!isValidLocale) notFound()

  return (
    <html lang={locale} className={`${poppins.variable} ${anton.variable}`}>
      <body
        className={clsx(
          poppins.className,
          'flex min-h-screen flex-col justify-between leading-relaxed text-typography-main',
        )}
      >
        <Header links={headerLinks} className="min-w-screen fixed top-0 z-50 bg-primary-accent" />
        <main className="mx-auto mt-24 w-full p-4 md:mt-32 lg:mt-48 xl:w-[1280px]">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  )
}

const headerLinks = [
  {
    name: <FormattedMessage id="header.home" />,
    href: '/',
  },
  {
    name: <FormattedMessage id="header.services" />,
    href: '/services',
  },
  {
    name: <FormattedMessage id="header.contact" />,
    href: '/contact',
  },
]
