import { Project } from './type';
import crypto from './assets/thumnail/crypto.png';
import pokedex from './assets/thumnail/pokedex.png';
import todo from './assets/thumnail/todo.png';
import khatabook from './assets/thumnail/khatabook.png';
import starbucks from './assets/thumnail/starbucks.png';
import eventplanner from './assets/thumnail/eventplanner.png';
import energy from './assets/thumnail/energy.png';
import whatsapp from './assets/thumnail/whatsapp.png';
import temperature from './assets/thumnail/temperature.png';
import weather from './assets/thumnail/weather.png';
import zerodha from './assets/thumnail/zerodha.png';
import emgmt from './assets/thumnail/emgmt.png';
import movie from './assets/thumnail/movie.png';
import dailybite from './assets/thumnail/dailybite.png';
import joke from './assets/thumnail/joke.png';
import panfila from './assets/thumnail/panfila.png';
import iea from './assets/thumnail/iea.png';
import anderg from './assets/thumnail/anderg.png';
import golens from './assets/thumnail/golens.png';

export const projects: Project[] = [
  // React Project
  {
    id: 1,
    startedOn: 'Mar 7, 2022',
    title: 'Golens',
    priority: 1,
    isFeatured: true,
    description:
      'Ecommerce website for Golens, a company specializing in high-quality, durable, and stylish glasses. Built with React, Tailwind CSS, and integrated with Stripe for secure payments.',
    category: ['react'],
    technologies: ['React', 'Javascript', 'HTML', 'CSS'],
    image: golens,
    githubUrl: 'https://github.com/pooja-jat/Todo-UI',
    liveUrl: 'https://golens.vercel.app/'
  },
  {
    id: 12,
    startedOn: 'Mar 26, 2025',
    title: 'Todo App (CRUD)',
    priority: 145,
    description: 'A dynamic React Todo app implementing CRUD operations with state management and responsive design.',
    category: ['react'],
    technologies: ['React', 'Javascript', 'HTML', 'CSS'],
    image: todo,
    githubUrl: 'https://github.com/pooja-jat/Todo-UI',
    liveUrl: 'https://todo-ui-blue.vercel.app/'
  },
  {
    id: 13,
    startedOn: 'Apr 8, 2025',
    title: 'PokeGame',
    priority: 105,
    description: 'A real-time cryptocurrency dashboard built with React, fetching live data via CoinGecko API.',
    category: ['react'],
    technologies: ['React', 'Javascript', 'RestAPI', 'HTML', 'CSS'],
    image: pokedex,
    githubUrl: 'https://github.com/pooja-jat/pokedex-game',
    liveUrl: 'https://pokedex-game-wine.vercel.app'
  },
  {
    id: 14,
    startedOn: 'Apr 16, 2025',
    title: 'Khatabook (Web)',
    priority: 111,
    description: 'A bookkeeping application built with React and Redux, demonstrating state management and CRUD operations.',
    category: ['react'],
    technologies: ['React', 'Javascript', 'TailwindCSS', 'HTML', 'CSS'],
    image: khatabook,
    githubUrl: 'hhttps://github.com/pooja-jat/Redux-Khatabook',
    liveUrl: 'https://redux-khatabook.vercel.app/'
  },
  {
    id: 15,
    startedOn: 'Apr 19, 2025',
    title: 'Employee Management',
    priority: 120,
    description: 'A dynamic React Todo app implementing CRUD operations with state management and responsive design.',
    category: ['react'],
    technologies: ['React', 'Javascript', 'TailwindCSS', 'HTML', 'CSS'],
    image: emgmt,
    githubUrl: 'https://github.com/pooja-jat/employee-mgmt',
    liveUrl: 'https://employee-mgmt-six.vercel.app/'
  },
  {
    id: 16,
    startedOn: 'Sep 22, 2025',
    title: 'Movie Explorer',
    isFeatured: true,
    priority: 102,
    description: 'A clean and modern app to browse, search, and filter movies with posters, ratings, and genres.',
    category: ['react'],
    technologies: ['React', 'Javascript', 'TailwindCSS', 'HTML', 'CSS'],
    image: movie,
    githubUrl: 'https://github.com/pooja-jat/movie-explorer',
    liveUrl: 'https://movie-explorer-beta-one.vercel.app/'
  },

  {
    id: 17,
    startedOn: 'May 8, 2025',
    title: 'Crypto App',
    priority: 100,
    description: 'A real-time cryptocurrency dashboard built with React, fetching live data via CoinGecko API.',
    category: ['react'],
    technologies: ['React', 'Javascript', 'RestAPI', 'HTML', 'CSS'],
    image: crypto,
    isFeatured: true,
    githubUrl: 'https://github.com/pooja-jat/crypto',
    liveUrl: 'https://crypto-ten-brown.vercel.app/'
  },

  // Backend only Project
  {
    id: 18,
    startedOn: 'Sep 23, 2025',
    title: 'Todo Backend Application',
    priority: 201,
    description: 'A RESTful API for a Todo application built with Express and MongoDB, supporting CRUD operations and user authentication.',
    category: ['backend'],
    technologies: ['NodeJS', 'Express', 'MongoDB', 'Javascript'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    githubUrl: 'https://github.com/pooja-jat/crud_api',
    liveUrl: 'https://crud-api-1-0ji9.onrender.com/'
  },
  {
    id: 19,
    startedOn: 'Sep 23, 2025',
    title: 'Blog Backend Application',
    priority: 200,
    description: 'A backend Node.js Express application providing authentication and CRUD APIs for managing posts with like functionality.',
    category: ['backend'],
    technologies: ['NodeJS', 'Express', 'MongoDB', 'Javascript'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    githubUrl: 'https://github.com/pooja-jat/blog-api',
    liveUrl: 'https://blog-api-7xmw.onrender.com/'
  },

  // FullStack Project
  {
    id: 20,
    startedOn: 'June 25, 2025',
    title: 'DailyBite',
    priority: 101,
    isFeatured: true,
    description:
      'DailyBite is a simple and reliable meal-ordering app that brings fresh, homemade-style meals to you daily. Choose your meal, place your order, and enjoy healthy, affordable food without any hassle.',
    category: ['fullstack'],
    technologies: ['NodeJS', 'Express', 'MongoDB', 'Javascript'],
    image: dailybite,
    githubUrl: 'https://github.com/pooja-jat/dailyBite',
    liveUrl: 'https://daily-bite-eosin.vercel.app/'
  }
];
