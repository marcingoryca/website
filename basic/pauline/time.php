<?php
define('PAGETITLE', 'Time');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo PAGETITLE; ?></title>
</head>
<body>
<main>
    <section id="content">
        <header>
            <h1><?php echo PAGETITLE; ?></h1>
        </header>
        <div id="time">
            <?php
                echo date('h:i:s A'); 
            ?>
        </div>

        <div id="defaultTimeZone">
            <?php date_default_timezone_set("America/Chicago"); 
                  echo date('h a') . '<br>';

                  date_default_timezone_set('Asia/Tokyo');
                  echo date('H a') . '<br>';
            ?>
        </div>
    </section>
</main>
    
</body>
</html>