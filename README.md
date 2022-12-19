# Job-listing-and-Recommendation-service


Scope:  A job listing and recommendation app that helps users find jobs based on their skills and experience.
.
High-Level Design: (User download and install the app )Signup and Sign-in (authentication) 
			Authentication  and Authorisation for 2 user Roles (user, admin)

		            Admin  lists/uploads job openings,
Users can view and apply for jobs based on their skills and experience. 
			
			
Deep dive: 

Signup/Create account(For All Parties) 
Name
Email
Password
Confirm Password
Skills
Experience
Role (User, Admin)


The details above will be collected from the party and stored to the database


Sign - in (Validation):
Email 
Password
Generate and use Token

The following details will be required on sign in

Job listing: (Admin)
Job type
Job Category
Key qualification
Product Counter
Location (Remote/hybrid/on-site)
Job Description
Education & Years of experience
Remote/hybrid/on-site
These details will be collected for each job and stored to the database

UserID
Job category 
job type 




Order/jobs applied for: (User)
UserID


Recommendation
Based on skills
Based on experience


DB type: MongodB (NoSQL)


Wrap up:
Assumption
Max number of users = 1,000,000
Max number of jobs listed = 5,000,000


Data size for each user == 5kb,
Data size for each job == 5kb
Total no of users = 100,000/year
No of years = 10years,
Total space requirement = users (5kb x 1,000,000) + jobs(5kb x 5,000,000) = 5gb + 25gb = 30gb
