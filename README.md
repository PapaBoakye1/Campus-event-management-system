 Campus Event Management Hub

Overview
The Campus Event Management Hub is a web-based application designed to facilitate the organization and participation in campus events, including workshops, seminars, and club activities. The system allows students and staff to register, view upcoming events, RSVP, and manage event preferences, while administrators can create and manage events efficiently.

Features

 . User Registration & Login
User Registration: Users can create an account by providing their full name, email, password, and preferences for event types (e.g., workshops, seminars, or club activities).
User Login: Registered users can log in with their email and password to access the event list and RSVP to events.
Admin Login: Admins can log in with specific credentials to access the admin panel for event creation and management.

 Event Listings & RSVP
- Display of upcoming events with details such as:
  - Event Name
  - Date
  - Time
  - Location
  - Available Seats
- Users can RSVP to events, which updates the available seat count and associates the event with their profile.

  Admin Panel
- Admins can create new events with the following details:
  - Event Name
  - Date
  - Location
  - Description
  -Event type
  - Capacity (maximum attendees)
- Each event is assigned a unique ID for tracking purposes.

  Event Calendar View
- Events are displayed on a calendar, allowing users to view events by date.
- Users can filter events based on their preferences.



Technologies Used
Frontend
HTML: For structuring the web pages.
CSS: For styling and layout.
JavaScript: For interactivity and client-side logic.

Backend (Simulated with LocalStorage)
LocalStorage: Used to simulate user and event data storage for this project.

 File Structure
  index.html          # Home page with login and registration links
 login.html          # User login page
  admin-login.html    # Admin login page
 register.html       # User registration page
event-list.html     # Event listing and RSVP page
 admin.html          # Admin panel for event creation
styles.css          # CSS for styling the application
script.js           # JavaScript for functionality
README.md           # Documentation for the project

How to Use

User Workflow
1. Navigate to the homepage (`index.html`).
2. Register as a user through the Register link.
3. Log in using the Login page.
4. View upcoming events on the event list page (`event-list.html`) and RSVP to events.

 Admin Workflow
1. Log in as an admin using the Admin Login page (`admin-login.html`).
2. Access the admin panel to create new events with all necessary details.

 Future Enhancements
- Integration with a backend server (e.g., Node.js, PHP) for persistent data storage.
- Role-based authentication with a secure database.
- Advanced calendar integration with drag-and-drop functionality for events.
- Notifications for RSVP confirmations.
 
Feature Checklist 
  [x] Create Event form 
  [x] Store events in localStorage
  [x] Redirect to event list page after event creation
  [x] Mobile-friendly UI
  [x] Home button navigation


Logins-
Username-papa1@cloud.com
Password-papa123

Admin logins-
Username-papa@cloud.com
Password-papa123

 Deployment Link [https://github.com/PapaBoakye1/Campus-event-management-system]

Installation Instructions:
Clone the repository from GitHub:

git clone https://github.com/PapaBoakye1/Campus-event-management-system.git

Navigate to the project directory:

cd Campus-event-management-hub

Open the project in Visual Studio Code (or any code editor).

code .

Open "index.html" using Live Server or your preferred browser.





API Documentation
POST /create-event: 
  - Request Example:   
    
  - Response Example:   
  
