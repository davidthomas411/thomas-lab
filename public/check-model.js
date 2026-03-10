// Simple script to check if the model file exists
;(() => {
  const modelUrl = "https://gruc9opbjll8ofcl.public.blob.vercel-storage.com/scene.glb"

  fetch(modelUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      return response.blob()
    })
    .then((blob) => {
      console.log("Model file exists and is accessible!")
      console.log("File size:", (blob.size / 1024 / 1024).toFixed(2), "MB")

      const div = document.createElement("div")
      div.style.position = "fixed"
      div.style.top = "10px"
      div.style.right = "10px"
      div.style.padding = "10px"
      div.style.background = "green"
      div.style.color = "white"
      div.style.borderRadius = "5px"
      div.textContent = "Model file exists! ✓"
      document.body.appendChild(div)
    })
    .catch((error) => {
      console.error("Error checking model file:", error)

      const div = document.createElement("div")
      div.style.position = "fixed"
      div.style.top = "10px"
      div.style.right = "10px"
      div.style.padding = "10px"
      div.style.background = "red"
      div.style.color = "white"
      div.style.borderRadius = "5px"
      div.textContent = `Error: ${error.message}`
      document.body.appendChild(div)
    })
})()
