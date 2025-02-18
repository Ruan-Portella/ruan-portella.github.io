import projImg2 from '../images/project-img2.png'
import projImg3 from '../images/project-img1.png'
import projImg5 from '../images/project-img3.png'
import projImg6 from '../images/project-img7.png'
import projImg7 from '../images/project-img8.png'
import projImg10 from '../images/project-img10.png'
import projImg11 from '../images/project-img11.png'
import projImg12 from '../images/project-img12.png'
import projImg14 from '../images/project-img14.png'
import projImg15 from '../images/project-img15.png'
import { FaReact, FaHtml5, FaCss3Alt, FaDocker, FaNodeJs } from 'react-icons/fa'
import { SiJavascript, SiReactrouter, SiRedux, SiMysql, SiSequelize, SiJsonwebtokens, SiNextdotjs, SiExpress, SiTypescript, SiPrisma, SiAppwrite, SiReactquery, SiReacttable, SiTailwindcss, SiHono } from 'react-icons/si'
import { DiTrello } from 'react-icons/di'
import { TbHandClick } from 'react-icons/tb'

export const projects = [
    {
        id: 0,
        title: 'Fintra',
        type: 'FullStack',
        stacks: [
            {
                name: 'Next',
                image: <SiNextdotjs size={20} />
            },
            {
                name: 'Tailwind',
                image: <SiTailwindcss size={20} />
            },
            {
                name: 'TypeScript',
                image: <SiTypescript size={20} />
            },
            {
                name: 'NodeJS',
                image: <FaNodeJs size={20} />
            },
            {
                name: 'Prisma',
                image: <SiPrisma size={20} />
            },
            {
                name: 'Hono',
                image: <SiHono size={20} />
            },
            {
                name: 'React Query',
                image: <SiReactquery size={25} />
            },
            {
                name: 'React Table',
                image: <SiReacttable size={25} />
            },
        ],
        imgUrl: projImg14,
        iconClick: <TbHandClick color='black' size={27} className='icon-click' />,
        link: 'https://fintra-rosy.vercel.app/',
        repository: 'https://github.com/Ruan-Portella/fintra',
        description: 'O Fintra é uma plataforma moderna de gerenciamento financeiro, desenvolvida para oferecer uma experiência intuitiva e eficiente no controle de receitas, despesas e planejamento financeiro. O sistema combina tecnologias de ponta para garantir performance, segurança e escalabilidade.',
        descriptionEn: 'Fintra is a modern financial management platform, developed to offer an intuitive and efficient experience in controlling income, expenses and financial planning. The system combines cutting-edge technologies to guarantee performance, security and scalability.'
    },
    {
        id: 1,
        title: 'TaskUp',
        type: 'FullStack',
        stacks: [
            {
                name: 'Next',
                image: <SiNextdotjs size={20} />
            },
            {
                name: 'Tailwind',
                image: <SiTailwindcss size={20} />
            },
            {
                name: 'TypeScript',
                image: <SiTypescript size={20} />
            },
            {
                name: 'NodeJS',
                image: <FaNodeJs size={20} />
            },
            {
                name: 'Prisma',
                image: <SiPrisma size={20} />
            },
            {
                name: 'AppWrite',
                image: <SiAppwrite size={20} />
            },
            {
                name: 'React Query',
                image: <SiReactquery size={25} />
            },
            {
                name: 'React Table',
                image: <SiReacttable size={25} />
            },
        ],
        imgUrl: projImg15,
        iconClick: <TbHandClick color='black' size={27} className='icon-click' />,
        link: 'https://taskup-five.vercel.app/',
        repository: 'https://github.com/Ruan-Portella/taskup',
        description: 'O TaskUp é uma plataforma moderna para gerenciamento de tarefas, projetada para ajudar usuários a organizarem suas atividades de forma eficiente. Com uma interface intuitiva e fluída, a aplicação permite criar, editar, categorizar e acompanhar tarefas com facilidade.',
        descriptionEn: 'TaskUp is a modern task management platform designed to help users organize their activities efficiently. With an intuitive and fluid interface, the application allows you to create, edit, categorize and track tasks with ease.'
    },
    {
        id: 2,
        title: 'TrybeTunes',
        type: 'FrontEnd',
        stacks: [
            {
                name: 'React',
                image: <FaReact />
            },
            {
                name: 'React Router',
                image: <SiReactrouter />
            },
            {
                name: 'JavaScript',
                image: <SiJavascript />,
            },
            {
                name: 'HTML',
                image: <FaHtml5 />,
            },
            {
                name: 'CSS',
                image: <FaCss3Alt />,
            },
        ],
        imgUrl: projImg3,
        iconClick: <TbHandClick color='white' size={27} className='icon-click' />,
        link: 'https://ruanportella.dev/TrybeTunes',
        repository: 'https://github.com/Ruan-Portella/TrybeTunes',
        description: 'Aplicação desenvolvida em React e React Router, utilizando como base uma API do iTunes para poder escutar as suas músicas, podendo pesquisar e favoritar.',
        descriptionEn: 'Application developed in React and React Router, using an iTunes API as a base to be able to listen to your songs, being able to search and favorite them.'

    },
    {
        id: 3,
        title: 'TrybeWallet',
        type: 'FrontEnd',
        stacks: [
            {
                name: 'React',
                image: <FaReact />
            },
            {
                name: 'React Router',
                image: <SiReactrouter />
            },
            {
                name: 'Redux',
                image: <SiRedux />,
            },
            {
                name: 'JavaScript',
                image: <SiJavascript />,
            },
            {
                name: 'HTML',
                image: <FaHtml5 />,
            },
            {
                name: 'CSS',
                image: <FaCss3Alt />,
            },
        ],
        imgUrl: projImg5,
        iconClick: <TbHandClick color='white' size={27} className='icon-click' />,
        link: 'https://ruanportella.dev/Trybewallet',
        repository: 'https://github.com/Ruan-Portella/Trybewallet',
        description: 'Aplicação Desenvolvida em React utilizando Redux para controlar estado global, o projeto possibilita o usuário criar suas despesar, podendo alterar e excluir.',
        descriptionEn: 'Application Developed in React using Redux to control global state, the project allows the user to create their expenses, being able to change and delete them.'
    },
    {
        id: 4,
        title: 'Trivia Game',
        type: 'FrontEnd',
        stacks: [
            {
                name: 'React',
                image: <FaReact />
            },
            {
                name: 'React Router',
                image: <SiReactrouter />
            },
            {
                name: 'Redux',
                image: <SiRedux />,
            },
            {
                name: 'JavaScript',
                image: <SiJavascript />,
            },
            {
                name: 'HTML',
                image: <FaHtml5 />,
            },
            {
                name: 'CSS',
                image: <FaCss3Alt />,
            },
            {
                name: 'Trello',
                image: <DiTrello />,
            },
        ],
        imgUrl: projImg6,
        iconClick: <TbHandClick color='white' size={27} className='icon-click' />,
        link: 'https://ruanportella.dev/Trivia',
        repository: 'https://github.com/Ruan-Portella/Trivia',
        description: 'Aplicação Desenvolvida em React utilizando Redux para controlar estado global, o jogo consiste em responder perguntas de um quiz, podendo ver o resultado final e também o ranking de pontuação.',
        descriptionEn: 'Application Developed in React using Redux to control the global state, the game consists of answering questions in a quiz, being able to see the final result and also the ranking of scores.'
    },
    {
        id: 6,
        title: 'Tryunfo',
        type: 'FrontEnd',
        stacks: [
            {
                name: 'React',
                image: <FaReact />
            },
            {
                name: 'JavaScript',
                image: <SiJavascript />,
            },
            {
                name: 'HTML',
                image: <FaHtml5 />,
            },
            {
                name: 'CSS',
                image: <FaCss3Alt />,
            },
        ],
        imgUrl: projImg2,
        iconClick: <TbHandClick color='black' size={27} className='icon-click' />,
        link: 'https://ruanportella.dev/Tryunfo',
        repository: 'https://github.com/Ruan-Portella/Tryunfo',
        description: 'Aplicação desenvolvida em React, controlando os estados e eventos. O projeto consiste em criar as suas próprias cartas, colocando imagem e vendo seus atributos e descrições personalizados.',
        descriptionEn: 'Application developed in React, controlling states and events. The project consists of creating your own cards, placing an image and seeing their attributes and personalized descriptions.'
    },
    {
        id: 7,
        title: 'StarWars Planets Search',
        type: 'FrontEnd',
        stacks: [
            {
                name: 'React',
                image: <FaReact />
            },
            {
                name: 'React Router',
                image: <SiReactrouter />
            },
            {
                name: 'Context Api',
                image: <FaReact />,
            },
            {
                name: 'JavaScript',
                image: <SiJavascript />,
            },
            {
                name: 'HTML',
                image: <FaHtml5 />,
            },
            {
                name: 'CSS',
                image: <FaCss3Alt />,
            },
        ],
        imgUrl: projImg7,
        iconClick: <TbHandClick color='white' size={27} className='icon-click' />,
        link: 'https://ruanportella.dev/Starwars_Planets_Search',
        repository: 'https://github.com/Ruan-Portella/Starwars_Planets_Search',
        description: 'Aplicação Desenvolvida em React utilizando Context Api para controlar estado global, o projeto consiste em aplicar filtros nos planetas e ver isso de forma dinâmica.',
        descriptionEn: 'Application Developed in React using Context Api to control global state, the project consists of applying filters on planets and seeing it dynamically.'
    },
    {
        id: 9,
        title: 'Docker Todo-List',
        type: 'BackEnd',
        stacks: [
            {
                name: 'Docker',
                image: <FaDocker />
            },
        ],
        imgUrl: projImg10,
        iconClick: <TbHandClick color='black' size={27} className='icon-click' />,
        repository: 'https://github.com/Ruan-Portella/Docker_Todo_List',
        description: 'Projeto realizado para testar conhecimentos em docker, criando containers, imagens, removendo, criando volumes, dockerfile, docker-compose, entre outros.',
        descriptionEn: 'Project carried out to test knowledge in docker, creating containers, images, removing, creating volumes, dockerfile, docker-compose, among others.'
    },
    {
        id: 10,
        title: 'MySQL',
        type: 'BackEnd',
        stacks: [
            {
                name: 'MySQL',
                image: <SiMysql size={20} />
            },
        ],
        imgUrl: projImg11,
        iconClick: <TbHandClick color='black' size={27} className='icon-click' />,
        repository: 'https://github.com/Ruan-Portella/mysql-all-for-one',
        description: 'Projeto realizado para testar conhecimentos mysql, criando tabelas, deletando, atualizando, inserindo, utilizando o workbench para realizar as queries.',
        descriptionEn: 'Project carried out to test mysql knowledge, creating tables, deleting, updating, inserting, using the workbench to perform the queries.'
    },
    {
        id: 11,
        title: 'Blogs API',
        type: 'BackEnd',
        stacks: [
            {
                name: 'NodeJS',
                image: <FaNodeJs size={20} />
            },
            {
                name: 'Express',
                image: <SiExpress size={20} />
            },
            {
                name: 'MySQL',
                image: <SiMysql size={20} />
            },
            {
                name: 'Sequelize',
                image: <SiSequelize size={20} />
            },
            {
                name: 'JWT',
                image: <SiJsonwebtokens size={20} />
            },
        ],
        imgUrl: projImg12,
        iconClick: <TbHandClick color='black' size={27} className='icon-click' />,
        repository: 'https://github.com/Ruan-Portella/blogs_api',
        description: 'Projeto realizado para testar conhecimentos em NodeJS, Express, MySQL, Sequelize, JWT, criando rotas, middlewares, controllers, models, entre outros.',
        descriptionEn: 'Project carried out to test knowledge in NodeJS, Express, MySQL, Sequelize, JWT, creating routes, middlewares, controllers, models, among others.'
    },
];