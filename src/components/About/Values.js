import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderActive } from "react-icons/vsc"

export const values = {
    experience: {
      icon: <FaAward className='about__icon'/>,
      title: "Experiência",
      description: "2+ Anos Estudando"
    },
    tec: {
      icon: <FiUsers className='about__icon' />,
      title: "Tecnología",
      description: "Javascript"
    },
    projects: {
      icon: <VscFolderActive className='about__icon' />,
      title: "Projetos",
      description: "10+ Completos"
    }
  }
  