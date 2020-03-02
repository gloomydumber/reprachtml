function response(room, msg, sender, isGroupChat, replier, ImageDB) {
  if (msg == "안녕") {
    replier.reply("안녕해");
  }
  var date = new Date();
  /*
  today=new Date(date.getFullYear(),date.getMonth(),date.getDate(),date.getHours(),date.getMinutes(),date.getSeconds());
  */

  var currentDate =
    date.getFullYear() +
    "년 " +
    (date.getMonth() + 1) +
    "월 " +
    date.getDate() +
    "일";
  var currentTime =
    date.getHours() +
    "시 " +
    date.getMinutes() +
    "분 " +
    date.getSeconds() +
    "초";
  var weekday = new Array();
  weekday[0] = "일";
  weekday[1] = "월";
  weekday[2] = "화";
  weekday[3] = "수";
  weekday[4] = "목";
  weekday[5] = "금";
  weekday[6] = "토";
  // alert("오늘은 " + weekday[date.getDay()]+'요일 입니다');
  var today =
    currentDate +
    " " +
    currentTime +
    "\n" +
    weekday[date.getDay()] +
    "???? (KST)";

  if (msg == "오늘") {
    replier.reply("주인님, 현재시간 알려드립니다.\n" + today);
  }
}
