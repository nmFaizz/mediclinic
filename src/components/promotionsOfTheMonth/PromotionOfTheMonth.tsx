import Image from "next/image"

export default function PromotionOfTheMonth() {
    const promotions = [
        {
            id: 1,
            image: '',
            imgAlt: '',
            title: 'Vitamin B12 test',
            description: 'For effective prevention of anemia'
        },
        {
            id: 1,
            image: '',
            imgAlt: '',
            title: 'Subscription Mediclinic',
            description: 'Annual subscription to clinic services'
        },
    ]
    
    return (
        <div className="px-3 mt-8 pb-40">
            <div className="py-2">
                <p className="font-[600]">Promotions of the month</p>
            </div>

            <div className="flex gap-5 overflow-x-auto">
                {promotions.map(promotion =>
                    <div key={promotion.id} className="rounded-[18px] flex-shrink-0 bg-solid-black-md w-[220px] h-[220px]">
                        <div className="bg-black h-[120px] rounded-t-[18px]">

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