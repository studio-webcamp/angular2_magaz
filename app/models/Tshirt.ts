/**
 * Created by lenka on 10/30/16.
 */

enum Size{S, M, L}

class Tshirt {
    public sku:number;
    public brand:string;
    public size:Size;
    public color:string;
    public price:number;
    static Size = Size;

    constructor(sku:number, brand:string, size:Size, color:string, price:number) {
        this.sku = sku;
        this.brand = brand;
        this.size = size;
        this.color = color;
        this.price = price;
    }
}

export default Tshirt;
