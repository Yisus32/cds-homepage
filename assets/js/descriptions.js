const getDescriptions = () => {

	fetch('assets/descriptions.json', {
		  method: "GET",
		  headers: {"Content-type": "application/json"}
		})
		.then(response => {
                response.json().then((data) => {
                	const queryString = window.location.search;

                	const urlParams = new URLSearchParams(queryString);

                	const subject = urlParams.get('subject');

                	const subjectBreadcrumb = document.getElementById('subject-breadcrumb');
                	const subjectDescription = document.getElementById('subject-description');
                	const subjectName = document.getElementById('subject-name');
                	const subjectTeacher = document.getElementById('subject-teacher');
                	const subjectHours = document.getElementById('subject-hours');
                	const subjectPreRequirements = document.getElementById('subject-requirements');
                	const subjectImage = document.getElementsByName('subject-img');


                	if (subject === 'robotics') {
                		data = data.robotics;
                	} else if (subject === 'nanotechnology') {
                		data = data.nanotechnology;
                	} else if (subject === 'astronomy') {
                		data = data.astronomy;
                	} else if (subject === 'soccer') {
                		data = data.soccer;
                	} else if (subject === 'ballet') {
                		data = data.ballet;
                	} else if (subject === 'bakery') {
                		data = data.bakery;
                	} else if (subject === 'swiming') {
                		data = data.swiming;
                	} else if (subject === 'music') {
                		data = data.music;
                	} else if (subject === 'running') {
                		data = data.running;
                	}


                	subjectName.innerHTML = '<strong>Nombre</strong>: '+data.name;
            		subjectTeacher.innerHTML = '<strong>Docente</strong>: '+data.teacher;
            		subjectHours.innerHTML = '<strong>Horas académicas</strong>: '+data.hours;
            		subjectPreRequirements.innerHTML = '<strong>Pre-requisitos</strong>: '+data.pre_requirements
            		subjectBreadcrumb.innerHTML = data.name;
            		subjectDescription.innerHTML = data.description;
            		subjectImage.forEach((element, i = 0) => element.src = data.images[i] )
            		console.log(subjectImage)
            })
         })
		.then(json => console.log(json))
		.catch(err => console.log(err));

}