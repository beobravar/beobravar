require('dotenv').config()
const {
    META_TITLE,
    META_URL,
    META_DESC,
    META_LANG,
    META_COLOR,
    META_EMAIL,
    META_TELEPHONE
} = process.env

module.exports = {
    title: META_TITLE || 'DEŽURNI BRAVAR - BEOGRAD | HITNE INTERVENCIJE 00-24',
    url: META_URL || 'https://www.beobravar.rs',
    description: META_DESC || 'Dežurni bravar u Beogradu za hitne intervencije. Otvaranje vrata, zamena brava i cilindara, promena ključa kasa brave i otključavanje automobila. Pozovite 064 4000 880.',
    lang: META_LANG || 'sr',
    primaryColor: META_COLOR || '#B30000',
    email: META_EMAIL || 'beobravar@gmail.com',
    telephone: META_TELEPHONE || '+381644000880',
    dateFormat: 'dd LLLL yyyy'
}
