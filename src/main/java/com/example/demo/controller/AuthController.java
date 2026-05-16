package com.example.demo.controller;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.security.JwtService;
import com.example.demo.service.UserService;

import lombok.RequiredArgsConstructor;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin(origins ="http://localhost:3000")
@RequiredArgsConstructor
public class AuthController {

    private final UserRepository userRepository;
    private final UserService userService;
    private final JwtService jwtService;
    
    private final AuthenticationManager authenticationManager;

    @PostMapping("/register")
    public User register(@RequestBody User user){
        return userService.register(user);
        }
    @PostMapping("/login")
    public String login(@RequestBody User request){
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                request.getEmail().trim(),
                request.getPassword()
            )
        );

        User user = userRepository.findByEmail(request.getEmail().trim()).orElseThrow();

        return jwtService.generateToken(user);
    }
}