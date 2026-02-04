import { useSectionContent } from "../../hooks/useSectionContent"
import bgContact from '../../assets/images/bg-hero.png'
import { Form } from "../../componets/ui/Form";
import { TextSection } from "../../componets/ui/TextSection";
import ContactImage from '../../assets/images/contact_img.png'



export const ContactPage = () => {
    const content = useSectionContent('contact');

    return (
        <section className="bg-cover" style={{ backgroundImage: `url(${bgContact})` }}>
            <div className="px-7 md:px-31.25 pb-24 pt-35 md:pt-58.5 flex flex-col items-center justify-center gap-15">
                <TextSection titleKey={content.title} subtitleKey={content.subtitle} variant='dark' direction="col" alignment="left" subtitleClassName="max-w-130.75" contentClassName="flex-col md:flex-row gap-8.75 !items-center" />
                <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12.5 p-7 md:p-10 bg-white rounded-2xl md:rounded-[50px]">
                    <img src={ContactImage} alt="Team" className="object-contain" />
                    <Form content={content} />

                </div>
            </div>
        </section>
    )
}