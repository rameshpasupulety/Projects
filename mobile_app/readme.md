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
        # change to super user
          sudo su
        # update the repositatory
          apt-get update
        # install the docker
          apt install docker.io -y
        # install the git
          apt install git -y
  ```
