package com.todoSample.Todo.Reporsitory;

import com.todoSample.Todo.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserReporsitory  extends JpaRepository<User,Long> {
    User findByUsername(String username);
}
