import React, { Component} from 'react';
import '../App.css';
import SelectButton from '../elements/SelectButton';

function Square (props){
    return(
        <div>
            <div className ="gambar">
                <img src={props.gambar}/>
            </div>
            <h3><b>{props.nama}</b></h3>
            <p>{props.nim}</p>
            <SelectButton backgorund = "#fafafa">
                <option>Kelas</option>
                <option>Kelas A</option>
                <option>Kelas B</option>
            </SelectButton>
        </div>
    )
}
export default class CompAndProps extends Component{
    render(){
        const backgorund={
            backgroundColor : this.props.bgcolor
        }
        return(
            <div className="wrapper">
                <div className = "User-info" style={backgorund}>
                    <Square nama="M. Rizqi Alfani" nim='21120117140007' gambar = "https://www.flaticon.com/svg/static/icons/svg/3681/3681921.svg" link ="/satu"/>
                </div>
                <div className = "User-info" style={backgorund}>
                    <Square nama="Yarnish Dwi SF" nim='21120117130049' gambar = "https://www.flaticon.com/svg/static/icons/svg/3681/3681923.svg" link ="/dua"/>
                </div>
            </div>
        )
    }
}
