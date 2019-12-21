import React from 'react';
import CodeSection from './components/Code_Section/Code_Section'

function App() {
  return (
    <div className="App">

      <div className="code_samples">

        <CodeSection theme="monokai-sublime" lang="js">
            {
              "import icon from 'icon.js'\n" + 
              "let a = 12\n"+
              "for(let i = 0; i < 10; i++){\n"+
              "\ta += i\n"+
              "}\n"+
              "console.log(a)\n"
            }
        </CodeSection>


        <CodeSection theme="ocean" lang="php">
            {
              "<?php\n"+
              "echo \"Hello World!\";\n"+
              "?>"
            }
        </CodeSection>

      </div>
    </div>
  );
}

export default App;
