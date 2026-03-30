package com.AIML._A.JWT_Auth.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.AIML._A.JWT_Auth.model.User;
import com.AIML._A.JWT_Auth.repository.UserRepository;
import com.AIML._A.JWT_Auth.secuirty.JwtUtil;

@Service
public class AuthService {

    @Autowired
    private UserRepository repo;

    @Autowired
    private JwtUtil jwtUtil;

    public String login(String username, String password) {

        User user = repo.findByUsername(username);

        if (user != null && user.getPassword().equals(password)) {
            return jwtUtil.generateToken(username);
        }

        return "Invalid Credentials";
    }
}
