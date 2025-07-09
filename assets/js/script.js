
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

;
    const startPos = container.getBoundingClientRect().left + container.getBoundingClientRect().width / 2;
    update(startPos);
    container.addEventListener('mousemove', e => update(e.clientX));
    container.addEventListener('touchmove', e => {
        if (e.touches.length) update(e.touches[0].clientX);
    }, { passive: true });
});

// === Image Comparison Slider ===
document.querySelectorAll('.ba-container').forEach(container => {
    const afterImg = container.querySelector('img.after');
    const handle = container.querySelector('.ba-handle');

    // set initial state
    const setPosition = (pos) => {
        afterImg.style.width = (pos * 100) + '%';
        handle.style.left = (pos * 100) + '%';
    };
    setPosition(0.5);

    const updateFromEvent = (e) => {
        e.preventDefault();
        const rect = container.getBoundingClientRect();
        const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
        let pos = x / rect.width;
        pos = Math.max(0, Math.min(1, pos));
        setPosition(pos);
    };

    const startDrag = (e) => {
        updateFromEvent(e);
        window.addEventListener('pointermove', updateFromEvent);
        window.addEventListener('pointerup', endDrag);
        window.addEventListener('touchmove', updateFromEvent, {passive:false});
        window.addEventListener('touchend', endDrag);
    };
    const endDrag = () => {
        window.removeEventListener('pointermove', updateFromEvent);
        window.removeEventListener('pointerup', endDrag);
        window.removeEventListener('touchmove', updateFromEvent);
        window.removeEventListener('touchend', endDrag);
    };

    container.addEventListener('pointerdown', startDrag);
    container.addEventListener('touchstart', startDrag, {passive:false});
});
