getData(myURL).then( data71 => {
//data ophalen van de gegeven URL en vervolgens de data het processen.

    let mySection = document.querySelector("section:nth-of-type(1)")
//

    let myAvatar = data71.data.avatar;
//Avatar van de opgehaalde data uithalen.

    let myName = data71.data.name;
//Naam van de opgehaalde data uithalen.

    let myImage = document.createElement("img");
//nieuw afbeelding element maken in JS.

   



    myImage.src = myAvatar;

    mySection.appendChild(myImage);
} );














/**************/
/* SPIEKBRIEF */
/**************/

// const mySection = document.querySelector('section:nth-of-type(1)');

// getMyImage();

// function getMyImage() {
// 	getData(urlMe).then( data => {  
// 		const myData = data.data;
// 		let myName = myData.name;
// 		let myImgSrc = myData.avatar;

// 		if (!myImgSrc) {
// 			myImgSrc = "images/placeholder1.svg";
// 		}

// 		const myImg = document.createElement("img");

// 		myImg.src = myImgSrc;
// 		myImg.alt = myName;

// 		mySection.append(myImg);
// 	});	
// }