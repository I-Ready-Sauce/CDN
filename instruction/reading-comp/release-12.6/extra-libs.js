!function(t){var e={};function i(a){if(e[a])return e[a].exports;var n=e[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=315)}({315:function(t,e,i){"use strict";i(317),i(318)},317:function(t,e,i){"use strict";var a=location.hostname.split(".");a.length>2&&!/amazonaws/.test(location.hostname)&&!/(?:[0-9]{1,3}\.){3}[0-9]{1,3}/.test(location.hostname)&&(a.shift(),document.domain=a.join("."))},318:function(t,e,i){"use strict";!function(t){function e(t,e){this.initialize(t,e)}var i=e.prototype;e.HEADER_SIZE=2,e._workingCanvas=document.createElement("canvas"),i.sampleRate=0,i.stereo=!0,i.numSamples=0,i.gain=1,i._data=null,i._headerSize=0,i._color1=-1,i._color2=-1,i.initialize=function(t,i){if(this.sampleRate=i||50,"string"==typeof t)this._getVolume=this._getVolumeString,this.data=t,this._headerSize=1,this.stereo="0"!=t.charAt(0),this.numSamples=t.length-this._headerSize;else{if(!(t instanceof Image||t instanceof HTMLImageElement))throw"Unrecognized data type for VolumeData. Must be Image or String.";this._getVolume=this._getVolumeImage;var a=e._workingCanvas;a.width=t.width,a.height=t.height;var n=a.getContext("2d");if(n.drawImage(t,0,0),this.data=n.getImageData(0,0,a.width,a.height).data,this._getColors(0),-1==this.color1)throw"Unable to parse color markers.";this.stereo=-1!=this.color2,this._headerSize=2,this.numSamples=this.data.length/4-this._headerSize}},i.getIndex=function(t){return Math.max(0,Math.min(this.numSamples,t*this.sampleRate))},i.getVolume=function(t,e){e||(e={});var i=Math.round(this.getIndex(t));return i<0||i>this.numSamples?e.left=e.right=0:this._getVolume(i,e),e},i.getAverageVolume=function(t,e,i){if(i||(i={}),t=Math.round(this.getIndex(t)),(e=Math.round(this.getIndex(e)))<t)i.left=i.right=0;else{for(var a=0,n=0,o=t;o<=e;o++)this._getVolume(o,i),a+=i.left,n+=i.right;i.left=a/(e-t+1),i.right=n/(e-t+1)}return i},i.toString=function(){return"[VolumeData]"},i._getVolume=null,i._getVolumeImage=function(t,e){t+=this._headerSize,this.stereo?(e.left=Math.min(1,this.data[4*t+this.color1]/255*this.gain),e.right=Math.min(1,this.data[4*t+this.color2]/255*this.gain)):e.left=e.right=Math.min(1,this.data[4*t+this.color1]/255*this.gain)},i._getVolumeString=function(t,e){this.stereo?(e.left=Math.min(1,(this.data.charCodeAt(2*t+this._headerSize|0)-33)/93*this.gain),e.right=Math.min(1,(this.data.charCodeAt(2*t+this._headerSize+1|0)-33)/93*this.gain)):e.left=e.right=Math.min(1,(this.data.charCodeAt(t+this._headerSize|0)-33)/93*this.gain)},i._getColors=function(t){var e=this.data[4*t],i=this.data[4*t+1],a=this.data[4*t+2];this.color1=this.color2=-1,e>64?(this.color1=0,i>64?this.color2=1:a>64&&(this.color2=2)):i>64?(this.color1=1,a>64&&(this.color2=2)):a>64&&(this.color1=2)},i._getSampleRate=function(t){var e=this.data[4*t+1],i=this.data[4*t+2];this.sampleRate=16*Math.round(e/15)+Math.round(i/15)},t.VolumeData=e}(window)}});
