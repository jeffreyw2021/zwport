import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

const About = () => {
    
    return(
        <>
            <div className="container about-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx = {15}
                        />
                    </h1>
                    <p>I am an undergraduate student of the class of 2025 at Washington University in St.Louis. I am pursuing a Bachelor of Science in Computer Science degree, along with a second major in Communication Design.</p>
                    <p>As a computer science student, I have my focus in the field of software and web development. I'm particularly experienced in frontend development with HTML, CSS, and Javascript. I'm currently learning the Swift language to delve into the field of application development on IOS platforms. </p>
                    <p>As a researcher, I am particularly interested in the the field of human-computer interaction and its application in software development. To be more specific, I have focused my academic studies on how digital technology can assist people with sensory disabilities in their daily life. </p>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About