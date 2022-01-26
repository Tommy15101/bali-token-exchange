import React, { Component } from 'react'
import './App.css'
import Navbar from './Navbar'
import Content from './Content'
import NoLoad from './NoLoad/NoLoad'
import { connect } from 'react-redux'
import {
  loadWeb3,
  loadAccount,
  loadToken,
  loadExchange
} from '../store/interactions'
import { contractsLoadedSelector } from '../store/selectors'

class App extends Component {
  componentDidMount() {
    this.loadBlockchainData(this.props.dispatch)
  }

  async loadBlockchainData(dispatch) {
    const web3 = await loadWeb3(dispatch)
    const networkId = await web3.eth.net.getId()
    await loadAccount(web3, dispatch)
    const token = await loadToken(web3, networkId, dispatch)
    const exchange = await loadExchange(web3, networkId, dispatch)
  }

  render() {
    return (
      <div>
        <Navbar />
        { this.props.contractsLoaded ? <Content /> : <NoLoad /> }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contractsLoaded: contractsLoadedSelector(state)
  }
}

export default connect(mapStateToProps)(App)