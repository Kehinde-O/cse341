# CSE341 Backend API

This is the backend API for the CSE341 professional profile application. It provides endpoints to retrieve and manage professional profile data.

## Setup Instructions

1. Clone the repository
2. Navigate to the backend directory
   ```
   cd backend
   ```
3. Install dependencies
   ```
   npm install
   ```
4. Create a `.env` file in the root of the backend directory with the following content:
   ```
   PORT=8080
   MONGODB_URI=your_mongodb_connection_string
   ```
   Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

## Running the Application

- To start the server in development mode with automatic reloading:
  ```
  npm run dev
  ```

- To start the server in production mode:
  ```
  npm start
  ```

- To seed the database with initial data:
  ```
  npm run seed
  ```

## Deployment to Render

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Configure the service with these settings:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment Variables**: Add the following environment variables
     - `PORT`: Render will automatically assign a port, so this is optional
     - `MONGODB_URI`: Your MongoDB Atlas connection string

4. Click "Create Web Service"

## API Endpoints

### GET /professional
- Returns the professional profile data

### POST /professional
- Creates a new professional profile
- Requires a JSON body with professional data

### PUT /professional
- Updates the existing professional profile
- Requires a JSON body with updated professional data

## Data Model

The professional data model includes:
- professionalName: Name of the professional
- base64Image: Base64 encoded profile image
- nameLink: Object containing firstName and URL
- primaryDescription: Short description
- workDescription1 & workDescription2: Detailed work descriptions
- linkTitleText: Title for social links section
- linkedInLink: Object containing text and link for LinkedIn
- githubLink: Object containing text and link for GitHub
- contactText: Optional contact information 