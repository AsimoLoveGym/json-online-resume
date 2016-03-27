'use strict';

var work = {
    "jobs": [{
        "employer": "Univ of Illinois",
        "title": "Researcher and Lab Manager",
        "location": "Urbana, IL, USA",
        "dates": "2014 -- Present",
        "description": "Conducting research in energy and resources recovery from waste stream"
    }, {
        "employer": "Harbin Institute of Technology",
        "title": "Research Assistant",
        "location": "Harbin, Heilongjiang, China",
        "dates": "2012 -- 2013",
        "description": "Assisting Dr Liu and Dr Dan for research"
    }]
};

work.display = function() {
    work.jobs.forEach(function(job) {

        //create new div for work experience
        $("#workExperience").append(HTMLworkStart);
        //concat employer and title
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedEmployerTitle,formattedDates,formattedLocation,formattedDescription);
    });
};

work.display();

//$(document).click(function(loc){
//    var x = loc.pageX;
//    var y = loc.pageY;

//    logClicks(x,y);
//});

var projects = {
    "projects": [{
        "title": "My portofolio",
        "dates": "Mar 2016",
        "description": "About my works",
        "images": ["images/myportofolio.jpg", "images/myportofolio2.jpg"]
    }, {
        "title": "Javascript",
        "dates": "Mar 2016",
        "description": "About JS",
        "images": ["images/myJS.jpg", "images/myJS2.jpg"]
    }]
};

projects.display = function() {
    projects.projects.forEach(function(project) {
        //create new div for project experience
        $("#projects").append(HTMLprojectStart);
        //project detail
        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);

        project.images.forEach(function(image) {
            var formattedImage = HTMLprojectImage.replace("%data%", image);
            $(".project-entry:last").append(formattedImage);
        });
    });
};

projects.display();

var bio = {
    "name": "Zhuangzhuang Xia",
    "role": "Web Developer",
    "contacts": {
        "mobile": "217-778-9958",
        "email": "xiazhuangz@gmail.com",
        "github": "AsimoLoveGym",
        "twitter": "N/A",
        "location": "Champaign, IL, US"
    },
    "welcomeMessage": "Welcome to my Resume website!",
    "skills": [
        "C/C++", "Python", "CSS", "HTML", "Javascriot", "JQuery"
    ],
    "biopic": "images/me.jpg"
};

bio.display = function() {
    //create new div for bio information
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedRole,formattedName);

    var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedmobile,formattedemail,formattedtwitter,formattedgithub,formattedlocation);
    $("#footerContacts").append(formattedmobile,formattedemail,formattedtwitter,formattedgithub,formattedlocation);

    var formattedbiopic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedbiopic,formattedwelcomeMsg);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        bio.skills.forEach(function(skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkill);
        });
    }
};

bio.display();

var education = {
    "schools": [{
        "name": "Harbin Institute of Technology",
        "location": "Harbin, Heilongjiang, China",
        "degree": "BA",
        "majors": ["Environmental Engineering"],
        "dates": "2009 -- 2013",
        "url": "http://en.hit.edu.cn"
    }, {
        "name": "University of Illinois",
        "location": "Urbana, IL, US",
        "degree": "MS",
        "majors": ["Environmental Engineering"],
        "dates": "2013 -- 2014",
        "url": "http://cee.illinois.edu"
    }],
    "onlineCourses": [{
        "title": "JavaScript Basics",
        "school": "Udacity",
        "date": "2016 -- 2017",
        "url": "https://www.udacity.com/"
    },{
        "title": "How to HTML and CSS",
        "school": "Udacity",
        "date": "2016 -- 2017",
        "url": "https://www.udacity.com/"
    }]
};

education.display = function() {
    education.schools.forEach(function(school) {
        //create new div for education experience
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", school.name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
        $(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
    });
    if (education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(course) {
            $("#education").append(HTMLschoolStart);
            var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
            var formattedDates = HTMLonlineDates.replace("%data%", course.date);
            var formattedURL = HTMLonlineURL.replace("%data%", course.url);
            $(".education-entry:last").append(formattedTitle + formattedSchool,formattedDates,formattedURL);
        });
    }
};

education.display();


$("#mapDiv").append(googleMap);