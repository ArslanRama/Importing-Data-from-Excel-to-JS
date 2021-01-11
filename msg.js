
const scriptURL = 'https://script.google.com/macros/s/AKfycbzTQYJcXaCPAhu01rmGA4tOBLnK_xAxdmt-cTuQp5d2W2TtGntT/exec';

let formc = document.forms['html-form-to-google-sheet'];


formc.addEventListener('submit', e=>{
   // to disable submit button behavior
   e.preventDefault();

   document.getElementById('btn').classList.add('loading');

   fetch(scriptURL,{
    method: 'POST',
    body: new FormData(formc)
})
    .then(res=>{
        console.log(res);

    })
});
