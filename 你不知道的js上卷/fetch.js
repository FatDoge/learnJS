fetch(`https://cdn.xgqfrms.xyz/json/badges.json`)
    .then((response) => response.json())
    .then((data) => {
        console.log(`data = \n`, data)
    });