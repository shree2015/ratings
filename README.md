# Vehicle Ratings API
This is the deliverable for a Mini-Exercise given by Modus Create in order to test my Node js skills

# Steps to install the Application 
1. Install npm and node 
2. clone this repository using the command "git clone https://github.com/shree2015/vehicle_ratings_api"
3. Make sure you have port 8888 available on the machine
3. From the folder where this project is downloaded, run the command "npm install && npm start" 
    (This will install all the required node_modules in the project folder)
4. You will see the message "Server started on port 8888" on the console
5. Test the following APIs through browser / postman : (alternatively, you can run the command "npm test" to test the APIs)

    Requirement 1 : 
    GET http://localhost:8888/vehicles/modelyear/2015/manufacturer/Audi/model/A3 - returns 4 results
    GET http://localhost:8888/vehicles/modelyear/2016/manufacturer/tata/model/indica - returns 0 results
    GET http://localhost:8888/vehicles/modelyear/2015/manufacturer/Toyota/model/Yaris - returns 2 results
    
    Requirement 2 : 
    POST http://localhost:8888/vehicles 
    with parameters : { "modelYear": 2015, "manufacturer": "Audi", "model": "A3"} - returns the same 4 results as above

    Requirement 3 : 
    GET  http://localhost:8888/vehicles/modelyear/2015/manufacturer/Audi/model/A3?withRating=true 
    - returns 4 results with additional field of CrashRating
    GET  http://localhost:8888/vehicles/modelyear/2015/manufacturer/Audi/model/A3?withRating=false 
    - returns the same 4 results as in requirement 1 



