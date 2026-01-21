import { useTranslation } from 'react-i18next';
import bgHero from '../../../assets/images/bg-hero.png'
import { Button } from '../../../componets/ui/Button'
import { TextSection } from '../../../componets/ui/TextSection'

export const HomepageHeroSection = () => {
    const { t } = useTranslation();
    const buttonText = t("hero.button-text");
    return (
        <section
            className="bg-cover h-190"
            style={{ backgroundImage: `url(${bgHero})` }}
        >
            <div className='pt-66 flex flex-col items-center justify-center gap-14.25'>
                <TextSection isAnimated titleKey='hero.title' subtitleKey='hero.subtitle' variant='hero'/>
                <Button variant='primary'>{buttonText}</Button>
            </div>
        </section>
    )
}