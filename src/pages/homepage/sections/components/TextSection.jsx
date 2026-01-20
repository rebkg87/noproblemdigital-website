import { useTranslation } from "react-i18next"
import AnimatedHeroText from "../components/TypewriterAnimation.jsx"


export const TextSection = () => {
        const {t} = useTranslation();
        const title = t("hero.title");
        const subtitle = t("hero.subtitle");
    
    return (
        <div className="flex flex-col items-center text-center justify-center w-auto md:w-164.25 h-auto gap-5  ">
            <h1 className="font-h1 text-size-h1 line-height-h1 font-primary">
                <div className="relative inline-flex w-auto h-30 pr-8.75 pl-7.75 py-2.5 justify-center items-center text-brand-secondary  bg-content-inverse rounded-[30px]">
                    <AnimatedHeroText />
                </div>
                <div className="text-white">{title}</div>
            </h1>
            <p className="text-content-inverse text-center font-secondary font-b1 line-height-b1 text-size-b1 w-120 items-center justify-center flex">{subtitle}
            </p>
        </div>
    )
}