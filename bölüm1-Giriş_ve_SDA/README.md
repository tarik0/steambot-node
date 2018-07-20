# Giriş
Node JS'le Steam BOT yapımını anlattığım bu seriye hoşgeldiniz. Bütün BOT serisi boyunca **DoctorMcKay** kullanıcısının Steam BOT kütüphanelerini kullanacağız bu kütüphaneler **node-steam-user, node-steamcommunity, node-steam-tradeoffer-manager ve node-steam-totp**'dir

# Hesap Ayarlamaları ve Steam Desktop Authenticator (SDA)
Öncelikle hesabınızı SDA'ya bağlamanız gerekmektedir. Bunun sebepleri hesabınızın shared_secret ve identity_secret'ini bulmaktır.**Shared Secret** hesabınıza girerken istenen steam guard kodu için, **Identity Secret** ise takaslarımızı onaylamak için lazımdır.

# SDA Kurulumu
Öncelikle SDA'nın GitHub sayfasına giriyoruz. Altta **Download here** yazan butona tıklıyoruz ve en son sürümü indiriyoruz

Bundan sonra dosyaları zipden çıkarıp bir dosyaya koyuyoruz ve içindeki **Steam Desktop Authenticator.exe**'sini çalıştırıyoruz 

Programı kurduğunuza göre hesabınızı kurabilirsiniz burda anlatmıycağım attığım linkten bakabilirsiniz https://www.youtube.com/watch?v=Vsj_DFNQNfU

Hesabınızı bağladıkdan sonra SDA'nın olduğu klasörün içindeki maFiles'e giriyoruz.

Bağladığınız hesabın steam64id'si ile başlayan dosyayı açıyoruz.

    `"shared_secret":"#############################",
Dosyanın içinde üstteki gibi bir yazı olacak buradaki ########'yı kayıtediyoruz bu sizin shared_secret'inizdir

    "identity_secret":"##########################"

Ayrıca dosyanın içinde üstteki gibi bir yazı olacak burdaki ###### sizin identity_secret'inizdir bunu da kaydedin.

# İlk Program
Öncelikle **node-steam-user** kütüphanesini indirmeniz gereklidir. Bunun için **bot.js**'in bulunduğu klasöre **npm install steam-user** yazıyoruz ve **bot.js**'in bulunduğu klasöre **config.json** isimli bir json dosyası açıyoruz bunun içine hesap bilgilerimizi yazacağız. Artık **bot.js** ve **config.json** dosyalarını inceleyebilirsiniz her satırın sonunda o satır için açıklama bulunmakta.

Ayrıca steam guard'la girmek için **node-steam-totp** kütüphnesi lazım aynı **steam-user** kütüphanesini yüklediğimiz gibi **npm install steam-totp** yazıyoruz ve yüklüyoruz








