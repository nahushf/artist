import { AnimationActions } from './actions/animationActions';
import { alt } from './alt';

class AnimationStore {
    constructor() {
        this.dropFlag = false;
        this.bindListeners({
            handleDropFlag: AnimationActions.SET_DROP_FLAG        
        })
    }
    
    handleDropFlag(flagValue) {
        this.flagValue = flagValue;
    }
}

export const animationStore = alt.createStore(AnimationStore, 'AnimationStore');