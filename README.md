# Hollywood-Project
It contains curd operation,  front end in  angular 17 and back-end in spring boot 

# Application required to run Hollywood project 
1)	Node v20.12.2
2)	JDK 17
3)	Apache Maven 3.8.8  
4)	MySQL Server 8.2

# Run  Hollywood api  application
1)	 cd hollywood.api

2) change application.properties (in src/main/resources)if you are using different port,username,password
	// here my mysql running on port 3307
3)	spring.datasource.url=jdbc:mysql://localhost:3307/hollywood?zeroDateTimeBehavior=convertToNull&useSSL=false&useLegacyDatetimeCode=false&serverTimezone=UTC&enableQueryTimeouts=false&autoReconnet=true&useUnicode=true&characterEncoding=utf8
4)	spring.datasource.username=root
5)	spring.datasource.password=root123
6)	check swagger documentation http://localhost:8081/swagger-ui/index.html#/


7) mvn clean install && java -jar target/hollywood.api-0.0.1-SNAPSHOT.jar --debug     (build and run application and ensure port 8081 should be free)


#  Import  holliwood  database 

1)	step 1:- Execute command after placing hollywood_structure.sql to your current directory 

2)	mysql --host="localhost" --user=root --password=root123 --port=3307 < hollywood_structure.sql


3)	or Execute the sql code (which  is  inside hollywood_structure.sql ) to IDE ex mysql workbench 


Run Ui Hollywood (Angular 17) application
1) cd Hollywood
2)	npm install 
3) ng serve -o
