/* rxjs@6.6.3 */
System.register(["./rxjs-shared.min.js","./rxjs-shared.min3.js","./rxjs-shared.min7.js","./rxjs-shared.min6.js"],(function(t){"use strict";var e,s,i,r,n,o,c,u,h,l,a,p,b,d,f,m,x,v;return{setters:[function(t){e=t.e,s=t.O,i=t.S,r=t.i,n=t.d},function(t){o=t.d,c=t.S,u=t.O,h=t.A,l=t.a,a=t.i,p=t.f,b=t.o,d=t.e},function(t){f=t.m},function(t){m=t.s,x=t.f,v=t.i}],execute:function(){function y(){return function(t){return t.lift(new _(t))}}t({b:function(t,e){function s(){return!s.pred.apply(s.thisArg,arguments)}return s.pred=t,s.thisArg=e,s},d:function(t){return new s(e=>{let s;try{s=t()}catch(t){return void e.error(t)}return(s?x(s):d()).subscribe(e)})},f:function(t,e){return function(s){return s.lift(new et(t,e))}},i:tt,j:function(...t){let e=void 0,s=void 0;a(t[t.length-1])&&(s=t.pop());"function"==typeof t[t.length-1]&&(e=t.pop());1===t.length&&r(t[0])&&(t=t[0]);return p(t,s).lift(new D(e))},k:function(...t){return $()(b(...t))},l:K,m:function(...t){let e=Number.POSITIVE_INFINITY,i=null,r=t[t.length-1];a(r)?(i=t.pop(),t.length>1&&"number"==typeof t[t.length-1]&&(e=t.pop())):"number"==typeof r&&(e=t.pop());if(null===i&&1===t.length&&t[0]instanceof s)return t[0];return X(e)(p(t,i))},n:function(){},q:L,r:function(...t){if(1===t.length){if(!r(t[0]))return t[0];t=t[0]}return p(t,void 0).lift(new it)},s:B,t:function(t=0,e,i){let r=-1;tt(e)?r=Number(e)<1?1:Number(e):a(e)&&(i=e);a(i)||(i=P);return new s(e=>{const s=tt(t)?t:+t-i.now();return i.schedule(nt,s,{index:0,period:r,subscriber:e})})},v:y,w:$,x:function(t,e,s,i){return r=>r.lift(new C(t,e,s,i))},y:X,z:function(...t){const e=t[t.length-1];"function"==typeof e&&t.pop();return p(t,void 0).lift(new ot(e))}});class _{constructor(t){this.connectable=t}call(t,e){const{connectable:s}=this;s._refCount++;const i=new g(t,s),r=e.subscribe(i);return i.closed||(i.connection=s.connect()),r}}class g extends e{constructor(t,e){super(t),this.connectable=e}_unsubscribe(){const{connectable:t}=this;if(!t)return void(this.connection=null);this.connectable=null;const e=t._refCount;if(e<=0)return void(this.connection=null);if(t._refCount=e-1,e>1)return void(this.connection=null);const{connection:s}=this,i=t._connection;this.connection=null,!i||s&&i!==s||i.unsubscribe()}}class S extends s{constructor(t,e){super(),this.source=t,this.subjectFactory=e,this._refCount=0,this._isComplete=!1}_subscribe(t){return this.getSubject().subscribe(t)}getSubject(){const t=this._subject;return t&&!t.isStopped||(this._subject=this.subjectFactory()),this._subject}connect(){let t=this._connection;return t||(this._isComplete=!1,t=this._connection=new i,t.add(this.source.subscribe(new w(this.getSubject(),this))),t.closed&&(this._connection=null,t=i.EMPTY)),t}refCount(){return y()(this)}}t("C",S);t("u",(()=>{const t=S.prototype;return{operator:{value:null},_refCount:{value:0,writable:!0},_subject:{value:null,writable:!0},_connection:{value:null,writable:!0},_subscribe:{value:t._subscribe},_isComplete:{value:t._isComplete,writable:!0},getSubject:{value:t.getSubject},connect:{value:t.connect},refCount:{value:t.refCount}}})());class w extends o{constructor(t,e){super(t),this.connectable=e}_error(t){this._unsubscribe(),super._error(t)}_complete(){this.connectable._isComplete=!0,this._unsubscribe(),super._complete()}_unsubscribe(){const t=this.connectable;if(t){this.connectable=null;const e=t._connection;t._refCount=0,t._subject=null,t._connection=null,e&&e.unsubscribe()}}}class C{constructor(t,e,s,i){this.keySelector=t,this.elementSelector=e,this.durationSelector=s,this.subjectSelector=i}call(t,e){return e.subscribe(new I(t,this.keySelector,this.elementSelector,this.durationSelector,this.subjectSelector))}}class I extends e{constructor(t,e,s,i,r){super(t),this.keySelector=e,this.elementSelector=s,this.durationSelector=i,this.subjectSelector=r,this.groups=null,this.attemptedToUnsubscribe=!1,this.count=0}_next(t){let e;try{e=this.keySelector(t)}catch(t){return void this.error(t)}this._group(t,e)}_group(t,e){let s=this.groups;s||(s=this.groups=new Map);let i,r=s.get(e);if(this.elementSelector)try{i=this.elementSelector(t)}catch(t){this.error(t)}else i=t;if(!r){r=this.subjectSelector?this.subjectSelector():new c,s.set(e,r);const t=new N(e,r,this);if(this.destination.next(t),this.durationSelector){let t;try{t=this.durationSelector(new N(e,r))}catch(t){return void this.error(t)}this.add(t.subscribe(new j(e,r,this)))}}r.closed||r.next(i)}_error(t){const e=this.groups;e&&(e.forEach((e,s)=>{e.error(t)}),e.clear()),this.destination.error(t)}_complete(){const t=this.groups;t&&(t.forEach((t,e)=>{t.complete()}),t.clear()),this.destination.complete()}removeGroup(t){this.groups.delete(t)}unsubscribe(){this.closed||(this.attemptedToUnsubscribe=!0,0===this.count&&super.unsubscribe())}}class j extends e{constructor(t,e,s){super(e),this.key=t,this.group=e,this.parent=s}_next(t){this.complete()}_unsubscribe(){const{parent:t,key:e}=this;this.key=this.parent=null,t&&t.removeGroup(e)}}class N extends s{constructor(t,e,s){super(),this.key=t,this.groupSubject=e,this.refCountSubscription=s}_subscribe(t){const e=new i,{refCountSubscription:s,groupSubject:r}=this;return s&&!s.closed&&e.add(new E(s)),e.add(r.subscribe(t)),e}}t("G",N);class E extends i{constructor(t){super(),this.parent=t,t.count++}unsubscribe(){const t=this.parent;t.closed||this.closed||(super.unsubscribe(),t.count-=1,0===t.count&&t.attemptedToUnsubscribe&&t.unsubscribe())}}t("B",class extends c{constructor(t){super(),this._value=t}get value(){return this.getValue()}_subscribe(t){const e=super._subscribe(t);return e&&!e.closed&&t.next(this._value),e}getValue(){if(this.hasError)throw this.thrownError;if(this.closed)throw new u;return this._value}next(t){super.next(this._value=t)}});t("A",class extends c{constructor(){super(...arguments),this.value=null,this.hasNext=!1,this.hasCompleted=!1}_subscribe(t){return this.hasError?(t.error(this.thrownError),i.EMPTY):this.hasCompleted&&this.hasNext?(t.next(this.value),t.complete(),i.EMPTY):super._subscribe(t)}next(t){this.hasCompleted||(this.value=t,this.hasNext=!0)}error(t){this.hasCompleted||super.error(t)}complete(){this.hasCompleted=!0,this.hasNext&&super.next(this.value),super.complete()}});let T=1;const O=Promise.resolve(),V={};function k(t){return t in V&&(delete V[t],!0)}const A={setImmediate(t){const e=T++;return V[e]=!0,O.then(()=>k(e)&&t()),e},clearImmediate(t){k(t)}};const F=t("e",new class extends l{flush(t){this.active=!0,this.scheduled=void 0;const{actions:e}=this;let s,i=-1,r=e.length;t=t||e.shift();do{if(s=t.execute(t.state,t.delay))break}while(++i<r&&(t=e.shift()));if(this.active=!1,s){for(;++i<r&&(t=e.shift());)t.unsubscribe();throw s}}}(class extends h{constructor(t,e){super(t,e),this.scheduler=t,this.work=e}requestAsyncId(t,e,s=0){return null!==s&&s>0?super.requestAsyncId(t,e,s):(t.actions.push(this),t.scheduled||(t.scheduled=A.setImmediate(t.flush.bind(t,null))))}recycleAsyncId(t,e,s=0){if(null!==s&&s>0||null===s&&this.delay>0)return super.recycleAsyncId(t,e,s);0===t.actions.length&&(A.clearImmediate(e),t.scheduled=void 0)}})),R=(t("c",F),t("g",new l(h))),P=t("a",R);const Y=(()=>{function t(){return Error.call(this),this.message="argument out of range",this.name="ArgumentOutOfRangeError",this}return t.prototype=Object.create(Error.prototype),t})(),U=(t("h",Y),(()=>{function t(){return Error.call(this),this.message="no elements in sequence",this.name="EmptyError",this}return t.prototype=Object.create(Error.prototype),t})()),q=(t("E",U),(()=>{function t(){return Error.call(this),this.message="Timeout has occurred",this.name="TimeoutError",this}return t.prototype=Object.create(Error.prototype),t})());t("T",q);class M extends e{notifyNext(t,e,s,i,r){this.destination.next(e)}notifyError(t,e){this.destination.error(t)}notifyComplete(t){this.destination.complete()}}t("O",M);class G extends e{constructor(t,e,s){super(),this.parent=t,this.outerValue=e,this.outerIndex=s,this.index=0}_next(t){this.parent.notifyNext(this.outerValue,t,this.outerIndex,this.index++,this)}_error(t){this.parent.notifyError(t,this),this.unsubscribe()}_complete(){this.parent.notifyComplete(this),this.unsubscribe()}}function B(t,e,i,r,n=new G(t,i,r)){if(!n.closed)return e instanceof s?e.subscribe(n):m(e)(n)}const z={};class D{constructor(t){this.resultSelector=t}call(t,e){return e.subscribe(new Z(t,this.resultSelector))}}t("p",D);class Z extends M{constructor(t,e){super(t),this.resultSelector=e,this.active=0,this.values=[],this.observables=[]}_next(t){this.values.push(z),this.observables.push(t)}_complete(){const t=this.observables,e=t.length;if(0===e)this.destination.complete();else{this.active=e,this.toRespond=e;for(let s=0;s<e;s++){const e=t[s];this.add(B(this,e,void 0,s))}}}notifyComplete(t){0==(this.active-=1)&&this.destination.complete()}notifyNext(t,e,s){const i=this.values,r=i[s],n=this.toRespond?r===z?--this.toRespond:this.toRespond:0;i[s]=e,0===n&&(this.resultSelector?this._tryResultSelector(i):this.destination.next(i.slice()))}_tryResultSelector(t){let e;try{e=this.resultSelector.apply(this,t)}catch(t){return void this.destination.error(t)}this.destination.next(e)}}class H extends e{constructor(t){super(),this.parent=t}_next(t){this.parent.notifyNext(t)}_error(t){this.parent.notifyError(t),this.unsubscribe()}_complete(){this.parent.notifyComplete(),this.unsubscribe()}}t("o",H);class J extends e{notifyNext(t){this.destination.next(t)}notifyError(t){this.destination.error(t)}notifyComplete(){this.destination.complete()}}function K(t,e){if(!e.closed)return t instanceof s?t.subscribe(e):m(t)(e)}function L(t,e,s=Number.POSITIVE_INFINITY){return"function"==typeof e?i=>i.pipe(L((s,i)=>x(t(s,i)).pipe(f((t,r)=>e(s,t,i,r))),s)):("number"==typeof e&&(s=e),e=>e.lift(new Q(t,s)))}t("S",J);class Q{constructor(t,e=Number.POSITIVE_INFINITY){this.project=t,this.concurrent=e}call(t,e){return e.subscribe(new W(t,this.project,this.concurrent))}}class W extends J{constructor(t,e,s=Number.POSITIVE_INFINITY){super(t),this.project=e,this.concurrent=s,this.hasCompleted=!1,this.buffer=[],this.active=0,this.index=0}_next(t){this.active<this.concurrent?this._tryNext(t):this.buffer.push(t)}_tryNext(t){let e;const s=this.index++;try{e=this.project(t,s)}catch(t){return void this.destination.error(t)}this.active++,this._innerSub(e)}_innerSub(t){const e=new H(this),s=this.destination;s.add(e);const i=K(t,e);i!==e&&s.add(i)}_complete(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()}notifyNext(t){this.destination.next(t)}notifyComplete(){const t=this.buffer;this.active--,t.length>0?this._next(t.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()}}t("D",L);function X(t=Number.POSITIVE_INFINITY){return L(n,t)}function $(){return X(1)}function tt(t){return!r(t)&&t-parseFloat(t)+1>=0}class et{constructor(t,e){this.predicate=t,this.thisArg=e}call(t,e){return e.subscribe(new st(t,this.predicate,this.thisArg))}}class st extends e{constructor(t,e,s){super(t),this.predicate=e,this.thisArg=s,this.count=0}_next(t){let e;try{e=this.predicate.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}e&&this.destination.next(t)}}class it{call(t,e){return e.subscribe(new rt(t))}}class rt extends M{constructor(t){super(t),this.hasFirst=!1,this.observables=[],this.subscriptions=[]}_next(t){this.observables.push(t)}_complete(){const t=this.observables,e=t.length;if(0===e)this.destination.complete();else{for(let s=0;s<e&&!this.hasFirst;s++){const e=B(this,t[s],void 0,s);this.subscriptions&&this.subscriptions.push(e),this.add(e)}this.observables=null}}notifyNext(t,e,s){if(!this.hasFirst){this.hasFirst=!0;for(let t=0;t<this.subscriptions.length;t++)if(t!==s){let e=this.subscriptions[t];e.unsubscribe(),this.remove(e)}this.subscriptions=null}this.destination.next(e)}}function nt(t){const{index:e,period:s,subscriber:i}=t;if(i.next(e),!i.closed){if(-1===s)return i.complete();t.index=e+1,this.schedule(t,s)}}class ot{constructor(t){this.resultSelector=t}call(t,e){return e.subscribe(new ct(t,this.resultSelector))}}t("Z",ot);class ct extends e{constructor(t,e,s=Object.create(null)){super(t),this.resultSelector=e,this.iterators=[],this.active=0,this.resultSelector="function"==typeof e?e:void 0}_next(t){const e=this.iterators;r(t)?e.push(new ht(t)):"function"==typeof t[v]?e.push(new ut(t[v]())):e.push(new lt(this.destination,this,t))}_complete(){const t=this.iterators,e=t.length;if(this.unsubscribe(),0!==e){this.active=e;for(let s=0;s<e;s++){let e=t[s];if(e.stillUnsubscribed){this.destination.add(e.subscribe())}else this.active--}}else this.destination.complete()}notifyInactive(){this.active--,0===this.active&&this.destination.complete()}checkIterators(){const t=this.iterators,e=t.length,s=this.destination;for(let s=0;s<e;s++){let e=t[s];if("function"==typeof e.hasValue&&!e.hasValue())return}let i=!1;const r=[];for(let n=0;n<e;n++){let e=t[n],o=e.next();if(e.hasCompleted()&&(i=!0),o.done)return void s.complete();r.push(o.value)}this.resultSelector?this._tryresultSelector(r):s.next(r),i&&s.complete()}_tryresultSelector(t){let e;try{e=this.resultSelector.apply(this,t)}catch(t){return void this.destination.error(t)}this.destination.next(e)}}class ut{constructor(t){this.iterator=t,this.nextResult=t.next()}hasValue(){return!0}next(){const t=this.nextResult;return this.nextResult=this.iterator.next(),t}hasCompleted(){const t=this.nextResult;return Boolean(t&&t.done)}}class ht{constructor(t){this.array=t,this.index=0,this.length=0,this.length=t.length}[v](){return this}next(t){const e=this.index++,s=this.array;return e<this.length?{value:s[e],done:!1}:{value:null,done:!0}}hasValue(){return this.array.length>this.index}hasCompleted(){return this.array.length===this.index}}class lt extends J{constructor(t,e,s){super(t),this.parent=e,this.observable=s,this.stillUnsubscribed=!0,this.buffer=[],this.isComplete=!1}[v](){return this}next(){const t=this.buffer;return 0===t.length&&this.isComplete?{value:null,done:!0}:{value:t.shift(),done:!1}}hasValue(){return this.buffer.length>0}hasCompleted(){return 0===this.buffer.length&&this.isComplete}notifyComplete(){this.buffer.length>0?(this.isComplete=!0,this.parent.notifyInactive()):this.destination.complete()}notifyNext(t){this.buffer.push(t),this.parent.checkIterators()}subscribe(){return K(this.observable,new H(this))}}}}}));
