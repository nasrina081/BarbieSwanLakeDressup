/* global createCanvas, push, translate, rotate, PI, pop, CENTER, changeBG, rect, textAlign, background, backgroundColor, noStroke, image, loadImage, ellipse, rect, fill, noFill
stroke, strokeWeight, random, textSize, dist, createImg, button, diameter, mouseIsPressed, mouseY, ellipse, textFont, mouseX, loadFont, frameRate, loadSound, text, width, height, screen, soundFormats,nextButton, clickable, image, time 
*/

// Content behind double slashes is a comment. Use it for plain English notes,
// or for code that you want to temporarily disable.

// Creators: Nasrin Ali, Taylor Poe, Tierra Ablorh

let castle,
  speed = 1,
  screen = 0,
  barbie,
  prince,
  swan,
  banner,
  barbieImg,
  orangeDress,
  purpleDress,
  blueDress,
  greenDress,
  pinkShoes,
  blueShoes,
  purpleShoes,
  greenGem,
  yellowGem,
  pinkGem,
  heart,
  ballroom,
  sparkles,
  sparkles2,
  playButton,
  nextButton,
  myFont,
  backgroundMusic,
  dressUpMusic,
  ballroomTransitionMusic,
  hairChangeMusic,
  accessoryChangeMusic,
  ballroomMusic,
  clothingRack,
  dress1;

function preload() {
  // load sounds
  //soundFormats('mp3', 'wav');

  backgroundMusic = loadSound(
    "https://cdn.glitch.com/b6d68073-8a64-4f58-82cf-bb41982df43f%2FBarbie%20background%20music.wav?v=1627918428864"
  );
  dressUpMusic = loadSound(
    "https://cdn.glitch.com/d20df9cd-ef91-45f8-8022-ba90202d2afe%2FDress%20Up%20music.wav?v=1627996532230"
  );
  ballroomTransitionMusic = loadSound(
    "https://cdn.glitch.com/d20df9cd-ef91-45f8-8022-ba90202d2afe%2FBallroom%20Transition%20music.wav?v=1627996950241"
  );
  hairChangeMusic = loadSound(
    "https://cdn.glitch.com/d20df9cd-ef91-45f8-8022-ba90202d2afe%2FHair%20change%20music.wav?v=1627999386450"
  );
  accessoryChangeMusic = loadSound(
    "https://cdn.glitch.com/d20df9cd-ef91-45f8-8022-ba90202d2afe%2FAccessory%20change%20music.wav?v=1627999381590"
  );

  ballroomMusic = loadSound(
    "https://cdn.glitch.com/2bfdaa99-d190-4490-9af9-c1083c625733%2FBallroom%20music.wav?v=1628176135909"
  );

  castle = loadImage(
    "https://cdn.glitch.com/b6d68073-8a64-4f58-82cf-bb41982df43f%2F0b38837ea3fdd4a11a105cd644d09306.jpg?v=1627914164940"
  );

  barbieImg = loadImage(
    "https://cdn.glitch.com/b6d68073-8a64-4f58-82cf-bb41982df43f%2F6179C7E0-70A9-4D49-ABF9-416FE7DCAA3D.PNG?v=1627915352192"
  );

  playButton = loadImage(
    "https://cdn.glitch.com/b6d68073-8a64-4f58-82cf-bb41982df43f%2FPlay_logo.jpeg?v=1627915467553"
  );

  heart = loadImage(
    "https://cdn.glitch.com/b6d68073-8a64-4f58-82cf-bb41982df43f%2FA734B91E-F68B-450D-9036-594F48F8D91B.PNG?v=1627924819805"
  );

  sparkles = loadImage(
    "https://cdn.glitch.com/2bfdaa99-d190-4490-9af9-c1083c625733%2FQt0TnOtUX3wh.GIF?v=1628169206455"
  );

  sparkles2 = loadImage(
    "https://cdn.glitch.com/b6d68073-8a64-4f58-82cf-bb41982df43f%2FA431F464-DB99-4BBB-AB7E-5EBD5B108B35.PNG?v=1627929055984"
  );

  ballroom = loadImage(
    "https://cdn.glitch.com/b6d68073-8a64-4f58-82cf-bb41982df43f%2FBarbie-in-the-12-dancing-princesses.png?v=1627932730263"
  );

  orangeDress = loadImage(
    "https://cdn.glitch.com/d20df9cd-ef91-45f8-8022-ba90202d2afe%2F5E196430-FA84-41F2-A5DB-6009D2D8F30B.PNG?v=1627998793792"
  );

  purpleDress = loadImage(
    "https://cdn.glitch.com/d20df9cd-ef91-45f8-8022-ba90202d2afe%2F2E91DEBA-99E9-4AAD-8299-3EA754F2E429.PNG?v=1628000931389"
  );

  blueDress = loadImage(
    "https://cdn.glitch.com/d20df9cd-ef91-45f8-8022-ba90202d2afe%2FAC05ACFD-B236-40A6-993D-62BE98336840.PNG?v=1628000965884"
  );

  greenDress = loadImage(
    "https://cdn.glitch.com/d20df9cd-ef91-45f8-8022-ba90202d2afe%2FCF8F6E44-7F01-4362-A018-3550FDC4FBA8.PNG?v=1628000947344"
  );

  nextButton = loadImage(
    "https://cdn.glitch.com/b6d68073-8a64-4f58-82cf-bb41982df43f%2Fnext%20button%20part%20two.jpeg?v=1627918019170"
  );

  prince = loadImage(
    "https://cdn.glitch.com/e69074ac-4fd9-4739-a501-0ca59b1354f8%2FA78DACCA-6BB9-4EBE-A90F-0D0067019D4B.PNG?v=1628092782456"
  );

  swan = loadImage(
    "https://cdn.glitch.com/e69074ac-4fd9-4739-a501-0ca59b1354f8%2F9043268D-695E-41F9-BCB0-4064992A737B.PNG?v=1628096842606"
  );

  banner = loadImage(
    "https://cdn.glitch.com/e69074ac-4fd9-4739-a501-0ca59b1354f8%2F4CC73898-191C-47B8-B337-5CB7FBA9EDF0.PNG?v=1628098414856"
  );

  pinkShoes = loadImage(
    "https://cdn.glitch.com/e69074ac-4fd9-4739-a501-0ca59b1354f8%2F622E71D1-6347-4F21-8B12-E3AD08F86AB0.PNG?v=1628126973711"
  );

  purpleShoes = loadImage(
    "https://cdn.glitch.com/e69074ac-4fd9-4739-a501-0ca59b1354f8%2FA26B659F-1CDF-4031-A666-8A46EB28C75C.PNG?v=1628128028368"
  );

  blueShoes = loadImage(
    "https://cdn.glitch.com/2bfdaa99-d190-4490-9af9-c1083c625733%2F6C603491-0D9D-43B7-A208-64171F20AD48.PNG?v=1628169929129"
  );

  greenGem = loadImage(
    "https://cdn.glitch.com/2bfdaa99-d190-4490-9af9-c1083c625733%2F04FB83AF-63F8-406F-A348-BACC5AF2EF31.PNG?v=1628171008803"
  );

  yellowGem = loadImage(
    "https://cdn.glitch.com/2bfdaa99-d190-4490-9af9-c1083c625733%2F9BB96FE5-B751-4CB3-9D50-4D2458012BBF.PNG?v=1628171008803"
  );

  pinkGem = loadImage(
    "https://cdn.glitch.com/2bfdaa99-d190-4490-9af9-c1083c625733%2F3A46B54A-144E-4EFF-8885-0BCF187B5898.PNG?v=1628171008803"
  );
}

function setup() {
  // Code here runs only once
  createCanvas(1000, 500);
  backgroundColor = 0;

  barbie = new Barbie(barbieImg, 540, 80, 250, 420);
  clothingRack = [];
  // TODO(initialize all clothing objects with
  // an ID corresponding to its position in the clothingRack array)
  //orangeDress(x, y, width, height)
  clothingRack.push(
    new Clothing(0, purpleDress, 80, 90, 60, 90, 575, 107, 213, 360)
  );

  clothingRack.push(
    new Clothing(1, orangeDress, 80, 190, 60, 120, 522, 106, 280, 402)
  );

  clothingRack.push(
    new Clothing(2, blueDress, 80, 290, 60, 90, 522, 98, 280, 420)
  );

  clothingRack.push(
    new Clothing(3, greenDress, 80, 380, 60, 90, 515, 100, 275, 410)
  );

  clothingRack.push(
    new Clothing(4, pinkShoes, 170, 165, 100, 40, 640, 460, 63, 39)
  );

  clothingRack.push(
    new Clothing(5, blueShoes, 170, 215, 100, 40, 640, 460, 63, 39)
  );

  clothingRack.push(
    new Clothing(6, greenGem, 170, 300, 80, 70, 667, 220, 18, 18)
  );

  clothingRack.push(
    new Clothing(7, yellowGem, 230, 300, 40, 60, 667, 220, 20, 20)
  );

  clothingRack.push(
    new Clothing(8, pinkGem, 190, 380, 50, 50, 667, 220, 18, 18)
  );
  noStroke();
}

function draw() {
  // Code here runs continuously
  // making an intro screen
  if (screen == 0) {
    background(castle);
    fill(242, 230, 203);
    rect(300, 60, 500, 400);
    image(sparkles, 560, 70, 40, 30);
    image(sparkles, 600, 120, 20, 20);
    image(sparkles, 630, 65, 40, 30);
    image(sparkles, 670, 90, 20, 20);
    fill(112, 72, 156);
    textSize(36);
    text("How to Dress Odette", 420, 120);
    textFont("Caveat");
    image(heart, 350, 140);
    textSize(30);
    text("Click on a dress to put it on.", 390, 170);
    image(heart, 350, 200);
    textSize(30);
    text("Click the brushes to change her hair.", 390, 230);
    image(heart, 350, 260);
    textSize(30);
    text("Click and stick on pretty things like ", 390, 290);
    text("bows, crowns, jewels, & more.", 390, 320);
    image(heart, 350, 330);
    textSize(30);
    text("When you're done, click Next to meet", 390, 360);
    text("the prince!", 390, 390);
    // draw a button (figure out how to make it a hover button)
    fill(220, 189, 112);
    ellipse(580, 410, 60, 60);
    fill(250, 230, 183);
    ellipse(580, 410, 50);
    fill(112, 72, 156);
    textSize(25);
    text("play!", 558, 415);
  } else if (screen == 1) {
    //backgroundMusic.play();
    frameRate(speed);
    background(castle);
    // Displaying barbie
    barbie.display();
    // Displaying all clothing on rack
    for (let item of clothingRack) {
      item.displayOnRack();
    }
    //image(barbieImg, 540, 80, 250, 420);
    //image(orangeDress, 37, 105, 250, 420);
    fill(220, 189, 112);
    ellipse(923, 450, 60, 60);
    fill(250, 230, 183);
    ellipse(923, 450, 50);
    fill(112, 72, 156);
    textSize(25);
    text("next", 900, 455);
  } else if (screen == 2) {
    //backgroundMusic.stop();
    //ballroomTransitionMusic.play();
    background(ballroom);
    barbie.display();
    image(prince, 430, 70, 280, 430);
    image(swan, 280, 380, 100, 100);
    image(banner, 30, 70, 300, 150);

    // text
    fill(112, 72, 156);
    textSize(20);
    push(); // save transformation
    translate(86, 150); // location
    rotate((-13 / 180) * PI); // rotation
    text("They lived happily ever after!", 0, 0); // draw at 0,0 since rotation is centered at 0,0
    pop(); // reset transformation
    // play again button
    fill(220, 189, 112);
    ellipse(923, 450, 60, 60);
    fill(250, 230, 183);
    ellipse(923, 450, 50);
    fill(112, 72, 156);
    textSize(20);
    text("play", 908, 445);
    text("again", 904, 465);
  }
}
//fill(220, 189, 112);
// ellipse(580, 410, 60, 60);
//  fill(250, 230, 183);
// ellipse(580, 410, 50);
// fill(112, 72, 156);
// textSize(25);
//text("play again", 558, 415);

function mousePressed() {
  console.log(screen);
  if (screen == 0) {
    let d = dist(mouseX, mouseY, 580, 410);
    if (d < 30) {
      screen = 1;
      backgroundMusic.play();
    }
  } else if (screen == 1) {
    let d = dist(mouseX, mouseY, 923, 450);
    if (d < 30) {
      screen = 2;
      backgroundMusic.stop();
      ballroomTransitionMusic.play();
      ballroomMusic.pause();
      ballroomMusic.play();
    }
    // Iterate through clothing rack,
    //if the mouse position is within where the clothes is on rack,
    //then the clothing should be wear/takeOff
    for (let item of clothingRack) {
      if (
        mouseX > item.Cx &&
        mouseX < item.Cx + item.Cwidth &&
        (mouseY > item.Cy && mouseY < item.Cy + item.Cheight)
      ) {
        item.wear();
        accessoryChangeMusic.play();
      }
    }

    if (
      mouseX > barbie.x &&
      mouseX < barbie.x + barbie.width &&
      (mouseY > barbie.y && mouseY < barbie.y + barbie.height)
    ) {
      barbie.backToDefault();
    }
  } else if (screen == 2) {
    let d = dist(mouseX, mouseY, 923, 450);
    if (d < 30) {
      screen = 0;
      barbie.backToDefault();
    }

    // let d = dist(mouseX, mouseY,558,415);
    // if (d < 30) {
    //   screen ==0;
    // }
    // Logic for prince screen
  }
}
class Barbie {
  constructor(image, x, y, width, height) {
    // Define properties
    // image: barbie image
    // x, y, width, height of barbie image
    // onBarbie: array of IDs of clothing she's wearing
    this.image = image;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.onBarbie = [];
  }

  display() {
    // Draw barbie
    image(this.image, this.x, this.y, this.width, this.height);

    // Going through onBarbie,
    // draw (with displayOnBarbie) each of the clothes barbie is wearing
    for (let id of this.onBarbie) {
      clothingRack[id].displayOnBarbie();
    }
  }

  backToDefault() {
    // Clear onBarbie so that barbie is wearing no clothes
    this.onBarbie = [];
  }
}

class Clothing {
  constructor(id, image, Cx, Cy, Cwidth, Cheight, Bx, By, Bwidth, Bheight) {
    // Define properties
    // ID (a unique number) corresponding to position in ClothingRack
    // image: p5 image
    // x, y, width, height for clothing on rack
    // x, y, width, height for clothing on barbie
    // isWearing (bool) for if the clothing item is worn or not
    this.id = id;
    this.image = image;
    this.Cx = Cx;
    this.Cy = Cy;
    this.Cwidth = Cwidth;
    this.Cheight = Cheight;
    this.isWearing = false;
    this.Bx = Bx;
    this.By = By;
    this.Bwidth = Bwidth;
    this.Bheight = Bheight;
  }

  wear() {
    // Put this ID of clothing into barbie array
    barbie.onBarbie.push(this.id);
    this.isWearing = true;
  }

  /* FEATURE REMOVED TO SCOPE DOWN (OUT OF TIME)
  takeOff() {
    // Remove this ID of clothing from barbie array (tricker, look into 'remove element from array')
    // isWearing = false
  }
  */

  displayOnRack() {
    // Display clothing on rack position
    image(this.image, this.Cx, this.Cy, this.Cwidth, this.Cheight);
  }

  displayOnBarbie() {
    // This will be called by barbie.Display()
    // Display clothing on barbie position
    image(this.image, this.Bx, this.By, this.Bwidth, this.Bheight);
  }
}
