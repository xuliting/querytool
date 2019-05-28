
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

const getconverttimestamptobeijingtime = (timestamp) => {
    var unixTimestamp = new Date(timestamp * 1000)
    commonTime = unixTimestamp.toLocaleString()

    return getfetch(commonTime)
}

/*
function add0(m){return m<10?'0'+m:m }
function format(shijianchuo)
{
    //shijianchuo是整数，否则要parseInt转换
    var time = new Date(shijianchuo);
    var y = time.getFullYear();
    var m = time.getMonth()+1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm)+':'+add0(s);
}
*/

const getconvertbeijingtimetotimestamp = (beijingtime) => {
    var oldTime = (new Date(beijingtime)).getTime() / 1000;
    return getfetch(oldTime)
}
