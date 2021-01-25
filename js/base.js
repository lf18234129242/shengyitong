(function (doc, win) {
	resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	recalc = function () {
	  var clientWidth = doc.documentElement.clientWidth
		|| doc.body.clientWidth || window.innerWidth;
		if (!clientWidth || clientWidth > 396) return;
	  doc.documentElement.style.fontSize = 100 * (clientWidth / 375) + 'px';
	};
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);