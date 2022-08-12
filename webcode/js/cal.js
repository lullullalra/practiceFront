//8월 달력 생성 코드 작성(브라우저 콘솔에)
function viewMonth() {
  for (mon = 1; mon < 13; mon++) {
    console.log("\t\t\t" + mon + "월 달력");
    console.log("일\t월\t화\t수\t목\t금\t토");
    let day = 1;
    let week = "";
    const spaces = [6, 2, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
    const last_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for (let i = 0; i < spaces[mon - 1]; i++) {
      week = week + "\t";
    }
    for (i = 0; i < last_days[mon - 1]; i++) {
      week = week + day + "\t";
      if ((spaces[mon - 1] + day) % 7 === 0) {
        console.log(week);
        week = "";
      }
      day = day + 1;
    }
    console.log(week);
    console.log("\t");
  }
}

function viewMonth1(mon) {
  console.log("\t\t\t" + mon + "월 달력");
  console.log("일\t월\t화\t수\t목\t금\t토");
  let day = 1;
  let week = "";
  const spaces = [6, 2, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
  const last_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  for (let i = 0; i < spaces[mon - 1]; i++) {
    week = week + "\t";
  }
  for (i = 0; i < last_days[mon - 1]; i++) {
    week = week + day + "\t";
    if ((spaces[mon - 1] + day) % 7 === 0) {
      console.log(week);
      week = "";
    }
    day = day + 1;
  }
  console.log(week);
  console.log("\t");
}

function viewMonth2(year, mon) {
  console.log("\t\t" + year + "년" + mon + "월 달력");
  console.log("일\t월\t화\t수\t목\t금\t토");
  const d1 = new Date(year, mon - 1, 1); //첫째날
  const d2 = new Date(year, mon, 0); //마지막날
  let day = 1;
  let week = "";
  const spaces = d1.getDate();
  const last_days = d2.getDate();
  for (let i = 0; i < spaces; i++) {
    week = week + "\t";
  }
  for (i = 0; i < last_days; i++) {
    week = week + day + "\t";
    if ((spaces + day) % 7 === 0) {
      console.log(week);
      week = "";
    }
    day = day + 1;
  }
  console.log(week);
  console.log("\n");
}

function testEvent() {
  alert("event");
}

function makeCalendar() {
  //month의 값을 셋팅하는 코드
  let month = document.getElementById("mon").value;
  let result = viewMonthAuto(month);
  document.getElementById("calendar").innerHTML = result;
}

function makeCalendarOld() {
  //month의 값을 세팅하는 코드
  // 달력 실행 버튼 안에 onclick 안에 선언되어 있는 함수 때문에 버튼을 누를 시 함수 안에 있는 모든 기능 동작 가능
  let month = document.getElementById("mon").value; //document는 암시적 object(내장 객체 --> 이미 사용 준비가 되어있는 객체)
  if (month >= 13 || month <= 0) {
    alert("올바른 월을 입력해주세요.");
  }
  // viewMonth1(month);
  let calendar =
    "<table border='1'><tr><td colspan='7'>" + month + "월</td></tr>";
  calendar += makeWeek(["일", "월", "화", "수", "목", "금", "토"]);
  calendar += makeWeek(["1", "2", "3", "4", "5", "6", "7"]);
  calendar += makeWeek(["8", "9", "10", "11", "12", "13", "14"]);
  calendar += makeWeek(["15", "16", "17", "18", "19", "20", "21"]);
  calendar += makeWeek(["22", "23", "24", "25", "26", "27", "28"]);
  calendar += makeWeek(["29", "30", "31", "", "", "", ""]);
  calendar += "</table>";
  document.getElementById("calendar").innerHTML = calendar;

  // alert(content);
}

function makeWeek(array) {
  let week = "<tr><td class='sunday'>" + array[0] + "</td>";
  if (array.length != 0) {
    //추가
    for (i = 1; i < 6; i++) {
      if (typeof array[i] == "undefined") {
        array[i] = "";
      }
      week += "<td>" + array[i] + "</td>";
    }
    array[6] = typeof array[6] == "undefined" ? "" : array[i]; //삼항연산자
    week += "<td class='saturday'>" + array[6] + "</td></tr>";
  } else {
    week = "";
  }
  return week;
}

function viewMonthAuto(mon) {
  console.log("\t\t\t" + mon + "월");
  console.log("일\t월\t화\t수\t목\t금\t토");
  const spaces = [6, 2, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
  const last_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let space = spaces[mon - 1];
  let last_day = last_days[mon - 1];
  let day = 1;
  let week = [];
  let calendar =
    "<table border='1'><td colspan='7'>" + mon + "월" + "</td></tr>";
  calendar += makeWeek(["일", "월", "화", "수", "목", "금", "토"]);
  for (let i = 0; i < space; i++) {
    week.push("");
  }
  for (let i = 0; i < last_day; i++) {
    week.push(day);
    if ((space + day) % 7 === 0) {
      calendar += makeWeek(week);
      week = [];
    }
    day = day + 1;
  }
  calendar += makeWeek(week);
  calendar += "</table>";

  return calendar;
}

function select_month() {
  let month = document.getElementById("combo").value;
  console.log(month);
  let result = viewMonthAuto(month);
  document.getElementById("calendar").innerHTML = result;
}
