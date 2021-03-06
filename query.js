
var AGENT_URL_TEST = "https://api-wallet-did-testnet.elastos.org"
var AGENT_URL_PRODUCE = "https://api-wallet-did.elastos.org"

const AGENT_URL = AGENT_URL_PRODUCE

const getfetch = (param) => {
    return fetch(param, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(response => {
            console.log("getInfo response: " + JSON.stringify(response))

            return JSON.stringify(response)

        })
        .catch(function (error) {
            console.log(error);
        })
}

const getelabalance = (elaaddress) => {
    var url = "https://api-wallet-ela.elastos.org/api/1/balance/" + elaaddress
    return getfetch(url)
}

const gettxhistory = (elaaddress) => {
    var url = "https://api-wallet-ela.elastos.org/api/1/history/" + elaaddress
    return getfetch(url)
}

const getdidbalance = (elaaddress) => {
    var url = "https://api-wallet-did.elastos.org/api/1/balance/" + elaaddress
    return getfetch(url)
}

const getdidtxhistory = (elaaddress) => {
    var url = "https://api-wallet-did.elastos.org/api/1/history/" + elaaddress
    return getfetch(url)
}

const getdidlatestInfo = (did) => {
    var url = AGENT_URL + "/api/1/didexplorer/did/" + did + "/status/normal?detailed=true"
    return getfetch(url)
}

const getdidattributehistory = (did,attribute) => {
    var url = AGENT_URL + "/api/1/didexplorer/did/" + did + "/property_history?key=" + attribute
    return getfetch(url)
}

const getelavotehistory = (elaaddress) => {
    var url = "https://api-wallet-ela.elastos.org/api/1/dpos/address/" + elaaddress
    return getfetch(url)
}

const getdposvotehistory = (dpospublickey) => {
    var url = "https://api-wallet-ela.elastos.org/api/1/dpos/producer/" + dpospublickey
    return getfetch(url)
}

const getheightdposvotehistory = (height) => {
    var url = "https://api-wallet-ela.elastos.org/api/1/dpos/rank/height/" + height
    return getfetch(url)
}
