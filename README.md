# Binsense: Smart Garbage Disposal System

Binsense is a smart garbage disposal system that helps optimize waste management by monitoring the fill level of dustbins. The system uses an ultrasonic sensor to measure the fill percentage of a dustbin and sends SMS alerts when the dustbin reaches 80% capacity. The data is displayed on an analytics dashboard, which shows the current fill status of multiple dustbins in real time.

## Features

- **Real-Time Monitoring**: Tracks the fill level of dustbins in real time using ultrasonic sensors.
- **SMS Alerts**: Sends notifications via SMS when the dustbin reaches 80% of its capacity.
- **Analytics Dashboard**: Displays fill levels for multiple dustbins on an interactive dashboard.
- **Data Visualization**: Each dustbin's fill percentage is shown on the dashboard, with easy-to-read metrics.

## Tech Stack

- **Frontend**: Built using Next.js and React, with Tailwind CSS for styling.
- **Backend**: Data for the dashboard is served through a Node.js backend, with live updates from the dustbin sensors.
- **Hardware**: ESP32 microcontroller, Ultrasonic Sensor, and SIM800L module for sending SMS alerts.

## Installation

### Prerequisites

1. **Node.js** and **Yarn** should be installed.
   - [Install Node.js](https://nodejs.org/)
   - [Install Yarn](https://classic.yarnpkg.com/en/docs/install/)

2. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/binsense.git
   cd binsense
