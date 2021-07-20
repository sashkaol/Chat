-- CREATE DATABASE Chat;
-- USE Chat;

-- CREATE TABLE User (
--     Id INT PRIMARY KEY AUTO_INCREMENT,
--     Login VARCHAR(50) NOT NULL,
--     Password VARCHAR(50) NOT NULL,
--     Salt VARCHAR(50) NOT NULL,
--     Name VARCHAR(300) NOT NULL
-- );

-- CREATE TABLE Message (
--     Id INT PRIMARY KEY AUTO_INCREMENT,
--     Text VARCHAR(500) NOT NULL,
--     Datte DATE NOT NULL,
--     Timme TIME NOT NULL,
--     Sender INT,
--     FOREIGN KEY (Sender) REFERENCES User(Id)
-- );

-- CREATE TABLE Room (
--     Id INT PRIMARY KEY AUTO_INCREMENT
-- );

-- CREATE TABLE Room_users (
--     Id INT PRIMARY KEY AUTO_INCREMENT,
--     Id_user INT,
--     FOREIGN KEY (Id_user) REFERENCES User(Id),
--     Id_room INT,
--     FOREIGN KEY (Id_room) REFERENCES Room(Id)
-- );

-- CREATE TABLE Room_messages (
--     Id INT PRIMARY KEY AUTO_INCREMENT,
--     Id_message INT,
--     FOREIGN KEY (Id_message) REFERENCES Message(Id),
--     Id_room INT,
--     FOREIGN KEY (Id_room) REFERENCES Room(Id)
-- );

-- ALTER TABLE Chat.Room ADD COLUMN Title VARCHAR(50) NOT NULL;

-- INSERT INTO Chat.Room VALUES (NULL, 'Избранное');

ALTER TABLE Chat.User DROP COLUMN User.Salt;
