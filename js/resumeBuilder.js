 /*
 HTMLheaderName = HTMLheaderName.replace("%data%", formattedName);
 HTMLheaderRole = HTMLheaderRole.replace("%data%", formattedRole);
*/

 var bio = {
     "name" : "Shay Delaney",
     "role" : "Software Developer",
     "contacts" : {
         "location" : "Dublin",
         "mobile" : "+353 86 409 4331",
         "email" : "shamdelaney@hotmail.com",
         "twitter" : "@shaydelaney",
         "github" : "shamdela"

     },
     "welcomeMessage" : "",
     "skills" : ["Java", "Python", "JavaScript", "JQuery", "AngularJS", "BackboneJS", "KnockoutJS",
             "Oracle", "MySQL", "JBoss", "Weblogic", "Tomcat", "EJB", "JMS", "Restful WS", "Hibernate", "Spring Core"
     ],
     "bioPic" : "images/fry.jpg",
     "smallbioPic" : "images/fry.jpg"
 };

var work = {
    "jobs" : [
        {
            "employer" : "OpenJaw Technologies",
            "title" : "Senior Software Developer",
            "location" : "Dublin",
            "dates" : "Jun 2015 - Present",
            "description" : "Working as a Senior Software Developer on a Solutions team for the Cathay Pacific Airline.",
            "url" : "http://www.openjawtech.com"
        },
        {
            "employer" : "First Derivatives",
            "title" : "Senior Software Developer",
            "location" : "Dublin",
            "dates" : "Apr 2010 - May 2015",
            "description" : "Worked as a Senior Java Developer on the company’s suite of financial products, covering a range of key areas from mission critical trading to reference data platforms. Client and Server side development on Delta Margin, an FX and CFD Trading Platform using EJB’s, Weblogic, Tomcat, Oracle, on a Swing Front End.",
            "url" : "http://www.firstderivatives.com"
        },
        {
            "employer" : "Aer Lingus",
            "title" : "Contract Software Developer",
            "location" : "Dublin",
            "dates" : "Oct 2008 - Apr 2010",
            "description" : "Developed and maintained Email Application/Framework which allowed Aer Lingus to send customers, varieties of Booking Confirmation, Travel Advisory and Reminder HTML Emails.",
            "url" : "http://www.aerlingus.com"
        },
        {
            "employer" : "University Of New South Wales",
            "title" : "Contract Software Developer",
            "location" : "Sydney",
            "dates" : "Nov 2007 - Feb 2008",
            "description" : "Worked as a Developer on a short-term contract for the Centre for Health Informatics, a research wing of the UNSW. I worked closely with several research staff, implementing research algorithms for a variety of research projects, and making these available as Web Applications, using Java, JSP’s and Servlets.",
            "url" : "https://med.unsw.edu.au/tags/centre-health-informatics"
        },
        {
            "employer" : "Cognotec",
            "title" : "Contract Software Developer",
            "location" : "Dublin",
            "dates" : "Sep 2006 - Aug 2007",
            "description" : "Worked as a Developer for a Company who specialised in developing and maintaining Foreign Exchange Software for major Banks and Financial Organisations. Responsible for Client and Server Side development of the Trading Platform and Coding the front end application’s in Java & Java Swing.",
            "url" : "http://www.firstderivatives.com"
        },
        {
            "employer" : "Siebel / Oracle",
            "title" : "Software Developer",
            "location" : "Dublin",
            "dates" : "Sep 2004 - Sep 2006",
            "description" : "Designed and developed Banking & eCommerce Software for company’s product range. Responsible for Client and Server Side development of a Branch Teller Application, which was a Swing based Fat Client, on J2EE Architecture, developed using Weblogic",
            "url" : "https://www.oracle.com/ie/index.html"
        },
        {
            "employer" : "IBM",
            "title" : "Junior Software Developer",
            "location" : "Dublin",
            "dates" : "Nov 2002 - Sep 2004",
            "description" : "Dealing with IBM client problems, debugging C++ source code and developing patches and fixes for specific issues with the Lotus Notes/Domino product using WSAD & Eclipse.",
            "url" : "http://www.ibm.com/ie/en/"
        }
    ]
};


var education = {
        "schools" : [
            {
                "name" : "IT Carlow",
                "location" : "Carlow, Co. Carlow",
                "qualification" : "BSc in Software Engineering",
                "year" : "1998-2002",
                "url" : "http://www.itcarlow.ie/courses/type/undergraduate-cao-courses/computing-networking-courses/cw238.htm"
            },
            {
                "name" : "St Fergals College",
                "location" : "Rathdowney, Co. Laois",
                "qualification" : "Leaving Certificate",
                "year" : "1993-1998",
                "url" : "http://www.stfergalscollege.com"
            }
        ],
        "certifications" : [
            {
                "title" : "Sun Certified Java Programmer",
                "body" : "Sun Microsystems",
                "year" : "2004",
                "url" : "http://education.oracle.com/pls/web_prod-plq-dad/db_pages.getpage?page_id=5001&get_params=p_exam_id:1Z0-804&p_org_id=&lang="
            },
            {
                "title" : "Sun Certified Java Web Component Developer",
                "body" : "Sun Microsystems",
                "year" : "2004",
                "url" : "https://education.oracle.com/pls/web_prod-plq-dad/db_pages.getpage?page_id=652&get_params=p_exam_id:1Z0-899"
            },
            {
                "title" : "Sun Certified Java Business Component Developer",
                "body" : "Sun Microsystems",
                "year" : "2004",
                "url" : "http://education.oracle.com/pls/web_prod-plq-dad/db_pages.getpage?page_id=5001&get_params=p_exam_id:1Z0-860"
            },
            {
                "title" : "Sun Certified Java Developer",
                "body" : "Sun Microsystems",
                "year" : "2006",
                "url" : "https://education.oracle.com/pls/web_prod-plq-dad/db_pages.getpage?page_id=653&get_params=p_id:153"
            }
        ],
        "onlineCourses" : [
            {
                "title" : "An Introduction to Interactive Programming in Python",
                "school" : "Coursera",
                "year" : "Mar 2013 - May 2013",
                "url" : "https://www.coursera.org/course/interactivepython1"
            },
            {
                "title" : "Programming Mobile Applications for Android Handheld Systems",
                "school" : "Coursera",
                "year" : "Jan 2013 - Mar 2013",
                "url" : "https://www.coursera.org/course/androidpart1"
            },
            {
                "title" : "Front End Web Developer Nanodegree",
                "school" : "Udacity",
                "year" : "Sep 2015 - Nov 2015",
                "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
            }
        ]
};


var projects = {
    "projects" : [
        {
            "title" : "KidStart Website",
            "dates" : "2014",
            "description" : "A responsive website written in html5, css and javascript for a friendly playschool in Dublin.",
            "url" : "http://www.kidstart.ie",
            "images" : ["images/kidstart-home-330_web.jpg", "images/kidstart-home-250_tab.jpg"
                 /*["images/kidstart-home-375_web.jpg", "images/kidstart-home-300_tab.jpg", "images/kidstart-home-150_mob.jpg"],
                 ["images/kidstart-about-375_web.jpg", "images/kidstart-about-300_tab.jpg", "images/kidstart-about-150_mob.jpg"]*/
            ]
        },
        {
            "title" : "PhoenixParkRunners Website",
            "dates" : "2009",
            "description" : "A website for a running club in Dublin, with integrated wordpress to allow client to update.",
            "url" : "http://www.phoenixparkrunners.ie",
            "images" : ["images/csh-home-330_web.jpg", "images/csh-home-250_tab.jpg"
                /*["images/csh-home-375_web.jpg", "images/csh-home-300_tab.jpg", "images/csh-home-150_mob.jpg"],
                ["images/csh-news-375_web.jpg", "images/csh-news-300_tab.jpg", "images/csh-news-150_mob.jpg"]*/
            ]
        }
    ]
};


function displayBio(){

    var displayName = HTMLheaderName.replace("%data%", bio.name);
    var displaySmallBioPic = HTMLsmallBioPicName.replace("%data%", bio.smallbioPic);
    var displayRole = HTMLheaderRole.replace("%data%", bio.role);
    var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var email = HTMLemail.replace("%data%", bio.contacts.email);
    var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var github = HTMLgithub.replace("%data%", bio.contacts.github);
    var location = HTMLlocation.replace("%data%", bio.contacts.location);
    var bioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    //var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(displayName + displaySmallBioPic + displayRole);
    $("#topContacts").append(mobile + email + twitter + github + location);

    $("#header").append(bioPic);
    //$("#header").append(welcomeMessage);
    $("#header").append(HTMLskillsStart);

    for (skill in bio.skills){
        var skills = HTMLskills.replace("%data%", bio.skills[skill]);
        /*var j2eeSkills = HTMLskills.replace("%data%", bio.skills[skill].j2ee);
        var dbSkills = HTMLskills.replace("%data%", bio.skills[skill].databases);
        var webSkills = HTMLskills.replace("%data%", bio.skills[skill].web);
        var appServerSkills = HTMLskills.replace("%data%", bio.skills[skill].appservers);
        var buildToolSkills = HTMLskills.replace("%data%", bio.skills[skill].build);
        var sourceControlSkills = HTMLskills.replace("%data%", bio.skills[skill].sourcecontrol);*/
        $("#skills").append(skills);
        /*$("#skills").append(j2eeSkills);
        $("#skills").append(dbSkills);
        $("#skills").append(webSkills);
        $("#skills").append(appServerSkills);
        $("#skills").append(buildToolSkills);
        $("#skills").append(sourceControlSkills);*/


    }

    // Footer contacts
    $("#footerContacts").append(mobile + email + github + twitter)
}


function displayWork(){
    for (job in work.jobs){
        // create new div for work experience
        $("#workExperience").append(HTMLworkStart);

        // concat employer and title
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        formattedEmployer = formattedEmployer.replace("%url%", work.jobs[job].url);

        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

        $(".work-entry:last").append(formattedEmployer + formattedTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);


    }
}

function displayProjects(){
    for (project in projects.projects){
        $(".projects-flex-container").append(HTMLprojectStart);
        var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        projectTitle = projectTitle.replace("%url%", projects.projects[project].url);
        var projectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

        $(".project-entry:last").append(projectTitle);
        $(".project-entry:last").append(projectDates);
        $(".project-entry:last").append(projectDescription);

        for (var i=0; i < projects.projects[project].images.length; i++){
            var projectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[0]);
            projectImage = projectImage.replace("%data1%", projects.projects[project].images[1]);
            projectImage = projectImage.replace("%data%", projects.projects[project].images[0]);
            projectImage = projectImage.replace("%data%", projects.projects[project].images[0]);
            /*projectImage = projectImage.replace("%data4%", projects.projects[project].images[i][2]);*/

        }
        $(".project-entry:last").append(projectImage);

    }
}

function displayEducation(){

    // Add schools / colleges
    for (school in education.schools){
        $("#education").append(HTMLschoolStart);
        var schoolName = HTMLschoolName.replace("%schoolName%", education.schools[school].name);
        schoolName = schoolName.replace("%qualification%", education.schools[school].qualification);
        schoolName = schoolName.replace("%url%", education.schools[school].url);
        var schoolDates = HTMLschoolDates.replace("%data%", education.schools[school].year);
        var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

        $(".education-entry:last").append(schoolName);
        $(".education-entry:last").append(schoolDates);
        $(".education-entry:last").append(schoolLocation);
    }

    // Add Online Courses
     $("#education").append(HTMLonlineClasses);
    for (course in education.onlineCourses){
        $("#education").append(HTMLschoolStart);
        var courseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        courseTitle = courseTitle.replace("%url%", education.onlineCourses[course].url);
        var courseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var courseYear = HTMLonlineDates.replace("%data%", education.onlineCourses[course].year);

        $(".education-entry:last").append(courseTitle + courseSchool);
        $(".education-entry:last").append(courseYear);
    }

    // Add Certifications
     $("#education").append(HTMLcertifications);
    for (certificate in education.certifications){
        $("#education").append(HTMLschoolStart);
        var certTitle = HTMLcertTitle.replace("%data%", education.certifications[certificate].title);
        certTitle = certTitle.replace("%url%", education.certifications[certificate].url);
        var certBody = HTMLcertBody.replace("%data%", education.certifications[certificate].body);
        var certYear = HTMLcertDates.replace("%data%", education.certifications[certificate].year);

        $(".education-entry:last").append(certTitle + certBody);
        $(".education-entry:last").append(certYear);
    }
}

function displayMap(){
    $("#mapDiv").append(googleMap);
}

// jQuery Callbck function that will not be called until the document is ready,
// the DOM has been built and the elements that you want to manipulate are on the page.
$(function() {
    displayBio();
    displayWork();
    displayProjects();
    displayEducation();
    displayMap();


    /* The next few lines are checking to see if you have not changed each section of the resume.
    If you have not made any changes to a section of the resume, then that part of the resume does not show up.
    More on this in the course.  */

    if (document.getElementsByClassName('flex-item').length === 0) {
        document.getElementById('topContacts').style.display = 'none';
    }
    if (document.getElementsByTagName('h1').length === 0) {
        document.getElementById('header').style.display = 'none';
    }
    if (document.getElementsByClassName('work-entry').length === 0) {
        document.getElementById('workExperience').style.display = 'none';
    }
    if (document.getElementsByClassName('project-entry').length === 0) {
        document.getElementById('projects').style.display = 'none';
    }
    if (document.getElementsByClassName('education-entry').length === 0) {
        document.getElementById('education').style.display = 'none';
    }
    if (document.getElementsByClassName('flex-item').length === 0) {
        document.getElementById('lets-connect').style.display = 'none';
    }
    if (document.getElementById('map') === null) {
        document.getElementById('mapDiv').style.display = 'none';
    }
})
