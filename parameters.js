function getParameters(){

	var parametri = [];
	var para = document.cookie;
	var indiceCorpo = para.indexOf("materialeCorpo=");
	var indiceCassetti = para.indexOf("materialeCassetti=");
	var matCorpo = para.substring("materialeCorpo=".length,indiceCassetti);
	var matCassetti = para.substring((indiceCassetti + "materialeCassetti=".length), para.length);
	parametri.push(matCorpo);
	parametri.push(matCassetti);
	return parametri;
}

function setParameters() {

	var paramData = [];
	var parameters = {};
	var param;
	var cookieValue = getParameters();
	var stringCookie ="";

	if (window.location.search.length > 0) {

			paramData = window.location.search.split("?")[1].split("&");

			if(paramData[0] == 'Corpo'){
				// materialeCorpo = paramData[1];
					if(cookieValue!=null){
						stringCookie = "materialeCorpo=" + paramData[1] + "materialeCassetti=" + cookieValue[1];
					}
				} else if (paramData[0] == 'Cassetti'){
					if(cookieValue!=null){
						stringCookie = "materialeCorpo=" + cookieValue[0] + "materialeCassetti=" + paramData[1];
					}
				}
				document.cookie = stringCookie;
				cookieValue = getParameters();
			}
}
