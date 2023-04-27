const axios = require('axios');

const dataWithCollection = [];
let isEnd = false;
let page = 3;



async function main() {
    while (!dataWithCollection.length && !isEnd) {
        console.log(page);
        await axios.get(`https://tjmxrnpkfi.us-east-1.awsapprunner.com/dappstore/dapp?limit=100&page=${page}`).then(({ data }) => {
            console.log({ len: data.response.length });
            data.response.forEach(app => {
                app.contracts?.forEach(contract => {
                    if (contract.collection_id) {
                        dataWithCollection.push(contract);
                    }
                });
            });
            page++;
        });
    }
}


main();