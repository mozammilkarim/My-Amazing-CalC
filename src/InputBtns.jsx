import React from 'react'
// import styled from "styled-components"
import './App.css';
const InputBtns = ({value,onClick}) => {
  return (
    <div className="inputBtns" onClick={onClick}>{value}</div>
    // <InputBtn onClick={onClick}>{value}</InputBtn>
  )
}
// const InputBtn=styled.div`
// border: 1px solid;
// padding: 0.35rem;
// background-color: #4caf50;
// text-align: center;
// cursor: pointer;
// `
export default InputBtns