import { Card1 } from "./card-1"
import { Card2 } from "./card-2"

export function Hero2(){
    return(
        <div className="mt-25">
            <div className="text-center mb-20">
                <p className="text-[#0B71DA] font-medium">WHY CHOOSE FINECH?</p>
                <div className="text-5xl tracking-tight mt-5">Powering the Future of Finance</div>
                <div className="text-gray-500 text-md mt-5">Unlock seamless transactions, secure financial services, and limitless scalability with <br />our powerful, API-driven infrastructure.</div>
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex flex-row gap-5 max-w-7xl mx-auto">
                <Card1 iconSrc="/globe.png" title="Global Payments" description="Accept payments in 100+ currencies with instant settlement, ensuring smooth transactions across borders." imageSrc="/currency.png" widthClass="w-[40%]"/>
                <Card2 iconSrc="/bank.png" title="Banking as a Service" description="Issue virtual and physical cards effortlessly, securely hold and manage funds, and seamlessly provide a wide range of financial services." imageSrc="/visa.png" widthClass="w-[60%]"/>
            </div>
            <div className="flex flex-row gap-5 max-w-7xl mx-auto">
                <Card2 iconSrc="/scalability.png" title="Scalability" description="A robust, API-driven system built to seamlessly support startups and enterprises, providing the flexibility, scalability, and security." imageSrc="/scalable.png" widthClass="w-[60%]"/>
                <Card1 iconSrc="/globe.png" title="Compliance and Security" description="Built-in KYC, AML, and fraud prevention measures to keep every transaction safe and compliant." imageSrc="/compliance.png" widthClass="w-[40%]"/>
            </div>
            </div>
        </div>
    )
}