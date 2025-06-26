import Link from "next/link"


const HeaderMobileWrapper = () => {
  return (
    <div className="header_mobileMenuWrapper__Kf7jF">
        <div className="mobile-menu-wrapper">
            <div className="mobile-menu_mobileMenu__xqbOP">
                <div className="jsx-4234741370 ">
                    <ul>
                        <li>
                            <Link className="mute" data-zone="same" href="/">Home</Link>
                        </li>
                        <li>
                            <Link className="mute" title="About" data-zone="same" href="/about">About</Link>
                        </li>
                        <li>
                            <Link className="mute" title="Publicações" data-zone="same" href="/publiWeb">Publicações</Link>
                        </li>
                        <li>
                            <Link className="mute" title="Cursos" data-zone="same" href="/curso">Cursos</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderMobileWrapper