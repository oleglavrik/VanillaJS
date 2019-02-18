window.onload = function () {
    document.querySelector('.tabs-header').addEventListener('click', fTabs);
    
    function fTabs(event) {

        if(event.target.className == 'tab-h') {
            var dataTab = event.target.getAttribute('data-tab'),
                tabB = document.getElementsByClassName('t-body'),
                tabH = document.getElementsByClassName('tab-h');
            
            // remove all active tabs
            for(var i = 0; i < tabH.length; i++) {
                tabH[i].classList.remove('active');
            }

            // add active class
            event.target.classList.add('active');
            for (var i = 0; i < tabB.length; i++) {
                if(i == dataTab) {
                    tabB[i].style.display = 'block';
                } else {
                    tabB[i].style.display = 'none';
                }
            }
        }

    }
};