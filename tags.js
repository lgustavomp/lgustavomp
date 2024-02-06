const hashtagParent = document.getElementsByClassName('hashtag');
const etiquetaParent = document.getElementsByClassName('etiqueta');
const etiquetaTag = document.getElementsByClassName('etiqueta_tag');
let tagResult = false;

for ( i = 0 ; i<hashtagParent.length; i ++) {
    hashtagParent[i].addEventListener('click', function(){
        hashtagChild = this.textContent;
        // console.log(hashtagChild)
        // console.log(etiquetaParent)
        // console.log(etiquetaTag)

    })
}
// ---------- > this no forEach

// for (i = 0; i<hashtagParent.length; i++ ){
//     hashtagParent[i].addEventListener('click', function(){
//         hashtagChild = this.textContent;
        
//         Array.from(etiquetaTag).forEach(element => {
//             let arrayTags = element.textContent;
//             console.log(arrayTags);
//         })

//             Array.from(hashtagParent).forEach(element => {
//                 element.classList.remove('vermelho');
//             });
//             Array.from(etiquetaParent).forEach(element => {
//                 element.classList.remove('vermelha')
//             });

//         function tagChecker(hashtagChild,arrayTags) {
//             for (const key in hashtagChild) {
//                 if(hashtagChild[key] === arrayTags[key]) tagResult=true
//             }
//             tagResult=false
//         }
//         console.log(tagResult);
//         console.log(hashtagChild);
//         console.log(tagChecker(hashtagChild,arrayTags));
//         this.classList.add('vermelho');
//     })}


// buscar .etiqueta_tag com string compativel com .hashtag
// children-> div.etiqueta_descricao-> children -> spam.etiqueta_tag



// adicionar .vermelho à .hashtag e .etiqueta, removento das outras