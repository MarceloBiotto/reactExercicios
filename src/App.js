
import { useState } from 'react';
import './App.css';
import GatoGordo from './assets/obesidade-gatos.jpg'
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';



function App() {

  //const name = "Joaquim";
  const[userName] = useState("Maria");

function ShowMessage(){
  console.log("Evendo do componente pai!")
}

  const cars=[
    {
      id:1,
      brand: "Ferrari",
      color:"Amarela",
      newCar:true,
      km:0
    },
    {
      id:2,
      brand: "Kia",
      color:"Branco",
      newCar:false,
      km:34343
    },
    {
      id:3,
      brand: "Renault",
      color:"Azul",
      newCar:false,
      km:234
    }


  ]
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
    <CarDetails brand= "VW" km= {10010} color= "red" newCar={false}/>
    {/* reaproveitando*/}
    <CarDetails brand="Ford" color="Vermelha" km={0}  newCar={true}/>

    <CarDetails brand="Fiat" color="Branca" km={4500} newCar={false}/>
    {/*loop em array de objetos */}
    {cars.map((car) => (
      <CarDetails brand={car.brand} 
      key={car.id}
      color={car.color} 
      km={car.km} 
      newCar={car.newCar}/>
    ))}
  {/*Fragment */}
    <Fragment propFragment="teste"/>


    {/* children prop */}
    <Container myValue = "testing">
      <p>E este é o conteudo</p>
    </Container>

    {/* executar função */}
      <ExecuteFunction myFunction=
      {ShowMessage}/>
    </div>
  );
}

export default App;
