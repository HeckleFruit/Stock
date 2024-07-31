<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Stock Image</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }
        img {
            max-width: 100%;
            height: auto;
            border: 5px solid #ccc;
        }
    </style>
</head>
<body>
    <img id="random-image" alt="Random Stock Image" src="https://via.placeholder.com/800x600?text=Loading...">

    <script>
        const apiKey = 'YOUR_ACCESS_KEY'; // Replace with your Unsplash API key
        const imageElement = document.getElementById('random-image');

        function fetchRandomImage() {
            const url = `https://api.unsplash.com/photos/random?client_id=${apiKey}`;

            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Network response was not ok: ${response.statusText}`);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('API Response:', data); // Log the response data
                    if (Array.isArray(data) && data.length > 0) {
                        const imageUrl = data[0].urls.regular;
                        imageElement.src = imageUrl;
                    } else {
                        imageElement.src = 'https://via.placeholder.com/800x600?text=No+Image+Available';
                    }
                })
                .catch(error => {
                    console.error('Error fetching image:', error);
                    imageElement.src = 'https://via.placeholder.com/800x600?text=Error+Loading+Image';
                });
        }

        // Fetch a random image on page load
        fetchRandomImage();
    </script>
</body>
</html>
