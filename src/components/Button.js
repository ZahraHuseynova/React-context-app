import { Component } from "react";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

class Button extends Component{
    renderText(language){
        return language==="english"?"Submit":"Göndər"
    }

    renderContent=(color)=>{
        return(
            <button className= {`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {this.renderText}
                </LanguageContext.Consumer>
            </button>
        )
    }

    render(){
        return (
            <ColorContext.Consumer>
                {this.renderContent}
            </ColorContext.Consumer>
        )

    }
}

export default Button;