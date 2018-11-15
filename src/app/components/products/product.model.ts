import {IProduct} from './iproduct';

export class ProductModel implements IProduct {
  constructor(
    public name: string,
    public description: string,
    public price: number,
    public category,
    public isAvailable: boolean,
    public inCart: boolean,
    public quantity: number) {}
}
