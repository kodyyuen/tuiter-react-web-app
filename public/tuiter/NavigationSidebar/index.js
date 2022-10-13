const NavigationSidebar = () => {
    return (`
    <div class="list-group mb-2">
        <span class="list-group-item">
            <i class="fab fa-twitter"></i>
        </span>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa fa-home"></i>
            <span class="d-none d-xl-inline d-xxl-inline">Home</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action active">
            <i class="fa fa-hashtag"></i>
            <span class="d-none d-xl-inline d-xxl-inline">Explore</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa fa-bell"></i>
            <span class="d-none d-xl-inline d-xxl-inline">Notifications</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa fa-envelope"></i>
            <span class="d-none d-xl-inline d-xxl-inline">Messages</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa fa-bookmark"></i>
            <span class="d-none d-xl-inline d-xxl-inline">Bookmarks</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa fa-list"></i>
            <span class="d-none d-xl-inline d-xxl-inline">Lists</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa fa-user"></i>
            <span class="d-none d-xl-inline d-xxl-inline">Profile</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
            <span class="fa-stack" style="font-size: 8px">
                <i class="fas fa-circle fa-stack-2x"></i>
                <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
            </span>
            <span class="d-none d-xl-inline d-xxl-inline">More</span>
        </a>
    </div>
    <button class="btn rounded-pill bg-primary text-white w-100">Tuit</button>
    `);
}
//
// $('#wd-explore').append($(NavigationSidebar));
// $(NavigationSidebar);
export default NavigationSidebar;