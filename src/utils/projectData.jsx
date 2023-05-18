import projImg1 from '../assets/images/project-img4.png'
import projImg2 from '../assets/images/project-img2.png'
import projImg3 from '../assets/images/project-img1.png'
import projImg4 from '../assets/images/project-img5.png'
import projImg5 from '../assets/images/project-img3.png'
import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import {SiJavascript, SiReactrouter, SiRedux} from 'react-icons/si'

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
        link: 'https://63ffe40c2ce31200081a41dd--steady-douhua-dcb4d2.netlify.app/',
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
        link: 'https://ruan-tryunfo.surge.sh',
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
        link: 'https://ruan-trybetunes.surge.sh',
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
        link: 'https://ruan-onlinestore.surge.sh',
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
        link: 'https://ruan-trybewallet.surge.sh',
        description: 'Aplicação Desenvolvida em React utilizando Redux para controlar estado global, o projeto possibilita o usuário criar suas despesar, podendo alterar e excluir.',
        descriptionEn: 'Application Developed in React using Redux to control global state, the project allows the user to create their expenses, being able to change and delete them.'
    },
    // {
    //     id: 8,
    //     title: 'Docker Todo-List',
    //     type: 'BackEnd',
    //     stacks: [ 
    //         {
    //             name: 'React',
    //             image: <FaReact />
    //         },
    //         ],
    //     imgUrl: projImg2,
    //     link: 'https://ruan-tryunfo.surge.sh',
    //     description: 'Aplicação desenvolvida em React, controlando os estados e eventos. O projeto consiste em criar as suas próprias cartas, colocando imagem e vendo seus atributos e descrições personalizados.',
    // },
];