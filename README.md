
# AI Web Chat Bot

This project is a web-based chat bot using the Google Generative AI (Gemini API) to assist users with their queries. The bot is designed to help customers of FerreMateriales Madrid, a hardware store, find the products they need on the website.

## Features 🚀

- **Chat Interface**: A user-friendly chat interface where users can interact with the bot.
- **Generative AI**: Utilizes the Google Generative AI (Gemini API) to generate responses.
- **Dynamic Responses**: The bot provides dynamic responses based on user queries, including product recommendations and links.
- **Currency Conversion**: Fetches the official exchange rate from an external API to provide prices in both dollars and bolivars.

## Technologies Used 🛠️

- **Astro**: A modern static site generator.
- **Tailwind CSS**: For styling the UI components.
- **Google Generative AI**: For generating responses to user queries.
- **Lucide React**: For icons used in the chat interface.
- **Fetch API**: To get the official exchange rate.

## Installation 📝

1. **Clone the repository**:
    ```sh
    git clone https://github.com/Andru0Gx/AI-ChatBot.git
    cd ai-web-db
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Set up environment variables**:
    Create a .env file in the root directory and add your Google Generative AI API key:
    ```env
    PUBLIC_GENAI_API_KEY=your_api_key_here
    ```

4. **Run the development server**:
    ```sh
    npm run dev
    ```

## Usage 📖

- Open your browser and navigate to `http://localhost:3000`.
- Type your query in the input box and press the send button or hit Enter.
- The bot will respond with the appropriate message, including product recommendations and links.

## Future Features 🌟

- **Database Integration**: A database will be added to store product information and user interactions.
- **Product Examples**: The database will include some sample products to demonstrate the bot's capabilities.

## Project Structure 👾

- **`src/layouts/Layout.astro`**: The main layout file for the application.
- **`src/pages/index.astro`**: The main page containing the chat interface and logic.
- **`package.json`**: Contains the project dependencies and scripts.

## Example Queries 💡

- "What is the price of a drill?"
- "Do you have any hammers in stock?"
- "Can you recommend a good screwdriver?"

## Contributing 🧑‍💻

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

### Contributors

<a href="https://github.com/Andru0Gx">
  <img src="https://avatars.githubusercontent.com/u/95187524?v=4" width=50>
</a>

## License

This project is licensed under the MIT License. See the LICENSE file for details.