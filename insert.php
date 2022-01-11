
<?php



$servername = "localhost";
$username = "root";
$password = "";
$dbname = "logins";


$email = $_POST['email'];
$Username = $_POST['Username'];
$Password = $_POST['Password'];

  
      







        $conn = new mysqli('localhost','root','','logins');
        if($conn->connect_error){
        //if error
            die('connection failed : '.$conn->connection_error);
    
        }else{
            $stmt = $conn->prepare("insert into register(email, Username, Password) values(?,?,?)");
    
            $stmt->bind_param("sss",$email, $Username, $Password);
            $stmt->execute(); 
            
            header("Location: items.html");
            $stmt->close();
            $conn->close();
    
        }
    
        ?>





