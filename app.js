(function () {
    'use strict';

    var skillsButton = document.getElementById("skills-button");
    var skills = document.getElementById("skills");
    var aboutBg = document.querySelector(".about-bg");
    var aboutIntro = document.getElementById("about-intro");
    var skillsAbout = document.getElementById("about-skills");
    var skillsDesc = document.getElementById("skills-description");
    var selfDesc = document.getElementById("self-description");

    var animate = {
        add: function () {
            skillsDesc.classList.remove("cut-delay");
            selfDesc.classList.remove("cut-delay");
            aboutIntro.classList.remove("mdl-cell--3-offset-desktop");
            aboutIntro.classList.remove("mdl-cell--8-col-tablet");
            aboutIntro.classList.add("mdl-cell--4-col-tablet");
            aboutIntro.classList.add("mdl-cell--0-offset-desktop");
            skillsAbout.classList.remove("mdl-cell--3-offset-desktop");
            skillsAbout.classList.add("mdl-cell--6-offset-desktop");
            aboutBg.classList.add("dark");
        },
        remove: function () {
            aboutIntro.classList.remove("mdl-cell--0-offset-desktop");
            aboutIntro.classList.add("mdl-cell--3-offset-desktop");
            skillsAbout.classList.remove("mdl-cell--6-offset-desktop");
            skillsAbout.classList.add("mdl-cell--3-offset-desktop");
            aboutIntro.classList.add("mdl-cell--8-col-tablet");
            aboutIntro.classList.remove("mdl-cell--4-col-tablet");
            aboutBg.classList.remove("dark");
            skillsDesc.classList.add("cut-delay");
            selfDesc.classList.add("cut-delay");
        }
    };

    skillsButton.addEventListener("click", function () {
        this.classList.contains("active") ? this.classList.remove("active") : this.classList.add("active");

        if (aboutIntro.classList.contains("mdl-cell--3-offset-desktop"))
            animate.add();
        else
            animate.remove();
    });


}());

