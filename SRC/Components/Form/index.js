import React , {useState} from "react";
import {View, Text, TextInput, Button} from "react-native";
import ResultImc from "./ResultImc";

export default function Form(){

    const [height, setHeight] = useState(null)
    const [Weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("preencha sua altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("calcular IMC")

    function imcCalculator(){
        return setImc((Weight/(height*height))).toFixed((2))

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