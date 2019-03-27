import React from 'react';
import Table from './table';

const students = [{
        student: 'Peter Parker',
        course: 'Intro to Photography',
        grade: 95
    }, {
        student: 'Bruce Banner',
        course: 'Psychology',
        grade: 91
    }, {
        student: 'Tony Stark',
        course: 'Mechanical Engineering',
        grade: 100
    }
];

const App = () => (
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
);

export default App;