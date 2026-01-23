import { useTranslation } from "react-i18next";

export const useSectionContent = (section) => {
    const { t } = useTranslation();

    return {
        // Keys para componentes que traducen internamente (ej: TextSection)
        label: `${section}.label`,
        title: `${section}.title`,
        subtitle: `${section}.subtitle`,
        description: `${section}.description`,
        // Valores traducidos para uso directo
        buttonText: t(`${section}.button-text`),
        cards: t(`${section}.cards`, { returnObjects: true }),
    }
}