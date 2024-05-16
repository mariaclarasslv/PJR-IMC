import React , {useState} from "react";
import {View, Text, TextInput, Button} from "react-native";
import ResultImc from "./ResultImc";

export default function Form(){

    const [height, setHeight] = useState(null)
    const [Weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("informe seu peso")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("IMC")


    function imcCalculator(){
        return setImc((Weight/(height*height))).toFixed((2))

    }
    function validationImc(){
        if(Weight !=null && height !=null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("SEU IMC É =")
            setTextButton("CALCULAR NOVAMENTE")
            return
        }
        setImc(null)
        setTextButton("calcular")
        setMessageImc("preencha seu peso")
    }

    return(
        <View>
            <View>     
<Text>Altura</Text>
<TextInput
placeholder="Ex.1.75"
keyboardType="numeric"
/>

<Text>Peso</Text>
<TextInput
placeholder="Ex.55.766"
keyboardType="numeric"
/>
<Button
title = {textButton}
/>

            </View>
        </View>
    )
}