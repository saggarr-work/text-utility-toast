import React from 'react'

//functions for summary table validation

function countParagraph(text){
    if(text === ""){
        return text = 0;
    }
    else{
        return text.trim().replace(/\n$/gm, '').split(/\n/).length;
    }
}

function countLine(text){
    if(text === ""){
        return text = 0;
    }
    else{
        return (text.match(/\./g) || '').length;
    }
}

function countWord(text){
    if(text === ""){
        return text = 0;
    }
    else{
        return text.trim().split(/\s+/).length;
    }
}

function countCharacter(text){
    if(text === ""){
        return text = 0;
    }
    else{
        return text.trim().length;
    }
}

function countTimeToRead(text){
    if(text === ""){
        return text = "0.00";
    }
    else{
        return ((1 / 125) * (text.trim().length)).toFixed(2);
    }
}

export default function TextSummary() {
    return (
        <></>
    )
}

export {countParagraph, countLine, countWord, countCharacter, countTimeToRead }
