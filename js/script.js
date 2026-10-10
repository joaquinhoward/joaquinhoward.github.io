function showDark(){
    document.querySelector('svg:nth-child(1)').style.display = 'block';
    document.querySelector('svg:nth-child(2)').style.display = 'none';
}
function showLight(){
    document.querySelector('svg:nth-child(1)').style.display = 'none';
    document.querySelector('svg:nth-child(2)').style.display = 'block';
}


if(localStorage.getItem('theme') === 'dark'){
    showDark();
}else{
    showLight();
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

document.querySelector('#theme-toggle').addEventListener('click', toggleTheme);