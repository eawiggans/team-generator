
const generateManager = (managerData) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
<nav class="navbar navbar-dark bg-primary" style="justify-content: center;">
  Team Profile
</nav>
<div class="card employee-card" style="width: 18rem;">
<div class="card-header bg-primary">
    <h2 class="card-title">${managerData.getName()}</h2>
    <h3 class="card-title">${managerData.getRole()}</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">ID: ${managerData.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${managerData.getEmail()}">${managerData.getEmail()}</a></li>
        <li class="list-group-item">Office Number: ${managerData.getOfficeNumber()}</li>
    </ul>
</div>
</div>
</body>
</html>

    `;
} 

module.exports = generateManager;