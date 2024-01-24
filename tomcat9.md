# Tomcat installation 
### In this Project, we will experience the tomcat:

### Tools covered:
-  Aws Insstance 
-  Ubuntu
-  Git bash
-  Tomcat

#

-  AWS instance (Ubuntu) with instance type t2.micro and root volume 8GB and download the keypair in your local machine.
-  Go to the folder where you have place your key then Open GITBASH in local machine and enter your ssh the git bash automatically connects to the instance.
#
-  Update the apt repository 
   ```bash
        sudo apt-get update
   ```
-  Install Tomcat latest version
   ```bash
        sudo apt-get install -y tomcat9
   ```
-  Install Tomcat-Admin package also
   ```bash
        sudo apt-get install -y tomcat9-admin
   ```
-  Check the tomcat is intall or not
    Copy the public IP of the QA Server then paste in the browser and in the end enter :8080

## Setting the path of tomcat in jenkins

-  Enter Linux command in terminal
   ```bash
        cd /etc/tomcat9/
   ```
-  enter linux command in terminal to check list
   ```bash
         ls
   ```
-  You will find the file tomcat-users.xml 
-  open the file
   ```bash
        sudo vim tomcat-users.xml
   ```
-  In the end we need to add one statement 
   ```bash
        <user username="training" password="ramesh" roles="manager-script,manager-status,manager-gui"/>
   ```
-  save and quit 
    press esc
   ```bash
        :wq
   ```
-  When ever we do any changes done in any service we need to restart the service
   ```bash
        sudo service tomcat9 restart
   ```
