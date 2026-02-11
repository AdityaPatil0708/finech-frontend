import { Card1 } from "./Card1"
import { Card2 } from "./Card2"

export function Hero2(){
    return(
        <div className="mt-12 md:mt-20 mb-12 md:mb-20 px-4 md:px-8 lg:px-0">
            <div className="text-center mb-12 md:mb-20">
                <p className="text-primary font-medium text-xs md:text-sm">WHY CHOOSE FINECH?</p>
                <div className="text-3xl md:text-4xl lg:text-5xl tracking-tight mt-4 md:mt-5 px-4">Powering the Future of Finance</div>
                <div className="text-gray-500 text-sm md:text-base mt-4 md:mt-5 px-4">
                    Unlock seamless transactions, secure financial services, and limitless scalability with our powerful, API-driven infrastructure.
                </div>
            </div>
            <div className="flex flex-col gap-4 md:gap-5">
                {/* First Row */}
                <div className="flex flex-col lg:flex-row gap-4 md:gap-5 max-w-7xl mx-auto w-full">
                    <Card1 
                        iconSrc="/globe.png" 
                        title="Global Payments" 
                        description="Accept payments in 100+ currencies with instant settlement, ensuring smooth transactions across borders." 
                        imageSrc="/currency.png" 
                        widthClass="w-full lg:w-[40%]"
                    />
                    <Card2 
                        iconSrc="/bank.png" 
                        title="Banking as a Service" 
                        description="Issue virtual and physical cards effortlessly, securely hold and manage funds, and seamlessly provide a wide range of financial services." 
                        imageSrc="/visa.png" 
                        widthClass="w-full lg:w-[60%]"
                    />
                </div>
                {/* Second Row */}
                <div className="flex flex-col lg:flex-row gap-4 md:gap-5 max-w-7xl mx-auto w-full">
                    <Card2 
                        iconSrc="/scalability.png" 
                        title="Scalability" 
                        description="A robust, API-driven system built to seamlessly support startups and enterprises, providing the flexibility, scalability, and security." 
                        imageSrc="/scalable.png" 
                        widthClass="w-full lg:w-[60%]"
                    />
                    <Card1 
                        iconSrc="/globe.png" 
                        title="Compliance and Security" 
                        description="Built-in KYC, AML, and fraud prevention measures to keep every transaction safe and compliant." 
                        imageSrc="/compliance.png" 
                        widthClass="w-full lg:w-[40%]"
                    />
                </div>
            </div>
        </div>
    )
}