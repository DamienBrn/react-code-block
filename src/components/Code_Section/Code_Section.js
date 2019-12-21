import React from 'react'
import './Code_Section.css'
import hljs from 'highlight.js';


export default class Code_Section extends React.Component{

    render(){
        return(
            <div>
                <div className="code_section hljs">                    
                    <div id="line_number">
                        {this.state.lineNumbers}
                    </div>
                    <div className="">
                        <pre className="pre_code">
                            <code className={this.props.lang}>
                                {this.props.children}
                            </code>
                        </pre>
                    </div>                    
                </div>
            </div>
        )
    }

    constructor(props){
        super(props)
        this.state = {
            lineNumbers : ""
        }
    }

    componentDidMount() {
        this.loadTheme()
        this.highlightCode()
        this.displayLineNumbers()
    }

    loadTheme(){
        let themeName = this.props.theme != undefined ? this.props.theme + ".css" : "default.css"
        let baseUrl = 'highlight.js/styles/'
        let theme = baseUrl + themeName
        require('highlight.js/styles/' + themeName)
    }

    highlightCode() {
        hljs.initHighlightingOnLoad()
    }

    displayLineNumbers(){
        let enteredText = this.props.children
        let char = "\n"
        let numberOfLineBreaks = enteredText.split(char).length-1
        let lines = ""
        
        for(let i = 0; i < numberOfLineBreaks + 1; i++){
            lines += i + "\n"
        }
        this.setState({
            lineNumbers : lines
        })
    }

}