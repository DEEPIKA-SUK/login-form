const form = document.getElementById('form');
	

	form.addEventListener('submit', e => { 
	    e.preventDefault();
	

	    const firstName = form['f-name'].value;
	    const lastName = form['l-name'].value;
	    
	    const password = form['password'].value;
	

	    if(firstName === ''){
	        addErrorTo('f-name', 'First Name cannot be empty')
	    }else{
	        removeErrorFrom('f-name')
	    }
	

	    if(lastName === ''){
	        addErrorTo('l-name', 'Last Name cannot be empty')
	    }else{
	        removeErrorFrom('l-name')
	    }
	    
	   
	

	    if(password  === ''){
	        addErrorTo('password', 'Password cannot be empty')
	    }else{
	        removeErrorFrom('password')
	    }
	});
	

	function addErrorTo(field, message){
	    const error = form[field].parentNode;
	    error.classList.add('error')
	    const small = form[field].parentNode.querySelector('small');
	    small.innerText = message;
	    small.opacity = '1';
	};
	

	function removeErrorFrom(field){
	    const error = form[field].parentNode;
	    error.classList.remove('error')
	    const small = form[field].parentNode.querySelector('small');
	    small.innerText = ""
	    small.opacity = '0';
	};
	

	







