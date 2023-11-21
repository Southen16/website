 document.addEventListener('DOMContentLoaded', function () {
            const navToggle = document.getElementById('navToggle');
            const navList = document.querySelector('.nav-list');

            navToggle.addEventListener('click', function () {
                navList.classList.toggle('show');
            });
        });