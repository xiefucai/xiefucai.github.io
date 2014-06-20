var x = 0,
	y = 0,
	v = 0,
	backgroundSize = [0,0],
	content = document.getElementById('content'),
	lastGamma = 0,
	lastBeta = 0,
	positionX = 50,
	positionY = 50;

function Orientation(selector) {}

Orientation.prototype.init = function(){
	var img = new Image(),
		self = this,
		imgSrc = (content.style.backgroundImage || '').replace(/^.*http:/,'http:').replace(/\)$/,'');
		img.onload = function(){
			self.w = this.width/window.devicePixelRatio;
			self.h = this.height/window.devicePixelRatio;
			content.style.backgroundSize = [self.w+'px',self.h+'px'].join(' ');
			window.addEventListener('deviceorientation', self.orientationListener, false);
			window.addEventListener('MozOrientation', self.orientationListener, false);
			window.addEventListener('devicemotion', self.orientationListener, false);
		}
		img.src = imgSrc;
}

Orientation.prototype.orientationListener = function(evt) {
	var gamma = evt.gamma,
		beta = evt.beta,
		alpha = evt.alpha,
		bx = parseInt(content.style.backgroundPositionX,10) || 0,
		by = parseInt(content.style.backgroundPositionY,10) || 0,
		tx = 0,
		ty = 0;
	// For FF3.6+
	if ((evt.gamma === undefined) && (evt.beta === undefined)) {
		// angle=radian*180.0/PI 在firefox中x和y是弧度值,
		gamma = (evt.x * (180 / Math.PI)); //转换成角度值,
		beta = (evt.y * (180 / Math.PI)); //转换成角度值
		alpha = (evt.z * (180 / Math.PI)); //转换成角度值
	}
	
	if(evt.accelerationIncludingGravity){
		// window.removeEventListener('deviceorientation', this.orientationListener, false);
		gamma = event.accelerationIncludingGravity.x*10
		beta = -event.accelerationIncludingGravity.y*10
		alpha = event.accelerationIncludingGravity.z*10
	}

	gamma = parseInt(gamma,10);
	beta = parseInt(beta,10);
	tx = bx + Math.min(gamma,30)/30*100;//console.log(bx,tx);
	ty = by + Math.min(beta,30)/30*100;//console.log(by,ty);
	tx = Math.min(tx,100);
	tx = Math.max(tx,0);
	ty = Math.min(ty,100);
	ty = Math.max(ty,0);
	content.style.backgroundPositionX = tx + '%';
	content.style.backgroundPositionY = ty + '%';
};
(new Orientation()).init();