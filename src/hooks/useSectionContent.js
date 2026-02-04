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
        intro: t(`${section}.intro`, { returnObjects: true }),
        how: t(`${section}.how`, { returnObjects: true }),
        steps: t(`${section}.steps`, { returnObjects: true }),
        team: t(`${section}.team`, { returnObjects: true }),
        section1: t(`${section}.section1`, { returnObjects: true }),
        section2: t(`${section}.section2`, { returnObjects: true }),

    }
}