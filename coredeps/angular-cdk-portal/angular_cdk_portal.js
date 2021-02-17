System.register(["@angular/common","@angular/core"],function(t){var e,n;return{setters:[function(t){e=t},function(t){n=t}],execute:function(){t(function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,(function(e){return t[e]}).bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="1z/I")}({"0S4P":function(t,n){t.exports=e},"1z/I":function(t,e,n){"use strict";n.r(e),n.d(e,"BasePortalHost",function(){return h}),n.d(e,"BasePortalOutlet",function(){return l}),n.d(e,"CdkPortal",function(){return p}),n.d(e,"CdkPortalOutlet",function(){return _}),n.d(e,"ComponentPortal",function(){return i}),n.d(e,"DomPortal",function(){return c}),n.d(e,"DomPortalHost",function(){return u}),n.d(e,"DomPortalOutlet",function(){return d}),n.d(e,"Portal",function(){return s}),n.d(e,"PortalHostDirective",function(){return v}),n.d(e,"PortalInjector",function(){return C}),n.d(e,"PortalModule",function(){return R}),n.d(e,"TemplatePortal",function(){return a}),n.d(e,"TemplatePortalDirective",function(){return f});var o=n("vOrQ"),r=n("0S4P");class s{attach(t){return this._attachedHost=t,t.attach(this)}detach(){let t=this._attachedHost;null!=t&&(this._attachedHost=null,t.detach())}get isAttached(){return null!=this._attachedHost}setAttachedHost(t){this._attachedHost=t}}class i extends s{constructor(t,e,n,o){super(),this.component=t,this.viewContainerRef=e,this.injector=n,this.componentFactoryResolver=o}}class a extends s{constructor(t,e,n){super(),this.templateRef=t,this.viewContainerRef=e,this.context=n}get origin(){return this.templateRef.elementRef}attach(t,e=this.context){return this.context=e,super.attach(t)}detach(){return this.context=void 0,super.detach()}}class c extends s{constructor(t){super(),this.element=t instanceof o.ElementRef?t.nativeElement:t}}class l{constructor(){this._isDisposed=!1,this.attachDomPortal=null}hasAttached(){return!!this._attachedPortal}attach(t){return t instanceof i?(this._attachedPortal=t,this.attachComponentPortal(t)):t instanceof a?(this._attachedPortal=t,this.attachTemplatePortal(t)):this.attachDomPortal&&t instanceof c?(this._attachedPortal=t,this.attachDomPortal(t)):void 0}detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(t){this._disposeFn=t}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}}class h extends l{}class d extends l{constructor(t,e,n,o,r){super(),this.outletElement=t,this._componentFactoryResolver=e,this._appRef=n,this._defaultInjector=o,this.attachDomPortal=t=>{const e=t.element,n=this._document.createComment("dom-portal");e.parentNode.insertBefore(n,e),this.outletElement.appendChild(e),super.setDisposeFn(()=>{n.parentNode&&n.parentNode.replaceChild(e,n)})},this._document=r}attachComponentPortal(t){const e=(t.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(t.component);let n;return t.viewContainerRef?(n=t.viewContainerRef.createComponent(e,t.viewContainerRef.length,t.injector||t.viewContainerRef.injector),this.setDisposeFn(()=>n.destroy())):(n=e.create(t.injector||this._defaultInjector),this._appRef.attachView(n.hostView),this.setDisposeFn(()=>{this._appRef.detachView(n.hostView),n.destroy()})),this.outletElement.appendChild(this._getComponentRootNode(n)),n}attachTemplatePortal(t){let e=t.viewContainerRef,n=e.createEmbeddedView(t.templateRef,t.context);return n.rootNodes.forEach(t=>this.outletElement.appendChild(t)),n.detectChanges(),this.setDisposeFn(()=>{let t=e.indexOf(n);-1!==t&&e.remove(t)}),n}dispose(){super.dispose(),null!=this.outletElement.parentNode&&this.outletElement.parentNode.removeChild(this.outletElement)}_getComponentRootNode(t){return t.hostView.rootNodes[0]}}class u extends d{}let p=(()=>{class t extends a{constructor(t,e){super(t,e)}}return t.\u0275fac=function(e){return new(e||t)(o["\u0275\u0275directiveInject"](o.TemplateRef),o["\u0275\u0275directiveInject"](o.ViewContainerRef))},t.\u0275dir=o["\u0275\u0275defineDirective"]({type:t,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[o["\u0275\u0275InheritDefinitionFeature"]]}),t})(),f=(()=>{class t extends p{}return t.\u0275fac=function(e){return m(e||t)},t.\u0275dir=o["\u0275\u0275defineDirective"]({type:t,selectors:[["","cdk-portal",""],["","portal",""]],exportAs:["cdkPortal"],features:[o["\u0275\u0275ProvidersFeature"]([{provide:p,useExisting:t}]),o["\u0275\u0275InheritDefinitionFeature"]]}),t})();const m=o["\u0275\u0275getInheritedFactory"](f);let _=(()=>{class t extends l{constructor(t,e,n){super(),this._componentFactoryResolver=t,this._viewContainerRef=e,this._isInitialized=!1,this.attached=new o.EventEmitter,this.attachDomPortal=t=>{const e=t.element,n=this._document.createComment("dom-portal");t.setAttachedHost(this),e.parentNode.insertBefore(n,e),this._getRootNode().appendChild(e),super.setDisposeFn(()=>{n.parentNode&&n.parentNode.replaceChild(e,n)})},this._document=n}get portal(){return this._attachedPortal}set portal(t){(!this.hasAttached()||t||this._isInitialized)&&(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t)}get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedPortal=null,this._attachedRef=null}attachComponentPortal(t){t.setAttachedHost(this);const e=null!=t.viewContainerRef?t.viewContainerRef:this._viewContainerRef,n=(t.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(t.component),o=e.createComponent(n,e.length,t.injector||e.injector);return e!==this._viewContainerRef&&this._getRootNode().appendChild(o.hostView.rootNodes[0]),super.setDisposeFn(()=>o.destroy()),this._attachedPortal=t,this._attachedRef=o,this.attached.emit(o),o}attachTemplatePortal(t){t.setAttachedHost(this);const e=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context);return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=e,this.attached.emit(e),e}_getRootNode(){const t=this._viewContainerRef.element.nativeElement;return t.nodeType===t.ELEMENT_NODE?t:t.parentNode}}return t.\u0275fac=function(e){return new(e||t)(o["\u0275\u0275directiveInject"](o.ComponentFactoryResolver),o["\u0275\u0275directiveInject"](o.ViewContainerRef),o["\u0275\u0275directiveInject"](r.DOCUMENT))},t.\u0275dir=o["\u0275\u0275defineDirective"]({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:["cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[o["\u0275\u0275InheritDefinitionFeature"]]}),t})(),v=(()=>{class t extends _{}return t.\u0275fac=function(e){return P(e||t)},t.\u0275dir=o["\u0275\u0275defineDirective"]({type:t,selectors:[["","cdkPortalHost",""],["","portalHost",""]],inputs:{portal:["cdkPortalHost","portal"]},exportAs:["cdkPortalHost"],features:[o["\u0275\u0275ProvidersFeature"]([{provide:_,useExisting:t}]),o["\u0275\u0275InheritDefinitionFeature"]]}),t})();const P=o["\u0275\u0275getInheritedFactory"](v);let R=(()=>{class t{}return t.\u0275mod=o["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)}}),t})();class C{constructor(t,e){this._parentInjector=t,this._customTokens=e}get(t,e){const n=this._customTokens.get(t);return void 0!==n?n:this._parentInjector.get(t,e)}}},vOrQ:function(t,e){t.exports=n}}))}}});