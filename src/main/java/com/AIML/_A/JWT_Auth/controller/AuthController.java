package com.AIML._A.JWT_Auth.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.AIML._A.JWT_Auth.model.User;
import com.AIML._A.JWT_Auth.repository.UserRepository;
import com.AIML._A.JWT_Auth.service.AuthService;

@RestController
@RequestMapping("/api")
public class AuthController {

    @Autowired
    AuthService service;

    @Autowired
    UserRepository repo;

    // LOGIN
    @PostMapping("/login")
    public String login(@RequestParam String username,
                        @RequestParam String password) {

        System.out.println("Login API Hit");
        return service.login(username, password);
    }

    // TEST API
    @GetMapping("/hello")
    public String hello() {
        return "Hello! JWT Authentication Successful";
    }

    // UPDATE USER
    @PutMapping("/update")
    public String updateUser(@RequestParam String username,
                             @RequestParam String password) {

        User user = repo.findByUsername(username);

        if (user != null) {
            user.setPassword(password);
            repo.save(user);
            return "User Updated";
        }

        return "User Not Found";
    }

    // DELETE USER
    @DeleteMapping("/delete")
    public String deleteUser(@RequestParam String username) {

        User user = repo.findByUsername(username);

        if (user != null) {
            repo.delete(user);
            return "User Deleted";
        }

        return "User Not Found";
    }
}
