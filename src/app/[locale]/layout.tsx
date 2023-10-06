import '@/theme/globals.css'
import type { Metadata } from 'next'
import { Inter, Anton } from 'next/font/google'
import { Header } from './components/Header'
import clsx from 'clsx'
import { notFound } from 'next/navigation'
import { FormattedMessage } from '@/components/FormattedMessage.component'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-anton',
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

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

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
    <html lang={locale} className={`${inter.variable} ${anton.variable}`}>
      <body
        className={clsx(
          inter.className,
          'flex min-h-screen flex-col justify-between leading-relaxed text-typography-main',
        )}
      >
        <Header links={headerLinks} className="min-w-screen fixed top-0 z-50 bg-primary-accent" />
        <main className="mt-20 flex min-h-screen flex-col  p-8 text-center md:p-24 md:text-start lg:mt-40">
          {children}
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
