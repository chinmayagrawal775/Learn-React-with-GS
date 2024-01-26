import React, { Component } from 'react'

export default class Error extends Component {

    state = {
        hasError:false
    }

    static getDerivedStateFromError(error){
        return({hasError:true})
    }

    componentDidCatch(error,info){
        console.log(error)
        console.log(info)
    }

  render() {
    if(this.state.hasError){
        return <h1>error occured</h1>
    }
    return this.props.children
  }
}
