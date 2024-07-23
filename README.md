
## HH clone react-native app Project Overview
This project is a job search application built with React Native and Expo. It leverages several libraries such as **react-native-gesture-handler**, **expo-router**, **axios**, and others to create a seamless user experience for job searching and browsing.


<img width="303" alt="Screenshot 2024-07-23 at 11 26 23 PM" src="https://github.com/user-attachments/assets/7926d462-f617-4694-b2fd-6120a1c0518f">

<img width="303" alt="Screenshot 2024-07-23 at 11 26 32 PM" src="https://github.com/user-attachments/assets/c606212c-f705-4152-9a51-41dd11cb5ecb">

<img width="303" alt="Screenshot 2024-07-23 at 11 27 01 PM" src="https://github.com/user-attachments/assets/677de667-445d-40cd-88ad-7f8747391cce">

<img width="303" alt="Screenshot 2024-07-23 at 11 27 05 PM" src="https://github.com/user-attachments/assets/a8e80eff-a261-4bbf-bd68-e9669de93ded">

<img width="303" alt="Screenshot 2024-07-23 at 11 27 08 PM" src="https://github.com/user-attachments/assets/2a7c12c0-f18b-4e75-93f3-c1681bb8659a">

<img width="303" alt="Screenshot 2024-07-23 at 11 27 38 PM" src="https://github.com/user-attachments/assets/d83d1154-854e-4c1c-ad61-e3cfb87a331b">









# Project Files and Structure

**index.js:**

This file serves as the entry point for the application. It loads custom fonts, prevents the splash screen from auto-hiding until fonts are loaded, and sets up the main layout with a search bar and job listings.

**_layout.js:** It sets up the root layout using react-native-gesture-handler, SafeAreaProvider, and expo-router's Stack.

**[id].js** (two instances):One of these files is likely handling job details, fetching job data using useRequest hook, and displaying job information.
The other might be dealing with search results or other dynamic content based on the ID parameter in the URL.

**package.json:** Defines the project's dependencies and scripts, including React Native, Expo, and other libraries required for the project.

**babel.config.js:** Configures Babel with the babel-preset-expo to ensure proper transpiling of JavaScript code.

**useRequest.js:** A custom hook for making API requests using axios. It handles loading state, errors, and data fetching.

**reset-project.js:** A script to reset the project to a blank state by moving the /app directory and creating new default files for index.js and _layout.js.

**data.js:** Contains static data such as job types and tab names used throughout the application.

**icons.js:** Exports a collection of icons used in the application.

**theme.js:** Defines the application's theme, including colors, sizes, fonts, and shadows.


**Components:**

**HeaderBtn (header-btn.js):** A button component for headers with customizable icons.

**Search (search.js):** A search component with input and filter functionalities.

**PopularJobs (popular-jobs.js):** Displays a list of popular jobs.

**MyJobs (my-jobs.js):** Shows jobs recommended for the user.

**JobTabs (job-tabs.js):** Provides tabs for different job details sections.

**Job (job.js):** Displays job information including company logo, job title, company name, and location.

**About (about.js):** Shows the "About this job" section.

**Qualification (qualification.js):** Displays job qualifications.

**Responsibility (responsibility.js):** Lists job responsibilities.

**Footer (footer.js):** A footer component with an apply button and a heart icon.

## Key Features

**Dynamic Job Listings:** Fetches and displays job listings dynamically based on user input.

**Custom Hooks:** Utilizes custom hooks like useRequest for managing API calls efficiently.

**Responsive Design:** Implements responsive design principles to ensure a smooth user experience across different devices.

**Reusable Components:** Breaks down the UI into reusable components for better maintainability and scalability.

**Modern Libraries:** Leverages modern libraries and tools like Expo, React Navigation, and Axios to provide a robust foundation for the app.
Technologies Used

**React Native:** For building the mobile application.

**Expo:** To streamline the development workflow and manage native dependencies.

**Axios:** For making HTTP requests.

**React Navigation:** For handling navigation within the app.

**Custom Hooks:** For encapsulating reusable logic.

**Gestures and Animations:** react-native-gesture-handler and react-native-reanimated for smooth interactions and animations.






## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.


