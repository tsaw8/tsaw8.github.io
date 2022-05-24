import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import About from '../components/About'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Thapani Sawaengsri"
                    meta={[
                        { name: 'description', content: 'Thapani Sawaengsri - Software Developer, Educator, Lifelong Learner' },
                        { name: 'keywords', content: 'thapani, sawaengsri, tsawaengsri, software, developer, engineer, web' },
                    ]}
                >
                </Helmet>

                <Banner />
                <About />

            </Layout>
        )
    }
}

export default HomeIndex