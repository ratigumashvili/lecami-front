import Link from "next/link"

import { useTranslations } from "next-intl"

function Footer() {
    const t = useTranslations("footer")
    return (
        <div className="bg-slate-900 text-white text-xs font-light py-6 px-5 mt-auto">
            <div className="max-w-7xl mx-auto text-center">
                <p className="mb-2">&copy; 2024 {t("isu")}</p>
                <Link href={`mailto:${t('mail')}`}>{t("mail")}</Link>
            </div>
        </div>
    )
}

export default Footer