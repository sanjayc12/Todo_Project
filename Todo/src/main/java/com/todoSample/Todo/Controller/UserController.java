package com.todoSample.Todo.Controller;

import com.todoSample.Todo.Model.User;
import com.todoSample.Todo.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@CrossOrigin(origins = "*")
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    // 🔑 REGISTER ENDPOINT: POST http://localhost:8080/api/users/register
    @PostMapping("/register")
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    // 🔒 LOGIN ENDPOINT: POST http://localhost:8080/api/users/login
    @PostMapping("/login")
    public String loginUser(@RequestBody User user) {
        boolean isAuthenticated = userService.loginUser(user.getUsername(), user.getPassword());

        if (isAuthenticated) {
            return "Login successful!";
        } else {
            return "Invalid username or password!";
        }
    }

    // GET http://localhost:8080/api/users
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
}
