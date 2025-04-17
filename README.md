# Overview

This project is an Emergency Planner API that helps users manage their emergency preparedness plans. The system allows users to create profiles and maintain multiple emergency plans, including contact information, evacuation routes, and supply lists. The API is built with Node.js and uses a PostgreSQL relational database to store and manage the data efficiently.

The system demonstrates proper database design principles with well-defined relationships between tables and appropriate constraints to maintain data integrity. It serves as a practical example of building a RESTful API with proper database relationships and data validation.

[Software Demo Video](https://youtu.be/Pn_QiVdNPmY)

# Relational Database

The project uses PostgreSQL, a powerful open-source relational database system. The database consists of three main tables with well-defined relationships:

1. **Users Table**
   - Primary key: user_id
   - Stores basic user information (username, email, password)
   - Has one-to-one relationship with profiles
   - Has one-to-many relationship with plans

2. **Profiles Table**
   - Primary key: profile_id
   - Foreign key: user_id (references users)
   - Stores detailed user information (name, contact, address)
   - One-to-one relationship with users (enforced by UNIQUE constraint)

3. **Plans Table**
   - Primary key: plan_id
   - Foreign key: user_id (references users)
   - Stores emergency plans with JSONB fields for flexible data
   - One-to-many relationship with users

Key Features:
- ON DELETE CASCADE constraints to maintain referential integrity
- Indexes for optimized query performance
- JSONB fields for flexible data storage in plans
- Timestamps for tracking creation and updates

# Development Environment

Tools and Technologies:
- **Database**: PostgreSQL
- **Backend**: Node.js with Express.js
- **API Testing**: curl/Postman
- **Version Control**: Git
- **Code Editor**: Visual Studio Code

Libraries:
- express: Web framework
- pg: PostgreSQL client
- dotenv: Environment variable management
- cors: Cross-Origin Resource Sharing
- body-parser: Request body parsing

# Useful Websites

- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Express.js Documentation](https://expressjs.com/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [JSONB in PostgreSQL](https://www.postgresql.org/docs/current/datatype-json.html)
- [PostgreSQL Foreign Keys](https://www.postgresql.org/docs/current/ddl-constraints.html#DDL-CONSTRAINTS-FK)

# Future Work

- Implement user authentication and authorization
- Add input validation and sanitization
- Create a frontend interface
- Add email notifications for plan updates
- Implement plan sharing between users
- Add location-based emergency services lookup
- Create API documentation with Swagger
- Add unit and integration tests
- Implement rate limiting for API endpoints
- Add data export functionality