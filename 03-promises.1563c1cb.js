!function(){var o=document.querySelector(".form");function e(o,e){var n=Math.random()>.3,t={position:o,delay:e};return new Promise((function(o,c){setTimeout((function(){n?o(t):c(t)}),e)}))}console.log(o),o.addEventListener("submit",(function(n){n.preventDefault();var t=Number(o.delay.value);console.log(t);for(var c=1;c<=o.amount.value;c+=1)e(c,t).then((function(o){var e=o.position,n=o.delay;console.log("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms"))})).catch((function(o){var e=o.position,n=o.delay;console.log("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))})),t+=Number(o.step.value)}))}();
//# sourceMappingURL=03-promises.1563c1cb.js.map