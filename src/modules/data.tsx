export function getUsers(callback: Function){
    fetch("https://albums-7757.restdb.io/rest/profiles", {
      method: "get",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "cache-control": "no-cache",
        'x-apikey': '60702727f592f7113340ee02'
      },
    })
      .then((e) => e.json())
      .then(data=>callback(data));
}

export function getImages(callback: Function){
  fetch("https://albums-7757.restdb.io/rest/images", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "cache-control": "no-cache",
      'x-apikey': '60702727f592f7113340ee02'
    },
  })
    .then((e) => e.json())
    .then(data=>callback(data.sort(() => Math.random() - 0.5)));
}