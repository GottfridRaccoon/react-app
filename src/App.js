import React from 'react'
import ContentRoot from './Content/ContentRoot'


function App() {

  window.history.replaceState(null, null, "/");
  return (
   
    <div>
     
     <ContentRoot />
    
    </div>
   
  );
}

export default App;
