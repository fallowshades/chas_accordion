async function loader() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    console.log(data)

    const container = document.getElementById('fetched')
    console.log(container)

    data.forEach((object) => {
      const div = document.createElement('div')
      div.classList.add('section')
      div.textContent = object.title

      const description = document.createElement('div')
      description.classList.add('description')
      description.textContent = object.body

      container.appendChild(div)
      container.appendChild(description)

      div.addEventListener('click', () => {
        description.style.display =
          description.style.display === 'none' || !description.style.display
            ? 'block'
            : 'none'
      })
    })
  } catch (error) {
    console.log('Error fetching data:', error)
  }
}
loader()
// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target
  element.classList.toggle('active')
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
const titleElements = document.querySelectorAll('.title')

titleElements.forEach((titleElement) => {
  titleElement.addEventListener('click', toggle)
})
const section1Element = document.getElementById('section1')
section1Element.addEventListener('click', toggle)
console.log('linked')
