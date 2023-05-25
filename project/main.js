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
        <div class="card my-3  w-sm-100 w-md-50">
                        <div class="row">
                            
                            <div class="col-md-12">
                                <div class="card-body">
                                    <h5 class="card-title">${ele.title}</h5>
                                    <p class="card-text"><i class="fas fa-map-marker-alt me-2"></i>canada</p>
                                    <p class="card-text"><i class="fas fa-users me-2"></i>10 applications</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            
                                            <button type="button" class="btn btn-primary">Job</button>
                                            <button type="button" class="btn btn-primary">intern</button>
                                        </div>
                                        <a href="#" class="btn btn-primary">Apply Now</a>
                                    </div>
                                </div>
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
        
      </div>`
    }

}

const handleSearch = (e) => {
    let searchKey = e.target.value;
    searchResult = data.filter(ele => ele.title.includes(searchKey.toLowerCase() || searchKey.toUpperCase()));
    renderUi(searchResult);


}



allInputSearch.forEach((ele) => {
    ele.addEventListener("keyup", handleSearch);
    ele.addEventListener("blur", () => {
        window.scrollTo({
            left: "0",
            top: searchResultSection.offsetTop
        })
    })

})


renderUi(data);


//scroll-to-top
let scrollToTop = document.querySelector(".scroll-to-top");

scrollToTop.addEventListener("click", () => {
    window.scrollTo(
        {
            left: "0",
            top: "0"
        }
    )
})
window.onscroll = () => {
    console.log(true);
    if (window.scrollY > 600) {
        scrollToTop.classList.add("display-btn")
    } else {
        scrollToTop.classList.remove("display-btn")

    }
}