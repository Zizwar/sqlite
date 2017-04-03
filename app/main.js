

var page = new tabris.Page({
     //
	 title:"download file",
	 topLevel: true,
        background: "#000"
    }).open();
//
//
     var text = new tabris.TextView({
            font: "bold 26px",
            textColor: "#fff",
          
            centerX: 0,
            layoutData: {
                top: 20,
                left: 20,
             
            },
            text: "push file"
        }).on("tap", function(w, e) {

      //  scheduleDelayed = function () {
                var now = new Date().getTime(),
                    _5_sec_from_now = new Date(now + 5 * 1000);
                var sound = "http://quran.ksu.edu.sa/ayat/mp3/Hudhaify_64kbps/001001.mp3";//device.platform == 'Android' ? 'file://sound.mp3' : 'file://beep.caf';
                cordova.plugins.notification.local.schedule({
                    id: 1,
                    title: 'Scheduled with delay',
                    text: 'Test Message 1',
                    at: _5_sec_from_now,
                    sound: sound,
                    badge: 12
                });
           // };
  }).appendTo(page);

        //
    //
