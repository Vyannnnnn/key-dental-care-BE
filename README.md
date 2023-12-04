# KeyDentalCare_API

## Dashboard

- **GET** `/api/dashboard`
  - Retrieves dashboard statistics.

## Move to Patient

- **POST** `/api/move-to-patient/:id`
  - Moves data from the queue to the patient based on ID.

## Update Patient Status

- **POST** `/api/selesaikan-status/:id`
  - Updates patient status to "Selesai" (Finished) based on ID.

## Patient History

- **POST** `/api/get-riwayat-pasien/:user_id`
  - Retrieves completed patient history based on user ID.

## Patient Visits

- **POST** `/api/get-kunungan-pasien/:user_id`
  - Retrieves approved patient visits based on user ID.

## Queue

- **GET** `/api/queue`
  - Retrieves the queue list.
- **POST** `/api/queue`
  - Creates a new queue entry.
- **PUT** `/api/queue/:id`
  - Updates queue information based on ID.
- **DELETE** `/api/queue/:id`
  - Deletes a queue based on ID.

## Patient

- **GET** `/api/patient`
  - Retrieves the patient list.
- **POST** `/api/patient`
  - Creates a new patient data.
- **PUT** `/api/patient/:id`
  - Updates patient information based on ID.
- **DELETE** `/api/patient/:id`
  - Deletes patient data based on ID.

## Timetable

- **GET** `/api/timetable`
  - Retrieves the timetable list.
- **POST** `/api/timetable`
  - Creates a new timetable entry.
- **PUT** `/api/timetable/:id`
  - Updates timetable based on ID.
- **DELETE** `/api/timetable/:id`
  - Deletes the timetable based on ID.

## Program

- **GET** `/api/program`
  - Retrieves the program list.
- **POST** `/api/program`
  - Creates a new program entry.
- **PUT** `/api/program/:id`
  - Updates the program based on ID.
- **DELETE** `/api/program/:id`
  - Deletes the program based on ID.

## Doctor

- **GET** `/api/dokter`
  - Retrieves the list of doctors.
- **GET** `/api/dokter/:id`
  - Retrieves doctor information based on ID.
- **POST** `/api/dokter`
  - Adds a new doctor with an image.
- **PUT** `/api/dokter/:id`
  - Updates doctor information based on ID.
- **DELETE** `/api/dokter/:id`
  - Deletes doctor information based on ID.

## Article

- **GET** `/api/artic`
  - Retrieves the list of articles.
- **POST** `/api/artic`
  - Adds an article with an image.
