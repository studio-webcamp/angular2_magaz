import Order from "./Order";
import Tshirt from "./Tshirt";
import Fetch from "./Fetch";
import {el} from "@angular/platform-browser/testing/browser_util";
class Magaz {

    private orders:Array<Order> = [];
    // private items = [];
    private cities:Array<String> = [];
    private http:Fetch;

    constructor(){
        this.http = new Fetch();
    }
    getOrders() {
        return this.orders;
    };

    addItemToOrder(item:Tshirt) {
        if (!this.orders.length) {
            this.addOrder(new Order());
        }
        this.orders[0].addItem(item);
    };

    addOrder(order:Order) {
        return this.orders.push(order);
    };

    getAllItems() {
        return this.http.get('/data/tshirts.json').then(function successCallback(response:Response) {
            return response.json();
        }).then((json)=>{
            return json.map((el:any)=> {
                return new Tshirt(el.sku, el.brand, <any>el.size, el.color, el.price);
            });
        });

    };

    getCitiesList() {
        // return $http({
        //     method: 'GET',
        //     url: '/data/cities.json'
        // }).then(function successCallback(response) {
        //     cities = response.data;
        //     return cities;
        // }, function errorCallback(response) {
        //     console.error(response);
        // });
    };
}

export default Magaz;
