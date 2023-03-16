window.addEventListener("load", (event) => {

    const apiUrl = 'https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects';

    async function fetchData() {
        try {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            const id1 = data.filter(x => x.uuid == '1')[0];

            const name = document.getElementById("name");
            const description = document.getElementById("description");
            const content = document.getElementById("content");
            const image = document.getElementById("image");
            const completedOn = document.getElementById("completed_on");

            name.innerText = id1.name;
            description.innerText = id1.description;
            content.innerHTML = `<p class="bt20">${id1.content}</p>`;
            completedOn.innerText = id1.completed_on;
            image.innerHTML = `<img src="${id1.image}" alt="Simplify"><img src="${id1.image}" alt="Simplify">`;


        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    fetchData();

});

