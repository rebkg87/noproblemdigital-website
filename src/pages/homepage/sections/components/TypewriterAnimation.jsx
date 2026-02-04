import { useTranslation } from "react-i18next";
import TypewriterComponent from "typewriter-effect";

export default function TypewriterAnimation () {
    const {t, i18n } = useTranslation();
    const words = t ("services.rotating", { returnObjects: true });
    return (
        <TypewriterComponent
        key={i18n.language}
            options={{
                strings: words,
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 40,
                pauseFor: 1500,
            }}
        />
    )
}