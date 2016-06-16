webpackJsonp([0],{0:function(e,exports,t){t(1),e.exports=t(299)},299:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){"ngInject";e.html5Mode(!0),t.otherwise("/login")}function o(e,t){"ngInject";e.$on("$stateChangeError",function(e,n,r,o,a,i){"AUTH_REQUIRED"===i&&t.go("login")})}r.$inject=["$locationProvider","$urlRouterProvider"],o.$inject=["$rootScope","$state"],Object.defineProperty(exports,"__esModule",{value:!0}),t(300),t(304);var a=t(311),i=n(a),s=t(313),u=n(s),l=t(314),d=n(l),c=t(361),f=n(c),v=t(378),h=n(v),m=i["default"].module("app",[u["default"],f["default"],d["default"]]).config(r).run(o).component("app",h["default"]);exports["default"]=m},314:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(311),o=n(r),a=t(315),i=n(a),s=t(341),u=n(s),l=t(355),d=n(l),c=o["default"].module("app.components",[i["default"],u["default"],d["default"]]).name;exports["default"]=c},315:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e){"ngInject";e.state("login",{url:"/login",component:"login",onEnter:["$state","LocalStorage",function(e,t){null!==t.getData("user")&&e.go("game")}]})}r.$inject=["$stateProvider"],Object.defineProperty(exports,"__esModule",{value:!0});var o=t(311),a=n(o),i=t(313),s=n(i),u=t(316),l=n(u),d=a["default"].module("login",[s["default"]]).config(r).component("login",l["default"]).name;exports["default"]=d},316:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(317),o=n(r),a=t(318),i=n(a);t(339);var s={bindings:{},template:o["default"],controller:i["default"],controllerAs:"vm"};exports["default"]=s},317:function(e,exports){e.exports='<div>\n  <h1>\n    Hey, What\'s up!!! <br/>\n    Want to Play???\n  </h1>\n  <div class="input-group login-input">\n    <input type="text" class="form-control" ng-model="vm.username" placeholder="Write Your Name Here">\n      <span class="input-group-btn">\n        <button class="btn btn-default" type="button" ng-disabled="!vm.isValidLogin()" ng-click="vm.login()">Let\'s Play!</button>\n      </span>\n  </div>\n</div>'},318:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(319),o=n(r),a=t(320),i=n(a),s=function(){function e(t,n){"ngInject";(0,o["default"])(this,e),this.username="",this.$state=t,this.LS=n}return e.$inject=["$state","LocalStorage"],(0,i["default"])(e,[{key:"login",value:function(){this.LS.setData("user",this.username),this.$state.go("game")}},{key:"isValidLogin",value:function(){return this.username.length>3}}]),e}();exports["default"]=s},339:function(e,exports,t){var n=t(340);"string"==typeof n&&(n=[[e.id,n,""]]);t(303)(n,{});n.locals&&(e.exports=n.locals)},340:function(e,exports,t){exports=e.exports=t(302)(),exports.push([e.id,".login-input{margin-top:50px;width:80%;text-align:center;margin-left:10%}",""])},341:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e){"ngInject";e.state("game",{url:"/game",component:"game",resolve:{words:["WordService",function(e){return e.getWords()}]},onEnter:["$state","LocalStorage",function(e,t){null===t.getData("user")&&e.go("login")}]})}r.$inject=["$stateProvider"],Object.defineProperty(exports,"__esModule",{value:!0});var o=t(311),a=n(o),i=t(313),s=n(i),u=t(342),l=n(u),d=t(347),c=n(d),f=t(353),v=n(f),h=a["default"].module("game",[s["default"],c["default"],v["default"]]).config(r).component("game",l["default"]).name;exports["default"]=h},342:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(343),o=n(r),a=t(344),i=n(a);t(345);var s={bindings:{words:"<"},template:o["default"],controller:i["default"],controllerAs:"vm"};exports["default"]=s},343:function(e,exports){e.exports='<div class="game">\n	<div class="row player-datails">\n		<div class="col-xs-6 text-left">\n			<h4>Hi {{vm.username}}!!!</h4>\n		</div>\n		<div class="col-xs-6 text-right">\n			<h4>Score: {{vm.globalScore}}</h4>\n		</div>\n	</div>\n	<div class="container box-word-container">\n		<timer timer="{{::vm.timer}}" on-change="vm.updateTimer(timer)"></timer>\n		<div class="box-word">\n			<div class="mangled-word">\n				{{vm.mangleWord}}\n			</div>\n			<input type="text" class="input-word" ng-model="vm.input" ng-keyup="vm.validate($event)">\n		</div>\n	</div>\n\n</div>\n'},344:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(319),o=n(r),a=t(320),i=n(a),s=function(){function e(t,n,r,a){"ngInject";var i=this;(0,o["default"])(this,e),this.ScoreService=r,this.$state=a,this.username=t.getData("user"),this.input="",this.previousInput="",this.globalScore=0,this.deletedLetters=0,this.pos=0,this.timer=40,this.currentWord=this.words[this.pos],this.mangleWord=n.mangleWord(this.currentWord),this.updateGloblalScore=function(){var e=Math.floor(Math.pow(1.95,i.currentWord.length/3))-i.deletedLetters;e>0&&(i.globalScore+=e),i.changeCurrentWord()},this.changeCurrentWord=function(){i.pos++,i.input="",i.previousInput="",i.deletedLetters=0,i.currentWord=i.words[i.pos],i.mangleWord=n.mangleWord(i.currentWord)}}return e.$inject=["LocalStorage","WordService","ScoreService","$state"],(0,i["default"])(e,[{key:"validate",value:function(e){this.input===this.currentWord&&this.updateGloblalScore(),(8===e.which||46===e.which)&&this.input.length<this.previousInput.length&&this.deletedLetters++,this.previousInput=this.input}},{key:"updateTimer",value:function(e){var t=this;this.timer=e,0===this.timer&&this.ScoreService.saveScore(this.username,this.globalScore).then(function(e){return t.$state.go("highscores")})}}]),e}();exports["default"]=s},345:function(e,exports,t){var n=t(346);"string"==typeof n&&(n=[[e.id,n,""]]);t(303)(n,{});n.locals&&(e.exports=n.locals)},346:function(e,exports,t){exports=e.exports=t(302)(),exports.push([e.id,".box-word-container{max-width:80%!important}.box-word{margin-bottom:5rem;margin-top:5rem;padding:2rem;background-color:#4a90e2;border:.2rem solid transparent;border-radius:1rem;box-shadow:0 1px 1px rgba(0,0,0,.05);height:15rem}.mangled-word{font-size:5rem;font-weight:600}.input-word{margin-top:1rem;text-align:center;padding:0;border:none;border-radius:1rem;-webkit-appearance:none;box-shadow:inset 0 -1px 0 #ddd;font-size:2rem;width:90%;color:#666}.input-word:focus{outline:none;box-shadow:inset 0 -2px 0 #2196f3}",""])},347:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(311),o=n(r),a=t(313),i=n(a),s=t(348),u=n(s),l=o["default"].module("timer",[i["default"]]).component("timer",u["default"]).name;exports["default"]=l},348:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(349),o=n(r),a=t(350),i=n(a);t(351);var s={bindings:{onChange:"&",timer:"@"},template:o["default"],controller:i["default"],controllerAs:"vm"};exports["default"]=s},349:function(e,exports){e.exports='<div>\n	<h3>{{vm.timer}} Seconds</h3>\n	<div class="progress timer">\n		<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="{{vm.timer}}" aria-valuemin="0" aria-valuemax="{{vm.maxTime}}" style="width: {{vm.progress}}%"></div>\n	</div>\n</div>\n'},350:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(319),o=n(r),a=function i(e){"ngInject";var t=this;(0,o["default"])(this,i),this.progress=100,this.maxTime=this.timer,this.countdown=function(){t.timer>0&&(t.timer--,t.progress=t.progress-100/t.maxTime,t.onChange({timer:t.timer}),e(t.countdown,1e3))},e(this.countdown,1e3)};a.$inject=["$timeout"],exports["default"]=a},351:function(e,exports,t){var n=t(352);"string"==typeof n&&(n=[[e.id,n,""]]);t(303)(n,{});n.locals&&(e.exports=n.locals)},352:function(e,exports,t){exports=e.exports=t(302)(),exports.push([e.id,"",""])},353:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(311),o=n(r),a=t(354),i=n(a),s=o["default"].module("WordService",[]).service("WordService",i["default"]).name;exports["default"]=s},354:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(319),o=n(r),a=t(320),i=n(a),s=function(){function e(t){"ngInject";(0,o["default"])(this,e),this.$http=t}return e.$inject=["$http"],(0,i["default"])(e,[{key:"getWords",value:function(){var e=this;return this.$http.get("https://guess-the-word-7a728.firebaseio.com/data/words.json").then(function(t){return e.shuffleWords(t.data)})}},{key:"shuffleWords",value:function(e){var t=0,n=0,r=null;for(t=e.length-1;t>0;t-=1)n=Math.floor(Math.random()*(t+1)),r=e[t],e[t]=e[n],e[n]=r;return e}},{key:"mangleWord",value:function(e){for(var t=e.split(""),n=t.length,r=n-1;r>0;r--){var o=Math.floor(Math.random()*(r+1)),a=t[r];t[r]=t[o],t[o]=a}return t.join("")}}]),e}();exports["default"]=s},355:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e){"ngInject";e.state("highscores",{url:"/highscores",component:"highscoreList",resolve:{scores:["ScoreService",function(e){return e.getScores()}]}})}r.$inject=["$stateProvider"],Object.defineProperty(exports,"__esModule",{value:!0});var o=t(311),a=n(o),i=t(313),s=n(i),u=t(356),l=n(u),d=a["default"].module("highscoreList",[s["default"]]).config(r).component("highscoreList",l["default"]).name;exports["default"]=d},356:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(357),o=n(r),a=t(358),i=n(a);t(359);var s={bindings:{scores:"<"},template:o["default"],controller:i["default"],controllerAs:"vm"};exports["default"]=s},357:function(e,exports){e.exports='<div class="highscores">\n		<div class="panel panel-primary">\n			<div class="panel-heading panel-heading-highscores">\n				<h2 class="panel-title">Highscores</h2>\n			</div>\n			<div class="panel-body panel-body-highscores">\n				<div class="row user-score-details" data-ng-repeat="score in ::vm.scores | orderObjectBy:\'score\' : true ">\n					<div class="user-score-username col-xs-6">{{::score.username}}</div>\n					<div class="user-score-score col-xs-6">{{::score.score}} Pts</div>\n				</div>\n			</div>\n		</div>\n</div>\n'},358:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(319),o=n(r),a=function i(){(0,o["default"])(this,i),this.name="highscoreList"};exports["default"]=a},359:function(e,exports,t){var n=t(360);"string"==typeof n&&(n=[[e.id,n,""]]);t(303)(n,{});n.locals&&(e.exports=n.locals)},360:function(e,exports,t){exports=e.exports=t(302)(),exports.push([e.id,'.panel-heading-highscores{padding:2rem}.panel-body-highscores{padding:0!important}.user-score-details{margin-left:0;color:#000;line-height:70px;width:100%;position:relative;box-shadow:0 1px 0 rgba(0,0,0,.08);border-radius:1px;cursor:pointer;counter-increment:highscores}.user-score-details .user-score-username{text-align:left;padding-left:5rem}.user-score-details .user-score-username:before{content:"#" counter(highscores);margin-right:2em;color:rgba(0,0,0,.5)}.user-score-details .user-score-score{text-align:right;padding-right:5rem}',""])},361:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(){return function(e,t,n){function r(e){return!isNaN(parseFloat(e))&&isFinite(e)}function o(e,t){return e[t]}var i=[];return a["default"].forEach(e,function(e,t){e.key=t,i.push(e)}),i.sort(function(e,n){var a,i=t.split(".").reduce(o,e),s=t.split(".").reduce(o,n);return r(i)&&r(s)&&(i=Number(i),s=Number(s)),a=i===s?0:i>s?1:-1}),n&&i.reverse(),i}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(311),a=n(o),i=t(362),s=n(i),u=t(368),l=n(u),d=t(374),c=n(d),f=t(376),v=n(f),h=a["default"].module("app.common",[s["default"],l["default"],c["default"],v["default"]]).filter("orderObjectBy",r).name;exports["default"]=h},362:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(311),o=n(r),a=t(313),i=n(a),s=t(363),u=n(s),l=o["default"].module("navbar",[i["default"]]).component("navbar",u["default"]).name;exports["default"]=l},363:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(364),o=n(r),a=t(365),i=n(a);t(366);var s={bindings:{},template:o["default"],controller:i["default"],controllerAs:"vm"};exports["default"]=s},364:function(e,exports){e.exports='<div class="masthead clearfix">\n	<div class="inner">\n    <h1 class="masthead-brand"><a ui-sref="game">Guess the Word</a></h1>\n  <nav class="nav nav-masthead">\n    <a class="nav-link" ui-sref="highscores">Highscores</a>\n  </nav>\n  </div>\n</div>\n'},365:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(319),o=n(r),a=function i(){(0,o["default"])(this,i),this.name="navbar"};exports["default"]=a},366:function(e,exports,t){var n=t(367);"string"==typeof n&&(n=[[e.id,n,""]]);t(303)(n,{});n.locals&&(e.exports=n.locals)},367:function(e,exports,t){exports=e.exports=t(302)(),exports.push([e.id,".masthead{margin-bottom:2rem}.masthead-brand{margin-top:0;margin-bottom:0}.nav-masthead .nav-link{padding:.25rem 0;font-weight:700;color:hsla(0,0%,100%,.5);background-color:transparent;border-bottom:.25rem solid transparent}.nav-masthead .nav-link:focus,.nav-masthead .nav-link:hover{border-bottom-color:hsla(0,0%,100%,.25)}.nav-masthead .nav-link+.nav-link{margin-left:1rem}.nav-masthead .active{color:#fff;border-bottom-color:#fff}@media (min-width:40em){.masthead{position:absolute;top:0;width:100%}}@media (min-width:48em){.masthead-brand{float:left}.nav-masthead{float:right}}",""])},368:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(311),o=n(r),a=t(313),i=n(a),s=t(369),u=n(s),l=o["default"].module("footer",[i["default"]]).component("footer",u["default"]).name;exports["default"]=l},369:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(370),o=n(r),a=t(371),i=n(a);t(372);var s={bindings:{},template:o["default"],controller:i["default"],controllerAs:"vm"};exports["default"]=s},370:function(e,exports){e.exports='<div class="mastfoot">\n	<div class="inner">\n		<p>Guess the Word, by <a href="http://albertgracia.com">Albert Gracia</a>.</p>\n	</div>\n</div>\n'},371:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(319),o=n(r),a=function i(){(0,o["default"])(this,i),this.name="footer"};exports["default"]=a},372:function(e,exports,t){var n=t(373);"string"==typeof n&&(n=[[e.id,n,""]]);t(303)(n,{});n.locals&&(e.exports=n.locals)},373:function(e,exports,t){exports=e.exports=t(302)(),exports.push([e.id,".mastfoot{color:hsla(0,0%,100%,.5)}@media (min-width:40em){.mastfoot{position:absolute;bottom:0;width:100%}}",""])},374:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(311),o=n(r),a=t(375),i=n(a),s=o["default"].module("LocalStorage",[]).service("LocalStorage",i["default"]).name;exports["default"]=s},375:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(319),o=n(r),a=t(320),i=n(a),s=function(){function e(t){"ngInject";(0,o["default"])(this,e),this.$window=t}return e.$inject=["$window"],(0,i["default"])(e,[{key:"setData",value:function(e,t){return this.$window.sessionStorage&&this.$window.sessionStorage.setItem(e,t)}},{key:"getData",value:function(e){return this.$window.sessionStorage&&this.$window.sessionStorage.getItem(e)}}]),e}();exports["default"]=s},376:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(311),o=n(r),a=t(377),i=n(a),s=o["default"].module("ScoreService",[]).service("ScoreService",i["default"]).name;exports["default"]=s},377:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(319),o=n(r),a=t(320),i=n(a),s=function(){function e(t){"ngInject";(0,o["default"])(this,e),this.$http=t}return e.$inject=["$http"],(0,i["default"])(e,[{key:"getScores",value:function(){return this.$http.get("https://guess-the-word-7a728.firebaseio.com/data/scores.json").then(function(e){return e.data})}},{key:"saveScore",value:function(e,t){var n={username:e,score:t};return this.$http.post("https://guess-the-word-7a728.firebaseio.com/data/scores.json",n)}}]),e}();exports["default"]=s},378:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(379),o=n(r);t(380);var a={template:o["default"]};exports["default"]=a},379:function(e,exports){e.exports='<!-- Place all UI elements intended to be present across all routes in this file -->\n<div class="site-wrapper">\n	<div class="site-wrapper-inner">\n		<div class="main-container">\n			<navbar></navbar>\n			<div class="container">\n				<div class="jumbotron">\n					<div ui-view></div>\n				</div>\n			</div>\n		</div>\n		<footer></footer>\n	</div>\n</div>\n'},380:function(e,exports,t){var n=t(381);"string"==typeof n&&(n=[[e.id,n,""]]);t(303)(n,{});n.locals&&(e.exports=n.locals)},381:function(e,exports,t){exports=e.exports=t(302)(),exports.push([e.id,"a,a:focus,a:hover{color:#fff}body,html{height:100%;background-color:#333}body{color:#fff;text-align:center;text-shadow:0 .05rem .1rem rgba(0,0,0,.5)}.inner{padding:4rem}.jumbotron{background-color:#a4c7f0!important}.site-wrapper{display:table;width:100%;height:100%;min-height:100%;box-shadow:inset 0 0 5rem rgba(0,0,0,.5)}.site-wrapper-inner{display:table-cell;vertical-align:top}.main-container{margin-right:auto;margin-left:auto}@media (min-width:40em){.site-wrapper-inner{vertical-align:middle}.main-container{width:100%}}",""])}});
//# sourceMappingURL=app.bundle.js.map