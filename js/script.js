'use strict';
// (function(){ 

    // Arrays with DOM elements
    var modalLinks = document.querySelectorAll('.show-modal');
    var modals = document.querySelectorAll('.modal');
    var closeButtons = document.querySelectorAll('.modal .close');


    // Function that shows modal connected to link
    var showModal = function(event){
        event.preventDefault();
        // Ensure that only one modal will have 'show' class 
        hideAll();
        // Find modal with an ID equal to href attribute of the clicked link, add 'show' class
        document.getElementById(this.hash.slice(1)).classList.add('show');
        // Add 'show' class to overlay
        document.querySelector('#modal-overlay').classList.add('show');
    };
    
    // Function that hides overlay after clicking the button or overlay
	var hideModal = function(event){
		event.preventDefault();
		document.querySelector('#modal-overlay').classList.remove('show');
	};

    // Delete 'show' class from all modals
    var hideAll = function(){
        for(var i = 0; i < modals.length; i++){
            modals[i].classList.remove('show');
        }
    }

    // Add event listeners
	for(var i = 0; i < modalLinks.length; i++){
		modalLinks[i].addEventListener('click', showModal);
	}
		
	for(var i = 0; i < closeButtons.length; i++){
		closeButtons[i].addEventListener('click', hideModal);
    }
    document.querySelector('#modal-overlay').addEventListener('click', hideModal);
	
	for(var i = 0; i < modals.length; i++){
		modals[i].addEventListener('click', function(event){
			event.stopPropagation();
		});
    }	
// })(); 