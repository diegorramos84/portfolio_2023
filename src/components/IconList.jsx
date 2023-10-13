import React, { useState } from 'react';

const IconList = () => {
  const icons = [
    <i key="flask" className="devicon-flask-original-wordmark text-7xl"></i>,
    <i key="python" className="devicon-python-plain-wordmark text-7xl"></i>,
    <i key="django" className="devicon-django-plain-wordmark text-7xl"></i>,
    <i key="js" className="devicon-javascript-plain text-7xl"></i>,
    <i key="react" className="devicon-react-original-wordmark text-7xl"></i>,
    <i key="node" className="devicon-nodejs-plain-wordmark text-7xl"></i>,
    <i key="mongodb" className="devicon-mongodb-plain-wordmark text-7xl"></i>,
    <i key="postgres" className="devicon-postgresql-plain-wordmark text-7xl"></i>
  ];

  const [startIndex, setStartIndex] = useState(0);

  const scrollLeft = () => {
    setStartIndex(Math.max(startIndex - 1, 0));
  };

  const scrollRight = () => {
    console.log('clicked')
    setStartIndex(Math.min(startIndex + 1, Math.max(icons.length - 3, 0)));
  };

  return (
    <div className="icons-container">
      <div className="icons flex justify-center">
        {icons.slice(startIndex, startIndex + 3)}
      </div>
      <button className="prev-btn" onClick={scrollLeft} disabled={startIndex === 0}>&lt;</button>
      <button className="next-btn" onClick={scrollRight} disabled={startIndex >= Math.max(icons.length - 3, 0)}>&gt;</button>
    </div>
  );
};

export default IconList;
