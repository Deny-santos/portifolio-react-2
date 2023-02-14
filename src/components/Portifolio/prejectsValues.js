import { portifolio1, portifolio2, apiTempo, astronomy, login, voice } from "../../assets/"

const values = {
    site1: {
        img: astronomy,
        titulo: "Site De Astronomía",
        linkToGit: "https://github.com/Deny-santos/whatsbeyond",
        linkToShowProject: "https://astronomy-deny.netlify.app/"
    },
    site2: {
        img: portifolio2,
        titulo: "Portifolio JS, HTML5, CSS3",
        linkToGit: "https://github.com/Deny-santos/site-deny",
        linkToShowProject: "https://deny-santos.github.io/site-deny/"
    },
    site3: {
        img: apiTempo,
        titulo: "Consultar Clima",
        linkToGit: "https://github.com/Deny-santos/tempo",
        linkToShowProject: "https://deny-santos.github.io/tempo/"
    },
    site4: {
        img: portifolio1,
        titulo: "Portifolio em React",
        linkToGit: "https://github.com/Deny-santos/portifolio-fullstack-1",
        linkToShowProject: "https://portifolio-deny.netlify.app/"
    },
    site5: {
        img: login,
        titulo: "Tela de Login",
        linkToGit: "https://github.com/Deny-santos/check",
        linkToShowProject: "https://deny-santos.github.io/check/"
    },
    site6: {
        img: voice,
        titulo: "Voice Recognation",
        linkToGit: "https://github.com/Deny-santos/voice-recognition",
        linkToShowProject: "https://deny-santos.github.io/voice-recognition/"
    }
}

export const sites = [values.site1, values.site2, values.site3, values.site4, values.site5,values.site6]