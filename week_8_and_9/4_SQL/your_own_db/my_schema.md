sqlite> .schema 
CREATE TABLE appointments (
  id INTEGER PRIMARY KEY AUTOINCREMENT, 
  patient_id INTEGER NOT NULL, 
  appt_date DATETIME NOT NULL, 
  provider TEXT(50) NOT NULL, 
  symptom TEXT(50) NOT NULL, 
  treatment TEXT(100), 
  created_at DATETIME NOT NULL, 
  updated_at DATETIME NOT NULL
);
CREATE TABLE patients (
  id INTEGER PRIMARY KEY AUTOINCREMENT, 
  name TEXT(20) NOT NULL, 
  species TEXT(20) NOT NULL, 
  owner_name TEXT(50) NOT NULL, 
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL
);
