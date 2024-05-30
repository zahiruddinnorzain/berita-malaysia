<?php
// Allow requests from any origin
header("Access-Control-Allow-Origin: *");

// Check if the 'url' query parameter is set
if (isset($_GET['url'])) {
    // Get the RSS feed URL from the 'url' query parameter
    $url = $_GET['url'];

    // Use file_get_contents to fetch the RSS feed content
    $response = file_get_contents($url);

    // Check if the response is false (indicating an error)
    if ($response !== false) {
        // Output the RSS feed content
        echo $response;
    } else {
        // Output an error message
        echo "Error fetching the RSS feed.";
    }
} else {
    // Output an error message if the 'url' query parameter is not set
    echo "No URL provided.";
}
?>

<!-- dkt js  -->
<!-- const proxyUrl = 'https://localhost:3000/proxy.php?url=' + encodeURIComponent(rssUrl); -->
<!-- php -S localhost:3000 -t ./ -->