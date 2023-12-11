function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
    const img = document.querySelector(".profile img")

    if (html.classlist.contains("light")){
        img.setAttribute("src", "")
    } else {
        img.setAttribute("src", "")
    }
}