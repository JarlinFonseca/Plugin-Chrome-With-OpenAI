document.addEventListener('DOMContentLoaded', function () {

  try {
    const prompt = document.getElementById('prompt');

    const generate = document.getElementById('generate');

    generate.onclick = function () {
      if (prompt.value.trim() == ""){ 
        alert("You must enter a prompt in the field (message that generates the desired image).");
        document.getElementById('aviso').style.display = "block";
        document.getElementById('aviso').innerHTML ="You have not entered any message."
      }else document.getElementById('aviso').style.display = "none";
    };
    const result = document.getElementById('result');

    generate.addEventListener('click', async () => {
      const promptR = prompt.value.trim();

      console.log(promptR)
      if (promptR != null && promptR != "") {
        document.getElementById("spinner").style.display="block";
        document.getElementById("show").style.display="none";
        const response = await fetch('https://api.openai.com/v1/images/generations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            /* En este apartado dondo dice API-KEY debe reemplazarla por su propia API-KEY generada en OpenAI */
            'Authorization': 'Bearer API-KEY'
          },
          body: JSON.stringify({
            "prompt": promptR,
            "n": 1,
            "size": "1024x1024"
          })
        });
       
        const data = await response.json();
        
        // línea ocultando el spinner
        document.getElementById("spinner").style.display="none";

        console.log(data)
        image_url = data.data[0].url;

        document.getElementById("show").style.display = "block";

        document.getElementById("image").src = image_url;

        result.href = `${image_url} `;
      }

    })

  } catch (error) {
    console.error('Request failed:', error);
    const messageError = document.getElementById('error');
    messageError.innerHTML = 'An error ocurred please try again later.'
  }


})

