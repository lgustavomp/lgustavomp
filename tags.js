// event listener no click -> identificar classe .hashtag clicada

// $(".hashtag").on("click", function () {
//     const hashtagParent = document.getElementsByClassName("hashtag");
//     const hashtagChild = hashtagParent;

//     console.log(hashtagChild)
// });

const hashtagParent = document.getElementsByClassName('hashtag');


for (i = 0; i<hashtagParent.length; i++ ){
    hashtagParent[i].addEventListener('click', function(){
        hashtagChild = this.textContent;
        // console.log(hashtagParent);

            Array.from(hashtagParent).forEach(element => {
                // console.log(element);
                element.classList.remove('vermelho');
            });

        console.log(hashtagChild);
        this.classList.add('vermelho');


        // this.childNodes.forEach (element => {
        //     if (element.nodeName === 'DIV') {
        //         element.classList.remove('vermelho')
        //         console.log(element.nodeName)
        //         } else {
        //             this.classList.toggle('vermelho')
        //         }
        // })

        // this.childNodes.forEach(element => {
 
        //     if (element.nodeName === 'DIV') {
        //         element.classList.remove('active')
        //         element.childNodes[1].childNodes[3].classList.remove('open')
        //     }

        // });
        // this.classList.toggle('active');
        // this.childNodes[1].childNodes[3].classList.toggle('open');
        

        
    })}


// buscar .etiqueta_tag com string compativel com .hashtag




// adicionar .vermelho à .hashtag e .etiqueta, removento das outras