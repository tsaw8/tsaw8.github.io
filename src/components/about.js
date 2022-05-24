import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const About = () => {
    const data = useStaticQuery(graphql`{
        allFile(filter: {extension: {eq: "pdf"}}) {
            edges {
                node {
                    publicURL
                }
            }
        }
    }`)
    const resumeURL = data.allFile.edges[0].node.publicURL
    return (
        <section id="about" className="major">
            <div className="inner">
                <header className="major">
                    <h1 className="h1">About Me</h1>
                </header>
                <div className="content">
                    <p>I'm driven by learning the "why" behind the "how". Natural curiosity drives me and programming allows me to satisfy these curiosities.</p>
                    <p>My formal education is in Poltical Science, but during my senior year I found a deep passion for programming. I put a great focus on group dynamics and communication, which I consider  two of life's most vital skills. Through software development I find joy in taking ideas from conception to production; delivering a usable product that brings value to the stakeholders and end users.</p>
                    <p>
                        All of the projects I do for enjoyment or learning purposes are located on Github, which can be accessed below.
                        <br />
                        For everything else, you can reach me at thapani.sawaengsri@gmail.com
                    </p>
                    <ul className="actions">
                        <li><a href={resumeURL} className="button next scrolly" target="_blank" rel="noopener noreferrer">View Resume</a></li>
                        <li><a href="https://github.com/tsaw8" className="button next scrolly" target="_blank" rel="noopener noreferrer">View Github</a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About