import React, { useState } from "react";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import Saldo from '../../components/Saldo';
import Input from '../../components/Input';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  image: {
    width: 340,
    height: 80,
    marginBottom: 20,
  },
  naConta: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
  dindin: {
    width: 160,
    height: 50,
    fontSize: 36,
    color: '#e60000',
    textAlign: 'center',
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    flex: 1,
    backgroundColor: '#e60000', 
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default function ListaTarefas() {
  const [saldo, setSaldo] = useState(7320.92);
  const [value, onChangeValue] = useState(0);

  const depositar = () => {
    if (value > 0) {
      setSaldo(saldo + parseFloat(value));
    }
  };

  const sacar = () => {
    if (value > 0 && value <= saldo) {
      setSaldo(saldo - parseFloat(value));
    } else if (value > saldo) {
      alert("Saldo insuficiente!");
    }
  };

  return (
    <View style={style.container}>
      <Image style={style.image} source={require('../../assets/images/santander2.png')} />
      <Text style={style.naConta}>SALDO ATUAL NA CONTA</Text>
      <Saldo style={style.dindin} saldo={saldo} />
      <Text style={style.text}>Digite o valor abaixo e escolha uma das operações bancárias:</Text>
      <Input value={value} onChangeValue={onChangeValue} />
      <View style={style.buttonContainer}>
        <Pressable style={style.button} onPress={depositar}>
          <Text style={style.buttonText}>Depositar</Text>
        </Pressable>
        <Pressable style={style.button} onPress={sacar}>
          <Text style={style.buttonText}>Sacar</Text>
        </Pressable>
      </View>
    </View>
  );
}
