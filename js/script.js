
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
    document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);

    let oLastModif = new Date(document.lastModified);
    document.getElementById('lastDayModified').textContent=oLastModif.toLocaleDateString('en-US', options);

    document.querySelector('#copyright-year').innerText = new Date().getFullYear();
