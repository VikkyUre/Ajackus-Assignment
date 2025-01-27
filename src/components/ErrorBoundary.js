import React, {Component} from 'react'

//defined ErrorBoundary component
class ErrorBoundary extends Component{
    //track the component state error
    state ={hasError:false};

    //update the error occured in child components
    static getDerivedStateFromError(error){
        return {hasError: true};
    }

    //it logs the error
    componentDidCatch(error,errorInfo){
        console.error("ErrorBoundary caught an error", error,errorInfo)
    }

    //displays based on the component state
    render() {
        if(this.state.hasError){
            return <h1>Something went wrong.</h1>
        }

        return this.props.children //If no error occurred child components passed to the ErrorBoundary
    }
}


export default ErrorBoundary; //Export the ErrorBoundary Component