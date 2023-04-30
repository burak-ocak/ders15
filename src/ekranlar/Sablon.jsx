import { Link, Outlet } from "react-router-dom";

function Sablon() {

    /*
        Aşağıdaki link componentleri a etiketleri üretir. Ve yönlendirme işlemleri yaparlar.

        section etiketinin içerisinde yazılan Outlet componenti Section'un içerisinde o sırada kullanılacak diğer componentlerin(ziyaretçinin yönelmek istediği sayfa) 
        o section etiketinin içerisinde yansıtılmasını sağlar.
    */

    return (
        <>
            <header className="container mb-3">
                <nav>
                    <Link className="nav-link" to="/">Ana Ekran</Link>
                    <Link className="nav-link" to="/blog">Blog Ekranı</Link>
                    <Link className="nav-link" to="/iletisim">İletişim Ekranı</Link>
                </nav>
            </header>
            <section className="container mb-3">
                <Outlet />
            </section>
            <footer className="container">Tüm hakları saklıdır</footer>
        </>
    );
};

export default Sablon;