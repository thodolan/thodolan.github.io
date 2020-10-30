/*---Menu function---*/
menuTransform = (x) => {
  if (!x.classList.contains("change")) {
    document.getElementById("mySidenav").style.width = "100vw";
    x.classList.toggle("change");
  } else {
    document.getElementById("mySidenav").style.width = "0";
    x.classList.toggle("change");
  }
};

/*sidenav dropdown menu*/
const services = document.querySelector(".dropdown-container");
dropdownToggle = () => {
  if (services.style.display !== "flex") {
    services.style.display = "flex";
  } else {
    services.style.display = "none";
  }
};

var servMen = document.getElementById("services-menu-item").style;
var servDrop = document.getElementById("services-dropdown").style;
var nav = document.getElementById("navbar").style;

servicesDropdown = () => {
  servDrop.display = "flex";
  nav.borderBottom = "none";
  servMen.backgroundColor = "var(--blue)";
  servMen.color = "#ffff";

}

servicesDropdownRemove = () => {
  servDrop.display = "none";
  servDrop.transition = "all 300ms";
  nav.borderBottom = "0.5px solid rgb(221, 221, 221)";
  nav.transition = "borderBottom 300ms";
  servMen.backgroundColor = "#ffff";
  servMen.color = "var(--blue)";
} 




/*Copyright year*/
document.querySelector(
  ".copyright"
).innerHTML = `Copyright 24-7 Drains Ltd ${new Date().getFullYear()}`;




/*Booking image*/

bookingImage = () => {
  const what = document.getElementById("what");
  const icon = document.getElementById("what-icon");
  const image = document.getElementById("booking-icon-img");
  image.style.display = "block";
  // image.setAttribute("class", "what-icon")
  

  if (what.value == "drains"){
    image.src = "resources/img/icons/003-drain.svg"
  }else if (what.value == "toilet"){
    image.src = "resources/img/icons/007-toilet-paper.svg"
  }else if (what.value == "bath"){
    image.src = "resources/img/icons/004-shower.svg"
  }else if (what.value == "sink"){
    image.src = "resources/img/icons/006-tap.svg"
  }
}


/*booking form buttons*/

bkBtn1 = () => {
  const form2 = document.getElementById("bk-form-2");
  form2.style.display = "block";
  // form2.style.marginTop = "700px"; /*height of navbar*/
  form2.scrollIntoView(false);
}

bkBtn2 = () => {
  const form3 = document.getElementById("bk-form-3");
  form3.style.display = "block";
  // form3.style.marginTop = "calc(65px + 2vw)"; /*height of navbar*/
  form3.scrollIntoView(false);

}

bkBtn3 = () => {
  const form4 = document.getElementById("bk-form-4");
  form4.style.display = "block";
  // form4.style.marginTop = "calc(65px + 2vw)"; /*height of navbar*/
  form4.scrollIntoView(false);
}



/*Close Virus banner*/
closeVirus = () => {
  document.getElementById("section-2").style.display = "none";
  document.getElementById("section-3b").style.marginTop = "var(--nav-height)";
}