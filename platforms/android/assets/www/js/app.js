document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	document.addEventListener("offline", onOffline, false);
	if (navigator.network.connection.type == Connection.NONE) {
		navigator.notification.confirm("¿Deseas seguir usando la aplicación?, muchas funcionalidades no funcionarán", function(button) {
			if (button == 2) {
				navigator.app.exitApp();
			}
		}, "Estás sin conexión", "No,Sí");
	}
}

function onOffline() {
	navigator.notification.confirm("¿Deseas seguir usando la aplicación?, muchas funcionalidades no funcionarán", function(button) {
			if (button == 2) {
				navigator.app.exitApp();
			}
		}, "Estás sin conexión", "No,Sí");
}