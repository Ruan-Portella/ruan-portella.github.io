import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaDocker } from 'react-icons/fa'
import {SiJavascript, SiReactrouter, SiTestinglibrary, SiRedux, SiStyledcomponents, SiJest} from 'react-icons/si'
import {DiTrello} from 'react-icons/di'

export const SkillData = [
    {
        id: 0,
        type: 'FrontEnd',
        stacks: [ 
            {
                name: 'HTML 5',
                image:  <FaHtml5 size={150} />,
            },
            {
                name: 'CSS 3',
                image:  <FaCss3Alt size={150} />,
            },
            {
                name: 'JavaScript',
                image:  <SiJavascript size={150} />,
            },
            {
                name: 'React',
                image:  <FaReact size={150} />,
            },
            {
                name: 'Context API',
                image:  <FaReact size={150} />,
            },
            {
                name: 'React Router',
                image:  <SiReactrouter size={150} />,
            },
            {
                name: 'Redux',
                image:  <SiRedux size={150} />,
            },
            {
                name: 'Styled Components',
                image:  <SiStyledcomponents size={150} />,
            },
            ],
    },
    {
        id: 1,
        type: 'BackEnd',
        stacks: [ 
            {
                name: 'Docker',
                image: <FaDocker size={150}/>
            },
            ],
    },
    {
        id: 2,
        type: 'Testes',
        stacks: [ 
            {
                name: 'React Testing Library',
                image:  <SiTestinglibrary size={150} />,
            },
            {
                name: 'Jest',
                image:  <SiJest size={150} />,
            },
            ],
    },
    {
        id: 3,
        type: 'Outros',
        stacks: [ 
            {
                name: 'Git',
                image: <FaGitAlt size={150}/>
            },
            {
                name: 'Trello',
                image:  <DiTrello size={150} />,
            },
            ],
    }
];