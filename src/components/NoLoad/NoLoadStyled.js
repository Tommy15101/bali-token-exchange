import styled from 'styled-components';

export const NoLoadContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.85);
    z-index: -1;
`

export const NoLoadWindowContainer = styled.div`
    position: relative;
    width: 70%;
    height: 50%;
    background-color: white;
    display: grid;
    grid-template-rows: 1fr 4fr;
    border-radius: 10px;
`
export const NoLoadWindowHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`
export const NoLoadWindowH1 = styled.h1`
    font-size: 40px;
`
export const NoLoadWindowIcon = styled.div`
    color: brown;
    font-size: 50px;
    border-bottom: 3px solid brown;
    border-radius: 5px;
`
export const NoLoadWindowMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`
export const NoLoadWindowP = styled.p`
    font-size: 30px;
    text-align: center;
`
export const NoLoadWindowA = styled.a`
`