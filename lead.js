console.log("hello");
let section2 = document.querySelector(".section2")
let fname = document.querySelector(".fname")
let lname = document.querySelector(".lname")
let pcountry = document.querySelector(".pcountry")
let pscore = document.querySelector(".pscore")
let button = document.querySelector("button")
let data = [
    {
        FirstName: "Virat",
        LastName: "kohli",
        Country: "india",
        Scorer: 200
    },
    {
        FirstName: "K L",
        LastName: "rahul",
        Country: "india",
        Scorer: 100
    },
    {
        FirstName: "ab de",
        LastName: " villiers",
        Country: "south africa",
        Scorer: 300
    }
];

//adding player
button.addEventListener('click', (e) => {
    e.preventDefault();


    if
        (pcountry.value == "" ||
        fname.value == "" ||
        lname.value == "" ||
        pscore.value == "") {
        alert("please fill all the fields!!!");
    } else {
        let playerObj = {
            FirstName: fname.value,
            LastName: lname.value,
            Country: pcountry.value,
            Scorer: Number(pscore.value)
        };
        data.push(playerObj);
        updateData()

        fname.value = "";
        lname.value = "";
        pcountry.value = "";
        pscore.value = ""
    }

});
// function updateData(){
//     data.sort((p1,p2)=>{
//             return p2.scorer - p1.scorer;
//     });
//     // 
//     data.forEach((iteam)=>{
//        let div=document.createElement('div');
//         let playerFName=document.createElement('span');
//         let playerLName=document.createElement('span');
//         let playercName=document.createElement('span');
//         let playerScorer=document.createElement('span');



//         let lsatspan=document.createElement('div');

//         //dispaly
//         playerFName.innerText=iteam.FirstName;
//         playerLName.innerText=iteam.LastName;
//         playercName.innerText=iteam.Country;
//         playerScorer.innerText=iteam.Scorer;


//         lsatspan.innerHTML=`<i class="fa-solid fa-trash-can delete"></i><span class="add">+5</span><span class="sub">-5</span>`
//         // console.log(playerFName,playerLName,playerScorer,playercName);

//         div.append(playerFName,playerLName,playercName,playerScorer,lsatspan);
//         // console.log(div);
//         section2.appendChild(div)
//     })
// }
function updateData() {
    data.sort((p1, p2) => {
        return p2.Scorer - p1.Scorer;
    });

    let innerHTML = "";  // it will empty 
    data.forEach((iteam) => {
        innerHTML += `
        <div class="button_group">
            <span>${iteam.FirstName}</span>
            <span>${iteam.LastName}</span>
            <span>${iteam.Country}</span>
            <span>${iteam.Scorer}</span>
            <button class="del"> <i class="fa-sharp fa-solid fa-user-slash"></i></button>
            <button class="but1">+5</button>
            <button class="but2">-5</button>
        </div>`;
    });

    section2.innerHTML = innerHTML;  // data will added
    activateEventListener() // activate all three button del,add,sub
}
const activateEventListener = () => {
    document.querySelectorAll(".button_group").forEach((el, index) => {
        el.addEventListener('click', (e) => {
            if (e.srcElement.classList.value === 'but1') {
                data[index].Scorer += 5
                // console.log(e);
            } else if(e.srcElement.classList.value === 'but2'){
            data[index].Scorer-=5
                // console.log(e);
            }
             else if(e.srcElement.classList.value === 'del'){
               console.log(e);
               data.splice(index,1);
             }
         
  
            updateData()
            
        })
    })
}
document.addEventListener('load', updateData());
// document.onload=updateData();