// Write all your Javascript here!
function initializer(locale) {
    $.ajax({
        url: 'https://techkaro-test.herokuapp.com/api/v1/getdata?lang=' + locale,
        success: function (data) {
               // light-nav-bar
    let lightNavBar = document.querySelector(".grey-nav");
    for (let i = 0 ; i < data.menuOotion.length ; i ++){
            lightNavBar.innerHTML +=`
    <li class="nav-item">
          <a href="#" class="nav-link text">${data.menuOptions[i]}</a>
       </li> `;
    }
    const dateObj = new Date(data.date);
    const month = months[dateObj.getMonth()];
    const date = dateObj.getDate();
    const year = dateObj.getFullYear()
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    let dateAndTime = document.querySelector(".date");
    dateAndTime.innerHTML =`<i class="fas fa-calendar-alt"></i> ${month},${date},${year} - ${hours}h ${minutes}m`;
    document.querySelector(".image").style=`background-image:url(${data.imageURL})`;
    document.querySelector(".flower-heading-1").innerHTML = `${data.info.heading}`;
    document.querySelector(".flower-para-2").innerHTML  = `${data.info.description}`;
    document.querySelector(".flower-heading-2").innerHTML  = `${data.sale.heading}`;
    document.querySelector(".flower-para-1").innerHTML  = `${data.sale.description}`;
       }
    });}
