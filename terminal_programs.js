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
      self.printa("<h2>21 Ocak - 1 Şubat 2019 | İstanbul | Turkcell Cyber Camp 2019 | Son başvuru 7 Aralık: <a href='https://bit.ly/2R5VOOC'>Başvur</a></h2> ");
 },
 hakkimizda : function(...a){
      self.printa("<h2>Siber güvenlik alanına yeni bir kilometre taşı koymak isteyen kişilerin toplandığı ortam. </h2> </br> ");
 },
 tools : function(...a){
      self.printa("<h2>Rar Brute Force <a href=''>#go#</a></h2></br> ");
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
