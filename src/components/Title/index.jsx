import {H1, P, Input, Newbutton, Text, Container} from "../Title/styles";
import { useState } from "react";

function TittleHome() {
  const [titulo, setTitulo] = useState("Insira um  novo titulo");
  const [inputtexto, setInputtexto] = useState("");

  const [paragrafo, setParagrafo] = useState("Escreva um novo texto");
  const [inputp, setInputp] = useState("");

  const newText = () => {
    setTitulo(inputtexto);
  };

  const inputMode = (e) => {
    setInputp(e.target.value);
    setParagrafo(e.target.value);
  };

  return (

    <Container>
    <Text>
      <H1>{titulo}</H1>
      <P>{paragrafo}</P>

      <Input
        autoFocus
        placeholder="Digite um texto"
        type="text"
        value={inputp}
        onChange={inputMode}
      />

      <Input
        type="text"
        placeholder="Digite algo pra mudar o titulo"
        value={inputtexto}
        onChange={(e) => {
          setInputtexto(e.target.value);
        }}
      />

     
      <Newbutton onClick={newText} glow>Mudar</Newbutton>

    </Text>
    </Container>
  );
  
}




export default TittleHome;
