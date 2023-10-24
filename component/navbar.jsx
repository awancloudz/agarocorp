'use client'
import dynamic from "next/dynamic";
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const currentRoute = usePathname();
    return (
        <>
        {/* <!-- Header --> */}
        <header id="navigation">
            <div class="navbar main-nav navbar-expand-lg" role="banner">
            <div class="container">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"><i class="fa fa-align-justify"></i></span>
                </button>
                <a class="navbar-brand" href="/">
                <h1><img class="img-fluid" src="images/logo.png" alt="logo" width="200px"/></h1>
                </a>
                <div class="top-bar">
                <span><a href="#"><i class="fa fa-envelope"></i> info@agarocorp.com</a></span>
                <span><i class="fa fa-phone"></i>+971 4 239 4244 / +971 4 882 1166 </span>
                </div>
                <nav id="navbarNav" class="collapse navbar-collapse navbar-right justify-content-end">
                <ul class="nav navbar-nav">
                <li className={currentRoute === "/" ? "scroll current" : "scroll"}><a href="/">Home</a></li>
                <li className={currentRoute === "/about" ? "scroll current" : "scroll"}><a href="/about">About</a></li>
                <li className={currentRoute === "/contact" ? "scroll current" : "scroll"}><a href="/contact">Contact</a></li>
                </ul>
                </nav>
            </div>
            </div>
        </header>
        </>
    )
}

export default dynamic (() => Promise.resolve(Navbar), {ssr: false})