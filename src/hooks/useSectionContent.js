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
        words: t(`${section}.rotating`, { returnObjects: true }),
        form: t(`${section}.form`, { returnObjects: true }),
        dropdown: t(`${section}.dropdown`, { returnObjects: true }),
        checkbox: t(`${section}.checkbox`),
        validation: t(`${section}.validation`, { returnObjects: true }),
        status: t(`${section}.status`, { returnObjects: true }),
        projects: t(`${section}.projects`, { returnObjects: true }),
    }
}