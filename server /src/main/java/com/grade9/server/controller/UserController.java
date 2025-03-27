package com.grade9.server.controller;

import com.grade9.server.dto.UserDTO;
import com.grade9.server.model.User;
import com.grade9.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.NoSuchAlgorithmException;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody UserDTO userDTO) {
        try {
            User user = userService.registerUser(userDTO);
            return new ResponseEntity<>(user, HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>("Passwords do not match or other validation errors", HttpStatus.BAD_REQUEST);
        } catch (NoSuchAlgorithmException e) {
            return new ResponseEntity<>("Error encoding password", HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (Exception e) {
            return new ResponseEntity<>("An unexpected error occurred: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody Map<String, String> payload) { // Modified to accept Map
        try {
            userService.loginUser(payload.get("email"), payload.get("password")); // Get email and hashed password from Map
            return new ResponseEntity<>("Login successful", HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>("Invalid credentials", HttpStatus.UNAUTHORIZED);
        } catch (NoSuchAlgorithmException e) {
            return new ResponseEntity<>("Error verifying password", HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (Exception e) {
            return new ResponseEntity<>("An unexpected error occurred: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/salt")
    public ResponseEntity<Map<String, String>> getSalt(@RequestParam String email) {
        User user = userService.getUserByEmail(email);
        Map<String, String> response = new HashMap<>();
        response.put("salt", user.getSalt());
        return ResponseEntity.ok(response);
    }
}