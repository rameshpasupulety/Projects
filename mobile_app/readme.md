# Deployment of application in Docker.

#### Launch a new instances in aws and connect with the instance.


 -update the instance, install the docker, install git. 
 
 -put the all the requirements in bash and then run the bash file.

  
  ```bash
        # create a bash file
          nano requirements.sh
  ```

  -Enter the following commands in the bash file.

  ```bash
          #!/bin/bash

          # Update package repositories
           sudo apt-get update -y

          # Install Docker
           sudo apt-get install docker.io -y

          # Install Git
           sudo apt-get install git -y

          # Clone the Git repository
           git clone https://github.com/rameshpasupulety/Projects.git

        
  ```

  -check the versions of docker and git 
  ```bash
        docker --version
        git --version
 ```

```bash
      # check the list
        ls
      # Enter into git
        cd Projects/mobile_app
```
   -create a docker file by using nano/vim/vi/cat and put the following data in the file
```bash

 # # Use a lightweight web server image
FROM nginx:alpine

# Copy the HTML, CSS, and JavaScript files into the nginx public directory
COPY index.html /usr/share/nginx/html
COPY script.js  /usr/share/nginx/html
COPY styles.css /usr/share/nginx/html


# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
```


-Build the image 
```bash
sudo docker build -t <name of the app> .
```

-check the images
```bash
sudo docker images ls
```

-run the images
```bash
sudo docker run -d<ditach mode> --name<any name to image> -p 7070:80<any port number to the container> s3< original name of image> 
```
   <br />
<p align="center">
   <img src="images/mobile_app/Screenshot.png" alt="image" width="200" height="150">
  </a>

   <br />
<p align="center">
   <img src="images/mobile_app/Screenshot1.png" alt="image" width="200" height="150">
  </a>


  #### Create a accout in dockerhub
    -login with the credentials in the EC2 instance
    ```bash
    sudo docker login
    ```
    -give the credentials of dockerhub such as username and password

  #### tag the image 
   ```bash
   docker tag daysleft:latest ramesh4598/daysleft:latest
   ```
 -check the images list 
 #### now push the image into dockerhub
  ```bash
  docker push daysleft
  ```

 <br />
<p align="center">
   <img src="images/mobile_app/docker.png" alt="image" width="200" height="150">
  </a>
