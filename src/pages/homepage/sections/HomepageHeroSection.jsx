import { useNavigate } from 'react-router-dom'
import bgHero from '../../../assets/images/bg-hero.png'
import { Button } from '../../../componets/ui/Button'
import { TextSection } from '../../../componets/ui/TextSection'
import { useSectionContent } from '../../../hooks/useSectionContent.js'

export const HomepageHeroSection = () => {
    const content = useSectionContent('hero');
    const navigate = useNavigate()
    return (
        <section
            className="bg-cover h-auto md:h-190"
            style={{ backgroundImage: `url(${bgHero})` }}
        >
            <div className='px-15 md:px-0 pt-65 flex flex-col items-center justify-center gap-10 md:gap-12 py-25 md:py-55'>
                <TextSection isAnimated titleKey={content.title} subtitleKey={content.subtitle} variant='hero' contentClassName='gap-5' subtitleClassName='max-w-120'/>
                <Button variant='primary' onClick={() => navigate('/contacto')}>{content.buttonText}</Button>
            </div>
        </section>
    )
}