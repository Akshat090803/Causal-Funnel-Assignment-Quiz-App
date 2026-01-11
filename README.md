# Quizio - Interactive Quiz Application

Quizio is a dynamic, responsive React application that allows users to take a 15-question quiz with a 30-minute time limit. It features real-time navigation, progress tracking, and a detailed performance report at the end.

## 🚀 Tech Stack

* **Core**: React 19 & Vite 7
* **Styling**: Tailwind CSS 4
* **UI Components**: shadcn/ui (Radix UI primitives)
* **Routing**: React Router DOM 7
* **State**: React Context API

## 🛠️ Installation & Setup

Follow these steps to get the project running locally:

### Prerequisites
* Node.js (v20.19.0 or higher recommended)
* npm or yarn

### Steps
1.  **Clone the repository**:
    ```bash
    git clone https://github.com/Akshat090803/Causal-Funnel-Assignment-Quiz-App.git
    cd causal-funnel-assignment-quiz-app
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Run the development server**:
    ```bash
    npm run dev
    ```
4.  **Build for production**:
    ```bash
    npm run build
    ```

## 🗺️ Navigation & Flow

The application follows a secure and structured user flow managed by `react-router-dom`:

1.  **Home (`/`)**: 
    * The landing page featuring a wavy background.
    * Users must enter a valid email address to proceed.
2.  **Quiz Page (`/quiz`)**: 
    * **Email Guard**: Access is restricted unless an email is provided in the session.
    * **Quiz Info**: Displays rules and starts the timer.
    * **Quiz Interface**: 15 questions fetched from the OpenTDB API. Includes a question navigation sidebar with status indicators (Answered, Visited, Current, Unvisited).
3.  **Result Page (`/quiz/result`)**: 
    * **Result Guard**: Prevents access if the quiz hasn't been completed.
    * **Report**: Shows time taken, score, accuracy percentage, and a question-by-question breakdown.
4.  **404 Page**: Handles invalid routes.

## ⚙️ Key Features
* **Auto-Submit**: The quiz automatically submits when the 30-minute timer reaches zero.
* **Question Persistence**: Tracks visited and answered questions using a sidebar navigation.
* **Performance Analytics**: Calculates score and accuracy percentage instantly upon submission.
* **Responsive Design**: Fully optimized for mobile, tablet, and desktop views.
* **Loading States**: Custom square-animation loader for asynchronous operations.

---

**Note**: This project utilizes the Open Trivia Database API for dynamic question generation.
