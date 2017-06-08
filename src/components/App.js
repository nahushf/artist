import React from 'react';
import '../App.css';
import { Motion, spring } from 'react-motion';
import { Logo } from './Logo';
import { animationStore } from ''

export class App extends React.Component {

    componentWillMount() {
        animationStore.listen(this.onChange)
    }

    onChange = (state) => {
        if(state.dropFlag) {
            
        } 
    }

    render() {
        return (
            <div>
                <div className="drop-outer" >
                    <Motion defaultStyle={{ x: 0 }} style={{ x: spring(280) }}>
                        {({x}) => {
                            if ()                            
                            return <span className="drop" style={{ transform: `translateY(${x}px)` }} />
                        } }
                    </Motion>
                </div>
                <Logo />
                {/*<Motion style={{x: spring(200, {stiffness: 100, damping: 20}), y: spring(150, {stiffness: 100, damping: 20})}}>
                    {({x, y}) => {
                        return (
                        )
                    }}
                </Motion>*/}
            </div>
        );
    }

} 
