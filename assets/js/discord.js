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

	console.log(data);

	fetch('https://discord.com/api/webhooks/1000886312305447053/WMdhpIstOIvWRTZ8WsE1CXyuTP0d03snTD0j7dQc-ABe8eLzOSO0AbBh_ROtkaWNshMA', {
	  method: "POST",
	  body: JSON.stringify(data),
	  headers: {"Content-type": "application/json"}
	})
	.then(response => response.json()) 
	.then(json => console.log(json))
	.catch(err => console.log(err));

	const banner = document.getElementById("banners");
	banner.innerHTML = `<div class="sent-message">Su mensaje ha sido enviado</div>`

}