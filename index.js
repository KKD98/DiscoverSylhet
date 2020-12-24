fetch('https://discoversylhet.herokuapp.com/places/allplaces')
    .then(response => response.json())
    .then(data => {
        // Do what you want with your data

        displayData(data);

    })
    .catch(err => {
        console.error('An error ocurred', err);
    });
const displayData = (data) => {
    data.map((value, index) => {
        return document.getElementById("imageCard").innerHTML +=
                       `           <!-- Portfolio -->
                            <ul class="portfolio-group" style="position: relative;left: 90px">
                                <!-- Portfolio Item -->
                                <li class="portfolio-item padding-20">
                                    <a href="#">`+
                                        `${(index % 2) ==0 ? `<figure class="animate fadeInLeft">`: `<figure class="animate fadeInRight">`}`
                                         +
                                            `<img alt="image1" src="${value.pic}">
                                            <figcaption>
                                                <h3> ${value.placename}</h3>
                                                <p>Location:- ${value.location}</p>
                                                <span>${value.description}</span>
                                                <br>
                                                <br>
                                                <p>Travel Cost:- About ${value.travelCost}</p>
                                                <p>Travel Time:-  ${value.travelTime}</p>

                                            </figcaption>
                                        </figure>
                                    </a>
                                </li>                               
                            </ul>`

    })
}
