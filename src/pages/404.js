import React from 'react'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <h1>PAGE NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          <p>Please make sure you typed the address correct, or if you were directed here please let me know!</p>
        </div>
      </section>
    </div>
  </Layout>
)

export default NotFoundPage
