<?php
define('PAGETITLE', 'Date');
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
            <?php
                $year = date('Y');
                $month = date('m');
                $day = date('d');
                $dayOfTheWeek = date('l');
                $date1 = date('Y/m/d');
                $date2 = date("d/m/Y-l");
                echo "Year:" . $year . "<br/>";
                echo "Month:" . $month . "<br/>";
                echo "Day: " . $day . "<br/>";
                echo "Day of the week:" . $dayOfTheWeek . "<br/>";
                echo "Date 1: " . $date1 . "<br>";
                echo "Date 2: " . $date2 . "<br>";

                echo "Time: " . date('H');
            ?>
        </section>
    </main>
</body>
</html>