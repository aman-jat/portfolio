import { useEffect, useState, useRef } from 'react';
import { ChevronDown, Mail } from 'lucide-react';
import GithubIcon from '@/components/ui/GithubIcon';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import aman from '../assets/images/aman.png';
const LinkedInIcon = ({ size = 28 }: { size?: number }) => (
  <svg
    height={size}
    width={size}
    viewBox='0 0 382 382'
    xmlns='http://www.w3.org/2000/svg'
    fill='currentColor'>
    <path d='M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472L341.91,330.654L341.91,330.654z' />
  </svg>
);

const AIIcon = ({ size = 28 }: { size?: number }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 30 30'
    height={size}
    width={size}
    fill='currentColor'>
    <path d='M14.217,19.707l-1.112,2.547c-0.427,0.979-1.782,0.979-2.21,0l-1.112-2.547c-0.99-2.267-2.771-4.071-4.993-5.057	L1.73,13.292c-0.973-0.432-0.973-1.848,0-2.28l2.965-1.316C6.974,8.684,8.787,6.813,9.76,4.47l1.126-2.714	c0.418-1.007,1.81-1.007,2.228,0L14.24,4.47c0.973,2.344,2.786,4.215,5.065,5.226l2.965,1.316c0.973,0.432,0.973,1.848,0,2.28	l-3.061,1.359C16.988,15.637,15.206,17.441,14.217,19.707z' />
    <path d='M24.481,27.796l-0.339,0.777c-0.248,0.569-1.036,0.569-1.284,0l-0.339-0.777c-0.604-1.385-1.693-2.488-3.051-3.092	l-1.044-0.464c-0.565-0.251-0.565-1.072,0-1.323l0.986-0.438c1.393-0.619,2.501-1.763,3.095-3.195l0.348-0.84	c0.243-0.585,1.052-0.585,1.294,0l0.348,0.84c0.594,1.432,1.702,2.576,3.095,3.195l0.986,0.438c0.565,0.251,0.565,1.072,0,1.323	l-1.044,0.464C26.174,25.308,25.085,26.411,24.481,27.796z' />
  </svg>
);

const roles = [
  'Full-Stack Developer',
  'React Developer',
  'MERN Stack Developer',
  'AI Full Stack Developer',
  'Backend Developer',
  'Frontend Developer',
  'Software Engineer',
  'Web Developer',
  'Next.js Developer',
  'Node.js Developer',
];

const RoleCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [phase, setPhase] = useState<'idle' | 'exit' | 'enter'>('idle');
  const [displayed, setDisplayed] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setPhase('exit');
      setTimeout(() => {
        const nextIdx = (current + 1) % roles.length;
        setCurrent(nextIdx);
        setDisplayed(nextIdx);
        setPhase('enter');
        setTimeout(() => setPhase('idle'), 400);
      }, 350);
    }, 2000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  const style: React.CSSProperties =
    phase === 'exit'
      ? {
          animation: 'roleSlideOut 350ms ease-in forwards',
        }
      : phase === 'enter'
        ? {
            animation: 'roleSlideIn 400ms ease-out forwards',
          }
        : {
            transform: 'translateY(0) scaleY(1)',
            opacity: 1,
            filter: 'blur(0px)',
          };

  return (
    <>
      <style>{`
        @keyframes roleSlideIn {
          from { transform: translateY(120%) scaleY(0.6); opacity: 0; filter: blur(8px); }
          to   { transform: translateY(0)    scaleY(1);   opacity: 1; filter: blur(0px); }
        }
        @keyframes roleSlideOut {
          from { transform: translateY(0)     scaleY(1);   opacity: 1; filter: blur(0px); }
          to   { transform: translateY(-120%) scaleY(0.6); opacity: 0; filter: blur(8px); }
        }
      `}</style>
      <div className='overflow-hidden h-10 sm:h-12 lg:h-14 flex items-center justify-center'>
        <h2
          className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-gradient'
          style={style}>
          {roles[displayed]}
        </h2>
      </div>
    </>
  );
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  //

  return (
    <section
      id='hero'
      className='min-h-screen flex items-center justify-center relative overflow-hidden'
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}>
      <div className=' container mx-autom max-w-6xl   px-6 sm:px-6 lg:px-8 text-center flex flex-row items-center justify-center'>
        <div className='w-[50%] flex-col items-center justify-center hidden md:flex gap-4'>
          <img
            src={aman}
            alt='Aman Jat'
            className='w-100 h-100 rounded-full object-cover mt-4 mb-2 shadow-lg animate-fade-in'
          />
          <div className='flex justify-center space-x-6 animate-scale-in'>
            <a
              href='https://www.linkedin.com/in/amanjat/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-700 rounded-full p-2 hover:text-white hover:bg-gray-700 transition-all duration-600 tech-icon'>
              <LinkedInIcon size={28} />
            </a>
            <a
              href='https://github.com/aman-jat'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-700 rounded-full p-2 hover:text-white hover:bg-gray-700 transition-all duration-600 tech-icon'>
              <GithubIcon size={28} />
            </a>

            <a
              href='mailto:amanjat261@gmail.com'
              className='text-gray-700 rounded-full p-2 hover:text-white hover:bg-gray-700 transition-all duration-600 tech-icon'>
              <Mail size={28} />
            </a>
          </div>
        </div>
        <div
          className={`p-8  flex flex-col items-center justify-between md:justify-center gap-4 md:gap-8 h-screen py-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          {/* Introduction */}
          <div className='flex flex-col items-center xl:gap-2 2xl:gap-4'>
            <h1
              className={`text-4xl lg:text-5xl 2xl:-7xl  font-bold text-black/90 mb-2 animate-slide-up`}>
              AMAN JAT
            </h1>
            <RoleCarousel />
          </div>

          {/* Mobile Image */}
          <div className='w-[50%] flex flex-col items-center justify-center md:hidden'>
            <img
              src={aman}
              alt='Aman Jat'
              className='w-100 h-100 rounded-full object-cover md:mt-4 mb-2 shadow-lg animate-fade-in'
            />
            <div className='hidden md:flex justify-center space-x-6 animate-scale-in'>
              <a
                href='https://github.com/aman-jat'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-700 rounded-full p-2 hover:text-white hover:bg-gray-700 transition-all duration-600 tech-icon'>
                <GithubIcon size={28} />
              </a>
              <a
                href='https://www.linkedin.com/in/amanjat/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-700 rounded-full p-2 hover:text-white hover:bg-gray-700 transition-all duration-600 tech-icon'>
                <LinkedInIcon size={28} />
              </a>
              <a
                href='mailto:amanjat261@gmail.com'
                className='text-gray-700 rounded-full p-2 hover:text-white hover:bg-gray-700 transition-all duration-600 tech-icon'>
                <Mail size={28} />
              </a>
            </div>
          </div>

          {/* Description */}

          <div className='flex items-start text-left'>
            <ul className='text-sm md:text-sm lg:text-md xl:text-lg leading-7 max-w-3xl animate-fade-in text-black/70 space-y-1'>
              <li className='flex items-start gap-2'>
                <div className='flex h-10 items-center justify-center '>
                  <AIIcon size={16} />
                </div>
                <p className=''>
                  Passionate software engineer with 6+ years of experience
                </p>
              </li>
              <li className='flex items-baseline gap-2'>
                <div className='flex h-10 items-center justify-center '>
                  <AIIcon size={16} />
                </div>
                <p>Specialized in MERN and MEAN stack development</p>
              </li>
              <li className='flex items-baseline gap-2'>
                <div className='flex h-10 items-center justify-center '>
                  <AIIcon size={16} />
                </div>
                <p>Building responsive web apps with clean, modern designs</p>
              </li>
              <li className='flex items-baseline gap-2'>
                <div className='flex h-10 items-center justify-center '>
                  <AIIcon size={16} />
                </div>
                <p>Focused on exceptional user experiences</p>
              </li>
            </ul>
          </div>

          {/* Call to Action Buttons */}
          <div className='flex flex-row  gap-4 justify-center items-center animate-bounce-in'>
            <Button
              onClick={() => navigate('/projects')}
              size='lg'
              className='cursor-pointer hero-gradient text-white font-semibold px-8 py-3 rounded-full hover-glow transition-all duration-300'>
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant='outline'
              size='lg'
              className='cursor-pointer border-black/20 text-grey bg-white/90 hover:bg-white hover:text-foreground hover-glow px-8 py-3 rounded-full transition-all duration-300'>
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className='flex md:hidden justify-center space-x-6 animate-scale-in md:my-4'>
            <a
              href='https://github.com/aman-jat'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-700 rounded-full p-2 hover:text-white hover:bg-gray-700 transition-all duration-600 tech-icon'>
              <GithubIcon size={28} />
            </a>
            {/* <a
              href='https://www.linkedin.com/in/amanjat/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-700 rounded-full p-2 hover:text-white hover:bg-gray-700 transition-all duration-600 tech-icon'>
              <Linkedin size={28} />
            </a> */}
            <a
              href='mailto:amanjat261@gmail.com'
              className='text-gray-700 rounded-full p-2 hover:text-white hover:bg-gray-700 transition-all duration-600 tech-icon'>
              <Mail size={28} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className='animate-bounce'>
            <button
              onClick={() => scrollToSection('about')}
              className='text-gray-700 hover:text-hero-secondary transition-colors duration-300'>
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute -top-40 -right-40 w-80 h-80 hero-gradient rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse'></div>
        <div
          className='absolute -bottom-40 -left-40 w-80 h-80 bg-project-accent rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse'
          style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default Hero;
