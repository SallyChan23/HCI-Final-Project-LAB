var aboutUsText = document.getElementById("aboutUsText");
      if (aboutUsText) {
        aboutUsText.addEventListener("click", function (e) {
          window.location.href = "aboutUs.html";
        });
      }
      
      var contactUsText = document.getElementById("contactUsText");
      if (contactUsText) {
        contactUsText.addEventListener("click", function (e) {
          window.location.href = "contactUs.html";
        });
      }
      
      var locationsText = document.getElementById("locationsText");
      if (locationsText) {
        locationsText.addEventListener("click", function (e) {
          window.location.href = "./location.html";
        });
      }