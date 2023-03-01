document.addEventListener('DOMContentLoaded', function () {

  try {
    const prompt = document.getElementById('prompt');

    const generate = document.getElementById('generate');

    generate.onclick = function () {
      if (prompt.value.trim() == "") {
        alert("You must enter a prompt in the field (message that generates the desired image).");
        document.getElementById('aviso').style.display = "block";
        document.getElementById('aviso').innerHTML = "You have not entered any message."
      } else document.getElementById('aviso').style.display = "none";
    };
    const result = document.getElementById('result');

    // const apiKey = "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"
    //const apiUrl = "https://api.openai.com/v1/images/generations"

    generate.addEventListener('click', async () => {
      const promptR = prompt.value.trim();

      console.log(promptR)
      if (promptR != null && promptR != "") {
        document.getElementById("spinner").style.display = "block";
        document.getElementById("show").style.display = "none";
        const response = await fetch('https://api.openai.com/v1/images/generations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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'
          },
          body: JSON.stringify({
            "prompt": promptR,
            "n": 1,
            "size": "1024x1024"
          })
        });

        const data = await response.json();
        // línea ocultando el spinner
        document.getElementById("spinner").style.display = "none";

        console.log(data)
        image_url = data.data[0].url;

        document.getElementById("show").style.display = "block";

        document.getElementById("image").src = image_url;

        //document.getElementById("result").href = image_url;
        result.href = `${image_url} `;

        //Send email feature

        const form = document.getElementById('sendEmailForm');
        var emailBody = "Hola! la url de tu imagen generada es: " + image_url;

        form.addEventListener('submit', async (event) => {

          var email = document.getElementById("email").value;

          const response = await fetch('http://localhost:8080/api/sendMail', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              "subject": "Imagen IA",
              "body": emailBody,
              "addressee": email
            })
          });

        });

        //End Send email feature
      }

    })

  } catch (error) {
    console.error('Request failed:', error);
    const messageError = document.getElementById('error');
    messageError.innerHTML = 'An error ocurred please try again later.'
  }


})

