import {startLoadingAC} from "../reducers/weatherData_reducer";

export default (func, ms) => {
    let isThrottled = false,
        lastArgs,
        savedThis,savedDispatch,isThrottleArgs = false;
    return function wrapper(...args) {
        if (isThrottled) {
            lastArgs = args;
            savedThis = this;
            return (dispatch)=>{
                savedDispatch=dispatch;
                dispatch(startLoadingAC())
            };
        }
            isThrottled = true
            setTimeout(() => {
                isThrottled = false;
                if (lastArgs) {
                    isThrottleArgs = true;
                    wrapper.apply(savedThis, lastArgs);
                    savedThis = lastArgs = null;
                }
            }, ms)
            const result = func.call(this, ...args);
            if(isThrottleArgs){
                isThrottleArgs = false;
                savedDispatch(result);
            }else{
                return result;
            }
    }
}