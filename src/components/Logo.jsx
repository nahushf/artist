import * as React from 'react';
import { Motion, spring, presets } from 'react-motion';

export class Logo extends React.Component {
    render() {
        return (
            <Motion 
            defaultStyle={{ top: 50, left: 50, outerHeight: 0, outerWidth: 0, innerHeight: 0, innerWidth: 0 }}
            style={{ top: spring(0), left: spring(0), outerHeight: spring(100, presets.wobbly), outerWidth: spring(100, presets.wobbly), innerHeight: spring(80, presets.wobbly), innerWidth: spring(80,presets.wobbly) }}
            >
                {({outerHeight, innerHeight, outerWidth, innerWidth, top, left}) => {
                    return (
                        <div className="back">
                            <div className="back-1" style={{ top, left, height: outerHeight, width: outerWidth }} />
                            <div className="back-2" style={{ top, left, height: innerHeight, width: innerWidth }} />
                        </div>
                    )
                } }
            </Motion>
        );
    }
}