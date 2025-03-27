package com.grade9.server.service;

import com.grade9.server.model.User;
import com.grade9.server.repository.UserRepository;
import com.grade9.server.dto.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Register user
    public User registerUser(UserDTO userDTO) throws NoSuchAlgorithmException {
        if (!userDTO.getPassword().equals(userDTO.getConfirmpassword())) {
            throw new IllegalArgumentException("Passwords do not match");
        }

        User user = new User();
        user.setName(userDTO.getName());
        user.setSurname(userDTO.getSurname());
        user.setEmail(userDTO.getEmail());
        user.setPassword(hashPassword(userDTO.getPassword()));

        return userRepository.save(user);
    }

    // Login user
    public User loginUser(String email, String password) throws NoSuchAlgorithmException {
        User user = userRepository.findByEmail(email).orElseThrow(() -> new IllegalArgumentException("Invalid email"));

        if (!checkPassword(password, user.getPassword())) {
            throw new IllegalArgumentException("Invalid credentials");
        }
        return user;
    }

    // Simple password hashing using SHA-256
    private String hashPassword(String password) throws NoSuchAlgorithmException {
        MessageDigest digest = MessageDigest.getInstance("SHA-256");
        byte[] hashedBytes = digest.digest(password.getBytes());
        StringBuilder hexString = new StringBuilder();
        for (byte b : hashedBytes) {
            hexString.append(String.format("%02x", b));
        }
        return hexString.toString();
    }

    // Check if the provided password matches the stored hashed password
    private boolean checkPassword(String inputPassword, String storedPassword) throws NoSuchAlgorithmException {
        return storedPassword.equals(hashPassword(inputPassword));
    }
}
