<?php
define('PAGETITLE', 'Get');
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
        <header>
            <h1><?php echo PAGETITLE; ?></h1>
        </header>
        <section id="content">
            <form id="movieForm" action="moviesindex.php" method="get">
                <div>
                    <input type="text" name="movieTitle" placeholder="Movie title...">
                    <input type="text" name="movieDirector" placeholder="Director...">
                    <input type="text" name="movieGenre" placeholder="Genre...">
                </div>
                <div>
                    <input type="submit" name="submit" value="OK">
                    <input type="reset" name="cancel" value="Cancel">
                </div>
            </form> 
        </section>
</main>
</body>
</html>