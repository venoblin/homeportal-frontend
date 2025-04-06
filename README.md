<br/>
<div align="center">
<a href="https://github.com/user/repo">
<img src=".project-images/project-logo.png" alt="Logo" height="128px">
</a>
<h3 align="center">HomePortal</h3>
<p align="center">
A web interface to layout all your homelab services!
<br/>
<br/>
</div>

Table of Contents
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)

## About The Project
About the project, include images here too.

### Built With
This project was built with the following technologies:

- <img src="https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB" alt="React" />
- <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000" alt="JavaScript" />
- <img src="https://img.shields.io/badge/Sass-C69?logo=sass&logoColor=fff" alt="SASS" />

## Getting Started
Instructions of setting up project on your local machine.

### Prerequisites
Describe prerequisites and how to complete them, this example we're installing nodemon. To install nodemon do the following:

- Install Nodemon:
    ```sh
    npm install -g nodemon
    ```
  Make sure NPM is installed.
  
- Verify installation:
    ```sh
    nodemon --version
    ```

### Installation
1. **Clone the repository** 
    ```sh
    git clone --recurse-submodules https://github.com/venoblin/scripts
    ```

2. **Create settings file (for [ezdownloadsorter](https://github.com/venoblin/download-file-sorter))**
    ```sh
    cd scripts
    touch settings.json
    ```

3. **Modify `settings.json`** 
    ```json
    {
      "downloads": "/path/to/Downloads",
      "destinations": {
        ".file-extension": "/path/to/destination",
        ".file-extension": "/path/to/destination",
        ".file-extension": "/path/to/destination"
      }
    }
    ```

4. **Install scripts** 
    ```sh
    ./install.sh
    ```
