import React from 'react'

const Skills = () => {
  const theme = localStorage.getItem('theme')
  console.log(theme)
  return (
    theme === 'dark'
    ? <div className="grid lg:grid-cols-4 grid-cols-3 lg:gap-12 gap-4 text-7xl">
       <i className="devicon-flask-original-wordmark "></i>
       <i className="devicon-python-plain-wordmark"></i>
       <i className="devicon-django-plain-wordmark"></i>
       <i className="devicon-javascript-plain"></i>
       <i className="devicon-react-original-wordmark"></i>
       <i className="devicon-nodejs-plain-wordmark"></i>
       <i className="devicon-mongodb-plain-wordmark"></i>
       <i className="devicon-postgresql-plain-wordmark"></i>
    </div>
    : <div className="grid grid-cols-4 gap-6 text-7xl">
          <i className="devicon-python-plain-wordmark "></i>
          <i className="devicon-django-plain-wordmark "></i>
          <i className="devicon-flask-original-wordmark "></i>
          <i className="devicon-javascript-plain "></i>
          <i className="devicon-react-original-wordmark "></i>
          <i className="devicon-nodejs-plain-wordmark"></i>
          <i className="devicon-mongodb-plain-wordmark "></i>
          <i className="devicon-postgresql-plain-wordmark "></i>
        </div>
  )
}

export default Skills
