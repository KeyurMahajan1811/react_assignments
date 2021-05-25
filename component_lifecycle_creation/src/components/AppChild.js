import React from 'react';

class AppChild extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "AppChild State"
        }
        console.log("In AppChild.js constructor()", this.state, props);
    }

    static getDerivedStateFromProps(props, state) {
        console.log("In AppChild.js getDerivedStateFromProps()", props)
        return {
            cachedState: props,
        };
    }

    componentDidMount() {
        console.log("In AppChild.js componentDidMount()", this.state, this.props);
    }


    render() {
        console.log("In AppChild.js render()", this.state, this.props)
        return (
            <div>

            </div>
        );
    }
}

export default AppChild;