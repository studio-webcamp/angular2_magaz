/**
 * Created by lenka on 10/30/16.
 */

class Fetch{
    get(url:string):Promise<Response>{
        return fetch(url);
    }
}

export default Fetch;
