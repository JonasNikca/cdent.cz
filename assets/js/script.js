
document.getElementById("lang-toggle").addEventListener("click", function () {
    if (document.documentElement.lang === "cs") {
        document.documentElement.lang = "en";
        this.innerText = "CZ";
        document.querySelector("h1").innerText = "Family clinic in the heart of Vinohrady";
        document.querySelector(".hero-text p").innerText = "Modern dental center with personalized care. We are accepting new patients. We cooperate with insurance companies.";
        document.querySelector("#sluzby h2").innerText = "Services";
        document.querySelector("#tym h2").innerText = "Our Team";
        document.querySelector("#ukazky h2").innerText = "Case Studies";
        document.querySelector("#kontakt h2").innerText = "Contact";
        document.querySelector("#kontakt").innerHTML = "<h2>Contact</h2><p>Address: Vinohradská 196, Prague 3, 130 00</p><p>Phone: +420 272 735 268</p><p>Email: cdentceleryn@gmail.com</p>";
    } else {
        location.reload();
    }
});
