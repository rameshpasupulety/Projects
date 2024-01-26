### Multi container Architecture using docker

## $ --link Option

-Start two busybox containers and create link between them
-Create 1st busy box container
```bash
   docker run --name c10 -it   busybox
```

How to come out of the container without exit
```bash
   ( ctrl + p  + q)
```
-Create 2nd busy box container  and establish link to c1 container
```bash
   docker run   --name  c20 --link c10:c10-alias  -it     busybox   ( c10-alias  is  alias name)
```
-How to check  link is established for not?
```bash
   ping c10
```


****************************************************************************************************************

-Ex 2:  Creating development environment using docker

-Start mysql as container and link it with wordpress container.

-TO start mysql as container
```bash
   docker run --name mydb  -d  -e  MYSQL_ROOT_PASSWORD=sunil  mysql:5
```
-Check whether the container is running or not
```bash
   docker container ls
```
-TO start wordpress container
```bash
   docker run  --name mysite  -d  -p 5050:80 --link mydb:mysql  wordpress
```
-Check wordpress installed or not through Open browser 
```bash
   public_ip:5050
   18.138.58.3:5050
```










