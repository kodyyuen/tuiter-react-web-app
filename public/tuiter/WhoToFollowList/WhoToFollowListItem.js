const WhoToFollowListItem = (who) => {
    return(`
    <li class="list-group-item">
        <div class="row d-flex align-items-center">
            <div class="col-2">
                <img src="${who.avatarIcon}"
                    class="rounded-circle" width="50px">
            </div>
            <div class="col-6 text-nowrap">
                <div class="col-12">
                    <b>${who.userName}</b> <i class="fa fa-check-circle"></i>
                </div>
                <div class="col-12">
                    ${who.handle}
                </div>
            </div>
            <div class="col-4">
                <button class="btn rounded-pill bg-primary text-white float-end">Follow</button>
            </div>
        </div>
    </li>
    `);
}

export default WhoToFollowListItem;
/* <ul class="list-group">
    <li class="list-group-item">
        <b>Who to follow</b>
    </li>
    <li class="list-group-item">
        <div class="row d-flex align-items-center">
            <div class="col-2">
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png"
                    class="rounded-circle" width="50px">
            </div>
            <div class="col-6 text-nowrap">
                <div class="col-12">
                    <b>Java</b> <i class="fa fa-check-circle"></i>
                </div>
                <div class="col-12">
                    @Java
                </div>
            </div>
            <div class="col-4">
                <button class="btn rounded-pill bg-primary text-white float-end">Follow</button>
            </div>
        </div>
    </li>
    <li class="list-group-item">
        <div class="row d-flex align-items-center">
            <div class="col-2">
                <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/j3dbh6kok0dket3uz2vy"
                    class="rounded-circle" width="50px">
            </div>
            <div class="col-6 text-nowrap">
                <div class="col-12">
                    <b>Relativity Space</b> <i class="fa fa-check-circle"></i>
                </div>
                <div class="col-12">
                    @relativityspace
                </div>
            </div>
            <div class="col-4">
                <button class="btn rounded-pill bg-primary text-white float-end">Follow</button>
            </div>
        </div>
    </li>
    <li class="list-group-item">
        <div class="row d-flex align-items-center">
            <div class="col-2">
                <img src="https://cdn.worldvectorlogo.com/logos/virgin-1.svg" class="rounded-circle"
                    width="50px">
            </div>
            <div class="col-6 text-nowrap">
                <div class="col-12">
                    <b>Virgin Galactic</b> <i class="fa fa-check-circle"></i>

                </div>
                <div class="col-12">
                    @virgingalactic
                </div>
            </div>
            <div class="col-4">
                <button class="btn rounded-pill bg-primary text-white float-end">Follow</button>
            </div>
        </div>
    </li>
    <li class="list-group-item">
        <div class="row d-flex align-items-center">
            <div class="col-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png"
                    class="rounded-circle" width="50px">
            </div>
            <div class="col-6 text-nowrap">
                <div class="row">
                    <div class="col-12">
                        <b>NASA</b> <i class="fa fa-check-circle"></i>
                    </div>
                    <div class="col-12">
                        @NASA
                    </div>
                </div>

            </div>
            <div class="col-4">
                <button class="btn rounded-pill bg-primary text-white float-end">Follow</button>
            </div>
        </div>
    </li>
    <li class="list-group-item">
        <div class="row d-flex align-items-center">
            <div class="col-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/800px-Tesla_T_symbol.svg.png"
                    class="rounded-circle" width="50px">
            </div>
            <div class="col-6 text-nowrap">
                <div class="col-12">
                    <b>Tesla</b> <i class="fa fa-check-circle"></i>
                </div>
                <div class="col-12">
                    @Tesla
                </div>
            </div>
            <div class="col-4">
                <button class="btn rounded-pill bg-primary text-white float-end">Follow</button>
            </div>
        </div>
    </li>
</ul> */