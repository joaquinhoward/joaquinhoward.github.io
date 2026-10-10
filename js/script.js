if(localStorage.getItem('theme') === 'dark'){
    document.querySelector('svg:nth-child(1)').style.display = 'block';
    document.querySelector('svg:nth-child(2)').style.display = 'none';
}else{
    document.querySelector('svg:nth-child(1)').style.display = 'none';
    document.querySelector('svg:nth-child(2)').style.display = 'block';
}

function toggleTheme(){
    document.body.classList.toggle('dark-mode');

    if(document.body.classList.contains('dark-mode')){
        localStorage.setItem('theme', 'dark');
        document.querySelector('svg:nth-child(1)').style.display = 'block';
        document.querySelector('svg:nth-child(2)').style.display = 'none';
    }else{
        localStorage.setItem('theme', 'light');
        document.querySelector('svg:nth-child(1)').style.display = 'none';
        document.querySelector('svg:nth-child(2)').style.display = 'block';
    }
}

document.querySelector('#theme-toggle').addEventListener('click', toggleTheme);