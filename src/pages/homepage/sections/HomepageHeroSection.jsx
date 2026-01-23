import bgHero from '../../../assets/images/bg-hero.png'
import { Button } from '../../../componets/ui/Button'
import { TextSection } from '../../../componets/ui/TextSection'
import { useSectionContent } from '../../../hooks/useSectionContent.js'

export const HomepageHeroSection = () => {
    const content = useSectionContent('hero');
    return (
        <section
            className="bg-cover h-190"
            style={{ backgroundImage: `url(${bgHero})` }}
        >
            <div className='pt-66 flex flex-col items-center justify-center gap-14.25'>
                <TextSection isAnimated titleKey={content.title} subtitleKey={content.subtitle} variant='hero' contentClassName='gap-5' subtitleClassName='max-w-120'/>
                <Button variant='primary'>{content.buttonText}</Button>
            </div>
        </section>
    )
}