# Instruction manual for Photo Metadata API Project

Welcome to the Photo Metadata project! This project is designed to help you learn how to develop and deploy a Node.js application with AWS services and Docker.

## Prerequisites

Before you begin, you will need to have the following:

-   Node.js installed on your local machine
-   An AWS account with access to the following services:
    -   IAM
    -   EC2
    -   Lambda
-   Basic knowledge of JavaScript and Node.js

## Software Requirements Specification

The following are the requirements for this project:

1. GET `/pictures` - Fetch metadata for all pictures

The API should return a list of all pictures available in the store. The picture list file is stored in a JSON file named `pictures.json` in the `data` directory. An example of the picture list file is provided in the project files. The response should be sorted by the `date` property in descending order.

2. POST `/pictures` - Add a new picture

The API should accept a request body with the following properties:

-   `picture` - The picture file in binary format

The API should return a 400 Bad Request response code if any of the required properties are missing.

This API should invoke a Lambda function with the `picture` property of the request body as the payload. The code for the Lambda function will be provided by the instructor but it is the responsibility of the student to deploy it on Lambda. The Lambda function will return a response with the following properties:

-   `id` - The ID of the picture
-   `date` - The date the picture was taken
-   `size` - The size of the picture in bytes

This response should write into the `pictures.json` file in the `data` directory and return the response to the client.

## Project Setup

1. Download the project files from this drive folder.
2. Install the project dependencies by running `npm install` in the project root directory.
3. Set up the AWS SDK and configure it with your AWS credentials.
4. Set up an EC2 instance to deploy the application.
5. Launch the instance and SSH into it. Copy the project files to the instance using SCP or any other file transfer mechanism.
6. Build the Docker image with Docker Compose.
7. Run the Docker compose file to start the application.

## API Documentation

API documentation for this project can be found in the `API.md` file in the project root directory.

## Conclusion

Congratulations! You have now successfully set up and deployed the Photo Metadata API project using Node.js and AWS services. I hope you enjoyed this project and learned some valuable skills along the way.