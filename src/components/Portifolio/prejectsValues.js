import { portifolio1, portifolio2, apiTempo, car, login, voice } from "../../assets/"

const values = {
    site1: {
        img: portifolio1,
        titulo: "Portifolio em React",
        linkToGit: "https://github.com/Deny-santos/portifolio-fullstack-1",
        linkToShowProject: "https://portifolio-deny.netlify.app/"
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
        img: car,
        titulo: "Site De Carros",
        linkToGit: "https://github.com/Deny-santos/deny-sport-car",
        linkToShowProject: "https://deny-santos.github.io/deny-sport-car/"
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