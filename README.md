  # Node.js FILE SYSTEM API


  1.  OVERVIEW : 

        -  This is a simple Node.js project that provides API endpoints for creating and retrieving text files in a specific folder.
 
        -  The text files contain the current timestamp, and the filenames are based on the current date and time.

        -  The project uses Express.js to handle the API routes and the native Node.js fs (file system) module for file operations.

 
  2. FEATURES :

     a. Create a Text File :

        -  The API creates a .txt file in a designated folder (/files).

        -  The file content is the current timestamp.

        -  The filename is the current date-time formatted as YYYY-MM-DDTHH-MM-SS


      b. Retrieve All Text Files :

        -  The API retrieves a list of all .txt files stored in the folder.


3. API ENDPOINTS :

   a. Create File with Timestamp

      -  Method: POST
     
      -  Endpoint: /create-file
     
      -  Description: Creates a text file with the current timestamp as its content and the current date-time as the filename.

      Response :

      i) 201 Created on success :

       {

        "message": "File 'YYYY-MM-DDTHH-MM-SS.txt' created successfully"

       }

      ii) 500 Internal Server Error on failure :

       {

        "message": "Error creating file"

       }


   b. Retrieve All Files

      -  Method: GET
      
      -  Endpoint: /files
     
      -  Description: Retrieves a list of all .txt files in the /files folder.

      Response

      i) 200 OK on success :

        [

         "2024-10-05T12-30-45.txt",

         "2024-10-05T13-45-32.txt"

        ]

     ii) 500 Internal Server Error on failure :

        {

         "message": "Error retrieving files"

        }


5. SETUP INSTRUCTIONS :

    Prerequisites :

      -  Node.js (version 14 or higher)

      -  npm (Node Package Manager)


6. RUN THE SERVER :

      -  node index.js

       The server will start on http://localhost:3000.


7. TESTING THE API :

      -  Use a tool like Postman to test the API endpoints.


8. FOLDER STRUCTURE :

  -  /node-file-system-api            

      │          

     ├/files # Directory where all .txt files will be stored            

     ├ index.js # Main application file               

     └ README.md # This file            

       -  Code Style and Best Practices

       -  Variables and functions are named with clarity for maintainability.

       -  The code includes comments for better readability.
 
       -  Proper error handling is implemented for both API endpoints.


8. LICENSE :

    -   This project is open-source and available under the MIT License.

    
