System.register("chunks:///_virtual/gameplay.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,i,n,r,l,a,o,u,p,b,c,m,s,d;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){l=e.cclegacy,a=e._decorator,o=e.Label,u=e.Node,p=e.Prefab,b=e.Camera,c=e.instantiate,m=e.Vec3,s=e.Button,d=e.Component}],execute:function(){var y,T,N,f,h,g,w,v,L,k,z,B,C,S,P;l._RF.push({},"9e1f0FT2wpJOYQlvGQxcPRz","gameplay",void 0);var _=a.ccclass,A=a.property;e("gameplay",(y=_("gameplay"),T=A({type:o}),N=A({type:u}),f=A({type:p}),h=A({type:u}),g=A({type:u}),w=A(b),y((k=t((L=function(e){function t(){for(var t,i=arguments.length,l=new Array(i),a=0;a<i;a++)l[a]=arguments[a];return t=e.call.apply(e,[this].concat(l))||this,n(t,"label",k,r(t)),t.tilesArray=[],n(t,"diceBtn",z,r(t)),n(t,"tile",B,r(t)),n(t,"pawn",C,r(t)),n(t,"cameraBase",S,r(t)),n(t,"camera",P,r(t)),t}i(t,e);var l=t.prototype;return l.start=function(){this.loadTiles(),this.pawn.getComponent("pawn").initialisePawn(this)},l.update=function(e){},l.loadTiles=function(){for(var e=[{tileNumber:4,tileType:"Ladder",endpointTileNumber:14},{tileNumber:9,tileType:"Ladder",endpointTileNumber:31},{tileNumber:17,tileType:"Snake",endpointTileNumber:7},{tileNumber:21,tileType:"Ladder",endpointTileNumber:42},{tileNumber:28,tileType:"Ladder",endpointTileNumber:84},{tileNumber:51,tileType:"Ladder",endpointTileNumber:67},{tileNumber:54,tileType:"Snake",endpointTileNumber:34},{tileNumber:64,tileType:"Snake",endpointTileNumber:60},{tileNumber:71,tileType:"Ladder",endpointTileNumber:91},{tileNumber:80,tileType:"Ladder",endpointTileNumber:100},{tileNumber:87,tileType:"Snake",endpointTileNumber:24},{tileNumber:93,tileType:"Snake",endpointTileNumber:73},{tileNumber:95,tileType:"Snake",endpointTileNumber:75},{tileNumber:98,tileType:"Snake",endpointTileNumber:79}],t=[-5.384,-4.174,-3.007,-1.806,-.607,.562,1.768,2.95,4.153,5.336],i=[5.364,4.17,2.976,1.789,.6,-.614,-1.794,-2.976,-4.173,-5.368],n=1,r=-1,l=0,a=0;a<100;a++){a%10==0&&0!=a&&(r+=n,n*=-1,l++),r+=n;var o=c(this.tile);o.setPosition(new m(t[r],.238,i[l])),this.node.parent.addChild(o),o.getComponent("tiles").initialiseNumber(a+1,this,e),this.tilesArray.push(o)}},l.onClick=function(){this.diceBtn.getComponent(s).interactable=!1;var e=Math.floor(6*Math.random())+1;this.label.string=e.toString(),this.pawn.getComponent("pawn").setNewLoaction(e)},l.resetButton=function(){this.diceBtn.getComponent(s).interactable=!0},t}(d)).prototype,"label",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=t(L.prototype,"diceBtn",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=t(L.prototype,"tile",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=t(L.prototype,"pawn",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=t(L.prototype,"cameraBase",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=t(L.prototype,"camera",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=L))||v));l._RF.pop()}}}));

System.register("chunks:///_virtual/head-scale.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,a,r,i,o,n,s,c,l,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,a=e.inheritsLoose,r=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){o=e.cclegacy,n=e._decorator,s=e.Node,c=e.Camera,l=e.Vec3,u=e.Component}],execute:function(){var p,h,d,f,m,_,b,g;o._RF.push({},"a48eeAfwvdP1LGUNdZsQUZC","head-scale",void 0);var v=n.ccclass,y=n.property;e("HeadScale",(p=v("HeadScale"),h=y(s),d=y(c),p((_=t((m=function(e){function t(){for(var t,a=arguments.length,o=new Array(a),n=0;n<a;n++)o[n]=arguments[n];return t=e.call.apply(e,[this].concat(o))||this,r(t,"target",_,i(t)),r(t,"camera",b,i(t)),r(t,"distance",g,i(t)),t._lastWPos=new l,t._pos=new l,t}return a(t,e),t.prototype.update=function(){var e=this.target.worldPosition;if(this.camera._camera&&!this._lastWPos.equals(e)){this._lastWPos.set(e);var t=this.camera;t._camera.update(),t.convertToUINode(e,this.node.parent,this._pos),this.node.setPosition(this._pos),l.transformMat4(this._pos,this.target.worldPosition,t._camera.matView);var a=this.distance/Math.abs(this._pos.z),r=Math.floor(100*a)/100;this.node.setScale(r,r,1)}},t}(u)).prototype,"target",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=t(m.prototype,"camera",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=t(m.prototype,"distance",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),f=m))||f));o._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./pawn.ts","./tiles.ts","./gameplay.ts","./head-scale.ts"],(function(){"use strict";return{setters:[null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/pawn.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,i,n,a,o,s,r,h,c,l,u,m;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,a=e.assertThisInitialized},function(e){o=e.cclegacy,s=e._decorator,r=e.Vec3,h=e.Vec2,c=e.Node,l=e.SkeletalAnimation,u=e.tween,m=e.Component}],execute:function(){var p,d,f,y,g;o._RF.push({},"73d5aZXqxJEarhAaiFPEnNL","pawn",void 0);var N=s.ccclass,P=s.property,b=new r;new h,new h(1,0),e("pawn",(p=N("pawn"),d=P(c),p((g=t((y=function(e){function t(){for(var t,i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))||this).currentNumber=1,t.destinationNumber=1,t.gamePlayRef=null,n(t,"labelNode",g,a(t)),t._animComp=null,t._animState="idle",t._lastWPos=new r,t._pos=new r,t}i(t,e);var o=t.prototype;return o.start=function(){this._animComp=this.node.getChildByName("Cocos").getComponent(l)},o.update=function(e){this.gamePlayRef.cameraBase.setPosition(new r(this.node.position.x,this.gamePlayRef.cameraBase.position.y,this.node.position.z+4));var t=this.node.worldPosition;if(this.gamePlayRef.camera._camera&&!this._lastWPos.equals(t)){this._lastWPos.set(t);var i=this.gamePlayRef.camera;i._camera.update(),i.convertToUINode(t,this.labelNode.parent,this._pos),this.labelNode.setPosition(this._pos),r.transformMat4(this._pos,this.node.worldPosition,i._camera.matView);var n=10/Math.abs(this._pos.z),a=Math.floor(100*n)/100;this.labelNode.setScale(a,a,1)}},o.initialisePawn=function(e){this.gamePlayRef=e,this.initialisePawnLocation()},o.initialisePawnLocation=function(){this.node.setPosition(new r(this.gamePlayRef.tilesArray[0].position.x,this.node.position.y,this.gamePlayRef.tilesArray[0].position.z))},o.setNewLoaction=function(e){this.destinationNumber+e>100||(this.destinationNumber=this.destinationNumber+e,this.checkDestinationReached())},o.checkDestinationReached=function(){if(this.currentNumber==this.destinationNumber)return this.changeState("cocos_anim_idle"),void this.checkIfDestinationIsSomeSpecialTile();this.currentNumber>this.destinationNumber?this.currentNumber--:this.currentNumber++,this.movePawn(this.currentNumber)},o.checkIfDestinationIsSomeSpecialTile=function(){for(var e=0;e<this.gamePlayRef.tilesArray.length;e++){var t=this.gamePlayRef.tilesArray[e].getComponent("tiles");if(t.getNumber()==this.currentNumber){if(t.checkIsladderType()||t.checkIsSnakeType())return void this.startLadderAnimation(t.getEndpointNumber());break}}this.gamePlayRef.resetButton()},o.startLadderAnimation=function(e){this.destinationNumber=e,this.currentNumber=e,this.movePawn(this.currentNumber)},o.movePawn=function(e){var t,i=this;this.changeState("cocos_anim_run");for(var n=0;n<this.gamePlayRef.tilesArray.length&&(t=this.gamePlayRef.tilesArray[n]).getComponent("tiles").getNumber()!=e;n++);var a=Math.atan2(this.node.position.z-t.position.z,this.node.position.x-t.position.x)*(180/Math.PI),o=this.node.getChildByName("Cocos").eulerAngles;b.set(o.x,-1*(90+a),o.z),this.node.getChildByName("Cocos").eulerAngles=b,u(this.node).to(1,{position:new r(t.position.x,this.node.position.y,t.position.z)}).call((function(){i.checkDestinationReached()})).start()},o.changeState=function(e){this._animState!==e&&(this._animComp.play(e),this._animState=e)},t}(m)).prototype,"labelNode",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=y))||f));o._RF.pop()}}}));

System.register("chunks:///_virtual/tiles.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var i,t,n,r,l,a,o,s,u;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.inheritsLoose,n=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){l=e.cclegacy,a=e._decorator,o=e.Node,s=e.Vec3,u=e.Component}],execute:function(){var c,p,d,f,y,b;l._RF.push({},"69aa4pJvQNBfZNx+tyIxz1K","tiles",void 0);var h=a.ccclass,m=a.property;e("tiles",(c=h("tiles"),p=m(o),c((y=i((f=function(e){function i(){for(var i,t=arguments.length,l=new Array(t),a=0;a<t;a++)l[a]=arguments[a];return i=e.call.apply(e,[this].concat(l))||this,n(i,"labelNode",y,r(i)),i.tileNumber=null,n(i,"distance",b,r(i)),i._lastWPos=new s,i._pos=new s,i.gamePlayRef=null,i.isLadderType=!1,i.isSnakeType=!1,i.endpointTileNumber=-1,i}t(i,e);var l=i.prototype;return l.start=function(){},l.initialiseNumber=function(e,i,t){this.gamePlayRef=i,this.tileNumber=e,this.initialiseTileType(t)},l.initialiseTileType=function(e){for(var i=0;i<e.length;i++)if(e[i].tileNumber==this.tileNumber)return"Ladder"==e[i].tileType?this.isLadderType=!0:this.isSnakeType=!0,void(this.endpointTileNumber=e[i].endpointTileNumber)},l.checkIsladderType=function(){return this.isLadderType},l.checkIsSnakeType=function(){return this.isSnakeType},l.getEndpointNumber=function(){return this.endpointTileNumber},l.update=function(){},l.getNumber=function(){return this.tileNumber},i}(u)).prototype,"labelNode",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=i(f.prototype,"distance",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 10}}),d=f))||d));l._RF.pop()}}}));

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