package com.example.springboot_angular_employeeapp.exception;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(String message) {
        super(message); //super is used to call the constructor of the parent class
    }
}
