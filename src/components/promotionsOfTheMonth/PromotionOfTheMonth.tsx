import Image from "next/image"

export default function PromotionOfTheMonth() {
    const promotions = [
        {
            id: 1,
            image: '/vitamin-b12.png',
            imgAlt: 'vitamin-b12',
            title: 'Vitamin B12 test',
            description: 'For effective prevention of anemia'
        },
        {
            id: 1,
            image: '/subscription.png',
            imgAlt: 'subscription',
            title: 'Subscription Mediclinic',
            description: 'Annual subscription to clinic services'
        },
    ]
    
    return (
        <div className="px-3 mt-8 pb-24">
            <div className="py-2">
                <p className="font-[600]">Promotions of the month</p>
            </div>

            <div className="flex gap-5 overflow-x-auto">
                {promotions.map(promotion =>
                    <div key={promotion.id} className="rounded-[12px] flex-shrink-0 bg-solid-black-md w-[220px] h-[220px] overflow-hidden">
                        <div className="bg-black h-[120px] rounded-t-[18px]">
                            <Image 
                                src={promotion.image}
                                alt={promotion.imgAlt}
                                width={220}
                                height={220}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        
                        <div className="p-2">
                            <h1 className="text-lg">{promotion.title}</h1>
                            <p className="text-sm text-solid-gray">{promotion.description}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}