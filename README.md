# Powerpuff Girls TV Show App

This is a Vue 3 web application that displays details about the TV show "Powerpuff Girls" and its episodes. The application uses Vue 3 with TypeScript, Vuex for state management, and Vue Router for navigation. Data is fetched from the TV Maze REST API.

## Features

- Display details about the Powerpuff Girls TV show.
- List all episodes with clickable links to their detail pages.
- Show detailed information about a specific episode.
- Responsive design using Bootstrap.

## Project Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/powerpuff-girls.git

    Navigate to the Project Directory:

    bash

cd powerpuff-girls

Install Dependencies:

bash

npm install

Run the Development Server:

bash

    npm run dev

    This will start the development server and open the application in your default web browser.

Folder Structure

    src/
        assets/: Contains static assets such as images and styles.
        components/: Vue components for various parts of the application.
            EpisodeDetail.vue: Displays details of a specific episode.
            EpisodeList.vue: Lists all episodes of the show.
            ShowDetail.vue: Displays details about the Powerpuff Girls TV show.
        pages/: Contains page components.
            ShowPage.vue: The main page displaying the show details.
            EpisodesPage.vue: Displays details of individual episodes.
        router/: Contains the Vue Router configuration.
            index.ts: Configures routes for the application.
        store/: Contains the Vuex store configuration.
            index.ts: Manages the application state.
        App.vue: The root Vue component.
        main.ts: Entry point for the Vue application.

Vuex Store

The Vuex store manages the application's state:

    State:
        show: Stores details about the Powerpuff Girls TV show.
        episodes: Stores a list of episodes.

    Mutations:
        setShow: Updates the show details.
        setEpisodes: Updates the list of episodes.

    Actions:
        fetchShow: Fetches details about the TV show from the API.
        fetchEpisodes: Fetches a list of episodes from the API.
        fetchEpisode: Fetches details of a specific episode from the API.

Vue Router

The application uses Vue Router to handle navigation:

    Routes:
        /: Displays the TV show details (ShowPage).
        /episode/:id: Displays details of a specific episode (EpisodeDetail).

Styling

The project uses Bootstrap for responsive design. The components are styled using scoped CSS to ensure encapsulated styling.
