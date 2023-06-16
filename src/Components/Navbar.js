const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark ">
                <div class="container-fluid ">
                    <a class="navbar-brand" href="#">Start React</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            
                        </ul>
                        <div class="d-flex">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbar-ul">
                                <li class="nav-item">
                                    <a class="nav-link active " aria-current="page" href="#">Portfolio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active " aria-current="page" href="#">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active " aria-current="page" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;