System.register("chunks:///_virtual/helloword.ts",["cc"],(function(e){"use strict";var o,t,n;return{setters:[function(e){o=e.cclegacy,t=e.Component,n=e._decorator}],execute:function(){var s;o._RF.push({},"7402fq9VJVElKsDj2nloFXk","helloword",void 0);const{ccclass:c,property:i}=n;e("NewComponent",c("NewComponent")(s=class extends t{onLoad(){cc.log("Kee onLoad x = "+this.node.position.x),this.node.on(cc.Node.EventType.MOUSE_DOWN,this.moveLeft,this)}start(){cc.log("Kee start")}moveLeft(){cc.log("Kee moveLeft"),this.node.setPosition(this.node.position.x-100,0,0)}})||s);o._RF.pop()}}}));

System.register("chunks:///_virtual/pig.ts",["cc"],(function(e){"use strict";var t,c,n;return{setters:[function(e){t=e.cclegacy,c=e.Component,n=e._decorator}],execute:function(){var o;t._RF.push({},"efb043/uP1OGoyn+ljeIWpq","pig",void 0);const{ccclass:s,property:r}=n;e("NewComponent001",s("NewComponent001")(o=class extends c{start(){cc.log("Kee start pig")}})||o);t._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./helloword.ts","./pig.ts"],(function(){"use strict";return{setters:[null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});