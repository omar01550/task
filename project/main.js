let allInputSearch = document.querySelectorAll("[type=search]");
let searchResultSection = document.querySelector(".search-result-section")

const data = [
    {
        title: "next js",
        image: "./download.png",
        company: "apple",
        location: "canada",
        applications: 200,
        aplied: 20



    },
    {
        title: "graph ql",
        image: "./download.png",
        company: "apple",
        location: "canada",
        applications: 200,
        aplied: 20



    },
    {
        title: "express",
        image: "./download.png",
        company: "apple",
        location: "canada",
        applications: 200,
        aplied: 20



    },
    {
        title: "react",
        image: "./download.png",
        company: "apple",
        location: "canada",
        applications: 200,
        aplied: 20



    }
]

const createCard = (ele) => {
    return (
        `
        <div class="col-8 offset-2 mt-5 bg-white p-3 bg-primary" style="border-radius: 10px;;">
        <div class="row">
            <div class="col-2">
                <i class="fa-brands fa-apple" style="font-size: 4rem;"></i>
            </div>
            <div class="col-10">
                <h3 class="ml-sm-5 ml-md-0">${ele.title}</h3>
                <p>apple</p>
            </div>
        </div>
        <div class="row">
            <div class="col-1" style="text-align: end;"><i class="fa-solid fa-location-dot"></i></div>
            <div class="col-2">
                <p>mumbei</p>
            </div>

        </div>
        <div class="row">
            <div class="col-1" style="text-align: end;">
                <i class="fa-regular fa-id-card"></i>
            </div>
            <div class="col">
                <p>adobe illustrator , adobe photo.</p>
            </div>
        </div>
        <div class="row">
            <div class="col-1" style="text-align: end;">
                <i class="fa-solid fa-user-group"></i>
            </div>
            <div class="col-2">
                24 applications
            </div>
            <div class="col-1" style="text-align: end;"><i class="fa-solid fa-mobile-screen-button"></i></div>
            <div class="col-3">applied today</div>
        </div>
        <div class="d-flex justify-content-start">
            
                <button class="btn px-2 py-1  text-white border-none">intership</button>
            
            
                <button class="ml-2 px-2 py-1 text-white border-none outline-none btn">permanent job</button>
            


        </div>
        <div class="row offset-2">
            <div class="col-3 text-primary text-end ">view application</div>
            <div class="col-1">
                <i class="fa-solid fa-chevron-right text-primary" style="font-size: .78rem; "></i>
            </div>
            <div class="col-1">
                <i class="fa-regular fa-bookmark"></i>
            </div>
            <div class="col-1">
                <i class="fa-solid fa-arrow-up-from-bracket"></i>
            </div>
        </div>
    </div>
    `

    )
}

const renderUi = (searchResult) => {

    searchResultSection.innerHTML = '';
    if (searchResult.length > 0) {
        searchResult.forEach(ele => {
            searchResultSection.innerHTML += createCard(ele);
        })
    } else {
        // empty result
        searchResultSection.innerHTML = `<div class="no-results mt-5">
        <h2>No Results Found</h2>
        <p>Sorry, your search did not match any results. Please try again.</p>
      </div>`
    }

}

const handleSearch = (e) => {
    let searchKey = e.target.value;
    searchResult = data.filter(ele => ele.title.includes(searchKey));
    renderUi(searchResult);
    // window.scrollTo({
    //     left: "0",
    //     top: searchResultSection.offsetTop
    // })

}



allInputSearch.forEach((ele) => {
    ele.addEventListener("keyup", handleSearch);

})


renderUi(data);