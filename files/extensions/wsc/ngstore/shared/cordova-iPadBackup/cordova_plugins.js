cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-infinea.Infinea",
    "file": "plugins/cordova-plugin-infinea/www/IPC-Infinea.js",
    "pluginId": "cordova-plugin-infinea",
    "clobbers": [
      "Infinea"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-device": "1.1.7",
  "cordova-plugin-infinea": "1.0"
};
// BOTTOM OF METADATA
});