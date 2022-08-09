import './about.styles.scss';

const technologies = ["React", "Redux", "React Router", "Redux-Persist", "Redux-Thunk", "SASS", "Express", "Heroku"];
const functionality = [
  "Searches popular places in chosen city and category",
  "Searches current forecast in chosen city",
  "Shows place details which provides place info, google map link and fetch place tips for the user"
]
const links = [
  {
    name: "Git Repo",
    link: "https://github.com/ValentynJK/travel-track-react"
  },
  {
    name: "Portfolio",
    link: "https://valentynjk.github.io/Portfolio/index.html"
  }
]

const About = () => {
  return (
    <div className="about-container">
      <h2>Travel-Track application</h2>
      <h4>Welcome to the Travel-Track application</h4>
      <p>This is full-stack API application. Server is written using Express and client using React. It consumes Foursquare and OpenWeather APIs.</p>
      <span className='subheader'>Basic functionality:</span>
      <ul>
        {functionality.map((func, index) => <li key={index}>{func}</li>)}
      </ul>
      <span className='subheader'>Technology used:</span>
      <ul>
        {technologies.map((tech, index) => <li key={index}>{tech}</li>)}
      </ul>
      <span className='subheader'>Links:</span>
      <ul>
        {links.map((link, index) => <li key={index}><a href={link.link} target="_blank" rel="noopener noreferrer">{link.name}</a></li>)}
      </ul>

    </div >
  )
};

export default About;

/*

Travel-Track application
Welcome to the Travel-Track application

This is API application which consumes Foursquare and OpenWeather APIs.

Basic functionality:
Search popular places in chosen city and category
Search current forecast in chosen city
Shows place details which provides place info, google map link and fetch place tips for the user
Technology used
React
Redux
Redux-persist
Redux-Thunk
SASS
Express
Heroku
*/