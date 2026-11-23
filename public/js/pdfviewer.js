const docs_path = "/public/Assets/documents/";

const $ = id => document.getElementById(id);

const DOCUMENTS = {
    space_apps_hackathon_cert: {
      title: "Hackathon Space Apps 2026",
      path: "hackathoncert.pdf",
      description: 
      `Certificate of participation in the NASA Space Apps hackathon with team P.U.L.S.A.R. 
      This event took place in November 2026 at Carleton University (Ottawa). 
      Our team one of 4, made it to the next round (Globals) and we await the global results.`,
      links: [
        {
            url: "https://www.spaceappschallenge.org/",
            hypertext: "Check out NASA SpaceApps website!"
        },
        {
            url: "https://www.spaceappschallenge.org/2026/find-a-team/cosmood/",
            hypertext: "Check out our hackathon team!"
        }
      ]
    },
};

function createLinkCard(link) {
    return `<h3 class="link-node"><a href="${link.url}">&rarr; ${link.hypertext}</a></h3>`
}
  
function loadDocument(doc) {
    const container = document.getElementById("pdf-canvas");
    if (!container || !doc) return;

    container.innerHTML = `
        <h2><i class="fa-regular fa-file-pdf"></i>${doc.title}</h2>
        <iframe id="document-frame"
        src="${docs_path}${doc.path}"
        title="PDF Document"
        ></iframe>
    `;

    if (doc?.links) {
        doc.links.forEach(link => {
            const elem = document.createElement("li");
            elem.innerHTML = createLinkCard(link);
            $("credit-list").appendChild(elem);
        });
    }

    if (doc?.description) {
        $("desc-lbl").textContent = doc.description;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const id = new URLSearchParams(location.search).get("doc");
    loadDocument(DOCUMENTS[id]);
});