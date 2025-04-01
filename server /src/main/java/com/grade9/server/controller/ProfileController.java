package com.grade9.server.controller;

import com.grade9.server.model.User;
import com.grade9.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class ProfileController {

    private static final Logger logger = LoggerFactory.getLogger(ProfileController.class);

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/{email}")
    public ResponseEntity<?> getUserProfile(@PathVariable String email) {
        logger.info("Fetching user with email: {}", email);

        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent()) {
            logger.info("User found: {}", user.get().getName());
            return ResponseEntity.ok(Map.of("name", user.get().getName(), "email", user.get().getEmail()));
        } else {
            logger.warn("User not found with email: {}", email);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("message", "User not found"));
        }
    }
}
