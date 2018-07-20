var config = require("./config.json") //Config dosyasını scriptimize ekledik
var SteamUser = require("steam-user") //steam-user Kütüphanesini Ekliyoruz
const SteamTotp = require('steam-totp') // steam-totp Kütüphanesini Ekliyoruz

var client = new SteamUser() // Bir Steam Client'i oluşturduk

client.on('loggedOn',() => { //loggedOn Event Listenerini yerleştiriyoruz
    console.log("Giriş Yapıldı!") //loggedOn Başarılı bir şekilde giriş yapıldığında tetiklenir
}) // Diğer Event'lere https://www.npmjs.com/package/steam-user#events- sitesinden bakabilirsiniz

client.on('friendRelationship',(steamID, relationship) => { //friendRelationship Event Listenerini Yerleştiriyoruz
    //friendRelationship Eventi Bir Kullanıcıyla ilişki seviyeniz değişince tetiklenir.
    if (relationship == 2) { //Burda 2 arkadaşlık isteği anlamına gelir diğer değerlere https://goo.gl/SspuX9 linkinden bakabilirsiniz
        console.log(`${steamID} SteamID'li kişiden Arkadaşlık İsteği Geldi Kabul Ediliyor!`)
        client.addFriend(steamID); // Arkadaşlık isteği kabul ediliyor
    }
})

client.on('friendMessage',(steamID,message) => { // friendMessage Event Listenerini Yerleştiriyoruz
    // friendMessage Eventi BOT'un bir arkadaşı mesaj yazarsa tetiklenir
    if (message == "ping"){ //Eğer mesaj "ping" ise
        client.chatMessage("Pong!") // "pong" olarak cevap verdiriyoruz
    }
})

client.logOn({ //Giriş yapıyoruz
	accountName: config.username, //Kullanıcı adını giriyoruz
	password: config.password, // Şifreyi giriyoruz
    twoFactorCode: SteamTotp.generateAuthCode(config.shared_secret) // shared_secret'i kullanarak Steam Guard Kodu üretip giriyoruz
});