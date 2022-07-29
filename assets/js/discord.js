const sendMessage = () => {
	
	console.log("Our hompage works with discords hooks");

	const _phone = document.getElementById("phone");
	const _names = document.getElementById("name");
	const _body = document.getElementById("message");
	const _subject = document.getElementById("subject"); 

	const data = {
  		content: `**Nombre del solicitante: **${_names.value}\n**Telefono: **${_phone.value}\n**Motivo: **${_subject.value}\n**Mensaje: ** ${_body.value}\n`,
  		flags:4
	}

	if(validateForm(_phone, _names, _body, _subject)){
		fetch('https://discord.com/api/webhooks/1000886312305447053/WMdhpIstOIvWRTZ8WsE1CXyuTP0d03snTD0j7dQc-ABe8eLzOSO0AbBh_ROtkaWNshMA', {
		  method: "POST",
		  body: JSON.stringify(data),
		  headers: {"Content-type": "application/json"}
		})
		.then(response => {
			showNotice();
			cleanForm(_phone, _names, _body, _subject);
		}) 
		.then(json => console.log(json))
		.catch(err => console.log(err));
	}else{
		showWarningNotice();
	}
	
}

const validateForm = (phone, names, body, subject) => {
	if(phone.value.length > 0 && names.value.length > 0 && body.value.length > 0 && subject.value.length > 0) {
		return true
	}else{
		return false
	}
}

const showWarningNotice = () => {
	const banner = document.getElementById('banners');
	banner.innerHTML = '<div data-aos="fade-up" style="text-align:center;background: #f0ad4e; padding: 15px; font-weight: 600; border-radius: 5px">El formulario no puede ser enviado porque existen campos vacios</div><br>'
}

const showNotice = () => {
	const banner = document.getElementById('banners');
	banner.innerHTML = '<div data-aos="fade-up" style="text-align:center;background: #5bc0de; padding: 15px; font-weight: 600; border-radius: 5px"> Su mensaje ha sido enviado, en breve será atendido</div><br>'
}

const dismissBanner = (banner) => {
	banner.innerHTML = '<div data-aos="fade-down"></div>'
}

const cleanForm = (phone, names, body, subject) => {
	phone.value = '';
	names.value = '';
	body.value = '';
	subject.value = '';
}