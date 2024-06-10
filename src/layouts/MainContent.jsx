import EasyTransactions from "../components/EasyTransactions";
import FAQ from "../components/FAQ";
import FeaturesBenefits from "../components/FeaturesBenefits";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import TheFutureOf from "../components/TheFutureOf";

export default function MainContent() {

    return (
        <div className="bg-[#042944]">
            <Hero />
            <div className="flex flex-col w-full gap-[169px]">
                <div className="space-y-[80px]">
                    <HowItWorks />
                    <EasyTransactions />
                </div>
                <div>
                    <FeaturesBenefits />
                </div>
                <div>
                    <TheFutureOf />
                </div>
                <div className="pb-[98px]">
                    <FAQ />
                </div>
            </div>
        </div>
    )
}