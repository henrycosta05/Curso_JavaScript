const json = {"type":"application/vnd.lime.collection+json","resource":{"total":1,"itemType":"application/vnd.iris.desk.attendant+json","items":[{"identity":"henrique.costa%40lojasrenner.com.br@blip.ai","teams":["Default"],"status":"Offline"}]},"method":"get","status":"success","id":"ea3f9e85-c6f0-4cde-b398-8438084ed770","from":"postmaster@desk.msging.net/#az-iris6","to":"chatvendas@msging.net","metadata":{"#command.uri":"lime://chatvendas@msging.net/attendants","uber-trace-id":"5d7d17a59ceade12%3Aad4542de14c42ac0%3A5d7d17a59ceade12%3A1"}}

console.log(json.resource.items)