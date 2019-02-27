import React,{Component} from 'react'



export default class Inspection extends Component{

constructor(props){
  super(props)
  this.handleClick=this.handleClick.bind(this)
}


handleClick(e){
  e.preventDefault()
  this.props.onInspectionClick(this.props.inspInfo["id"], this.props.inspStatus)
}


render(){
  return(
    <li onClick={this.handleClick} className={this.props.current ? "inspection selected" : "inspection"}>
     {this.props.inspInfo["scheduleDate"]}
    </li>
  )
}

}
