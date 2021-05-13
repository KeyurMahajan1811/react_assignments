import './App.css';
import React from 'react'


export class Card extends React.Component {
    render() {
        // const profile = testData[2];
        const profile = this.props;

        return (

            <div className="github.profile" style={{ margin: '1rem' }}>
                <img src={profile.avatar_url} style={{
                    height: '100px',
                    width: '100px'
                }} />
                <div className="info" style={{ display: 'inline-block', marginLeft: 10 }}>
                    <div className="name" style={{ fontSize: 21, fontWeight: 300 }}>{profile.name} </div>
                    <div className="company">{profile.company}</div>
                </div>
            </div>
        );
    }
}

