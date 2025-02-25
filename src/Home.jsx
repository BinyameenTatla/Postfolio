import { Hero } from './Hero.jsx'
import { Section } from './Section.jsx'
import { MySkills } from './MySkills.jsx'
import { Project } from './Project.jsx'
import { Section1 } from './Sections1.jsx'
import { Services } from './Services.jsx'
import { Contacts } from './Contacts.jsx'

export const Home = () => {
    return (
        <>
            <Hero />
            <Section />
            <MySkills />
            <Project />
            <Section1 />
            <Services />
            <Contacts />
        </>
    )
}
