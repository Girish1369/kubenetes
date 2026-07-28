# employee-management
----------------------------------------   frontend ------------------------------------------------------
### connect to frontend instance install below dependencies 
```
sudo apt-get update 
#Install Nodejs
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash - &&\
sudo apt-get install -y nodejs 
sudo ufw allow 3000
sudo ufw allow 22    #allow incoming traffic on SSH
 ```
-------------------- clone the git repo in frontend and update the backend server details------------------
```
git clone https://github.com/CloudTechDevOps/fullstack-employee-application.git

cd fullstack-employee-application/employeemanagement-frontend
cd src/service
vi EmployeeService.js
### update the  backend public ip value here

const BASE_URL = "http://52.87.237.51:8080/employee";

#BUILD FrontEnd APP gi to frontned directory then install and start 
cd ../../

npm install

nohup npm start >> app.log 2>&1 &
```
----------------frontend part is completed -----------------------------------
### ---------------------------------------------------backend--------------------------------

### connect to backend server install the dependencies

--------------- run the following commands
```
sudo apt-get update 

#Install Java 17
sudo apt install openjdk-17-jdk openjdk-17-jre -y 
#Install Maven
sudo apt install maven -y
sudo apt install mysql-server -y
sudo ufw allow 8080 #(for the Spring backend).
```

-----------------------clone the repo--------------------
```
git clone https://github.com/CloudTechDevOps/fullstack-employee-application.git

cd fullstack-employee-application/employeemanagmentbackend

#Connect backend app to RDS here pass the rds endpoint,username and password 
cd src/main/resources/
vi application.properties
```
```
spring.datasource.url=jdbc:mysql://database-1.cliwog82qxdy.us-east-1.rds.amazonaws.com/veera
spring.datasource.username=admin
spring.datasource.password=Cloud123
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.hibernate.ddl-auto=update
```
----------------------------- connect to rds------------------
--  connect to rds using command 
```
MySQL -h <rdsendpoint> -u<rds-user-name> -p<rds-password>
```
```
mysql -h database-1.cliwog82qxdy.us-east-1.rds.amazonaws.com -u admin -pCloud123
```
----------- after connecting the data create data base for thei project
```
create database veera;
exit;
```
---# switch to backend build and install Maven projects for below command 
```
cd ../../../
mvn clean install -DskipTests
```
---after done above command sitch to target and run the jar file 
#RUN Backend-app
```
cd target/
```
############give ls and run the below command for your jar file 
```
nohup java -jar employeemanagmentbackend-0.0.1-SNAPSHOT.jar > app.log 2>&1 &
```
------------Access backend-app on browser >>> IP_Full_Stack_Server:8080/employee

### Access Frontend-app on browser >>> IP_Full_Stack_Server:3000
 *** add the employee ***


# employee-management<img width="1417" alt="Screenshot 2022-06-14 at 14 47 09" src="https://user-images.githubusercontent.com/64640469/173594367-d363f981-2478-4466-8e3d-738eaf720fd2.png">
