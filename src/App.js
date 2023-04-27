import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';


const style = {
  wrapper: `bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 flex flex-col items-center justify-start min-h-screen p-6`,
  button: `px-4 py-2 my-4 text-white bg-gray-700 rounded-lg hover:bg-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 shadow-md`,
  profile: `w-20 h-20 rounded-full bg-blue-500 mt-8 mb-4 shadow-lg border-4 border-transparent hover:border-blue-300 transition-all duration-200`,
  text: `mt-4 text-3xl font-bold text-white tracking-wider`,
  tagline: `text-xl text-white opacity-80 tracking-wide`,
};

function App() {
  return (
    <div className={style.wrapper}>
      <div className={style.profile}></div>
      <h1 className={style.text}>Mark Rodriguez</h1>
      <p className={style.tagline}>Full Stack Developer</p>
      <div className="flex flex-col items-center justify-center w-full">
      <button className={style.button} title="Read Mark's Blog">
  <a href="https://twitter.com/itsrark" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faTwitter} className="mr-2"/>
  </a>
  Twitter
</button>

<button className={style.button} title="Check Mark's GitHub Repositories">
  <FontAwesomeIcon icon={faGithub} className="mr-2" />
  GitHub
</button>
<button className={style.button} title="Read Mark's Blog">
  <FontAwesomeIcon icon={faBlog} className="mr-2" />
  Blog
</button>
      </div>
    </div>
  );
}

export default App;
