package com.grade9.server.controller;

import com.grade9.server.dto.UserDTO;
import com.grade9.server.model.User;
import com.grade9.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.NoSuchAlgorithmException;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody UserDTO userDTO) {
        try {
            User user = userService.registerUser(userDTO);
            return new ResponseEntity<>(user, HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            // Better error response
            return new ResponseEntity<>("Passwords do not match or other validation errors", HttpStatus.BAD_REQUEST);
        } catch (NoSuchAlgorithmException e) {
            // Handle NoSuchAlgorithmException more gracefully
            return new ResponseEntity<>("Error encoding password", HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (Exception e) {
            // Catch any other unexpected errors
            return new ResponseEntity<>("An unexpected error occurred: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody UserDTO userDTO) {
        try {
            userService.loginUser(userDTO.getEmail(), userDTO.getPassword());
            return new ResponseEntity<>("Login successful", HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>("Invalid credentials", HttpStatus.UNAUTHORIZED);
        } catch (NoSuchAlgorithmException e) {
            return new ResponseEntity<>("Error verifying password", HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (Exception e) {
            return new ResponseEntity<>("An unexpected error occurred: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
