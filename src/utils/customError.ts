export default class customError extends Error {

    constructor(public code: string){
        super();
    }
}