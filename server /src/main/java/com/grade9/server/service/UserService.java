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

        String hashedPassword = BCrypt.hashpw(userDTO.getPassword(), BCrypt.gensalt());
        user.setPassword(hashedPassword);

        return userRepository.save(user);
    }

    public boolean loginUser(String email, String password) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("Invalid email or password"));

        return BCrypt.checkpw(password, user.getPassword());
    }

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));
    }
}
