import React from 'react';
import { LegalModal } from './styled.jsx';

class Modal extends React.Component {

  onClickLegal = () => {
    const { showLegal } = this.props;
    showLegal(false);
  }

  render() {

    return(
      <div className="overlay" onClick={this.onClickLegal}>
        <LegalModal>
          
              <h3>GAME RULES</h3>
              
              <p>You will coordinate the team of mechanics to ensure that the pit process is as fast and successful as possible.</p>
              <p>Each mechanic has a specific role:</p>
              
              <h5>Jackman (one)</h5>
              
                <ul>
                  <li>He is in charge of lifting the car as soon as it reaches the pits.</li>
                  <li>It is also responsible for removing the right front wheel once it has been loosened by the technicians.</li>
                  <li>It’s the one that validates that everything is ok so that the car can get out of the pits.</li>
                </ul>

              <h5>Wheel Technicians (three)</h5>  
              
                <p>They are responsible for changing the wheels, for this they must:</p>

                <ul>
                  <li>Loosen the wheel lock</li>
                  <li>Remove the wheel and replace it with another</li>
                  <li>Secure the new wheel</li>
                </ul>

              <h5>Gas Man (one)</h5>  
              
                <p>He is in charge of filling the fuel tank, the task can begin as soon as the car arrives in the pit.</p>
          
              <p className="legal_footer_leyend">Click anywhere to close the legal modal</p>
        </LegalModal>
      </div>
    );

  }

}

export default Modal;