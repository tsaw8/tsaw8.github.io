import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Banner = () => {
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
        <section id="banner" className="major">
            <div className="inner">
                <header className="major">
                    <h1 className="h1">Hello! I'm Thapani.</h1>
                </header>
                <div className="content">
                    <p>Self-Taught Developer, Educator, Lifelong Learner</p>
                    <p>"First solve the problem then write the code."</p>
                    <ul className="actions">
                        <li><a href={resumeURL} className="button next scrolly" target="_blank" rel="noopener noreferrer">View Resume</a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Banner