import { Component } from "react";
import LanguageContext from "../context/LanguageContext"

class LanguageSelector extends Component{
    static contextType= LanguageContext;
    render(){
        const {onLanguageChange,language}=this.context
        return(
            <div>
                Select language
                <i className="flag us" onClick={()=>{
                    this.onLanguageChange("english")
                    }}/>
                <i className="flag az" onClick={()=>{
                    this.onLanguageChange("azeri")
                    }}/>
            </div>
        )
    }
}