'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var StreamingMedia = /** @class */ (function (_super) {
    tslib.__extends(StreamingMedia, _super);
    function StreamingMedia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StreamingMedia.prototype.playVideo = function (videoUrl, options) { return core.cordova(this, "playVideo", { "sync": true }, arguments); };
    StreamingMedia.prototype.playAudio = function (audioUrl, options) { return core.cordova(this, "playAudio", { "sync": true }, arguments); };
    StreamingMedia.prototype.stopAudio = function () { return core.cordova(this, "stopAudio", { "sync": true }, arguments); };
    StreamingMedia.prototype.pauseAudio = function () { return core.cordova(this, "pauseAudio", { "sync": true, "platforms": ["iOS"] }, arguments); };
    StreamingMedia.prototype.resumeAudio = function () { return core.cordova(this, "resumeAudio", { "sync": true, "platforms": ["iOS"] }, arguments); };
    StreamingMedia.pluginName = "StreamingMedia";
    StreamingMedia.plugin = "cordova-plugin-streaming-media";
    StreamingMedia.pluginRef = "plugins.streamingMedia";
    StreamingMedia.repo = "https://github.com/nchutchind/cordova-plugin-streaming-media";
    StreamingMedia.platforms = ["Amazon Fire OS", "Android", "iOS"];
    StreamingMedia.decorators = [
        { type: core$1.Injectable }
    ];
    return StreamingMedia;
}(core.IonicNativePlugin));

exports.StreamingMedia = StreamingMedia;
