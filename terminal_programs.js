var PROGAMS = {

  help: function(...a) {
    this.printa({
      "headers": ["Komut", "Açıklama"],
      "help": ["Kullanabileceğiniz komutları listeler"],
      "etkinlikler": ["Etkinlikleri görüntülersiniz"],
      "tools": ["Araçlarımızı görüntülersiniz"],
      "hakkimizda": ["Hakkımızda :)"],
      "clear": ["Terminali temizler"]
    });
  },

  etkinlikler : function(...a){
      self.printa("<h2>Beykoz Siber Kulübü Web Pentest ve Adli Bilişim 101 Eğitimi 15 Aralık: <a href='beykoz-siber-kulubu-15-aralık-egitimi.html'>Başvur</a></h2> ");
 },
 hakkimizda : function(...a){
      self.printa("<h2>Siber güvenlik alanına yeni bir kilometre taşı koymak isteyen kişilerin toplandığı ortam. </h2> </br> ");
   self.printa("<h2>Detaylı ulaşım sayfamız </h2> <a href=''>#go#</a> </br> ");
 },
 tools : function(...a){
      self.printa("<h2>Rar Brute Force <a href='ulasim.html'>#ulaş#</a></h2></br> ");
 },
  aboutme: function(...a) {
    this.printa("aboutme");
  },

  clear: function(...a) {
    this.clear_terminal();
  },
  flag: function(...a) {
    this.printa("<img src='https://beykozsiberkulubu.github.io/Beykoz-Siber-Kul%C3%BCb%C3%BC.jpeg'></<img> ");
    this.printa("Wordlistde buralarda bir yerde");
  },
  wordlist: function(...a) {
    this.printa("https://drive.google.com/file/d/1Ye2tWHQwp0GacqkRvLEIQFb-LivxUeNz/");
  }
};
