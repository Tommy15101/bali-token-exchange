import React from 'react'
import {
    NoLoadContainer,
    NoLoadWindowContainer,
    NoLoadWindowHeader,
    NoLoadWindowIcon,
    NoLoadWindowH1,
    NoLoadWindowMessage,
    NoLoadWindowP,
    NoLoadWindowA
} from './NoLoadStyled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPoo } from '@fortawesome/free-solid-svg-icons'

const NoLoad = () => {
    return (
        <NoLoadContainer>
            <NoLoadWindowContainer>

                <NoLoadWindowHeader>
                    <NoLoadWindowIcon><FontAwesomeIcon icon={faPoo}/></NoLoadWindowIcon>
                    <NoLoadWindowH1>Oops... Wrong Network...</NoLoadWindowH1>
                    <NoLoadWindowIcon><FontAwesomeIcon icon={faPoo}/></NoLoadWindowIcon>
                </NoLoadWindowHeader>

                <NoLoadWindowMessage>
                    <NoLoadWindowP>
                        This DEX is deployed to the Rinkeby Test Network only. . . <br /> Please check your connection with Meta Mask.
                    </NoLoadWindowP>
                    <NoLoadWindowA href="https://metamask.io/faqs" target="_blank">
                        Visit Meta Mask For Further Support
                    </NoLoadWindowA>
                    <NoLoadWindowA href="https://faucet.rinkeby.io/" target="_blank">
                        Get Rinkeby Test Network Ethereum 
                    </NoLoadWindowA>
                </NoLoadWindowMessage>

            </NoLoadWindowContainer>
        </NoLoadContainer>
    )
}

export default NoLoad
