import ServiceDetailSection from '@/app/components/ServiceDetailSection/ServiceDetailSection'
import { PRODUCTS, SERVICES } from '@/app/utils/constant'
import { trimDescription } from '@/app/utils/general'

export async function generateMetadata({ params }) {
  let result = [...PRODUCTS, ...SERVICES].find((product) => {
    if (product.url === `/page/${params.id}`) {
      return product
    }
  })

  if (!result) {
    return ({
      title: "Skbdc",
      site_name: 'Skbdc',
    })
  }

  return {
    title: `${result.name} • Skbdc`,
    description: trimDescription(result.description),
    site_name: 'Skbdc',
    openGraph: {
      type: 'website',
      images: [
        {
          url: result?.original_image || result?.image,
          alt: 'SKBDC',
        },
      ],
    }
  }
}

export default function ServiceInfo() {

  return (
    <div>
      <div className='h-[12vh]'></div>

      <ServiceDetailSection />
    </div>
  )
}
