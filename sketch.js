
let spamEmails = ["Subject: naturally irresistible your corporate identity  lt is really hard to recollect a company : the  market is full of suqgestions and the information isoverwhelminq ; but a good  catchy logo , stylish statlonery and outstanding website  will make the task much easier .  we do not promise that havinq ordered a iogo your  company will automaticaily become a world ieader : it isguite ciear that  without good products , effective business organization and practicable aim it  will be hotat nowadays market ; but we do promise that your marketing efforts  will become much more effective . here is the list of clear  benefits : creativeness : hand - made , original logos , specially done  to reflect your distinctive company image . convenience : logo and stationery  are provided in all formats ; easy - to - use content management system letsyou  change your website content and even its structure . promptness : you  will see logo drafts within three business days . affordability : your  marketing break - through shouldn ' t make gaps in your budget . 100 % satisfaction  guaranteed : we provide unlimited amount of changes with no extra fees for you to  be surethat you will love the result of this collaboration . have a look at our  portfolio _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ not interested . . . _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _", "Subject: the stock trading gunslinger  fanny is merrill but muzo not colza attainder and penultimate like esmark perspicuous ramble is segovia not group try slung kansas tanzania yes chameleon or continuant clothesman no  libretto is chesapeake but tight not waterway herald and hawthorn like chisel morristown superior is deoxyribonucleic not clockwork try hall incredible mcdougall yes hepburn or einsteinian earmark no  sapling is boar but duane not plain palfrey and inflexible like huzzah pepperoni bedtime is nameable not attire try edt chronography optima yes pirogue or diffusion albeit no ", "Subject: unbelievable new homes made easy  im wanting to show you this  homeowner  you have been pre - approved for a $ 454 , 169 home loan at a 3 . 72 fixed rate .  this offer is being extended to you unconditionally and your credit is in no way a factor .  to take advantage of this limited time opportunity  all we ask is that you visit our website and complete  the 1 minute post approval form  look foward to hearing from you ,  dorcas pittman", "Subject: 4 color printing special  request additional information now ! click here  click here for a printable version of our order form ( pdf format )  phone : ( 626 ) 338 - 8090 fax : ( 626 ) 338 - 8102 e - mail : ramsey @ goldengraphix . com  request additional information now ! click here  click here for a printable version of our order form ( pdf format )  golden graphix & printing 5110 azusa canyon rd . irwindale , ca 91706 this e - mail message is an advertisement and / or solicitation . ", "Subject: do not have money , get software cds from here !  software compatibility . . . . ain ' t it great ?  grow old along with me the best is yet to be .  all tradgedies are finish ' d by death . all comedies are ended by marriage .", "Subject: great nnews  hello , welcome to medzonline sh groundsel op  we are pleased to introduce ourselves as one of the ieading online phar felicitation maceuticai shops .  helter v  shakedown r  a cosmopolitan l  l blister l  l bestow ag  ac tosher l  is coadjutor va  confidant um  andmanyother .  - sav inexpiable e over 75 %  - total confide leisure ntiaiity  - worldwide s polite hlpplng  - ov allusion er 5 miilion customers in 150 countries  have devitalize a nice day !"];

let randomEmail = "dasdasdasdasdasdasdsa";

let button;
let myFont;
let trashImg;
let forwardImg;

function preload() {
  //Load custom font
  myFont = loadFont('SalmaPro.otf');
  //Load images
  trashImg = loadImage('trashicon.png');
  forwardImg = loadImage('forward.png');
  exitImg = loadImage('whitecross.png');
}

function setup() {
  createCanvas(700, 700);

  //Randomizer button
  button = select('#randButton');
  button.position(880, 655);
  button.mousePressed(changeEmail);
  button.class("randomizerButton");

}

function draw() {
  //Canvas background and defaults
  background(45, 46, 51);
  fill(255);
  rect(2, 2, 696, 696);
  fill(color(0, 0, 0));
  textSize(20);

  //Header bar
  noStroke();
  fill(color(75, 76, 84));
  rect(0, 0, 700, 40);

  /*-- ALL THE TEXT IN THE SKETCH -- */
  //Custom font
  textFont(myFont);
  //Header
  fill(color(255));
  text('Spam Email Randomizer', 15, 26);

  //To and Subject
  fill(color(184, 192, 194));
  text('To: This is a spam email randomizer', 15, 75);
  text('Subject: Click the button for a random spam email!', 15, 120);

  // email body (randomizer here)
  fill(color(39, 40, 51));
  textSize(15);
  text(spamEmails[randomEmail], 20, 180, 600, 600);

  //Image icons
  image(trashImg, 660, 650, 25, 25);
  image(forwardImg, 620, 653, 25, 25);
  image(exitImg, 670, 10, 18, 18);

  // Line divisions
  stroke(100);
  line(0, 90, 700, 90);
  line(0, 140, 700, 140);

}

//Randomizer function
function changeEmail() {
  randomEmail = int(random(spamEmails.length));
}
