package com.grade9.server.controller;

import com.grade9.server.dto.ResponseMessage;
import com.grade9.server.dto.UserDTO;
import com.grade9.server.model.User;
import com.grade9.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
            return new ResponseEntity<>(new ResponseMessage(e.getMessage()), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<ResponseMessage> loginUser(@RequestBody Map<String, String> payload) {
        try {
            boolean isAuthenticated = userService.loginUser(payload.get("email"), payload.get("password"));
            if (isAuthenticated) {
                return new ResponseEntity<>(new ResponseMessage("Login successful"), HttpStatus.OK);
            } else {
                return new ResponseEntity<>(new ResponseMessage("Invalid credentials"), HttpStatus.UNAUTHORIZED);
            }
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(new ResponseMessage(e.getMessage()), HttpStatus.UNAUTHORIZED);
        }
    }
}
