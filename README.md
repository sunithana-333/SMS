# Student Management System (SMS)

A comprehensive web-based Student Management System for educational institutions.

## Features

### Current Implementation
- **Login Page** - Secure user authentication interface
  - Email validation
  - Password strength validation
  - Show/hide password toggle
  - Remember me functionality
  - Responsive design
  - Form validation with error messages

## Project Structure

```
SMS/
├── index.html          # Login page HTML structure
├── styles.css          # Styling for login page
├── script.js           # JavaScript for form handling and validation
└── README.md          # Project documentation
```

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No backend server required for the basic login page template

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sunithana-333/SMS.git
cd SMS
```

2. Open the login page:
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
     ```bash
     python -m http.server 8000
     # Then visit http://localhost:8000
     ```

## Usage

### Login Page Features

- **Email Field**: Validates email format
- **Password Field**: Minimum 6 characters, with toggle visibility
- **Remember Me**: Saves email locally for future logins
- **Forgot Password**: Link for password recovery (to be implemented)
- **Sign Up**: Link for new user registration (to be implemented)

### Form Validation

The login form includes client-side validation for:
- Required fields
- Valid email format
- Password minimum length (6 characters)

### Testing the Login

For testing purposes:
- Enter any valid email address
- Enter a password with at least 6 characters
- Click the "Login" button

**Note**: This is a frontend template. Backend authentication needs to be implemented for production use.

## Future Enhancements

- [ ] Backend API integration for authentication
- [ ] JWT token implementation
- [ ] Password reset functionality
- [ ] User registration page
- [ ] Dashboard page
- [ ] Student management features
- [ ] Course management
- [ ] Grade tracking
- [ ] Attendance system

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the MIT License.

## Author

Created by [@sunithana-333](https://github.com/sunithana-333)
