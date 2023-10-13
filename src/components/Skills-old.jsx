import React from 'react'

const Skills = () => {
  const theme = localStorage.getItem('theme')
  console.log(theme)
  return (
    <section class="box-skills w-full box-border grid gap-4 sm:grid-cols-2 xl:grid-cols-3 justify-items-center">
      <div class="box-1 ">
        <h2 class="text-4xl font-extrabold">Full Stack</h2>
        <div class="stack p-4">
          {theme === 'dark'
          ? <div className="grid lg:grid-cols-4 grid-cols-3 lg:gap-3 gap-4 text-5xl">
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
          </div>}
        </div>
      </div>
      <div class="box-2">
        <h2 class="text-4xl font-extrabold">Testing</h2>
        <div class="stack p-4">
        </div>
      </div>
      <div class="box-3">
      <h2 class="text-4xl font-extrabold">Cloud</h2>
        <div class="stack p-4">
        </div>
      </div>
    </section>
  )
}

export default Skills
