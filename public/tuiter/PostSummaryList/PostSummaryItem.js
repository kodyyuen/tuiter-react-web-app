const PostSummaryItem = (post) => {
    // if (post.userName === '' || post.title === '') {
    //     return (`
    //     <div class="row border border-top-0 ms-0 me-0 bg-dark">
    //         <div class="col-sm-9 col-md-10 ps-3 pt-2 pb-2 pe-0">
    //             <p class="m-0 text-secondary">${post.topic}</p>
    //             <p class="m-0">
    //                 <b class="text-white">${post.userName}${post.title} </b>
    //                 <i class="fa fa-check-circle text-white"></i>
    //                 <span class="text-white"> - ${post.time}</span>
    //             </p>
    //         </div>
    //         <div class="d-flex align-items-center col-sm-3 col-md-2 p-2">
    //             <img src="${post.image}"
    //                 class="rounded w-100">
    //         </div>
    //     </div>
    //     `);
    // }
    // else {
        return (`
        <div class="list-group-item">
            <div class="row ms-0 me-0">
                <div class="col-sm-9 col-md-10 ps-1 pt-1 pb-1 pe-0">
                    <p class="m-0 text-secondary">${post.topic}</p>
                    <p class="m-0">
                        <b class="text-white">${post.userName} </b>
                        <i class="fa fa-check-circle text-white"></i>
                        <span class="text-secondary"> - ${post.time}</span>
                    </p>
                    <p class="m-0">
                        <b class="text-white">${post.title}</b>
                    </p>
                </div>
                <div class="d-flex align-items-center col-sm-3 col-md-2 p-2">
                    <img src="${post.image}"
                        class="rounded w-100">
                </div>
            </div>
        </div>
        `);
    //}
}

export default PostSummaryItem;

/* <div class="row">
    <div class="col-11 position-relative">
        <input class="form-control rounded-pill ps-5" placeholder="Search Tuiter">
        <i class="fa fa-search wd-pos-search"></i>
    </div>
    <div class="col-1 d-flex align-items-center">
        <i class="fa fa-cog wd-cog"></i>
    </div>
</div>

<ul class="nav nav-tabs mt-2 mb-2">
    <li class="nav-item">
        <a class="nav-link active" href="for-you.html">For you</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="trending.html">Trending</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="news.html">News</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="sports.html">Sports</a>
    </li>
    <li class="nav-item d-none d-md-block">
        <a class="nav-link" href="entertainment.html">Entertainment</a>
    </li>
</ul>

<div class="position-relative">
    <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" class="w-100">
    <h1 class="wd-image-text">SpaceX's Starship</h1>
</div>

<div class="row border border-top-0 ms-0 me-0">
    <div class="col-sm-9 col-md-10 ps-3 pt-2 pb-2 pe-0">
        <p class="m-0 text-secondary">Web Development</p>
        <p class="m-0">
            <b>ReactJS </b>
            <i class="fa fa-check-circle"></i>
            <span class="text-secondary"> - 2h</span>
        </p>
        <p class="m-0">
            <b>React.js is a component based front end library that makes it very easy to build Single
                Page Applications or SPAs</b>
        </p>
    </div>
    <div class="d-flex align-items-center col-sm-3 col-md-2 p-2">
        <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-512.png"
            class="rounded w-100">
    </div>
</div>

<div class="row border border-top-0 ms-0 me-0">
    <div class="col-sm-9 col-md-10 ps-3 pt-2 pb-2 pe-0">
        <p class="m-0">
            <b>JavaScript </b>
            <i class="fa fa-check-circle"></i>
            <span class="text-secondary"> - 2h</span>
        </p>
        <p class="m-0">
            <b>Javascript is a programming language that can run on browsers as well as desktops</b>
        </p>
        <p class="m-0 text-secondary">
            123K Tweets
        </p>
    </div>
    <div class="d-flex align-items-center col-sm-3 col-md-2 p-2">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            class="rounded w-100">
    </div>
</div>

<div class="row border border-top-0 ms-0 me-0">
    <div class="col-sm-9 col-md-10 ps-3 pt-2 pb-2 pe-0">
        <p class="m-0 text-secondary">Web Development</p>
        <p class="m-0">
            <b>jQuery </b>
        </p>
        <p class="m-0 text-secondary">
            123K Tweets
        </p>
    </div>
    <div class="d-flex align-items-center col-sm-3 col-md-2 p-2">
        <img src="https://www.interviewbit.com/blog/wp-content/uploads/2021/10/jquery-logo-vertical_large_square.png"
            class="rounded w-100">
    </div>
</div>

<div class="row border border-top-0 ms-0 me-0">
    <div class="col-sm-9 col-md-10 ps-3 pt-2 pb-2 pe-0">
        <p class="m-0 text-secondary">Web Development</p>
        <p class="m-0">
            <b>NodeJS </b>
            <i class="fa fa-check-circle"></i>
            <span class="text-secondary"> - 2h</span>
        </p>
        <p class="m-0 text-secondary">
            123K Tweets
        </p>
    </div>
    <div class="d-flex align-items-center col-sm-3 col-md-2 p-2">
        <img src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
            class="rounded w-100">
    </div>
</div> */