package com.grade9.server.ExceptionErrorHandling;

import com.grade9.server.dto.ResponseMessage;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<ResponseMessage> handleIllegalArgumentException(IllegalArgumentException e) {
        return new ResponseEntity<>(new ResponseMessage(e.getMessage()), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ResponseMessage> handleException(Exception e) {
        return new ResponseEntity<>(new ResponseMessage("An unexpected error occurred"), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

