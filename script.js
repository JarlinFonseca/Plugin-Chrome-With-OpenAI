document.addEventListener('DOMContentLoaded', function () {

  try {
    const prompt = document.getElementById('prompt');
    const convert = document.getElementById('convert');
    const result = document.getElementById('result');

    // const apiKey = "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"
    //const apiUrl = "https://api.openai.com/v1/images/generations"

    convert.addEventListener('click', async () => {
      const promptR = prompt.value;


      const response = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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'
        },
        body: JSON.stringify({
          "prompt": promptR,
          //"prompt": "A cute baby sea otter",
          "n": 1,
          "size": "1024x1024"
        })
      });
      const data = await response.json();
      console.log(data)
      image_url = data.data[0].url;

      document.getElementById("show").style.display = "block";

      document.getElementById("image").src = image_url;

      //document.getElementById("lnkPrueba").href = image_url;

       result.result = `${image_url} `;

    })

  } catch (error) {
    console.error('Request failed:', error);
    const messageError = document.getElementById('error');
    messageError.innerHTML = 'An error ocurred please try again later.'
  }


})

