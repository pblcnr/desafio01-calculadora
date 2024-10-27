import Input from "./Components/Input";
import Button from "./Components/Button";

import { Container, Content, Row } from "./styles";
import { useState } from "react";


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  };

  const handleSumNumbers = () => {

    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  };

  const handleMinusNumbers = () => {

    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minus));
      setOperation('');
    }
  };

  const handleDivNumbers = () => {

    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const div = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(div));
      setOperation('');
    }
  };

  const handleMultNumbers = () => {

    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('X');
    } else {
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mult));
      setOperation('');
    }
  };

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch(operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case '/':
          handleDivNumbers();
          break;
        case 'X':
          handleMultNumbers();
          break;
        default: 
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="X" onCLick={handleMultNumbers}/>
          <Button label="/" onCLick={handleDivNumbers} />
          <Button label="C" onCLick={handleOnClear}/>
          <Button label="." />
        </Row>
        <Row>
          <Button label="7" onCLick={() => handleAddNumber('7')}/>
          <Button label="8" onCLick={() => handleAddNumber('8')}/>
          <Button label="9" onCLick={() => handleAddNumber('9')}/>
          <Button label="-" onCLick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="4" onCLick={() => handleAddNumber('4')}/>
          <Button label="5" onCLick={() => handleAddNumber('5')}/>
          <Button label="6" onCLick={() => handleAddNumber('6')}/>
          <Button label="+" onCLick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="1" onCLick={() => handleAddNumber('1')} />
          <Button label="2" onCLick={() => handleAddNumber('2')} />
          <Button label="3" onCLick={() => handleAddNumber('3')} />
          <Button label="=" onCLick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
