
export function reqSend(barcode) {
    console.log(`Sending request for ${barcode}`);
    return fetch(`https://world.openfoodfacts.org/api/v2/product/${barcode}`)
    // return fetch('https://world.openfoodfacts.org/api/v2/product/5740900805408')
    .then(function(response){
        return response.json();
    })
    .then(function(json) {

        return json;
    })
    .catch((error) => {
        console.log(`There was an error ${error}`)
    })
    
  }