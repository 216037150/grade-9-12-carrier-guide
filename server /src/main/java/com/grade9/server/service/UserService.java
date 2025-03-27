package com.grade9.server.service;

import com.grade9.server.model.User;
import com.grade9.server.repository.UserRepository;
import com.grade9.server.dto.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.Base64;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User registerUser(UserDTO userDTO) throws NoSuchAlgorithmException {
        if (!userDTO.getPassword().equals(userDTO.getConfirmpassword())) {
            throw new IllegalArgumentException("Passwords do not match");
        }

        User user = new User();
        user.setName(userDTO.getName());
        user.setSurname(userDTO.getSurname());
        user.setEmail(userDTO.getEmail());

        String salt = generateSalt();
        String hashedPassword = hashPassword(userDTO.getPassword(), salt);
        user.setPassword(hashedPassword);
        user.setSalt(salt); // Save the salt along with the hashed password

        return userRepository.save(user);
    }

    public void loginUser(String email, String hashedPassword) throws NoSuchAlgorithmException {
        User user = userRepository.findByEmail(email).orElseThrow(() -> new IllegalArgumentException("Invalid email"));

        System.out.println("Salt: " + user.getSalt());
        System.out.println("Front end hash: " + hashedPassword);
        System.out.println("Database hash: " + user.getPassword());

        if (!hashedPassword.equals(user.getPassword())) {
            throw new IllegalArgumentException("Invalid credentials");
        }
    }

    private String generateSalt() {
        SecureRandom secureRandom = new SecureRandom();
        byte[] saltBytes = new byte[16];
        secureRandom.nextBytes(saltBytes);
        return Base64.getEncoder().encodeToString(saltBytes);
    }

    private String hashPassword(String password, String salt) throws NoSuchAlgorithmException {
        if (salt == null) {
            throw new IllegalArgumentException("Salt must not be null");
        }
        MessageDigest digest = MessageDigest.getInstance("SHA-256");
        digest.update(salt.getBytes());  // Add salt to the password
        byte[] hashedBytes = digest.digest(password.getBytes());

        StringBuilder hexString = new StringBuilder();
        for (byte b : hashedBytes) {
            hexString.append(String.format("%02x", b)); // Convert byte array to hex string
        }
        return hexString.toString();
    }

    public User getUserByEmail(String email) {
        System.out.println("Email received in getUserByEmail: " + email);
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("Invalid email"));
    }
}