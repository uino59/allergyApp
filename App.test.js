import { reqSend } from './src/services/ApiCalls/index'
import fetch from 'isomorphic-fetch';

describe("api tests for openfoodfacts api", () => {
    it("given a barcode 5740900805408, reqSend() returns object with allergens_from_ingredients property: 'en:milk, butter, milk, milk'", 
    () => {
        reqSend(5740900805408)
        .then(result => {
            expect(result.product.allergens_from_ingredients).toBe('en:milk, butter, milk, milk');
        })
    })
})
