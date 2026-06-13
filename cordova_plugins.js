
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "mx.ferreyra.callnumber.CallNumber",
          "file": "plugins/mx.ferreyra.callnumber/www/CallNumber.js",
          "pluginId": "mx.ferreyra.callnumber",
        "clobbers": [
          "call"
        ]
        },
      {
          "id": "cordova-plugin-camera-preview.CameraPreview",
          "file": "plugins/cordova-plugin-camera-preview/www/CameraPreview.js",
          "pluginId": "cordova-plugin-camera-preview",
        "clobbers": [
          "CameraPreview"
        ]
        },
      {
          "id": "cordova-clipboard.Clipboard",
          "file": "plugins/cordova-clipboard/www/clipboard.js",
          "pluginId": "cordova-clipboard",
        "clobbers": [
          "cordova.plugins.clipboard"
        ]
        },
      {
          "id": "com.verso.cordova.clipboard.Clipboard",
          "file": "plugins/com.verso.cordova.clipboard/www/clipboard.js",
          "pluginId": "com.verso.cordova.clipboard",
        "clobbers": [
          "cordova.plugins.clipboard"
        ]
        },
      {
          "id": "cordova-plugin-email-composer.EmailComposer",
          "file": "plugins/cordova-plugin-email-composer/www/email_composer.js",
          "pluginId": "cordova-plugin-email-composer",
        "clobbers": [
          "cordova.plugins.email"
        ]
        },
      {
          "id": "cordova-plugin-screen-orientation.screenorientation",
          "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.js",
          "pluginId": "cordova-plugin-screen-orientation",
        "clobbers": [
          "cordova.plugins.screenorientation"
        ]
        },
      {
          "id": "com-darryncampbell-cordova-plugin-intent.IntentShim",
          "file": "plugins/com-darryncampbell-cordova-plugin-intent/www/IntentShim.js",
          "pluginId": "com-darryncampbell-cordova-plugin-intent",
        "clobbers": [
          "intentShim"
        ]
        },
      {
          "id": "es6-promise-plugin.Promise",
          "file": "plugins/es6-promise-plugin/www/promise.js",
          "pluginId": "es6-promise-plugin",
        "runs": true
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "mx.ferreyra.callnumber": "0.0.2",
      "com-darryncampbell-cordova-plugin-intent": "2.2.0",
      "cordova-clipboard": "1.3.0",
      "com.verso.cordova.clipboard": "0.1.0",
      "cordova-plugin-camera-preview": "0.12.3",
      "cordova-plugin-email-composer": "0.10.1",
      "cordova-plugin-screen-orientation": "3.0.3",
      "es6-promise-plugin": "4.2.2"
    };
    // BOTTOM OF METADATA
    });
    