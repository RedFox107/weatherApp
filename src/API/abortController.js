export default ()=>{
    const controller = new AbortController();
    const abortWithoutThrowError = ()=>{
        try {
            controller.abort();
        }catch (e) {

        }
    }
    return {signal:controller.signal,abort:abortWithoutThrowError}
}