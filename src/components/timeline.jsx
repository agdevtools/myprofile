import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Arity - Full Stack Engineer <span> 2019-present</span></h2>
                        <p>Working as a full stack engineer, Armand has excelled in working with the diverse tech stack at
                           Arity. From developing backend services in Java and Kotlin, to front-end web applications using
                           react, and everything in between. Armand has also used pandas and pyspark to clean and
                           analyse huge data sets to produce meaningful insights. He has also taken the opportunity to
                           provide key performance metrics to the business using prometheus, promregator and Grafana.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Allstate - Application Developer <span> 2015-2019 </span></h2>
                        <p>In 4 years at Allstate Armand established himself as a key person in the Encompass Target
                           Reporting team. Drawing on his experience in the ETL arena, Armand delivered many new ETLs
                           within time and budget, contributed to many differing projects whilst also improving the quality
                           and performance of existing processes. Armand primarily used Informatica, SQL and Business
                           Objects to provide the Encompass business with the metrics and reporting they needed. Armand
                           also introduced python scripts to alert the team when upstream files were not delivered on time.
                           In addition to this he was able to use python to provide automated testing. This provided great
                           time saving for the team.</p> </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Fujitsu - Oracle Consultant and Team Lead <span> 2001-2015 </span></h2>
                        <p>Prior to working at Allstate NI Armand worked at Fujitsu where he worked as an Applications BI
                           Consultant. This involved working for a very high profile UK based customer, delivering high
                           quality solutions to a business critical environment. This was achieved using Informatica for
                           mapping creation, design, maintenance and troubleshooting. ETL management was also an
                           important factor in ensuring maximum availability of the customer’s data. In this time he has also
                           engaged with Oracle to successfully deliver the latest patches to the production environment and
                           achieved the distinction of becoming and Oracle Certified Professional in the OBIA space.</p></div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
