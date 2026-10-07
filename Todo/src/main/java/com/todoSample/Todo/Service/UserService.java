package com.todoSample.Todo.Service;

import com.todoSample.Todo.Model.User;
import com.todoSample.Todo.Reporsitory.UserReporsitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserReporsitory userReporsitory;

    // 📝 This handles your REGISTER logic
    public User createUser(User user) {
        try {
            return userReporsitory.save(user);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    // 🔑 This handles your LOGIN logic
    public boolean loginUser(String username, String password) {
        // Fetch the user from PostgreSQL using their username
        User foundUser = userReporsitory.findByUsername(username);

        // Verify if the user exists and if their password matches
        if (foundUser != null && foundUser.getPassword().equals(password)) {
            return true; // Login successful
        }
        return false; // Login failed
    }

    public List<User> getAllUsers() {
        return userReporsitory.findAll();
    }
}
