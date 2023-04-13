const randomword = document.getElementById('word');
const hint = document.getElementById('hint');
const time = document.getElementById('time');
const input = document.getElementById('input');
const Refresh = document.getElementById('Refresh');
const Check = document.getElementById('Check');
const note = document.getElementById('note');


let words = [
    {
        word: "addition",
        hint: "The process of adding numbers"
    },
    {
        word: "meeting",
        hint: "Event in which people come together"
    },
    {
        word: "number",
        hint: "Math symbol used for counting"
    },
    {
        word: "exchange",
        hint: "The act of trading"
    },
    {
        word: "canvas",
        hint: "Piece of fabric for oil painting"
    },
    {
        word: "garden",
        hint: "Space for planting flower and plant"
    },
    {
        word: "position",
        hint: "Location of someone or something"
    },
    {
        word: "feather",
        hint: "Hair like outer covering of bird"
    },
    {
        word: "comfort",
        hint: "A pleasant feeling of relaxation"
    },
    {
        word: "tongue",
        hint: "The muscular organ of mouth"
    },
    {
        word: "expansion",
        hint: "The process of increase or grow"
    },
    {
        word: "country",
        hint: "A politically identified region"
    },
    {
        word: "group",
        hint: "A number of objects or persons"
    },
    {
        word: "taste",
        hint: "Ability of tongue to detect flavour"
    },
    {
        word: "store",
        hint: "Large shop where goods are traded"
    },
    {
        word: "field",
        hint: "Area of land for farming activities"
    },
    {
        word: "friend",
        hint: "Person other than a family member"
    },
    {
        word: "pocket",
        hint: "A bag for carrying small items"
    },
    {
        word: "needle",
        hint: "A thin and sharp metal pin"
    },
    {
        word: "expert",
        hint: "Person with extensive knowledge"
    },
    {
        word: "statement",
        hint: "A declaration of something"
    },
    {
        word: "second",
        hint: "One-sixtieth of a minute"
    },
    {
        word: "library",
        hint: "Place containing collection of books"
    },
]
let takeword

function getwords(){
    let takeone = words[Math.floor(Math.random()*words.length)];

    takeword = takeone.word;

    let takewordArray = takeword.split("");


    function randomSort() {
        return Math.random() - 0.5;
      }
      const shuffledArr = takewordArray.sort(randomSort);


      for(let i =0 ; i< shuffledArr.length; i++){
        if (i > 0) { 
            shuffledArr[i] = " " + shuffledArr[i];
          }    
      }

      let stringword = shuffledArr.join('');


      randomword.innerHTML = stringword.toLocaleUpperCase();
      hint.innerHTML = takeone.hint;

}
getwords();

function countdown() {
    let seconds = 30;
    const interval = setInterval(() => {
      time.innerHTML = seconds;
      seconds--;
      if (seconds < 0) {
        clearInterval(interval);
        alert(`Time off! ${takeword.toLocaleUpperCase()} was the correct word`)
        location.reload();

      }
    }, 1000);
  }
  
  countdown();
  

  Refresh.addEventListener('click', function(){
    location.reload();
  })

  function checkword(){

    let uppercasetakeword = takeword.toLocaleUpperCase();

    let uservalue = input.value;
    
    if(uservalue == uppercasetakeword){
        alert(`Great guess ${uservalue} is a correct word`);
        location.reload();

    }else{
        note.innerHTML = `Oops! ${uservalue} is not a correct word`
    }
  }
  console.log(takeword.toLocaleUpperCase());

