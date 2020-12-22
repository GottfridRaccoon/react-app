import React, { Suspense } from 'react'
import Load from "./load/Load"
let ContentRoot = React.lazy(() => import('./Content/ContentRoot')) //загрузка компонента по мере загрузки компонента


function App() {

  window.history.replaceState(null, null, "/");
  return (

    <div>
    
  
        <ContentRoot></ContentRoot>

     
    </div>

  );
}

export default App;
