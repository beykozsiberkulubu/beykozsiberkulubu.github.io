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
      self.printa("<h2>21 Ocak - 1 Şubat 2019 | İstanbul | Turkcell Cyber Camp 2019 | Son başvuru 7 Aralık: <a href='bit.ly/2R5VOOC'>Başvur</a></h2> ");
 },
 hakkimizda : function(...a){
      self.printa("<h2>Siber güvenlik alanına yeni bir kilometre taşı koymak isteyen kişilerin toplaştığı ortam. </h2> </br> ");
 },
 tools : function(...a){
      self.printa("<h2>Rar Brute Force <a href=''>#go#</a></h2></br> ");
 },
  aboutme: function(...a) {
    this.printa("aboutme");
  },

  clear: function(...a) {
    this.clear_terminal();
  }
};
