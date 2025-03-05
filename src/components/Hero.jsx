import heroImg from '../assets/hero.svg';
import { userData } from '../data';

const Hero = () => {
  return (
    <div className='bg-violet-200 py-10' id='home'>
      <div className='align-element grid md:grid-cols-2 items-center gap-8'>
        <article>
          <h1 className='text-5xl font-bold tracking-wider'>{userData.heroTitle}</h1>
          <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
            {userData.position}
          </p>
          <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
            {userData.userIntro}
          </p>
          <div className='flex gap-x-4 mt-4'>
            <a
              href={userData.github.link}
              target='_blank'
              rel='noreferrer'
            >
              {userData.github.icon}
            </a>
            <a
              href={userData.linkedin.link}
              target='_blank'
              rel='noreferrer'
            >
              {userData.linkedin.icon}
            </a>
          </div>
        </article>
        <article className='hidden md:block'>
          <img src={heroImg} className='h-80 lg:h-96' />
        </article>
      </div>
    </div>
  );
};
export default Hero;
