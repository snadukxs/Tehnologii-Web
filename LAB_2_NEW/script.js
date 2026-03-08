let resourcesData = [];

fetch("data/resources.json")
.then(response => response.json())
.then(data => {

    resourcesData = data.resources;

    displayResources(resourcesData);
});

function displayResources(resources){

    const list = document.getElementById("resourceList");
    list.innerHTML = "";

    resources.forEach(resource => {

        const li = document.createElement("li");

        li.innerHTML = `
        <strong>${resource.name}</strong><br>
        Type: ${resource.type}<br>
        Location: ${resource.location}<br>
        Program: ${resource.program}<br>
        Tags: ${resource.tags.join(", ")}
        `;

        list.appendChild(li);
    });

}

function filterStudy(){

    const studyPlaces = resourcesData.filter(r => r.type === "study");

    displayResources(studyPlaces);

}