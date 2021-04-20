<?php
define('PAGETITLE', 'Form Validation');
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
            <form id="formValidation" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>" method="post">
                <div>
                    <input type="text" name="actorName" id="actorName" required>
                    <input type="text" name="actorAge" id="actorAge" required>
                </div>
                <div>
                    <input type="text" name="actorFavGenre" id="actorFavGenre" required>
                </div>
                <div>
                    <button type="submit">OK</button>
                    <button type="reset">Cancel</button>
                </div>
            </form>
        </section>
    </main>
</body>
</html>