const readMoreBtns = document.querySelectorAll('.btn');

readMoreBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        // Find the parent element of the button
        const parent = this.parentElement;

        // Find the text element within the same parent element
        const text = parent.querySelector('.text');

        // Toggle the visibility of the text element
        text.classList.toggle('show-more');

        // Change the button text based on current visibility state
        if (btn.innerText === 'Read') {
            btn.innerText = 'Read Less';
        } else {
            btn.innerText = 'Read';
        }
    });
});



const projects = document.querySelectorAll('.project');
        let currentIndex = 0;

        function showProject(index) {
            for (let i = 0; i < projects.length; i++) {
                if (i === index) {
                    projects[i].classList.add('active');
                } else {
                    projects[i].classList.remove('active');
                }
            }
        }

        function nextProject() {
            currentIndex = (currentIndex + 1) % projects.length;
            showProject(currentIndex);
        }

        function prevProject() {
            currentIndex = (currentIndex - 1 + projects.length) % projects.length;
            showProject(currentIndex);
        }

        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        prevBtn.addEventListener('click', prevProject);
        nextBtn.addEventListener('click', nextProject);

        // Show the first project initially
        showProject(currentIndex);