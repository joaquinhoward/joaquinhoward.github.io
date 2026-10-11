function showDark(){
    document.querySelector('svg:nth-child(1)').style.display = 'block';
    document.querySelector('svg:nth-child(2)').style.display = 'none';
}
function showLight(){
    document.querySelector('svg:nth-child(1)').style.display = 'none';
    document.querySelector('svg:nth-child(2)').style.display = 'block';
}

function toggleTheme(){
    document.body.classList.toggle('dark-mode');

    if(document.body.classList.contains('dark-mode')){
        localStorage.setItem('theme', 'dark');
        showDark();
    }else{
        localStorage.setItem('theme', 'light');
        showLight();
    }
}

function toggleProjects(){
    let card = document.querySelector('.card');
    let card2 = document.querySelector('.card2');

    card.style.display = (card.style.display == 'none' ? 'flex' : 'none');
    card2.style.display = (card.style.display == 'none' ? 'flex' : 'none');




}


if(localStorage.getItem('theme') === 'dark'){
    showDark();
}else{
    showLight();
}




document.querySelector('#theme-toggle').addEventListener('click', toggleTheme);
document.querySelector('.btn-full').addEventListener('click', toggleProjects);
document.querySelector('.return-btn').addEventListener('click', toggleProjects);