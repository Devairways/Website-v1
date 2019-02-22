const nav = document.querySelector("nav");
const profiel = document.querySelector("#profiel")
const ervaring = document.querySelector("#ervaring")
const skills = document.querySelector("#skills")
const blogspot = document.querySelector("#blogspot")
window.onscroll = logScroll;

// skillbars vullen
const lvl = ()=>{
	const skillLvl = document.querySelectorAll(".skillLvl");
	skillLvl.forEach(skill =>{
		if(skill.style.width < 20){
		let width = 10;
		let id = setInterval(()=>{
			if (width === 100){
				// clearInterval(id);
			}else {
				width++;
				skill.style.width = width +"%";
				skill.textContent = width +"%";
				skill.style.backgroundColor= "#4CAF50";
			}
		},20);}
     })
};
// scroll naar div
const scroll = (elem)=>{
	elem.scrollIntoView({behavior: "smooth", block: "start"});
};
// eventlisteners voor navigatie-klikken
const profileNav = document.querySelector("#profileNav").addEventListener("click", () =>{scroll(profiel)});
const pointer = document.querySelector("#pointer").addEventListener("click", () =>{scroll(profiel)});
const experienceNav = document.querySelector("#experienceNav").addEventListener("click", () =>{scroll(ervaring)});
const skillsNav = document.querySelector("#skillsNav").addEventListener("click", () =>{scroll(skills)});
const blogNav = document.querySelector("#blogNav").addEventListener("click", () =>{scroll(blogspot)});

// scrollmetingen voor Navbar
function logScroll(){
	let meting = profiel.getBoundingClientRect();
		if(meting.top < 70){
			nav.classList.add("navView");
			document.querySelector("#profileNav").classList.add("navSelected");
			}else{
				nav.classList.remove("navView");
				document.querySelector("#profileNav").classList.remove("navSelected");
		    };
	let meting1 = ervaring.getBoundingClientRect();
        if(meting1.top < 40){
			document.querySelector("#experienceNav").classList.add("navSelected");
			}else{
				document.querySelector("#experienceNav").classList.remove("navSelected");
		    };
	let meting2 = skills.getBoundingClientRect();
         if(meting2.top < 40){
			lvl()
			document.querySelector("#skillsNav").classList.add("navSelected")
			}else{
				document.querySelector("#skillsNav").classList.remove("navSelected");
		    };
	let meting3 = blogspot.getBoundingClientRect();
	     if(meting3.top < 40){
			document.querySelector("#blogNav").classList.add("navSelected");
			}else{
				document.querySelector("#blogNav").classList.remove("navSelected");
		    };	
};