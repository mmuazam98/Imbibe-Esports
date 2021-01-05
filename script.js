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
    name: "Aaron Stone",
    img: "Aaron Stone.jpeg",
  },
  {
    id: 1,
    name: "Antaryami",
    img: "Antaryami.jpeg",
  },
  {
    id: 2,
    name: "Azrecs",
    img: "Azrecs logo transparent.jpg",
  },

  {
    id: 3,
    name: "Baba Gaming",
    img: "Baba gaming.jpg",
  },
  {
    id: 4,
    name: "Believe",
    img: "Believe.png",
  },
  {
    id: 5,
    name: "BLac Sawan",
    img: "BLac Sawan.jpeg",
  },
  {
    id: 6,
    name: "Blind Satan",
    img: "blind satan.png",
  },
  {
    id: 7,
    name: "EG Gaming",
    img: "EGLOGO.jpg",
  },
  {
    id: 8,
    name: "Exodia",
    img: "Exodia.jpeg",
  },
  {
    id: 9,
    name: "Fnatic MaxKash",
    img: "Fnatic MaxKash.jpeg",
  },
  {
    id: 10,
    name: "Freeky Gaming",
    img: "Freeky Gaming.jpg",
  },
  {
    id: 11,
    name: "GameXPro",
    img: "gamexpro 2020.jpg.jpeg",
  },
  {
    id: 12,
    name: "Gunshot",
    img: "Gunshot.jpeg",
  },
  {
    id: 13,
    name: "GyroGod",
    img: "GyroGod.jpeg",
  },
  {
    id: 14,
    name: "Immortal",
    img: "Immortal .png",
  },
  {
    id: 15,
    name: "JD Gaming",
    img: "JD Gaming LIVE.png",
  },
  {
    id: 16,
    name: "Joker Ki Haveli",
    img: "Joker Ki Haveli.jpeg",
  },
  {
    id: 17,
    name: "Krutika Plays",
    img: "Krutika plays.jpeg",
  },
  {
    id: 18,
    name: "Litboi",
    img: "Litboi.jpeg",
  },
  {
    id: 19,
    name: "Madmax",
    img: "Madmax.jpeg",
  },
  {
    id: 20,
    name: "Magician",
    img: "Magician.jpeg",
  },
  {
    id: 21,
    name: "Megaboi",
    img: "Megaboi.png",
  },
  {
    id: 22,
    name: "NeonYKE",
    img: "NeonYKE.jpg",
  },
  {
    id: 23,
    name: "NRX",
    img: "NRX.jpeg",
  },
  {
    id: 24,
    name: "Potter Gaming",
    img: "Potter gaming.png",
  },
  {
    id: 25,
    name: "ReaperX",
    img: "ReaperX.jpeg",
  },
  {
    id: 26,
    name: "RIP",
    img: "RIP.png",
  },

  {
    id: 27,
    name: "Sniper1",
    img: "sniper1.png",
  },
  {
    id: 28,
    name: "Spectra Gaming",
    img: "Spectra Gaming.png",
  },
  {
    id: 29,
    name: "Team Tamilas",
    img: "Team Tamilas.jpeg",
  },
  {
    id: 30,
    name: "The Gamer Ajay",
    img: "The Gamer Ajay.jpeg",
  },
  {
    id: 31,
    name: "The Geek India",
    img: "The Geek India.jpeg",
  },
  {
    id: 32,
    name: "TODxGaming",
    img: "TODxGaming.jpeg",
  },
  {
    id: 33,
    name: "Udaal Pavvya",
    img: "Udaal pavvya.jpeg",
  },
  {
    id: 34,
    name: "Unni Gaming",
    img: "Unni Gaming.jpeg",
  },
  {
    id: 35,
    name: "Vaadhiyaar",
    img: "Vaadhiyaar.jpeg",
  },
  {
    id: 36,
    name: "VareMouse",
    img: "VareMouse.jpeg",
  },
  {
    id: 37,
    name: "Xpain",
    img: "xpain BLACK OUTER.jpg",
  },
  {
    id: 38,
    name: "Zia Gaming",
    img: "Zia Gaming.png",
  },
];

let main = $("#elements");

info.forEach((s, index) => {
  main.append(
    ` <div class="card">
        <!-- card start-->
        <div class="imgBx">
          <img src="images/${s.img}" alt="" />
        </div>
        <div class="content">
          <span class="one ${s.id}">+1</span>
          <div class="contentBx">
            <p class="extName" style="--i:2">${s.name}</p>
            <h5 class="mt-3 name" style="--i: 2">${s.name}</h5>
            <h5 class="span votes" style="--i: 3"></h5>
          </div>
          <button class="btn btn-white btn-animate" id=${s.id} style="--i: 2.5">Vote</button>
        </div>
       
      </div>
        <!-- card end-->`
  );
});

// console.log(viewers_ip);
let count_view = (viewers_ip) => {
  let views;
  let ipAddress = viewers_ip.toString();
  for (let i = 0; i < ipAddress.length; i++) {
    ipAddress = ipAddress.replace(".", "-");
  }
  console.log(`Your IP Address: ${ipAddress}`);
};

const reference = firebase.database();

let votes = 0;
let i = 0;
let el = $(".span");

let showVotes = () => {
  let msg;
  firebase
    .database()
    .ref("votes/")
    .on("value", (snap) => {
      for (i = 0; i < 39; i++) {
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
  if (!window.localStorage) {
    $("#popup-wrapper-1").addClass("show");
  }
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
