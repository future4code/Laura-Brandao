CREATE TABLE
    Dog_Walking (
        id VARCHAR(64) PRIMARY KEY,
        stats VARCHAR (64) NOT NULL,
        appointment_date DATE NOT NULL,
        price FLOAT NOT NULL,
        duration INT NOT NULL,
        latitude NOT NULL,
        longitude NOT NULL,
        pets INT NOT NULL,
        start_time TIME NOT NULL,
        end_time TIME NOT NULL
    );

INSERT INTO
    Dog_Walking(
        id,
        stats,
        appointment_date,
        price,
        duration,
        latitude,
        longitude,
        pets,
        start_time,
        end_time
    )
VALUES
(
        "001",
        "In Progress",
        "2022-07-19",
        "50",
        "45:00",
        "-19.912998",
        "-43.940933",
        "Thorin",
        "09:30:00",
        "11:00:00"
    );

select * from Dog_Walking;