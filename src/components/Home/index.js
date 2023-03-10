import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['i', 'q', 'i', 'a', 'n']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1> 
                    {/* animated-text: Hi, I'm */}
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br/>
                    <span className={`${letterClass} _12`}>I</span>
                    <span className={`${letterClass} _12`}>'m</span>

                    <img src={LogoTitle} alt="developer" />
                    {/* animated-text: iqian */}
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}/>
                    <br />
                    {/* animated-text: web developer */}
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={22}/>
                </h1>
                <h2>Frontend Developer / UIUX Designer / Artist</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Home