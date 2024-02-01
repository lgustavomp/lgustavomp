const accordion = document.getElementsByClassName('content_box');
for (i = 0; i<accordion.length; i++ ){
    accordion[i].addEventListener('click', function(){
        // accordion.classList.remove('active');
        // console.log(this.parentNode.childNodes);
        this.parentNode.childNodes.forEach(element => {
            // element.classList.remove('active');
 
            if (element.nodeName === 'DIV') {
                // console.log(element); 
                element.classList.remove('active')
                // this.parentNode.childNodes.classList.remove('open');
                element.childNodes[1].childNodes[3].classList.remove('open')
            }

        });
        this.classList.toggle('active');
        this.childNodes[1].childNodes[3].classList.toggle('open');
        

    })}