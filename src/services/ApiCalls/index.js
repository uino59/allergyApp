
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

export function getData(barcode) {
    return new Promise(function(resolve, reject) {
      reqSend(barcode).then(function (response) {
        if(response != undefined) {
          console.log(`getData executed successfully returning ${response}`)
          resolve(response);
        } else {
          reject(Error("Error in getData()"))
        }
      })
    })
  }