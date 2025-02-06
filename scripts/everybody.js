const fallbackWebsite = "https://youtu.be/dQw4w9WgXcQ";

const endpointSquad = 'items/person/?filter={"squads":{"squad_id":15}}';


const EverybodyURL = baseURL + endpointSquad;

getData(EverybodyURL).then( dataVanIedereen => {

let person = dataVanIedereen.data;

let everbodysection = document.querySelector("section:nth-of-type(2)")

    person.forEach( person => {

     let personName = person.name;
     let personImg = person.avatar;
     let personwebsite = person.website;

     let getalTussen0en1 = Math.random();
     let getalTussen0en5 = getalTussen0en1 * 5;
     let afgerondGetalTussen0en4 = Math.floor(getalTussen0en5);
     let afgerondGetalTussen1en5 = afgerondGetalTussen0en4 * 1;

     if (personImg ) {
     } else{
         personImg = "images/placeholder2.svg";
     }

     if( personwebsite) {
     } else{
        personwebsite = "fallbacksite";
     }
        
      let personHTML = `<article>
      <h3>${personName}</h3>
      <img src="${personImg}" alt="Krijn Hoetmer">
      <a href="${personwebsite}" aria-label="de website van Krijn Hoetmer">website</a>
    </article>`;
    
    everbodysection.insertAdjacentHTML( 'beforeend' , personHTML);
    })

})












/**************/
/* SPIEKBRIEF */
/**************/

// const urlSquad = baseURL + endpointSquad;

// const list = document.querySelector('section:nth-of-type(2)');

// getEverybody();

// function getEverybody() {
// 	getData(urlSquad).then( data => { 

// 		const persons = data.data;

// 		persons.forEach(person => {

// 			let personName = person.name;
// 			let personImgSrc = person.avatar;
// 			let personWebsite = person.website;
	
// 			if (!personImgSrc) {
// 				let randomNr =  Math.floor( Math.random() * 5 ) + 1;
// 				personImgSrc = `images/placeholder${randomNr}.svg`;
// 			}

// 			if (!personWebsite) {
// 				personWebsite = fallbackWebsite;
// 			}

// 			personHTML = 
// 				`<article>
// 					<h3>${personName}</h3>
// 					<img src="${personImgSrc}" alt="${personName}">
// 					<a href="${personWebsite}" aria-label="de website van ${personName}">website</a>
// 				</article>`;

// 				list.insertAdjacentHTML('beforeend', personHTML);
// 		});
// 	});
// }