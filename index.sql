SELECT Name, EmployeeNo, Status FROM Employee 
WHERE Status = (SELECT Status FROM Employee WHERE name = "Kim")

SELECT Name, EmployeeNo, Age FROM Employee WHERE Age > (SELECT AVG(Age) FROM Employee)

SELECT Name, Age, Gender from Employee
WHERE Age = (SELECT Age from Employee WHERE Name = 'Wimal')


