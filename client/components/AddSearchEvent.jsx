import React from 'react';
import CreateEvent from './CreateEvent.jsx';
import SearchEvent from './SearchEvent.jsx';

export default function AddSearchEvent(props) {
  return (
    <div className="myCol">
        <CreateEvent {...props}/>
        <SearchEvent {...props}/>
    </div>
  )
}

