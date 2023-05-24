import projImg1 from '../images/project-img4.png'
import projImg2 from '../images/project-img2.png'
import projImg3 from '../images/project-img1.png'
import projImg4 from '../images/project-img5.png'
import projImg5 from '../images/project-img3.png'
import projImg6 from '../images/project-img7.png'
import projImg7 from '../images/project-img8.png'
import projImg8 from '../images/project-img9.png'
import projImg9 from '../images/project-img6.png'
import projImg10 from '../images/project-img10.png'
import { FaReact, FaHtml5, FaCss3Alt, FaDocker  } from 'react-icons/fa'
import {SiJavascript, SiReactrouter, SiRedux, SiTestinglibrary} from 'react-icons/si'
import {DiTrello} from 'react-icons/di'

export const projects = [
    {
        id: 0,
        title: 'Solar System',
        type: 'FrontEnd',
        stacks: [ 
            {
                name: 'React',
                image: <FaReact />
            },
            {
                name: 'JavaScript',
                image:  <SiJavascript />,
            },
            {
                name: 'HTML',
                image:  <FaHtml5 />,
            },
            {
                name: 'CSS',
                image:  <FaCss3Alt />,
            },
            ],
        imgUrl: projImg1,
        link: 'https://ruanportella.dev/Solar_System',
        repository: 'https://github.com/Ruan-Portella/Solar_System',
        description: 'Aplicação desenvolvida em React, utilizando uma API para buscar informações de missões, você pode olhar a sua missão espacial favorita e ver informações sobre ela',
        descriptionEn: 'Application developed in React, using an API to fetch mission information, you can look at your favorite space mission and see information about it'
    },
    {
        id: 1,
        title: 'Tryunfo',
        type: 'FrontEnd',
        stacks: [ 
            {
                name: 'React',
                image: <FaReact />
            },
            {
                name: 'JavaScript',
                image:  <SiJavascript />,
            },
            {
                name: 'HTML',
                image:  <FaHtml5 />,
            },
            {
                name: 'CSS',
                image:  <FaCss3Alt />,
            },
            ],
        imgUrl: projImg2,
        link: 'https://ruanportella.dev/Tryunfo',
        repository: 'https://github.com/Ruan-Portella/Tryunfo',
        description: 'Aplicação desenvolvida em React, controlando os estados e eventos. O projeto consiste em criar as suas próprias cartas, colocando imagem e vendo seus atributos e descrições personalizados.',
        descriptionEn: 'Application developed in React, controlling states and events. The project consists of creating your own cards, placing an image and seeing their attributes and personalized descriptions.'
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
                image:  <SiJavascript />,
            },
            {
                name: 'HTML',
                image:  <FaHtml5 />,
            },
            {
                name: 'CSS',
                image:  <FaCss3Alt />,
            },
            ],
        imgUrl: projImg3,
        link: 'https://ruanportella.dev/TrybeTunes',
        repository: 'https://github.com/Ruan-Portella/TrybeTunes',
        description: 'Aplicação desenvolvida em React e React Router, utilizando como base uma API do iTunes para poder escutar as suas músicas, podendo pesquisar e favoritar.',
        descriptionEn: 'Application developed in React and React Router, using an iTunes API as a base to be able to listen to your songs, being able to search and favorite them.'

    },
    {
        id: 3,
        title: 'Online Store',
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
                image:  <SiJavascript />,
            },
            {
                name: 'HTML',
                image:  <FaHtml5 />,
            },
            {
                name: 'CSS',
                image:  <FaCss3Alt />,
            },
            ],
        imgUrl: projImg4,
        link: 'https://ruanportella.dev/Online_Store',
        repository: 'https://github.com/Ruan-Portella/Online_Store',
        description: 'Aplicação desenvolvida em React e React Router, utilizando como base uma API do Mercado Livre para poder pesquisar os seus produtos, você pode acessar o produto para ver os detalhes do mesmo, pode adicionar item ao carrinho e também "comprar" o seu produto, além de adicionar itens e excluir.',
        descriptionEn: 'Application developed in React and React Router, using a Mercado Libre API as a basis to be able to search for your products, you can access the product to see its details, you can add an item to the cart and also "buy" your product, in addition to of adding items and deleting.'
    },
    {
        id: 4,
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
                image:  <SiRedux />,
            },
            {
                name: 'JavaScript',
                image:  <SiJavascript />,
            },
            {
                name: 'HTML',
                image:  <FaHtml5 />,
            },
            {
                name: 'CSS',
                image:  <FaCss3Alt />,
            },
            ],
        imgUrl: projImg5,
        link: 'https://ruanportella.dev/Trybewallet',
        repository: 'https://github.com/Ruan-Portella/Trybewallet',
        description: 'Aplicação Desenvolvida em React utilizando Redux para controlar estado global, o projeto possibilita o usuário criar suas despesar, podendo alterar e excluir.',
        descriptionEn: 'Application Developed in React using Redux to control global state, the project allows the user to create their expenses, being able to change and delete them.'
    },
    {
        id: 5,
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
                image:  <SiRedux />,
            },
            {
                name: 'JavaScript',
                image:  <SiJavascript />,
            },
            {
                name: 'HTML',
                image:  <FaHtml5 />,
            },
            {
                name: 'CSS',
                image:  <FaCss3Alt />,
            },
            {
                name: 'Trello',
                image:  <DiTrello />,
            },
            ],
        imgUrl: projImg6,
        link: 'https://ruanportella.dev/Trivia',
        repository: 'https://github.com/Ruan-Portella/Trivia',
        description: 'Aplicação Desenvolvida em React utilizando Redux para controlar estado global, o jogo consiste em responder perguntas de um quiz, podendo ver o resultado final e também o ranking de pontuação.',
        descriptionEn: 'Application Developed in React using Redux to control the global state, the game consists of answering questions in a quiz, being able to see the final result and also the ranking of scores.'
    },
    {
        id: 6,
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
                image:  <FaReact />,
            },
            {
                name: 'JavaScript',
                image:  <SiJavascript />,
            },
            {
                name: 'HTML',
                image:  <FaHtml5 />,
            },
            {
                name: 'CSS',
                image:  <FaCss3Alt />,
            },
            ],
        imgUrl: projImg7,
        link: 'https://ruanportella.dev/Starwars_Plantes_Search',
        repository: 'https://github.com/Ruan-Portella/Starwars_Plantes_Search',
        description: 'Aplicação Desenvolvida em React utilizando Context Api para controlar estado global, o projeto consiste em aplicar filtros nos planetas e ver isso de forma dinâmica.',
        descriptionEn: 'Application Developed in React using Context Api to control global state, the project consists of applying filters on planets and seeing it dynamically.'
    },
    {
        id: 7,
        title: 'Recipes App',
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
                image:  <FaReact />,
            },
            {
                name: 'JavaScript',
                image:  <SiJavascript />,
            },
            {
                name: 'HTML',
                image:  <FaHtml5 />,
            },
            {
                name: 'CSS',
                image:  <FaCss3Alt />,
            },
            {
                name: 'Trello',
                image:  <DiTrello />,
            },
            ],
        imgUrl: projImg8,
        link: 'https://ruanportella.dev/Recipes_App',
        repository: 'https://github.com/Ruan-Portella/Recipes_App',
        description: 'Aplicação Desenvolvida em React utilizando Context Api para controlar estado global, o projeto consiste procurar receitas e ver os detalhes da mesma, podendo favoritar e ver as receitas favoritas, assim como poder ver as receitas concluídas.',
        descriptionEn: 'Application Developed in React using Context Api to control global state, the project consists of searching for recipes and seeing their details, being able to bookmark and see favorite recipes, as well as being able to see completed recipes.'
    },
    {
        id: 8,
        title: 'React Testing Library',
        type: 'FrontEnd',
        stacks: [ 
            {
                name: 'React Testing Library',
                image: < SiTestinglibrary />
            },
            ],
        imgUrl: projImg9,
        repository: 'https://github.com/Ruan-Portella/Testing_Library',
        description: 'Projeto realizado para testar conhecimentos em RTL, criando testes unitários e testes de integração, utilizando o jest para realizar os testes.',
        descriptionEn: 'Project carried out to test knowledge in RTL, creating unit tests and integration tests, using jest to perform the tests.'
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
        repository: 'https://github.com/Ruan-Portella/Docker_Todo_List',
        description: 'Projeto realizado para testar conhecimentos em docker, criando containers, imagens, removendo, criando volumes, dockerfile, docker-compose, entre outros.',
        descriptionEn: 'Project carried out to test knowledge in docker, creating containers, images, removing, creating volumes, dockerfile, docker-compose, among others.'
    },
];