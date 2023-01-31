// (function () {

// 	let bananana = document.getElementsByClassName('bananana');
// 	for (var i = 0; i < bananana.length; i++) {
// 		bananana[i].style.top = Math.random() * 500 + 'px'
// 		bananana[i].style.left = Math.random() * 1300 + 'px'
// 	}

// 	document.onkeydown = function (e) {

// 		var ll = document.getElementById('q6').offsetLeft
// 		var tt = document.getElementById('q6').offsetTop


// 		var ll1 = document.getElementById('q').offsetLeft
// 		var tt1 = document.getElementById('q').offsetTop

// 		var ll2 = document.getElementById('q1').offsetLeft
// 		var tt2 = document.getElementById('q1').offsetTop

// 		var ll3 = document.getElementById('q2').offsetLeft
// 		var tt3 = document.getElementById('q2').offsetTop

// 		var ll4 = document.getElementById('q3').offsetLeft
// 		var tt4 = document.getElementById('q3').offsetTop

// 		var ll5 = document.getElementById('q4').offsetLeft
// 		var tt5 = document.getElementById('q4').offsetTop

// 		var ll6 = document.getElementById('q5').offsetLeft
// 		var tt6 = document.getElementById('q5').offsetTop

// 		if (e.keyCode == 38) {
// 			tt = tt - 10
// 			document.getElementById('q6').style.top = tt + 'px'
// 		}
// 		if (e.keyCode == 40) {
// 			tt = tt + 10
// 			document.getElementById('q6').style.top = tt + 'px'
// 		}
// 		if (e.keyCode == 37) {
// 			ll = ll - 10
// 			document.getElementById('q6').style.left = ll + 'px'
// 		}
// 		if (e.keyCode == 39) {
// 			ll = ll + 10
// 			document.getElementById('q6').style.left = ll + 'px'
// 		}

// 		if (ll + 100 > ll1 && ll < ll1 + 100 && tt + 100 > tt1 && tt < tt1 + 100) {
// 			document.getElementById('q').classList.add('rr')
// 		}
// 		if (ll + 100 > ll2 && ll < ll2 + 100 && tt + 100 > tt2 && tt < tt2 + 100) {
// 			document.getElementById('q1').classList.add('rr')
// 		}
// 		if (ll + 100 > ll3 && ll < ll3 + 100 && tt + 100 > tt3 && tt < tt3 + 100) {
// 			document.getElementById('q2').classList.add('rr')
// 		}
// 		if (ll + 100 > ll4 && ll < ll4 + 100 && tt + 100 > tt4 && tt < tt4 + 100) {
// 			document.getElementById('q3').classList.add('rr')
// 		}
// 		if (ll + 100 > ll5 && ll < ll5 + 100 && tt + 100 > tt5 && tt < tt5 + 100) {
// 			document.getElementById('q4').classList.add('rr')
// 		}
// 		if (ll + 100 > ll6 && ll < ll6 + 100 && tt + 100 > tt6 && tt < tt6 + 100) {
// 			document.getElementById('q5').classList.add('rr')
// 		}
// 		var cl = document.getElementsByClassName('rr').length * 5
// 		document.getElementById('a1').innerHTML = cl
// 		if (cl == 30) {
// 			document.getElementById('q8').style.opacity = 1
// 			document.onkeydown = null
// 			clearInterval(stop)
// 		}

// 	}

// })()
// var u = 60
// var stop = setInterval(function () {
// 	u--

// 	document.getElementById('a2').innerHTML = u
// 	if (u <= 0) {
// 		document.getElementById('q7').style.opacity = 1
// 		document.getElementById('a2').innerHTML = 0
// 		u = 0
// 		document.onkeydown = null
// 	}
// }, 1000)


let win = document.getElementById('win')
let lose = document.getElementById('lose')
let w = 0
let l = 0;
win.innerHTML = w;
lose.innerHTML = l;





let esy = document.getElementById('es')
let mdm = document.getElementById('md')
let hrd = document.getElementById('hr')

let es = document.getElementById('esy')
let md = document.getElementById('mdm')
let hr = document.getElementById('hrd')





esy.onclick = () => {
	if (es.checked == true) {
		md.checked = false
		hr.checked = false
	} else if ((md.checked == false && hr.checked == true) || (md.checked == true && hr.checked == false)) {
		es.checked = true
		md.checked = false
		hr.checked = false
	}
}







mdm.onclick = () => {
	if (md.checked == true) {
		es.checked = false
		hr.checked = false
	} else if ((es.checked == false && hr.checked == true) || (es.checked == true && hr.checked == false)) {
		md.checked = true
		es.checked = false
		hr.checked = false
	}
}





hrd.onclick = () => {
	if (hr.checked == true) {
		md.checked = false
		es.checked = false
	} else if ((es.checked == false && md.checked == true) || (es.checked == true && md.checked == false)) {
		hr.checked = true
		md.checked = false
		es.checked = false
	}
}

let p1 = document.getElementById('pl1')
let p2 = document.getElementById('pl2')


let pl1 = document.getElementById('ply1')
let pl2 = document.getElementById('ply2')


pl1.onclick = () => {
	if (p1.checked == true) {
		p2.checked = false
		document.getElementsByClassName('q6')[0].innerHTML = "<img src='10.png' width='110%'>"
	} else if (p1.checked == false) {
		p1.checked = true
		p2.checked = false
	}
}

pl2.onclick = () => {
	if (p2.checked == true) {
		p1.checked = false
		document.getElementsByClassName('q6')[0].innerHTML = "<img src='10.png' width='110%'>"
	} else if (p2.checked == false) {
		p2.checked = true
		p1.checked = false
	}
}





p1.onclick = () => {
	if (p1.checked == true) {
		p2.checked = false
		document.getElementsByClassName('q6')[0].innerHTML = "<img src='10.png' width='110%'>"
	} else if (p1.checked == false && p2.checked == false) {
		p1.checked = true
	}
}




p2.onclick = () => {
	if (p2.checked == true) {
		p1.checked = false
		document.getElementsByClassName('q6')[0].innerHTML = "<img src='2.png' width='100%'>"
	} else if (p2.checked == false && p1.checked == false) {
		p2.checked = true
	}
}




let start = document.getElementById('start')
let pre = document.getElementById('pre')
let gm = document.getElementById('gm')
start.onclick = () => {
	pre.style.display = 'none'
	gm.style.display = 'block'

	if (p1.checked == true) {
		document.getElementsByClassName('q6')[0].innerHTML = "<img src='10.png' width='110%'>"
	} else if (p1.checked == true) {
		document.getElementsByClassName('q6')[0].innerHTML = "<img src='10.png' width='110%'>"
	}

	if (es.checked == true) {
		easy()
	} else if (md.checked == true) {
		medium()
	} else if (hr.checked == true) {
		hard()
	}


}
















function easy() {
	let bananana = document.getElementsByClassName('bananana');
	for (var i = 0; i < bananana.length; i++) {
		bananana[i].style.top = Math.random() * 500 + 'px'
		bananana[i].style.left = Math.random() * 1300 + 'px'
	}

	document.onkeydown = function (e) {

		var ll = document.getElementById('q6').offsetLeft
		var tt = document.getElementById('q6').offsetTop


		var ll1 = document.getElementById('q').offsetLeft
		var tt1 = document.getElementById('q').offsetTop

		var ll2 = document.getElementById('q1').offsetLeft
		var tt2 = document.getElementById('q1').offsetTop

		var ll3 = document.getElementById('q2').offsetLeft
		var tt3 = document.getElementById('q2').offsetTop

		var ll4 = document.getElementById('q3').offsetLeft
		var tt4 = document.getElementById('q3').offsetTop

		var ll5 = document.getElementById('q4').offsetLeft
		var tt5 = document.getElementById('q4').offsetTop

		var ll6 = document.getElementById('q5').offsetLeft
		var tt6 = document.getElementById('q5').offsetTop

		if (e.keyCode == 38) {
			tt = tt - 10
			document.getElementById('q6').style.top = tt + 'px'
		} else if (e.keyCode == 87) {
			tt = tt - 10
			document.getElementById('q6').style.top = tt + 'px'
		}
		if (e.keyCode == 40) {
			tt = tt + 10
			document.getElementById('q6').style.top = tt + 'px'
		} else if (e.keyCode == 83) {
			tt = tt + 10
			document.getElementById('q6').style.top = tt + 'px'
		}
		if (e.keyCode == 37) {
			ll = ll - 10
			document.getElementById('q6').style.left = ll + 'px'
		} else if (e.keyCode == 65) {
			ll = ll - 10
			document.getElementById('q6').style.left = ll + 'px'
		}
		if (e.keyCode == 39) {
			ll = ll + 10
			document.getElementById('q6').style.left = ll + 'px'
		} else if (e.keyCode == 68) {
			ll = ll + 10
			document.getElementById('q6').style.left = ll + 'px'
		}

		if (ll + 100 > ll1 && ll < ll1 + 100 && tt + 100 > tt1 && tt < tt1 + 100) {
			document.getElementById('q').classList.add('rr')
		}
		if (ll + 100 > ll2 && ll < ll2 + 100 && tt + 100 > tt2 && tt < tt2 + 100) {
			document.getElementById('q1').classList.add('rr')
		}
		if (ll + 100 > ll3 && ll < ll3 + 100 && tt + 100 > tt3 && tt < tt3 + 100) {
			document.getElementById('q2').classList.add('rr')
		}
		if (ll + 100 > ll4 && ll < ll4 + 100 && tt + 100 > tt4 && tt < tt4 + 100) {
			document.getElementById('q3').classList.add('rr')
		}
		if (ll + 100 > ll5 && ll < ll5 + 100 && tt + 100 > tt5 && tt < tt5 + 100) {
			document.getElementById('q4').classList.add('rr')
		}
		if (ll + 100 > ll6 && ll < ll6 + 100 && tt + 100 > tt6 && tt < tt6 + 100) {
			document.getElementById('q5').classList.add('rr')
		}
		var cl = document.getElementsByClassName('rr').length * 5
		document.getElementById('a1').innerHTML = cl



		if (cl == 30) {
			document.getElementById('q8').style.opacity = 1
			document.getElementById('reset').style.opacity = 0
			setTimeout(() => {
				document.getElementById('q8').style.opacity = 0
				document.getElementById('reset').style.opacity = 1
			}, 1500);

			document.onkeydown = null
			clearInterval(stop)
			w++
			win.innerHTML = w
		}

	}


	var u = 25
	var stop = setInterval(function () {
		u--

		document.getElementById('a2').innerHTML = u
		if (u == 0) {
			document.getElementById('q7').style.opacity = 1
			document.getElementById('reset').style.opacity = 0
			setTimeout(() => {
				document.getElementById('q7').style.opacity = 0
				document.getElementById('reset').style.opacity = 1
			}, 1500);
			document.onkeydown = null
			l++
			lose.innerHTML = l
			clearInterval(stop)
		}
	}, 1000)
}













function medium() {
	let bananana = document.getElementsByClassName('bananana');
	for (var i = 0; i < bananana.length; i++) {
		bananana[i].style.top = Math.random() * 500 + 'px'
		bananana[i].style.left = Math.random() * 1300 + 'px'
	}

	document.onkeydown = function (e) {

		var ll = document.getElementById('q6').offsetLeft
		var tt = document.getElementById('q6').offsetTop


		var ll1 = document.getElementById('q').offsetLeft
		var tt1 = document.getElementById('q').offsetTop

		var ll2 = document.getElementById('q1').offsetLeft
		var tt2 = document.getElementById('q1').offsetTop

		var ll3 = document.getElementById('q2').offsetLeft
		var tt3 = document.getElementById('q2').offsetTop

		var ll4 = document.getElementById('q3').offsetLeft
		var tt4 = document.getElementById('q3').offsetTop

		var ll5 = document.getElementById('q4').offsetLeft
		var tt5 = document.getElementById('q4').offsetTop

		var ll6 = document.getElementById('q5').offsetLeft
		var tt6 = document.getElementById('q5').offsetTop

		if (e.keyCode == 38) {
			tt = tt - 10
			document.getElementById('q6').style.top = tt + 'px'
		} else if (e.keyCode == 87) {
			tt = tt - 10
			document.getElementById('q6').style.top = tt + 'px'
		}
		if (e.keyCode == 40) {
			tt = tt + 10
			document.getElementById('q6').style.top = tt + 'px'
		} else if (e.keyCode == 83) {
			tt = tt + 10
			document.getElementById('q6').style.top = tt + 'px'
		}
		if (e.keyCode == 37) {
			ll = ll - 10
			document.getElementById('q6').style.left = ll + 'px'
		} else if (e.keyCode == 65) {
			ll = ll - 10
			document.getElementById('q6').style.left = ll + 'px'
		}
		if (e.keyCode == 39) {
			ll = ll + 10
			document.getElementById('q6').style.left = ll + 'px'
		} else if (e.keyCode == 68) {
			ll = ll + 10
			document.getElementById('q6').style.left = ll + 'px'
		}

		if (ll + 100 > ll1 && ll < ll1 + 100 && tt + 100 > tt1 && tt < tt1 + 100) {
			document.getElementById('q').classList.add('rr')
		}
		if (ll + 100 > ll2 && ll < ll2 + 100 && tt + 100 > tt2 && tt < tt2 + 100) {
			document.getElementById('q1').classList.add('rr')
		}
		if (ll + 100 > ll3 && ll < ll3 + 100 && tt + 100 > tt3 && tt < tt3 + 100) {
			document.getElementById('q2').classList.add('rr')
		}
		if (ll + 100 > ll4 && ll < ll4 + 100 && tt + 100 > tt4 && tt < tt4 + 100) {
			document.getElementById('q3').classList.add('rr')
		}
		if (ll + 100 > ll5 && ll < ll5 + 100 && tt + 100 > tt5 && tt < tt5 + 100) {
			document.getElementById('q4').classList.add('rr')
		}
		if (ll + 100 > ll6 && ll < ll6 + 100 && tt + 100 > tt6 && tt < tt6 + 100) {
			document.getElementById('q5').classList.add('rr')
		}
		var cl = document.getElementsByClassName('rr').length * 5
		document.getElementById('a1').innerHTML = cl



		if (cl == 30) {
			document.getElementById('q8').style.opacity = 1
			document.getElementById('reset').style.opacity = 0
			setTimeout(() => {
				document.getElementById('q8').style.opacity = 0
				document.getElementById('reset').style.opacity = 1
			}, 1500);

			document.onkeydown = null
			clearInterval(stop)
			w++
			win.innerHTML = w
		}


	}


	var u = 60
	var stop = setInterval(function () {
		u--

		document.getElementById('a2').innerHTML = u
		if (u == 0) {
			document.getElementById('q7').style.opacity = 1
			document.getElementById('reset').style.opacity = 0
			setTimeout(() => {
				document.getElementById('q7').style.opacity = 0
				document.getElementById('reset').style.opacity = 1
			}, 1500);
			document.onkeydown = null
			clearInterval(stop)
			l++
			lose.innerHTML = l
		}
	}, 1000)
}














function hard() {
	let bananana = document.getElementsByClassName('bananana');
	for (var i = 0; i < bananana.length; i++) {
		bananana[i].style.top = Math.random() * 500 + 'px'
		bananana[i].style.left = Math.random() * 1300 + 'px'
	}

	document.onkeydown = function (e) {

		var ll = document.getElementById('q6').offsetLeft
		var tt = document.getElementById('q6').offsetTop


		var ll1 = document.getElementById('q').offsetLeft
		var tt1 = document.getElementById('q').offsetTop

		var ll2 = document.getElementById('q1').offsetLeft
		var tt2 = document.getElementById('q1').offsetTop

		var ll3 = document.getElementById('q2').offsetLeft
		var tt3 = document.getElementById('q2').offsetTop

		var ll4 = document.getElementById('q3').offsetLeft
		var tt4 = document.getElementById('q3').offsetTop

		var ll5 = document.getElementById('q4').offsetLeft
		var tt5 = document.getElementById('q4').offsetTop

		var ll6 = document.getElementById('q5').offsetLeft
		var tt6 = document.getElementById('q5').offsetTop

		if (e.keyCode == 38) {
			tt = tt - 10
			document.getElementById('q6').style.top = tt + 'px'
		} else if (e.keyCode == 87) {
			tt = tt - 10
			document.getElementById('q6').style.top = tt + 'px'
		}
		if (e.keyCode == 40) {
			tt = tt + 10
			document.getElementById('q6').style.top = tt + 'px'
		} else if (e.keyCode == 83) {
			tt = tt + 10
			document.getElementById('q6').style.top = tt + 'px'
		}
		if (e.keyCode == 37) {
			ll = ll - 10
			document.getElementById('q6').style.left = ll + 'px'
		} else if (e.keyCode == 65) {
			ll = ll - 10
			document.getElementById('q6').style.left = ll + 'px'
		}
		if (e.keyCode == 39) {
			ll = ll + 10
			document.getElementById('q6').style.left = ll + 'px'
		} else if (e.keyCode == 68) {
			ll = ll + 10
			document.getElementById('q6').style.left = ll + 'px'
		}

		if (ll + 100 > ll1 && ll < ll1 + 100 && tt + 100 > tt1 && tt < tt1 + 100) {
			document.getElementById('q').classList.add('rr')
		}
		if (ll + 100 > ll2 && ll < ll2 + 100 && tt + 100 > tt2 && tt < tt2 + 100) {
			document.getElementById('q1').classList.add('rr')
		}
		if (ll + 100 > ll3 && ll < ll3 + 100 && tt + 100 > tt3 && tt < tt3 + 100) {
			document.getElementById('q2').classList.add('rr')
		}
		if (ll + 100 > ll4 && ll < ll4 + 100 && tt + 100 > tt4 && tt < tt4 + 100) {
			document.getElementById('q3').classList.add('rr')
		}
		if (ll + 100 > ll5 && ll < ll5 + 100 && tt + 100 > tt5 && tt < tt5 + 100) {
			document.getElementById('q4').classList.add('rr')
		}
		if (ll + 100 > ll6 && ll < ll6 + 100 && tt + 100 > tt6 && tt < tt6 + 100) {
			document.getElementById('q5').classList.add('rr')
		}
		var cl = document.getElementsByClassName('rr').length * 5
		document.getElementById('a1').innerHTML = cl



		if (cl == 30) {
			document.getElementById('q8').style.opacity = 1
			document.getElementById('reset').style.opacity = 0
			setTimeout(() => {
				document.getElementById('q8').style.opacity = 0
				document.getElementById('reset').style.opacity = 1
			}, 1500);

			document.onkeydown = null
			clearInterval(stop)
			w++
			win.innerHTML = w
		}

	}


	var u = 15
	var stop = setInterval(function () {
		u--

		document.getElementById('a2').innerHTML = u
		if (u == 0) {
			document.getElementById('q7').style.opacity = 1
			document.getElementById('reset').style.opacity = 0
			setTimeout(() => {
				document.getElementById('q7').style.opacity = 0
				document.getElementById('reset').style.opacity = 1
			}, 1500);
			document.onkeydown = null
			clearInterval(stop)
			l++
			lose.innerHTML = l
		}
	}, 1000)
}








let reset = document.getElementById('reset')

reset.onclick = () => {
	document.getElementById('a1').innerHTML = 0
	reset.style.opacity = 0;

	for (let i = 0; i < document.getElementsByClassName('bananana').length; i++) {
		document.getElementsByClassName('bananana')[i].classList.remove('rr')
	}

	if (es.checked == true) {
		easy()
	} else if (md.checked == true) {
		medium()
	} else if (hr.checked == true) {
		hard()
	}
}