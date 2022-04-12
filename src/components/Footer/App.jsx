
import React, { Component } from 'react';

export default class App extends Component {
    

    render(){ 
        return(
            <React.Fragment>

          <footer>
             
             
             <div className="footer-logo">
                 <h1 >Flare gun</h1>
            </div>
             <div className="list">
             <ul className="list-decoration">
                 <li>contact us</li>
                 <li>privacy policy</li>
                 <li>FAQ</li>
             </ul>
             </div>
             
             <div className="list2">
             <ul className="list-decoration">
                 <li>facebook</li>
                 <li>twitter</li>
                 <li>instagram</li>
             </ul>
             </div>
             
          </footer>
          <div class="team"> <p>Created By Team <span>X</span></p>
             
             </div>             
          </React.Fragment>
    );
    }
}