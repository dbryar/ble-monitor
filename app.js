const Noble = require("noble");
const BeaconScanner = require("node-beacon-scanner");

var scanner = new BeaconScanner();

scanner.onadvertisement = (ble) => {
	/*var beacon = ble["iBeacon"];
	beacon.rssi = ble["rssi"];*/
	console.log(JSON.stringify(ble, null, "  "));
}

scanner.startScan().then(() => {
	console.log("Scanning for BLE devices...");
}).catch(error => {
	console.error(error);
})
