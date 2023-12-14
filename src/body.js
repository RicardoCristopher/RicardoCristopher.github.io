// ----------------
// 	   ELEMENTS
// ----------------
	// -------------------------- Global --------------------------
		const bg  = document.getElementsByTagName('body');
		const sw  = document.getElementById('switcher');
		const ba  = document.getElementById('content');
		const btn = document.getElementById('submitBtn');

	// -------------------------- Tiempo --------------------------
		let now  = new Date();
		var hora = now.getHours();
		
		if(hora < 6 || hora > 18){
			bg[0].classList.add('nightlight');
			sw.checked = true;
		}else{
			bg[0].classList.add('daylight');
		}

	// ------------------------- Switcher -------------------------
		sw.addEventListener("click", function(){
			mod();
		});

	// -------------------------- FadeIn --------------------------
		window.addEventListener("load", function(){
		    var input = contact.querySelectorAll('input,textarea');

		    for(i=0; i < input.length; i++) {
				input[i].addEventListener('keyup',function(){
					event.target.value != '' ? lockdown() : null;
				});
			}

		    ba.style.opacity = 1;
		});

	// --------------------------- Form ---------------------------
		btn.addEventListener("click", function(){
			checker(event.target.form);

			contact.addEventListener('mouseleave',formReset,{once:true});
		});