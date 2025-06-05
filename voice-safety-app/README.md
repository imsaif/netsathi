# Voice Safety App

## Overview
The Voice Safety App is a voice-based application designed to assist seniors in India in staying informed about fraudulent scams, misinformation, and fake videos. The app leverages voice recognition technology to provide users with easy access to critical information and allows them to report scams they encounter.

## Features
- Voice recognition for user interactions
- Information on various scams and how to avoid them
- Ability to report scams directly through voice commands
- User-friendly interface tailored for seniors

## Project Structure
```
voice-safety-app
├── src
│   ├── app.ts                  # Entry point of the application
│   ├── controllers
│   │   └── scamInfoController.ts # Handles scam-related requests
│   ├── routes
│   │   └── scamRoutes.ts       # Defines application routes
│   ├── services
│   │   └── voiceService.ts      # Manages voice recognition and responses
│   ├── utils
│   │   └── index.ts            # Utility functions
│   └── types
│       └── index.ts            # Type definitions for voice requests and responses
├── package.json                 # npm configuration file
├── tsconfig.json                # TypeScript configuration file
└── README.md                    # Project documentation
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd voice-safety-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
To start the application, run:
```
npm start
```
The application will initialize and be ready to handle voice interactions.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.