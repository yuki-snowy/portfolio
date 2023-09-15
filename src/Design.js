import { useState } from 'react';
import React from 'react';
import useSound from 'use-sound';
import sfx from './sounds/tokimeki_labyrinth.mp3';

function Visualize() {

}

//　TODO 音源の読み込み
function ImportSound() {

}

//  メニュー
function Menu() {

}

export default function App() {
    const [play] = useSound(sfx)
 
    return <button onClick={play}>再生</button>
}
  