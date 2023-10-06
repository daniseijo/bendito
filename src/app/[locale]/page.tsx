import { useTranslations } from 'next-intl'
import { Carousel } from './components/Carousel/Carousel.component'
import Title from './components/Title/Title.component'
import { carouselImages } from './data'
import { Card } from './components/Card/Card.component'

export default function Home() {
  const t = useTranslations('home')

  return (
    <div>
      <Title title={t('title')} subtitle={t('subtitle')} />
      <Carousel imagesList={carouselImages} className="mb-4 mt-6" />
      <Card />
    </div>
  )
}
