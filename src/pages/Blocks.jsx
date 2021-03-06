import React from 'react';
import { Link, Router } from '@reach/router';
import StudentsInBlock from './StudentsInBlock';

const Blocks = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={`/blocks/${'fun'}/students`}>Fundamentals</Link>{' '}
        </li>
        <li>
          <Link to={`/blocks/${'be'}/students`}>Backend</Link>
        </li>
        <li>
          <Link to={`/blocks/${'fe'}/students`}>Frontend</Link>
        </li>
        <li>
          <Link to={`/blocks/${'proj'}/students`}>Project block</Link>
        </li>
        <li>
          <Link to={`/blocks/${'grad'}/students`}>Graduated</Link>
        </li>
      </ul>
      <Router>
        <StudentsInBlock path="/:block_name/students" />
      </Router>
    </div>
  );
};

export default Blocks;
