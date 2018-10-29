import React from 'react';

const Developer = ({developers, deleteDeveloper}) => {

    return (
        
        <div className="developer-list">
        { 
            developers.map(developer => {
            return (
                <div className="developer" key={developer.id}>
                <div>Name: { developer.name }</div>
                <div>Language: { developer.langauge }</div>
                <div>Salary: { developer.salary }</div>
                <button onClick={() => {deleteDeveloper(developer.id)}}>Delete ninja</button>
                </div>
            )
            })
        }
        </div>
            
    )

}

export default Developer;