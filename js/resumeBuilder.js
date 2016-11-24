/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    name : "Craig Andrew",
    role : "Web Developer",
    contacts : {
        mobile: "079-991-2345",
        email: "string",
        github: "string",
        twitter: "string (optional)",
        location: "string",
    },
    welcomeMessage: "string",
    skills: "awesomeness, delivering things, cryogenic sleep, saving the universe",
    biopic:  "./images/fry.jpg",
    display: function() {
      // TODO
    }
}

var education = {
    schools: "array of objects with",
    name: "string",
    location: "string",
    degree: "string",
    majors: "array of strings",
    dates: "string (works with a hyphen between them)",
    url: "string",
    onlineCourses: "array of objects with",
    title: "string",
    school: "string",
    dates: "string (works with a hyphen between them)",
    url: "string",
    display: function() {
      // TODO
    }
};

var work = {
    jobs: "array of objects with",
    employer: "string",
    title: "string",
    location: "string",
    dates: "string (Can be 'in progress')",
    description: "string",
    display: function() {

    }
};

var projects = {
    projects: "array of objects with",
    title: "string",
    dates: "string (works with a hyphen between them)",
    description: "string",
    images: "array with string urls",
    display: function() {

    }
};

var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedHeaderRole);

var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedHeaderName);


// var formattedContactGeneric = HTMLcontactGeneric.replace("%data%", bio.contacts[0]);
// $("#header").append(formattedContactGeneric);
//
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);

// var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
// var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
// var HTMLlocation

// var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
// var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';

var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedBioPic);

var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
$(".work-entry:last").append(formattedLocation);

var formattedContactGeneric = HTMLcontactGeneric.replace("%data%", bio.contacts);
$("#workExperience").append(formattedContactGeneric);


//var HTMLmobile, var HTMLemail, var HTMLtwitter, var HTMLgithub, var HTMLblog, var HTMLlocation