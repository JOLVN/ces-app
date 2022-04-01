// Show error card with animation

export function showError(error, element) {

    // Attribute text
    element.innerHTML = error

    // Appear
    setTimeout(() => {
        element.style.opacity = "1"
        element.style.animation = "appear 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000)"
    }, 300)

    // Disappear
    setTimeout(() => {
        element.style.opacity = "0"
        element.style.animation = "disappear 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000)"
    }, 3000)
}