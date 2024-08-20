import { useState } from "react";
import { Button, ChakraProvider, Text, Flex } from "@chakra-ui/react";
import Navbar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";

//Estados: un valor que le podemos brindar a mi componente
//Hooks: funciones ya definidas por React que nos permiten realizar ciertas acciones en nuestros componentes. Por ejemplo crear un estado.
//useState: Hook que nos permite crear un estado en un componente funcional

function App() {
  //Funciones count y setCount
  //count: es el valor de mi estado
  //setCount: es la función que me permite actualizar el valor de mi estado 
  // const [count, setCount] = useState(0);
  // const handleRemoveItem = () => {
  //   if (count === 0) return;
  //   setCount(count - 1);
  // };
  // const handleAddItem = () => {
  //   if (count === 10) return;
  //   setCount(count + 1);
  // };

  return (
    <ChakraProvider>
      <Navbar />
      <Flex>
        {/* Recordatorio de: 
        Botones de prueba para sumar o restar*/}
        {/* <Button onClick={handleRemoveItem}>-</Button>
        <Text>{count}</Text>
        <Button onClick={handleAddItem}>+</Button> */}
        <ItemListContainer greeting="Bienvenido a Tecnocomponents"/>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
