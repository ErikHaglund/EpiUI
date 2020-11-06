import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class ExpSelectApproach extends React.Component{
    constructor(props) {
        super()
    }

    //Transition to the next path/state
    handleClick = (event, path) => {
        this.props.history.push(path);
    }

    //Trigger parent method exiExp() and return to home-page
    exitExperiment = (event) => {
        this.props.callbackFromParent();
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <div className= "jumbotron text-center"> 
                    <div>
                        {/* <FontAwesomeIcon icon={["fal", "coffee"]} /> */}
                        <FontAwesomeIcon icon={faCoffee} />
                        <button  onClick={(e) => this.handleClick(e, '/ExpTakePicture')} type="submit" className="btn btn-primary">Ta bild</button>
                    </div>
                    <button  onClick={(e) => this.handleClick(e, '/ExpChoosePicture')} type="submit" className="btn btn-primary">Välj bild</button>
                    <button  onClick={(e) => this.exitExperiment(e, '/')} type="submit" className="btn btn-primary">Tillbaka</button>
                </div>
                
                <div className="form-group mt-20"> </div>
            </div>             
        );
    }
}

export default ExpSelectApproach;