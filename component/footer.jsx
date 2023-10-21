import dynamic from "next/dynamic";

const Footer = () => {
    return (
        <>
        <footer id="footer">
            <div class="container text-center wow zoomIn" data-wow-duration="700ms" data-wow-delay="300ms">
            <p>&copy; 2023 <a href="#">Agarocorp Oil & Gas LLC</a> All rights reserved.</p>
            </div>
            <a data-scroll href="#navigation" class="to-top"></a>
        </footer>
        </>
    )
}

export default dynamic (() => Promise.resolve(Footer), {ssr: false})