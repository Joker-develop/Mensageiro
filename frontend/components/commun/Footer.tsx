const Footer = () => {
    const date = new Date();

    return(
        <div className="flex justify-center items-center">
            <span>Copyright &copy; {date.getFullYear()} - Publicidade IMPPM</span>
        </div>
    )
}

export default Footer;