package com.grade9.server.service;

import com.grade9.server.model.User;
import com.grade9.server.repository.UserRepository;
import com.grade9.server.dto.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.mindrot.jbcrypt.BCrypt;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Register user without handling salt manually
    public User registerUser(UserDTO userDTO) {
        if (!userDTO.getPassword().equals(userDTO.getConfirmpassword())) {
            throw new IllegalArgumentException("Passwords do not match");
        }

        if (userRepository.findByEmail(userDTO.getEmail()).isPresent()) {
            throw new IllegalArgumentException("Email already registered");
        }

        User user = new User();
        user.setName(userDTO.getName());
        user.setSurname(userDTO.getSurname());
        user.setEmail(userDTO.getEmail());

        // Hash password using bcrypt (bcrypt will handle salt internally)
        String hashedPassword = BCrypt.hashpw(userDTO.getPassword(), BCrypt.gensalt());
        user.setPassword(hashedPassword);  // Store hashed password (no need for salt)

        return userRepository.save(user);
    }

    // Login user using bcrypt to compare password
    public boolean loginUser(String email, String password) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("Invalid email or password"));

        // Use bcrypt to check the password
        return BCrypt.checkpw(password, user.getPassword());
    }

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));
    }
}
