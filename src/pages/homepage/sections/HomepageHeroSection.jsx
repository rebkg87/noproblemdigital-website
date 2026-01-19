import bgHero from '../../../assets/images/bg-hero.png'

export const HomepageHeroSection = () => {
    return (
        <section 
            className="bg-cover bg-center bg-no-repeat h-screen"
            style={{ backgroundImage: `url(${bgHero})` }}
        >
        </section>
    )
}