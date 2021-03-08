window.onload = function () {

    //backgroundColor
    function setBackgroundColor(color) {
        let content = document.querySelector("#content")
        content.style.backgroundColor = color
        localStorage.setItem("backgroundColor", color)
    }

    let backgroundColorButtons = document.querySelectorAll("#background-color>button")
    for (let index = 0; index < backgroundColorButtons.length; index += 1) {
        backgroundColorButtons[index].addEventListener("click", function(event) {
        setBackgroundColor(event.target.innerHTML)
    })
    }
    //

    // fontColor
    function setFontColor(color) {
        let panes = document.querySelector("#panes")
        panes.style.color = color;
        localStorage.setItem("fontColor", color)
    }

    let fontColorButtons = document.querySelectorAll('#font-color>button')
    for (let index = 0; index < fontColorButtons.length; index += 1){
        fontColorButtons[index].addEventListener("click", function(event) {
            setFontColor(event.target.innerHTML)
        })
    }
    //

    //fontSize
    function setFontSize(size) {
        let panes = document.querySelector("#panes")
        panes.style.fontSize = size
        localStorage.setItem("fontSize", size)
    }

    let fontSizeButtons = document.querySelectorAll('#font-size>button')
    for (let index = 0; index < fontSizeButtons.length; index += 1){
        fontSizeButtons[index].addEventListener("click", function(event) {
            setFontSize(event.target.innerHTML)
        })
    }
    //

    //lineHeight
    function setLineHeight(height) {
        let paragraphs = document.querySelectorAll("#panes")
        for (let i = 0; i < paragraphs.length; i += 1) {
          paragraphs[i].style.lineHeight = height
        }
        localStorage.setItem("lineHeight", height)
    }

    let lineHeightButtons = document.querySelectorAll("#line-height>button")
    for (let i = 0; i < lineHeightButtons.length; i += 1) {
      lineHeightButtons[i].addEventListener("click", function(event) {
        setLineHeight(event.target.innerHTML)
      })
    }
    //

    //fontFamily
    function setFontFamily(family) {
        let paragraphs = document.querySelectorAll("#panes")
        for (let i = 0; i < paragraphs.length; i += 1) {
          paragraphs[i].style.fontFamily = family
        }
        localStorage.setItem("fontFamily", family)
    }

    let fontFamilyButtons = document.querySelectorAll("#font-family>button")
    for (let i = 0; i < fontFamilyButtons.length; i += 1) {
        fontFamilyButtons[i].addEventListener("click", function(event) {
          setFontFamily(event.target.innerHTML)
        })
    }
    //

    function initialize() {
        let backgroundColor = localStorage.getItem("backgroundColor")
        if (backgroundColor) setBackgroundColor(backgroundColor)

        let fontColor = localStorage.getItem("fontColor")
        if (fontColor) setFontColor(fontColor)

        let fontSize = localStorage.getItem("fontSize")
        if (fontSize) setFontSize(fontSize)

        let lineHeight = localStorage.getItem("lineHeight")
        if (lineHeight) setLineHeight(lineHeight)

        let fontFamily = localStorage.getItem("fontFamily")
        if (fontFamily) setFontSize(fontFamily)
      }

      initialize()
}


