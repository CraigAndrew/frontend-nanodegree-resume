var data = "%data%";

var bio = {
    name: "Craig Andrew",
    role: "Web Developer",
    contacts: {
        mobile: "079-991-2345",
        email: "craig.andrew@gmail.com",
        github: "craig.andrew",
        twitter: "@craig.andrew",
        location: "Durban, South Africa"
    },
    welcomeMessage: "Hello World",
    skills: ["awesomeness", "delivering", "things", "cryogenic sleep", "saving the universe"],
    biopic: "./images/biopic.jpg",
    display: function() {
        var header = $("#header");
        var topContacts = $("#topContacts");
        var footerContacts = $("#footerContacts");
        var formattedHeaderRole = HTMLheaderRole.replace(data, bio.role);
        var formattedHeaderName = HTMLheaderName.replace(data, bio.name);
        var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
        var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
        var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
        var formattedBioPic = HTMLbioPic.replace(data, bio.biopic);
        var formattedWelcomeMessage = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);

        header.prepend(formattedHeaderRole);
        header.prepend(formattedHeaderName);
        $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
        header.append(formattedBioPic);
        header.append(formattedWelcomeMessage);
        header.append(HTMLskillsStart);

        bio.skills.forEach(function(skill) {
            var formattedSkill = HTMLskills.replace(data, skill);
            $("#skills").append(formattedSkill);
        });
    }
};

var work = {
    jobs: [{
        employer: "IT World",
        title: "Developer",
        location: "Durban, South Africa",
        dates: "January 2016 - Future",
        description: "Transform the way you work."
    }, {
        employer: "IT Tech",
        title: "Technician",
        location: "Durban, South Africa",
        dates: "January 2014 - December 2015",
        description: "Fix stuff"
    }],
    display: function() {
        work.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);

            var workEntry = $(".work-entry:last");
            var formattedWorkEmployer = HTMLworkEmployer.replace(data, job.employer);
            var formattedWorkTitle = HTMLworkTitle.replace(data, job.title);
            var formattedWorkDates = HTMLworkDates.replace(data, job.dates);
            var formattedWorkLocation = HTMLworkLocation.replace(data, job.location);
            var formattedWorkDescription = HTMLworkDescription.replace(data, job.description);

            workEntry.append(formattedWorkEmployer + formattedWorkTitle);
            workEntry.append(formattedWorkDates);
            workEntry.append(formattedWorkLocation);
            workEntry.append(formattedWorkDescription);
        });
    }
};

var education = {
    schools: [{
        name: "UKZN",
        location: "Durban, South Africa",
        degree: "Bachelor of Science",
        majors: ["Computer Science", "Information Technology"],
        dates: "2012",
        url: "https://www.ukzn.ac.za"
    }, {
        name: "UNISA",
        location: "Durban, South Africa",
        degree: "Honors in Computing",
        majors: ["Software Engineering", "Artificial Intelligence"],
        dates: "2014",
        url: "https://www.unisa.ac.za"
    }],
    onlineCourses: [{
        title: "HTML Developer",
        school: "w3schools",
        dates: "2010",
        url: "http://www.w3schools.com"
    }, {
        title: "JS Developer",
        school: "BrainBench",
        dates: "2011",
        url: "http://www.brainbench.com"
    }],
    display: function() {
        education.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);

            var educationEntry = $(".education-entry:last");
            var formattedEducationName = HTMLschoolName.replace(data, school.name);
            var formattedEducationDegree = HTMLschoolDegree.replace(data, school.degree);
            var formattedEducationDates = HTMLschoolDates.replace(data, school.dates);
            var formattedEducationLocation = HTMLschoolLocation.replace(data, school.location);
            var formattedEducationMajor = HTMLschoolMajor.replace(data, school.majors).replace(",", ", ");

            educationEntry.append(formattedEducationName + formattedEducationDegree);
            educationEntry.append(formattedEducationDates);
            educationEntry.append(formattedEducationLocation);
            educationEntry.append(formattedEducationMajor);
        });

        $("#education").append(HTMLonlineClasses);

        education.onlineCourses.forEach(function(onlineCourse) {
            $("#education").append(HTMLschoolStart);

            var educationEntry = $(".education-entry:last");
            var formattedOnlineTitle = HTMLonlineTitle.replace(data, onlineCourse.title);
            var formattedOnlineSchool = HTMLonlineSchool.replace(data, onlineCourse.school);
            var formattedOnlineDates = HTMLonlineDates.replace(data, onlineCourse.dates);
            var formattedOnlineURL = HTMLonlineURL.replace(data, onlineCourse.url);

            educationEntry.append(formattedOnlineTitle + formattedOnlineSchool);
            educationEntry.append(formattedOnlineDates);
            educationEntry.append(formattedOnlineURL);
        });
    }
};

var projects = {
    projects: [{
        title: "Take over the world",
        dates: "2014",
        description: "Trying to take over the world",
        images: ["./images/proj.gif", "./images/proj.gif"]
    }, {
        title: "Take over the world2",
        dates: "2015",
        description: "Trying to take over the world part II",
        images: ["./images/proj.gif", "./images/proj.gif"]
    }],
    display: function() {
        projects.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);

            var projectEntry = $(".project-entry:last");
            var formattedProjectTitle = HTMLprojectTitle.replace(data, project.title);
            var formattedProjectDates = HTMLprojectDates.replace(data, project.dates);
            var formattedProjectDescription = HTMLprojectDescription.replace(data, project.description);

            projectEntry.append(formattedProjectTitle);
            projectEntry.append(formattedProjectDates);
            projectEntry.append(formattedProjectDescription);

            project.images.forEach(function(image) {
                var formattedProjectImage = HTMLprojectImage.replace(data, image);
                $(".project-entry:last").append(formattedProjectImage);
            });
        });
    }
};

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
