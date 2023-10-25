
import './App.css';
import GatoGordo from './assets/obesidade-gatos.jpg'
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import CarDetails from './components/CarDetails';


function App() {

  const name = "Joaquim";
  const[userName] = useState("Maria");
  return (
    <div className="App">
      <h1>
        Isso é o desafio3!
        </h1>
   {/* Imagem em public */}
        <div>
          <img src="/gato-gordo-o-que-fazer-para-ajudar-1.jpg" alt="gato gordo" className='gatos'/>
        </div>

        {/*imagem em asset*/}
        <div>
          <img src={GatoGordo} alt="obesidade entre gatos" className='gatos'/>
        </div>

        <ManageData />
     
     <ListRender />

     <ConditionalRender />
    {/*props */}
     <ShowUserName name = {userName}/>
    {/*destructuring */}
    <CarDetails brand= "VW" km= {10010} color= "red"/>

    </div>
  );
}

export default App;
