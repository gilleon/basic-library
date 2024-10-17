# Library Management Web App

## Description
This project is a web-based application that allows users to manage a library of items. It enables users to display, add, remove, and randomly select items from the list using an interactive web interface. The app is built using HTML, CSS, and JavaScript, practicing DOM manipulation, event handling, and array operations.

## Features
- **Display Items**: Lists all items currently in the library, dynamically updating after each action.
- **Add Item**: Users can add an item to the library via a text input field. Input validation ensures that empty entries cannot be added.
- **Remove Item**: Items can be removed from the library, but validation ensures the item must exist in the list.
- **Pick Random Item**: A button randomly selects and displays an item from the list, provided the list is not empty.
- **User Feedback**: A display element provides messages for user feedback and validation.

## Requirements
The app includes the following core components:
1. **Item List**: Displays all current library items, updated after every action.
2. **Text Input**: A field to input items for addition or removal.
3. **Buttons**: 
   - **Add Button**: Adds the item entered in the input field to the library.
   - **Remove Button**: Removes the entered item from the library.
   - **Pick Button**: Randomly selects an item from the library.
4. **Validation & Feedback**: Displays messages for validation, such as when an item is added or if a user tries to remove a non-existent item.

## Implementation Details
- **DOM Manipulation**: The app uses JavaScript to interact with the DOM. Elements are selected using `querySelector` and dynamically updated using the `textContent` property.
- **Item List**: The items are stored in an array. New items are displayed by creating HTML elements dynamically with `createElement` and `appendChild`.
- **Event Handling**: Event listeners are added to buttons for adding, removing, and selecting items.
- **Separate Functions**: Core operations (add, remove, pick) are encapsulated in individual functions.

## How to Use
1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/yourusername/library-management-web-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd library-management-web-app
    ```
3. Open the `index.html` file in your web browser to use the app:
    ```bash
    open index.html
    ```
4. Interact with the app using the provided input fields and buttons to manage your list of library items.

## Selectors
The app makes use of the following HTML element selectors:
- `#entry`: The input field where users enter the item.
- `#add`: Button to add an item to the list.
- `#remove`: Button to remove an item from the list.
- `#pick`: Button to randomly pick an item from the list.
- `#list`: An ordered list that displays the current items in the library.
- `#notice`: A display element to show validation feedback or random selection results.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
