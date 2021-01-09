// Your web app's Firebase configuration

let firebaseConfig = {
  apiKey: "AIzaSyD2Ho9_xWNOraTf8STP2huO-9sb8JIzgMo",
  authDomain: "realtime-view-coun.firebaseapp.com",
  projectId: "realtime-view-coun",
  storageBucket: "realtime-view-coun.appspot.com",
  messagingSenderId: "158085124443",
  appId: "1:158085124443:web:6a9b105f835ccc02120a7e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let get_viewers_ip = (json) => {
  viewers_ip = json.ip;
  count_view(viewers_ip);
};
let info = [
  {
    id: 0,
    name: "Fnatic MaxKash",
    img: "Fnatic MaxKash.jpeg",
  },
  {
    id: 1,
    name: "Toxic Mavi",
    img: "Mavi YT.jpeg",
  },
  {
    id: 2,
    name: "Encore",
    img: "Encore.jpg",
  },
  {
    id: 3,
    name: "Pardhan",
    img: "Pardhan.jpeg",
  },
  {
    id: 4,
    name: "BOPEDOPE",
    img: "BOPEDOPE.PNG",
  },
  {
    id: 5,
    name: "Smokie",
    img: "Smokie.jpeg",
  },
  {
    id: 6,
    name: "GyroGod",
    img: "GyroGod.jpeg",
  },
  {
    id: 7,
    name: "SangwaN",
    img: "SangwaN.jpg",
  },

  {
    id: 8,
    name: "Immortal Gamers",
    img: "Immortal.png",
  },
  {
    id: 9,
    name: "Believe",
    img: "Believe.png",
  },
  {
    id: 10,
    name: "Celtz Roxx",
    img: "Celtz Roxx.jpeg",
  },
  {
    id: 11,
    name: "Fyzzer",
    img: "Fyzzer.jpeg",
  },
  {
    id: 12,
    name: "ReaperX",
    img: "ReaperX.jpeg",
  },
  {
    id: 13,
    name: "GameXPro",
    img: "gamex.png",
  },
  {
    id: 14,
    name: "Blac Sawan",
    img: "BLac Sawan.jpeg",
  },
  {
    id: 15,
    name: "MR SPRAY",
    img: "MR SPRAY.png",
  },

  {
    id: 16,
    name: "100CC MADDY",
    img: "Maddy Logo.jpg",
  },
  {
    id: 17,
    name: "Antrix",
    img: "ANTRIX.png",
  },
  {
    id: 18,
    name: "Antaryami",
    img: "Antaryami.jpeg",
  },
  {
    id: 19,
    name: "Gabbar Gaming",
    img: "GABBAR GAMING.png",
  },
  {
    id: 20,
    name: "RIP officiaLS",
    img: "RIP.png",
  },
  {
    id: 21,
    name: "Gunshot",
    img: "Gunshot.jpeg",
  },
  {
    id: 22,
    name: "Omega",
    img: "Omega.png",
  },
  {
    id: 23,
    name: "Vaadhiyaar",
    img: "Vaadhiyaar.jpeg",
  },
  {
    id: 24,
    name: "Udaal Pavvya",
    img: "Udaal pavvya.jpeg",
  },
  {
    id: 25,
    name: "The Geek India",
    img: "The Geek India.jpeg",
  },
  {
    id: 26,
    name: "Team Tamilas",
    img: "Team Tamilas.jpeg",
  },
  {
    id: 27,
    name: "BlindxSatan",
    img: "blind satan.png",
  },
  {
    id: 28,
    name: "BlindxPain",
    img: "xpain BLACK OUTER.png",
  },
  {
    id: 29,
    name: "Zia Gaming",
    img: "Zia Gaming1.png",
  },
  {
    id: 30,
    name: "Star Girl",
    img: "Star Girl.jpeg",
  },
  {
    id: 31,
    name: "Upthrust Esports",
    img: "Upthrust Esports.jpeg",
  },
  {
    id: 32,
    name: "IT Prince",
    img: "IT Prince.jpeg",
  },
  {
    id: 33,
    name: "Potter Gaming",
    img: "Potter gaming.png",
  },
  {
    id: 34,
    name: "Aaron Stone",
    img: "Aaron Stone.jpeg",
  },
  {
    id: 35,
    name: "MadMax",
    img: "Madmax.jpeg",
  },
  {
    id: 36,
    name: "NeonYKE",
    img: "NeonYKE.jpg",
  },
  {
    id: 37,
    name: "Mega Boi",
    img: "Megaboi.png",
  },
  {
    id: 38,
    name: "The Gamer Ajay",
    img: "The Gamer Ajay.jpeg",
  },
  {
    id: 39,
    name: "Freeky Gaming",
    img: "Freeky Gaming.jpg",
  },
  {
    id: 40,
    name: "Lit boi",
    img: "Litboi.jpeg",
  },
  {
    id: 41,
    name: "Krutika Plays",
    img: "Krutika plays.jpeg",
  },
  {
    id: 42,
    name: "JD Gaming",
    img: "JD Gaming LIVE.png",
  },
  {
    id: 43,
    name: "Spectra Gaming",
    img: "Spectra Gaming.png",
  },
  {
    id: 44,
    name: "Joker ki Haveli",
    img: "Joker Ki Haveli.jpeg",
  },
  {
    id: 45,
    name: "Baba Gaming",
    img: "Baba gaming.png",
  },
  {
    id: 46,
    name: "TODxgaming",
    img: "TODxGaming.jpeg",
  },
  {
    id: 47,
    name: "FYXS",
    img: "FYXS.jpeg",
  },
  {
    id: 48,
    name: "HYP ESCA",
    img: "HYP ESCA.jpg",
  },
];
let main = $("#elements");

info.forEach((s, index) => {
  main.append(
    ` <div class="card" id="${s.name.replaceAll(/\s/g, "").toLowerCase()}">
        <!-- card start-->
        <div class="imgBx">
          <img src="logos/${s.img}" alt="" />
        </div>
        <div class="content">
          <span class="one ${s.id}">+1</span>
          <div class="contentBx">
            <div class="outer">
              <span class="extName" style="--i:2">${s.name}</span>
            </div>
            <h5 class="mt-3 name" style="--i: 2">${s.name}</h5>
            <h5 class="span" style="--i: 3"></h5>
          </div>
          <button class="btn btn-white btn-animate" id=${
            s.id
          } style="--i: 2.5">Vote</button>
        </div>
       
      </div>
        <!-- card end-->`
  );
});

// console.log(viewers_ip);
// for (let i = 0; i < 49; i++) {
//   firebase
//     .database()
//     .ref("votes/" + i)
//     .set({
//       // viewers_ip: viewers_ip,
//       votes: 0,
//     });
// }
// let count_view = (viewers_ip) => {
//   let views;
//   let ipAddress = viewers_ip.toString();
//   for (let i = 0; i < ipAddress.length; i++) {
//     ipAddress = ipAddress.replace(".", "-");
//   }
//   console.log(`Your IP Address: ${ipAddress}`);
// };

// const reference = firebase.database();

let votes = 0;
let i = 0;
let el = $(".span");

let showVotes = () => {
  let msg;
  firebase
    .database()
    .ref("votes/")
    .on("value", (snap) => {
      for (i = 0; i < 49; i++) {
        let v = snap.val()[i].votes;
        v == 1 ? (msg = "vote") : (msg = "votes");
        el[i].innerHTML = `${v} <span>${msg}</span>`;
      }
    });
};

showVotes();

let writeUserData = (id, vts) => {
  firebase
    .database()
    .ref("votes/" + id)
    .set({
      votes: vts,
    });
};
let votesArr = [];
// localStorage.clear();
$(".card button").click(function () {
  let btnID = this.id;
  let arr = [];
  let retrievedData = localStorage.getItem("votesArr");
  arr = JSON.parse(retrievedData);
  if (arr != null && arr.includes(btnID)) {
    $("#popup-wrapper").addClass("show");
  } else {
    showVotes();
    // window.localStorage.vote = true;
    votesArr.push(btnID);
    localStorage.setItem("votesArr", JSON.stringify(votesArr));

    $(this).closest(".card").find(".one").addClass("showOne");

    let currVotes = 0;
    firebase
      .database()
      .ref("votes/" + btnID)
      .once("value", (snap) => {
        currVotes = snap.val().votes + 1;
        // currVotes.push(snap.val()[btnID].votes);
        // currVotes.push(snap.val());
        writeUserData(btnID, currVotes);
        // console.log(currVotes);
      });
  }
});

$(document).ready(function () {
  let arr = [];
  let retrievedData = localStorage.getItem("votesArr");
  arr = JSON.parse(retrievedData);
  if (arr == null) $("#popup-wrapper-1").addClass("show");

  $(".search .search__btn").click(function () {
    $(".search").addClass("search--visible");
  });

  $(document).on("click", function (e) {
    if ($(e.target).closest(".search").length === 0) {
      $(".search").removeClass("search--visible");
    }
  });
});

let myFunction = () => {
  let input, filter, cards;
  let cardContainer, title, i;
  input = document.getElementById("myFilter");
  filter = input.value.toUpperCase();
  cardContainer = document.getElementById("elements");
  cards = cardContainer.getElementsByClassName("card");
  for (i = 0; i < cards.length; i++) {
    title = cards[i].querySelector(".name");
    if (title.innerText.toUpperCase().indexOf(filter) > -1) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
};
let makeTimer = () => {
  //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");
  var endTime = new Date("10 January 2021 10:00:00 GMT+05:30");
  endTime = Date.parse(endTime) / 1000;

  var now = new Date();
  now = Date.parse(now) / 1000;

  var timeLeft = endTime - now;

  var days = Math.floor(timeLeft / 86400);
  var hours = Math.floor((timeLeft - days * 86400) / 3600);
  var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
  var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

  if (hours < "10") {
    hours = "0" + hours;
  }
  if (minutes < "10") {
    minutes = "0" + minutes;
  }
  if (seconds < "10") {
    seconds = "0" + seconds;
  }

  $("#days").html(days + "<span>Days</span>");
  $("#hours").html(hours + "<span>Hours</span>");
  $("#minutes").html(minutes + "<span>Minutes</span>");
  $("#seconds").html(seconds + "<span>Seconds</span>");
  if (timeLeft < 0) {
    $("#timer-section").hide();
    $(".card").addClass("card-hover");
  }
};

setInterval(function () {
  makeTimer();
}, 1000);
