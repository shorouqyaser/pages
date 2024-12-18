const container = document.querySelector(".container")
const coffees = [
  { name: "Musakhan", image: "image/image1.jpg" },
  { name: "Kabsa", image: "image/image2.jpg" },
  { name: "Tabouleh", image: "image/image3.jpg" },
  { name: "Mansaf", image: "image/image4.jpg" },
  { name: " Maqluba", image: "image/image5.jpg" },
  { name: " Fatteh Ghazawiya", image: "image/image6.jpg" },
  { name: "Hummus", image: "image/image7.jpg" },
  { name: "Kibbeh", image: "image/image8.jpg" },
  { name: "Shawarma", image: "image/image9.jpg" },
]
const showCoffees = () => {
    let output = ""
    coffees.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Taste</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showCoffees)

 // scrollUp()

  let InstallBtn = document.getElementById("install");
  window.addEventListener("beforeinsallprompt",(installEvent)=>{
    installEvent.preventDefault();
    InstallBtn.style.display="block";
    deferredprompt = installEvent;
  })

  InstallBtn.addEventListener('click',()=>{
    if(deferredprompt){
        deferredprompt.prompt();
        deferredprompt.userchoice.then((choiceResult)=>{
            if(choiceResult.outcome ==="accepted"){
                console.log("user Accepted Installing");
                InstallBtn.style.display="block";
            }
            else{
                console.log("user Refused Installing");
            }
        })
    }
  })

  //service workers
  if(navigator.serviceWorker){
    navigator.serviceWorker.register('../Service Workers.js')
    .then((reg)=>{
        console.log('file Is Register',reg)
    })
    .catch((err)=>{
        console.log("Error",err)
    })
  }