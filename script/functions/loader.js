// Show loader when page is loading

export function loader() {
    const loader = document.querySelector('.loader')
    if (loader) {
        window.addEventListener('load', () => {
            loader.classList.add('loader-unvisible')
            setTimeout(() => {
                loader.style.display = 'none'
            }, 400);
        })
    }
}
