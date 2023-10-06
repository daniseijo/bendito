import { Carousel } from './components/Carousel/Carousel.component'
import Title from './components/Title/Title.component'
import { carouselImages } from './data'

export default function Home() {
  return (
    <div>
      <Title title="Bodas Alternativas" subtitle="Un nuevo concepto de boda para cambiarlo todo." />
      <Carousel imagesList={carouselImages} className="mt-6" />
    </div>
  )
}
