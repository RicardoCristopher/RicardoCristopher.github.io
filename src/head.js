// ----------------
// 	   FUNCTIONS
// ----------------
	function mod(){
		var modeOn  = document.querySelectorAll('.daylight');
		var modeOff = document.querySelectorAll('.nightlight');

		if(modeOn.length > 0){
			for(i=0; i < modeOn.length; i++){
				modeOn[i].classList.remove('daylight');
				modeOn[i].classList.add('nightlight');
			}
		}else if(modeOff.length > 0){
			for(i=0; i < modeOff.length; i++){
				modeOff[i].classList.remove('nightlight');
				modeOff[i].classList.add('daylight');
			}
		}
	}
	
	function checker(form){
		var input = form.querySelectorAll('input,textarea');
		var ios   = document.getElementsByClassName('particles');

		for(i=0; i < input.length; i++){
			(input[i].value.length == 0) ? input[i].classList.add('required') : input[i].classList.remove('required');
		}

		var warning = form.getElementsByClassName('required');

		if(warning.length > 0){
			for(i=0; i < ios.length; i++){
				ios[i].classList.add('warning');
			}
		}else{
			for(i=0; i < ios.length; i++){
				ios[i].classList.remove('warning');
			}

			form.submit();

			for(i=0; i < input.length; i++){input[i].value = '';}
		}
	}

	function lockdown(){
		var banZ  = content.querySelector('.perma');

		if(!banZ){
			var clicZ = document.querySelector('html');

			var lock = content.querySelectorAll('.resizeable');

			for(i=0; i < lock.length; i++) {lock[i].classList.remove('resizeable'); lock[i].classList.add('lock'); }

			contact.classList.remove('lock');
			contact.classList.add('perma');
			
			var banL  = contact.querySelectorAll('*');

			for(i=0; i < banL.length; i++) {banL[i].classList.add('permaElement'); }

			document.addEventListener('click',deadZone);
		}
	}

	function deadZone(){
		event.target.classList.contains('permaElement') ? null : formReset();
	}

	function formReset(){
		document.addEventListener('mousemove',function(){
			document.removeEventListener('click',deadZone);
		},{once:true});
		
		var input = form.querySelectorAll('input,textarea');
		var banL  = content.querySelectorAll('.permaElement');
		var lock  = content.querySelectorAll('.lock');
		var ios   = document.querySelectorAll('.warning');

		for(i=0; i < input.length; i++) {
			input[i].value=''; 
			input[i].classList.contains('required') ? input[i].classList.remove('required') : null;
		}

		if(ios){
			for(i=0; i < ios.length; i++) {ios[i].classList.remove('warning'); }
		}

		for(i=0; i < banL.length; i++) {banL[i].classList.remove('permaElement'); }

		for(i=0; i < lock.length; i++) {lock[i].classList.remove('lock'); lock[i].classList.add('resizeable'); }

		contact.classList.remove('perma');

		contact.classList.add('resizeable');
	}
